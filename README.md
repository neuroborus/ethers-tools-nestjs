# ethers-tools-nestjs

[![npm version](https://badge.fury.io/js/ethers-tools-nestjs.svg)](https://badge.fury.io/js/ethers-tools-nestjs)

### [Click for Example](https://github.com/neuroborus/nest-template/tree/examples/ethers-tools-nestjs)

## Description

A lightweight NestJS wrapper around [`ethers-tools`](https://github.com/neuroborus/ethers-tools).  
This package provides convenient integration of `ethers-tools` into NestJS applications using standard
Nest patterns like decorators and modules.
Compatible with TypeScript and pure JavaScript.  
JSDoc is provided.

### Installation

First, you will need **ethers** v6 _and_ **ethers-tools**:

```shell
npm i ethers
npm i ethers-tools
npm i ethers-tools-nestjs
```

or

```shell
yarn add ethers
yarn add ethers-tools
yarn add ethers-tools-nestjs
```

or

```shell
pnpm add ethers
pnpm add ethers-tools
pnpm add ethers-tools-nestjs
```

---

## ✨ Features

### 🛠 Contract & MulticallUnit Factories

The `ethers-tools-nestjs` package provides built-in support for creating contract instances and `MulticallUnit` builders dynamically within a NestJS application.

#### 📦 Contract Factory

You can register a contract factory using `createContractFactoryProvider`:

```typescript
import { Module } from '@nestjs/common';
import { createContractFactoryProvider } from 'ethers-tools-nestjs';
import { Erc20Contract } from './erc20.contract';
import { Erc20Abi } from './abis';

const erc20factory = createContractFactoryProvider(Erc20Contract, {
  abi: Erc20Abi,
});

@Module({
  providers: [erc20factory],
  exports: [erc20factory],
})
export class ContractsModule {}
```

```typescript
constructor(
  @InjectContractFactory(Erc20Contract)
  private readonly token: ContractFactory<Erc20Contract>,
) {}
```

#### ⚡ MulticallUnit Factory

The MulticallUnitFactory allows you to batch multiple calls:

```typescript
import { Module } from '@nestjs/common';
import { createMulticallFactoryProvider } from 'ethers-tools-nestjs';
import { ContractsModule } from '@/contracts';
import { TokenService } from './token.service';

const multicallFactoryProvider = createMulticallFactoryProvider(
  TokenService.name,
);

@Module({
  imports: [ContractsModule],
  providers: [multicallFactoryProvider, TokenService],
  exports: [TokenService],
})
export class TokenModule {}
```

```typescript
constructor(
  @InjectMulticallFactory(TokenService.name)
  private readonly multicall: MulticallFactory,
) {}
```

### 👀 Example:

```typescript
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { JsonRpcProvider } from 'ethers';
import { Chain } from 'ethers-tools';
import {
  ContractFactory,
  MulticallFactory,
  InjectContractFactory,
  InjectMulticallFactory,
} from 'ethers-tools-nestjs';
import { Erc20Contract } from '@/contracts';
import { TokenInfo } from '@/entities/token';

@Injectable()
export class TokenService {
  constructor(
    private readonly config: ConfigService,
    @InjectPinoLogger(TokenService.name)
    private readonly logger: PinoLogger,
    @InjectContractFactory(Erc20Contract)
    private readonly token: ContractFactory<Erc20Contract>,
    @InjectMulticallFactory(TokenService.name)
    private readonly multicall: MulticallFactory,
  ) {}

  public async getTokenInfo(
    chain: Chain,
    tokenAddress: string,
    userAddress?: string,
  ): Promise<TokenInfo> {
    const driver: JsonRpcProvider = this.config.getOrThrow(
      `providers[${chain}]`,
    );
    const multicall = this.multicall.create({
      driver,
    });
    const contract = this.token.create({
      address: tokenAddress,
      driver,
    });
    multicall.addBatch([
      { call: contract.getNameCall() },
      { call: contract.getSymbolCall() },
      { call: contract.getTotalSupplyCall() },
      { call: contract.getDecimalsCall() },
    ]);
    if (userAddress) multicall.add(contract.getBalancesCall(userAddress));

    await multicall.run();
    const [name, symbol, totalSupply, decimals, balances] =
      multicall.getAllOrThrow<
        [string, string, bigint, bigint, bigint | undefined]
      >();

    return {
      name,
      symbol,
      totalSupply: totalSupply.toString(),
      decimals: Number(decimals),
      balances: balances?.toString(),
    };
  }
}
```
