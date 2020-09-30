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

 戻り値: `座標の値`

戻り値の種類: double

```zenscript
<directionaxis:x>.getCoordinate(x as double, y as double, z as double);
<directionaxis:x>.getCoordinate(1.2, 2.5, 3.87);
```

| Parameter | Type   | Description               |
| --------- | ------ | ------------------------- |
| x         | double | x value of the coordinate |
| y         | double | y value of the coordinate |
| z         | double | z value of the coordinate |



Gets the coordinate of this axis based on the given values, if this axis is "X", then it will return the value of the "x" parameter

 戻り値: `座標の値`

Return type: int

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

| 名称            | Type     | Has Getter | Has Setter |
| ------------- | -------- | ---------- | ---------- |
| commandString | String   | true       | false      |
| horizontal    | boolean型 | true       | false      |
| name          | String   | true       | false      |
| ordinal       | int      | true       | false      |
| vertical      | boolean型 | true       | false      |

