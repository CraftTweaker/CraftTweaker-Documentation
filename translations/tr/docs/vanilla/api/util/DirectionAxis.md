# DirectionAxis

Represents a direction axis (X, Y, Z)

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.util.DirectionAxis
```

## Implemented Interfaces
DirectionAxis implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Methods
### getCoordinate

Gets the coordinate of this axis based on the given values, if this axis is "X", then it will return the value of the "x" parameter

Returns int

```zenscript
<directionaxis:x>.getCoordinate(x as int, y as int, z as int);
<directionaxis:x>.getCoordinate(1, 2, 3);
```

| Parameter | Type | Description               |
| --------- | ---- | ------------------------- |
| x         | int  | x value of the coordinate |
| y         | int  | y value of the coordinate |
| z         | int  | z value of the coordinate |



## Properties

| Name          | Type    | Has Getter | Has Setter |
| ------------- | ------- | ---------- | ---------- |
| commandString | String  | true       | false      |
| horizontal    | boolean | true       | false      |
| name          | String  | true       | false      |
| ordinal       | int     | true       | false      |
| vertical      | boolean | true       | false      |

