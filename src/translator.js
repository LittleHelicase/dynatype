export function create (from, to, fun) {
  if (from.name === to.name) {
    throw new Error('both names are the same')
  }

  return {
    from: from,
    to: to,
    fun: fun
  }
}

export function from (translator) {
  return translator.from.name
}

export function to (translator) {
  return translator.to.name
}
