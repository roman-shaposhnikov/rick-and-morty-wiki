export const randomIntArrayInRange = (
  min: number,
  max: number,
  n = 1
): number[] =>
  Array.from(
    { length: n },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  )
