# Direction

Represents a cardinal direction (north, south, east, west) and (up and down).

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.util.Direction
```

## Methods
### rotateAround

Rotates this direction around a given Axis

Returns [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateAround(axis as crafttweaker.api.util.DirectionAxis);
<direction:north>.rotateAround(<directionaxis:north>);
```

| Parameter | Type                                                                   | Description               |
| --------- | ---------------------------------------------------------------------- | ------------------------- |
| axis      | [crafttweaker.api.util.DirectionAxis](/vanilla/api/util/DirectionAxis) | the Axis to rotate around |


### rotateY

Rotates this direction on the Y axis

 Returns: `the direction that rotated on the Y axis of this direction`

Returns [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateY();
```

### rotateYCCW

Rotates this direction counter-clock wise on the Y axis

 Returns: `the direction that is counter clockwise on the Y axis`

Returns [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateYCCW();
```


## Properties

| Name            | Type                                                                   | Has Getter | Has Setter |
| --------------- | ---------------------------------------------------------------------- | ---------- | ---------- |
| axis            | [crafttweaker.api.util.DirectionAxis](/vanilla/api/util/DirectionAxis) | true       | false      |
| axisOffset      | int                                                                    | true       | false      |
| horizontalAngle | float                                                                  | true       | false      |
| horizontalIndex | int                                                                    | true       | false      |
| index           | int                                                                    | true       | false      |
| name            | String                                                                 | true       | false      |
| opposite        | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)         | true       | false      |
| xOffset         | int                                                                    | true       | false      |
| yOffset         | int                                                                    | true       | false      |
| zOffset         | int                                                                    | true       | false      |

