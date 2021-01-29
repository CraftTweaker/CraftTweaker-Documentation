# Direction

Represents a cardinal direction (north, south, east, west) and (up and down).

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.Direction;
```


## Extending Enum&lt;Direction&gt;

Direction extends Enum&lt;[Direction](/vanilla/api/util/Direction)&gt;. That means all methods available in Enum&lt;[Direction](/vanilla/api/util/Direction)&gt; are also available in Direction

## Properties

| 이름    | Type                                       | Has Getter | Has Setter |
| ----- | ------------------------------------------ | ---------- | ---------- |
| sides | [Direction](/vanilla/api/util/Direction)[] | true       | false      |
## Methods

### rotateY

Rotates this direction on the Y axis

Return Type: [Direction](/vanilla/api/util/Direction)

```zenscript
Direction.rotateY() as Direction
<direction:north>.rotateY();
```
### rotateYCCW

Rotates this direction counter-clock wise on the Y axis

Return Type: [Direction](/vanilla/api/util/Direction)

```zenscript
Direction.rotateYCCW() as Direction
<direction:north>.rotateYCCW();
```

## Properties

| 이름              | Type                                             | Has Getter | Has Setter |
| --------------- | ------------------------------------------------ | ---------- | ---------- |
| axis            | [DirectionAxis](/vanilla/api/util/DirectionAxis) | true       | false      |
| axisOffset      | int                                              | true       | false      |
| horizontalAngle | float                                            | true       | false      |
| horizontalIndex | int                                              | true       | false      |
| index           | int                                              | true       | false      |
| name            | string                                           | true       | false      |
| opposite        | [Direction](/vanilla/api/util/Direction)         | true       | false      |
| xOffset         | int                                              | true       | false      |
| yOffset         | int                                              | true       | false      |
| zOffset         | int                                              | true       | false      |

