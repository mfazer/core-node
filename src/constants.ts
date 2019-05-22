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
    pattern: /^[a-zA-Z\d]+[-]?[a-zA-Z\d]+$/,
    flags: 'is',
  },
}
