# Direction

Represents a cardinal direction (north, south, east, west) and (up and down).

## Importing the class

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

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| down | [Direction](/vanilla/api/util/Direction) | true | false | No Description Provided |
| east | [Direction](/vanilla/api/util/Direction) | true | false | No Description Provided |
| north | [Direction](/vanilla/api/util/Direction) | true | false | No Description Provided |
| sides | [Direction](/vanilla/api/util/Direction)[] | true | false | No Description Provided |
| south | [Direction](/vanilla/api/util/Direction) | true | false | No Description Provided |
| up | [Direction](/vanilla/api/util/Direction) | true | false | No Description Provided |
| west | [Direction](/vanilla/api/util/Direction) | true | false | No Description Provided |

## Methods

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


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| axis | [DirectionAxis](/vanilla/api/util/DirectionAxis) | true | false | Gets the direction axis of this direction |
| axisOffset | int | true | false | Gets the offset of this axis (is it pointing towards position or negative). down is negative, up is positive (-y for down, +y for up) |
| horizontalAngle | float | true | false | Gets the horizontal angle of this direction |
| horizontalIndex | int | true | false | Get the index of this horizontal direction (0-3). The order is S-W-N-E |
| index | int | true | false | Get the Index of this direction (0-5). The order is D-U-N-S-W-E |
| name | string | true | false | Gets the name of this direction |
| opposite | [Direction](/vanilla/api/util/Direction) | true | false | Gets the opposite of this Direction (north returns south) |
| xOffset | int | true | false | Gets the X offset of this direction |
| yOffset | int | true | false | Gets the Y offset of this direction |
| zOffset | int | true | false | Gets the Z offset of this direction |

