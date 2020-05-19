/**
 * Sum values
 * @param  {number[]} ...args - Values
 * 
 * Example:
 *
 *     const result = add(1, 2, 3);
 */
export function add(...args: number[]): number {
  return args.reduce((previous, current) => previous + current);
}
