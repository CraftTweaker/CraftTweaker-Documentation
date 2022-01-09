# Direction

Represents a cardinal direction (north, south, east, west) and (up and down).

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.Direction;
```


## Enum Constants

Direction is an enum. It has 6 enum constants. They are accessible using the code below.

```zenscript
Direction.north
Direction.south
Direction.east
Direction.west
Direction.up
Direction.down
```
## Static Properties

| Nome  | Tipo                                       | Ha Getter | Ha Setter | Descrizione             |
| ----- | ------------------------------------------ | --------- | --------- | ----------------------- |
| down  | [Direction](/vanilla/api/util/Direction)   | sì        | no        | No Description Provided |
| east  | [Direction](/vanilla/api/util/Direction)   | sì        | no        | No Description Provided |
| north | [Direction](/vanilla/api/util/Direction)   | sì        | no        | No Description Provided |
| sides | [Direction](/vanilla/api/util/Direction)[] | sì        | no        | No Description Provided |
| south | [Direction](/vanilla/api/util/Direction)   | sì        | no        | No Description Provided |
| up    | [Direction](/vanilla/api/util/Direction)   | sì        | no        | No Description Provided |
| west  | [Direction](/vanilla/api/util/Direction)   | sì        | no        | No Description Provided |

## Metodi

:::group{name=rotateY}

Rotates this direction on the Y axis

Returns: the direction that rotated on the Y axis of this direction  
Return Type: [Direction](/vanilla/api/util/Direction)

```zenscript
// Direction.rotateY() as Direction

<direction:north>.rotateY();
```

:::

:::group{name=rotateYCCW}

Rotates this direction counter-clock wise on the Y axis

Returns: the direction that is counter clockwise on the Y axis  
Return Type: [Direction](/vanilla/api/util/Direction)

```zenscript
// Direction.rotateYCCW() as Direction

<direction:north>.rotateYCCW();
```

:::


## Proprietà

| Nome            | Tipo                                             | Ha Getter | Ha Setter | Descrizione                                                                                                                           |
| --------------- | ------------------------------------------------ | --------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| axis            | [DirectionAxis](/vanilla/api/util/DirectionAxis) | sì        | no        | Gets the direction axis of this direction                                                                                             |
| axisOffset      | int                                              | sì        | no        | Gets the offset of this axis (is it pointing towards position or negative). down is negative, up is positive (-y for down, +y for up) |
| horizontalAngle | float                                            | sì        | no        | Gets the horizontal angle of this direction                                                                                           |
| horizontalIndex | int                                              | sì        | no        | Get the index of this horizontal direction (0-3). The order is S-W-N-E                                                                |
| indice          | int                                              | sì        | no        | Get the Index of this direction (0-5). The order is D-U-N-S-W-E                                                                       |
| nome            | string                                           | sì        | no        | Gets the name of this direction                                                                                                       |
| opposite        | [Direction](/vanilla/api/util/Direction)         | sì        | no        | Gets the opposite of this Direction (north returns south)                                                                             |
| xOffset         | int                                              | sì        | no        | Gets the X offset of this direction                                                                                                   |
| yOffset         | int                                              | sì        | no        | Gets the Y offset of this direction                                                                                                   |
| zOffset         | int                                              | sì        | no        | Gets the Z offset of this direction                                                                                                   |

