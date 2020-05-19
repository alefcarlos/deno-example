/**
 * Sum values
 * @param  {number[]} ...args - Values
 * @returns number - Sum of values
 * 
 * Example:
 *
 *     const result = add(1, 2, 3);
 */
export function add(...args: number[]): number {
  return args.reduce((previous, current) => previous + current);
}
