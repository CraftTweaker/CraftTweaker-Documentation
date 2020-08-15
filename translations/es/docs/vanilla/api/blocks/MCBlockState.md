# MCBlockState

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.block.MCBlockState
```

## Implemented Interfaces
MCBlockState implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Métodos
### getAllowedValuesForProperty

Returns List<String>

```zenscript
myMCBlockState.getAllowedValuesForProperty(name as String);
```

| Parámetro | Tipo   | Descripción             |
| --------- | ------ | ----------------------- |
| nombre    | Cadena | No description provided |


### getProperties

Returns String[String]

```zenscript
myMCBlockState.getProperties();
```

### getPropertyNames

Returns List<String>

```zenscript
myMCBlockState.getPropertyNames();
```

### getPropertyValue

Returns String

```zenscript
myMCBlockState.getPropertyValue(name as String);
```

| Parámetro | Tipo   | Descripción             |
| --------- | ------ | ----------------------- |
| nombre    | Cadena | No description provided |


### hasProperty

Returns boolean

```zenscript
myMCBlockState.hasProperty(name as String);
```

| Parámetro | Tipo   | Descripción             |
| --------- | ------ | ----------------------- |
| nombre    | Cadena | No description provided |


### withProperty

Returns [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
myMCBlockState.withProperty(name as String, value as String);
```

| Parámetro | Tipo   | Descripción             |
| --------- | ------ | ----------------------- |
| nombre    | Cadena | No description provided |
| valor     | Cadena | No description provided |



## Propiedades

| Nombre             | Tipo                                                          | Has Getter | Has Setter |
| ------------------ | ------------------------------------------------------------- | ---------- | ---------- |
| bloque             | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | verdad     | falso      |
| puede ProvidePower | boolean                                                       | verdad     | falso      |
| commandString      | Cadena                                                        | verdad     | falso      |
| hasTileEntity      | boolean                                                       | verdad     | falso      |
| isSolid            | boolean                                                       | verdad     | falso      |
| isSticky           | boolean                                                       | verdad     | falso      |
| nivel de luz       | int                                                           | verdad     | falso      |
| ticksRandomly      | boolean                                                       | verdad     | falso      |

## Casters

| Result type                                                   | Is Implicit |
| ------------------------------------------------------------- | ----------- |
| Cadena                                                        | falso       |
| [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | verdad      |

