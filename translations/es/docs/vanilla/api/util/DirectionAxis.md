# Eje de dirección

Representa un eje de dirección (X, Y, Z)

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.util.Eje de dirección
```

## Interfaces implementadas
DirectionAxis implementa las siguientes interfaces. Esto significa que cualquier método disponible también puede ser usado en esta clase.
- [crafttweaker.api.brackets.CommandStringMostrar](/vanilla/api/brackets/CommandStringDisplayable)

## Métodos
### getCoordinate

Obtiene la coordenada de este eje basada en los valores dados, si este eje es "X", entonces devolverá el valor del parámetro "x"

Devuelve la pista

```zenscript
<directionaxis:x>.getCoordinate(x as int, y as int, z as int);
<directionaxis:x>.getCoordinate(1, 2, 3);
```

| Parámetro | Tipo | Descripción              |
| --------- | ---- | ------------------------ |
| x         | int  | valor x de la coordenada |
| y         | int  | valor y de la coordenada |
| z         | int  | valor z de la coordenada |



## Propiedades

| Nombre        | Tipo    | Tiene Obtén | Tiene Setter |
| ------------- | ------- | ----------- | ------------ |
| commandString | Cadena  | verdad      | falso        |
| horizontal    | boolean | verdad      | falso        |
| nombre        | Cadena  | verdad      | falso        |
| ordinal       | int     | verdad      | falso        |
| vertical      | boolean | verdad      | falso        |

