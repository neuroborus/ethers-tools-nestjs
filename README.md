# ethers-tools-nestjs

[![npm version](https://badge.fury.io/js/ethers-tools-nestjs.svg)](https://badge.fury.io/js/ethers-tools-nestjs)

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

- 🧩 `@Contract` decorator to turn a class into an `ethers-tools` **Contract** instance & _ContractFactory_
- ⚡ `MulticallModule` with `MulticallUnitService` for performing efficient batch calls
- ✅ NestJS-compatible and fully DI-friendly
- 💡 Works with either global or per-module configuration
