interface IRegExp {
  pattern: RegExp
  flags: string
}
interface IRegExps {
  [key: string]: IRegExp
}
// Tip: Use new RegExp(pattern, flags) syntax.
export const regExp: IRegExps = {
  nick: {
    pattern: /^[a-z\d]+[-]?[a-z\d]+$/,
    flags: 'is',
  },
}
export const db = {
  mongo: {
    name: 'core-mongo',
  },
}
