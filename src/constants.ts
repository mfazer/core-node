export interface IRegExp {
  pattern: RegExp
  flags: string
}
interface IRegExps {
  [key: string]: IRegExp
}
// Tip: Use new RegExp(pattern, flags) syntax.
export const regExps: IRegExps = {
  nick: {
    pattern: /^[a-z\d]+[-]?[a-z\d]+$/,
    flags: 'is',
  },
}
export const databases = {
  mongo: {
    name: 'core-mongo',
  },
}
