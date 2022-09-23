export const merge = <T>(...objects: T[]) => objects.reduce((acc, cur) => ({ ...acc, ...cur }))
export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}
