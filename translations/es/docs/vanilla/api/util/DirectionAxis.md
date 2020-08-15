# DirectionAxis

Represents a direction axis (X, Y, Z)

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.util.DirectionAxis
```

## Implemented Interfaces
DirectionAxis implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Métodos
### getCoordinate

Gets the coordinate of this axis based on the given values, if this axis is "X", then it will return the value of the "x" parameter

Returns int

```zenscript
<directionaxis:x>.getCoordinate(x as int, y as int, z as int);
<directionaxis:x>.getCoordinate(1, 2, 3);
```

| Parámetro | Tipo | Descripción               |
| --------- | ---- | ------------------------- |
| x         | int  | x value of the coordinate |
| y         | int  | y value of the coordinate |
| z         | int  | z value of the coordinate |



## Propiedades

| Nombre        | Tipo    | Has Getter | Has Setter |
| ------------- | ------- | ---------- | ---------- |
| commandString | Cadena  | verdad     | falso      |
| horizontal    | boolean | verdad     | falso      |
| nombre        | Cadena  | verdad     | falso      |
| ordinal       | int     | verdad     | falso      |
| vertical      | boolean | verdad     | falso      |

