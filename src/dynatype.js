
export function create (name, data) {
  return {
    name: name,
    data: data
  }
}

export function typename (dynatype) {
  return dynatype.name
}

export function hasProperty (dynatype, property) {
  return (typeof dynatype.data[property] !== 'undefined')
}

export function datatype (dynatype, property) {
  return dynatype.data[property]
}
