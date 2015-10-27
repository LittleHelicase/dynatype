# Dynatype

A dynamic datatype is a meta construct that abstracts
the data represented by a datatype. It is possible
to define datatypes and define relations between those.

# Usage

The API is separated into descriptors and translators.

## Descriptor

The descriptor API is usable via

```js
var descriptor = require('dynatype').descriptor
```

It offers the following functions

| function | description |
|----------|-------------|
| `create(name, data)` | Create a new dynatype descriptor. It always must have a unique name. The data object contains information about the structure of the type. It is a JS object. |
| `typename(dynatype)` | Get the name of a dynatype descriptor instance |
| `hasProperty(dynatype, property)` | Returns whether the dynatype defines the property `property` |
| `datatype(dynatype, property)` | Returns the datatype of the dynatype property. |

### Data Format

The data object for a descriptor has a special structure. It
is a mapping between the name of the property and its type. They type can be one of the following

 - `"number"`
 - `"bool"`
 - `"string"`
 - `"array"` this requires the extra field `arraytype` for the array datatype. We don't support mixed arrays.
 - Other descriptors. Recursive definitions are not supported.

A descriptor could look like this:

```js
var pointXY = descriptor.create('PointXY', {
  'x': 'number',
  'y': 'number'
})
```

## Translator

A translator defines a method of translating one datatype into another. Consider this example:

```js
var pointXY = /*...*/
var pointRPhi = descriptor.create('PointRPhi', {
  'r': 'number',
  'phi': 'number'
})
var translator = translator.create(pointXY, pointRPhi, {/*...*/})
```

this creates a translator that defines some way of translating a point given in XY coordinates into a point given in polar coordinates. The data that describes the translation is specific to the system it is used in. The dynatype libraries do only store
this information but never touch it.
