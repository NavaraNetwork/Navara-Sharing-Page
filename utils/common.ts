export const merge = <T>(...objects: T[]) => objects.reduce((acc, cur) => ({ ...acc, ...cur }))
