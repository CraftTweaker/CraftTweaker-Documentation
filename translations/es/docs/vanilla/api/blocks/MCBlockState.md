# Estado MCBlockState

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.block.MCBlockState
```

## Interfaces implementadas
MCBlockState implementa las siguientes interfaces. Esto significa que cualquier método disponible también puede ser usado en esta clase.
- [crafttweaker.api.brackets.CommandStringMostrar](/vanilla/api/brackets/CommandStringDisplayable)

## Métodos
### Valores permitidos para propiedad

Devuelve la lista<String>

```zenscript
myMCBlockState.getAllowedValuesForProperty(nombre como cadena);
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| nombre    | Cadena | No se proporcionó descripción |


### getProperties

Devuelve la cadena[String]

```zenscript
myMCBlockState.getProperties();
```

### Nombre de la propiedad

Devuelve la lista<String>

```zenscript
myMCBlockState.getPropertyNames();
```

### valor de la propiedad

Devuelve Cadena

```zenscript
myMCBlockState.getPropertyValue(nombre como cadena);
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| nombre    | Cadena | No se proporcionó descripción |


### hasProperty

Devuelve booleano

```zenscript
myMCBlockState.hasProperty(nombre como cadena);
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| nombre    | Cadena | No se proporcionó descripción |


### sin Propiedad

Devuelve [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
myMCBlockState.withProperty(nombre como cadena, valor como cadena);
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| nombre    | Cadena | No se proporcionó descripción |
| valor     | Cadena | No se proporcionó descripción |



## Propiedades

| Nombre              | Tipo                                                          | Tiene Obtén | Tiene Setter |
| ------------------- | ------------------------------------------------------------- | ----------- | ------------ |
| bloque              | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | verdad      | falso        |
| puede ProvidePower  | boolean                                                       | verdad      | falso        |
| commandString       | Cadena                                                        | verdad      | falso        |
| hasTileEntity       | boolean                                                       | verdad      | falso        |
| isSolid             | boolean                                                       | verdad      | falso        |
| isSticky            | boolean                                                       | verdad      | falso        |
| nivel de luz        | int                                                           | verdad      | falso        |
| ticksaleatoriamente | boolean                                                       | verdad      | falso        |

## Casters

| Tipo de resultado                                             | Es implícito |
| ------------------------------------------------------------- | ------------ |
| Cadena                                                        | falso        |
| [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | verdad       |

