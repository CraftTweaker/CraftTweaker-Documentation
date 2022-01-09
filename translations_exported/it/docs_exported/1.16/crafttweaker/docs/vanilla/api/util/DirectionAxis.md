# DirectionAxis

Represents a direction axis (X, Y, Z)

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.DirectionAxis;
```


## Interfacce Implementate
DirectionAxis implements the following interfaces. That means all methods defined in these interfaces are also available in DirectionAxis

- Predicate

## Enum Constants

DirectionAxis is an enum. It has 3 enum constants. They are accessible using the code below.

```zenscript
DirectionAxis.X
DirectionAxis.Y
DirectionAxis.Z
```
## Metodi

:::group{name=equals}

Return Type: boolean

```zenscript
DirectionAxis.equals(o as Object) as boolean
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| o         | Object | No Description Provided |


:::

:::group{name=getCoordinate}

Gets the coordinate of this axis based on the given values, if this axis is "X", then it will return the value of the "x" parameter

Returns: value of the coordinate  
Return Type: double

```zenscript
// DirectionAxis.getCoordinate(x as double, y as double, z as double) as double

<directionaxis:x>.getCoordinate(1.2, 2.5, 3.87);
```

| Parametro | Tipo   | Descrizione               |
| --------- | ------ | ------------------------- |
| x         | double | x value of the coordinate |
| y         | double | y value of the coordinate |
| z         | double | z value of the coordinate |


:::

:::group{name=getCoordinate}

Gets the coordinate of this axis based on the given values, if this axis is "X", then it will return the value of the "x" parameter

Returns: value of the coordinate  
Return Type: int

```zenscript
// DirectionAxis.getCoordinate(x as int, y as int, z as int) as int

<directionaxis:x>.getCoordinate(1, 2, 3);
```

| Parametro | Tipo | Descrizione               |
| --------- | ---- | ------------------------- |
| x         | int  | x value of the coordinate |
| y         | int  | y value of the coordinate |
| z         | int  | z value of the coordinate |


:::

:::group{name=hashCode}

Return Type: int

```zenscript
// DirectionAxis.hashCode() as int

<directionaxis:x>.hashCode();
```

:::


## Proprietà

| Nome          | Tipo    | Ha Getter | Ha Setter | Descrizione                                 |
| ------------- | ------- | --------- | --------- | ------------------------------------------- |
| commandString | string  | sì        | no        | No Description Provided                     |
| hashCode      | int     | sì        | no        | No Description Provided                     |
| horizontal    | boolean | sì        | no        | No Description Provided                     |
| nome          | string  | sì        | no        | Get the name of this Axis ("X", "Y" or "Z") |
| ordinal       | int     | sì        | no        | Gets the enum ordinal of this axis          |
| vertical      | boolean | sì        | no        | No Description Provided                     |

