/**
 * Sum values
 * @param  {number[]} ...args - Values
 * @returns number - Sum of values
 */
export function add(...args: number[]): number {
  return args.reduce((previous, current) => previous + current);
}
