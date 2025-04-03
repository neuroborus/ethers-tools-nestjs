import { Provider } from '@nestjs/common';
import { MulticallFactoryArguments } from './multicall-factory.arguments';

/**
 * Registers a factory provider for the given contract name and optional defaults.
 *
 * This allows injecting a factory that can create MulticallUnit instances at runtime
 * with dynamic address, driver, and options.
 *
 * @param name - A unique identifier
 * @param [args] - Prepared args
 * @returns A NestJS provider object
 */
export declare function createMulticallFactoryProvider(
  name: string,
  args?: MulticallFactoryArguments
): Provider;
