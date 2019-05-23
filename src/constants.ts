interface IRegExp {
  pattern: RegExp
  flags: string
}
interface IRegExps {
  [key: string]: IRegExp
}
// Tip: Use new RegExp(pattern, flags) syntax.
const regExp: IRegExps = {
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
export const validation = {
  nick: {
    minLength: 4,
    maxLength: 32,
    regExp: regExp.nick,
  },
  name: {
    minLength: 4,
    maxLength: 64,
  },
  email: {
    minLength: 4,
    maxLength: 64,
  },
}
