# BlockPos

Represents a position of a block in the world

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.util.BlockPos
```

## Constructors
```zenscript
new crafttweaker.api.util.BlockPos(x as int, y as int, z as int);
```
| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| x         | int  | No description provided |
| y         | int  | No description provided |
| z         | int  | No description provided |



## Methods
### add

Adds two positions together and returns the result.

 Returns: `new [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) with the added values.`

Return type: [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).add(pos as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).add(new BlockPos(3, 2, 1));
```

| Parameter | Type                                                         | Description           |
| --------- | ------------------------------------------------------------ | --------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | other position to add |



Adds the given values to this position, and returns a new position with the new values.

 Returns: `a new position based on values of provided values and this position`

Return type: [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).add(x as double, y as double, z as double);
new BlockPos(0, 1, 2).add(50.21, -20.8, -25.2);
```

| Parameter | Type   | Description    |
| --------- | ------ | -------------- |
| x         | double | x value to add |
| y         | double | y value to add |
| z         | double | z value to add |



Adds the given values to this position, and returns a new position with the new values.

 Returns: `a new position based on values of provided values and this position`

Return type: [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).add(x as int, y as int, z as int);
new BlockPos(0, 1, 2).add(50, -20, -25);
```

| Parameter | Type | Description    |
| --------- | ---- | -------------- |
| x         | int  | x value to add |
| y         | int  | y value to add |
| z         | int  | z value to add |


### crossProduct

Creates a new BlockPos based on the cross product of this position, and the given position

 Returns: `a new BlockPos based on the cross product of this BlockPos and the given BlockPos`

Return type: [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).crossProduct(pos as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).crossProduct(new BlockPos(5, 8, 2););
```

| Parameter | Type                                                         | Description               |
| --------- | ------------------------------------------------------------ | ------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | BlockPos to cross product |


### distanceSq

Gets the squared distance of this position to the specified BlockPos, using the center of the BlockPos

 Returns: `the squared distance of this current position and the given BlockPos.`

Return type: double

```zenscript
new BlockPos(0, 1, 2).distanceSq(to as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).distanceSq(new BlockPos(256, 128, 10););
```

| Parameter | Type                                                         | Description               |
| --------- | ------------------------------------------------------------ | ------------------------- |
| to        | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | BlockPos to check against |



Gets the squared distance of this position to the specified BlockPos

 Returns: `the squared distance of this current position and the given BlockPos.`

Return type: double

```zenscript
new BlockPos(0, 1, 2).distanceSq(to as crafttweaker.api.util.BlockPos, useCenter as boolean);
new BlockPos(0, 1, 2).distanceSq(new BlockPos(256, 128, 10);, true);
```

| Parameter | Type                                                         | Description                                                           |
| --------- | ------------------------------------------------------------ | --------------------------------------------------------------------- |
| to        | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | BlockPos to check against                                             |
| useCenter | boolean                                                      | should the center of the coordinate be used? (adds 0.5 to each value) |



Gets the squared distance of this position to the specified coordinates

 Returns: `the squared distance of this current position and the given coordinates.`

Return type: double

```zenscript
new BlockPos(0, 1, 2).distanceSq(x as double, y as double, z as double, useCenter as boolean);
new BlockPos(0, 1, 2).distanceSq(500.25, 250.75, 100.20, false);
```

| Parameter | Type    | Description                                                           |
| --------- | ------- | --------------------------------------------------------------------- |
| x         | double  | x position to check against                                           |
| y         | double  | y position to check against                                           |
| z         | double  | z position to check against                                           |
| useCenter | boolean | should the center of the coordinate be used? (adds 0.5 to each value) |


### down

Creates a new BlockPos based on this BlockPos that is one block lower than this BlockPos

 Returns: `a new BlockPos that is one block lower than this BlockPos`

Return type: net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).down();
```

### east

Creates a new BlockPos based on this BlockPos that is one block east of this BlockPos

 Returns: `a new BlockPos that is one block east of this BlockPos`

Return type: net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).east();
```


Creates a new BlockPos based on this BlockPos that is n block(s) east of this BlockPos

 Returns: `a new BlockPos that is n block(s) east of this BlockPos`

Return type: net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).east(n as int);
new BlockPos(0, 1, 2).east(2);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| n         | int  | No description provided |


### manhattanDistance

Gets the Manhattan Distance of this pos compared to a different position

 Returns: `The manhattan distance of the positions`

Return type: int

```zenscript
new BlockPos(0, 1, 2).manhattanDistance(other as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).manhattanDistance(new BlockPos(4, 5, 6));
```

| Parameter | Type                                                         | Description                           |
| --------- | ------------------------------------------------------------ | ------------------------------------- |
| other     | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | other position to get the distance to |


### north

Creates a new BlockPos based on this BlockPos that is one block north of this BlockPos

 Returns: `a new BlockPos that is one block north of this BlockPos`

Return type: net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).north();
```


Creates a new BlockPos based on this BlockPos that is n block(s) north of this BlockPos

 Returns: `a new BlockPos that is n block(s) north of this BlockPos`

Return type: net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).north(n as int);
new BlockPos(0, 1, 2).north(10);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| n         | int  | No description provided |


### offset

Creates a new BlockPos based on this BlockPos that is one block offset of this BlockPos based on the given [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

 Returns: `a new BlockPos that is 1 block offset of this BlockPos`

Return type: [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).offset(direction as crafttweaker.api.util.Direction);
new BlockPos(0, 1, 2).offset(<direction:east>);
```

| Parameter | Type                                                           | Description             |
| --------- | -------------------------------------------------------------- | ----------------------- |
| direction | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction) | No description provided |



Creates a new BlockPos based on this BlockPos that is n block(s) offset of this BlockPos based on the given [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

 Returns: `a new BlockPos that is n block(s) offset of this BlockPos`

Return type: [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).offset(direction as crafttweaker.api.util.Direction, n as int);
new BlockPos(0, 1, 2).offset(<direction:south>, 3);
```

| Parameter | Type                                                           | Description             |
| --------- | -------------------------------------------------------------- | ----------------------- |
| direction | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction) | No description provided |
| n         | int                                                            | No description provided |


### south

Creates a new BlockPos based on this BlockPos that is one block south of this BlockPos

 Returns: `a new BlockPos that is one block south of this BlockPos`

Return type: net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).south();
```


Creates a new BlockPos based on this BlockPos that is n block(s) south of this BlockPos

 Returns: `a new BlockPos that is n block(s) south of this BlockPos`

Return type: net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).south(n as int);
new BlockPos(0, 1, 2).south(12);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| n         | int  | No description provided |


### subtract

Subtracts two positions together and returns the result.

 Returns: `new [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) with the removed values.`

Return type: [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).subtract(pos as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).subtract(new BlockPos(2, 1, 3));
```

| Parameter | Type                                                         | Description              |
| --------- | ------------------------------------------------------------ | ------------------------ |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | other position to remove |


### up

Creates a new BlockPos based on this BlockPos that is one block higher than this BlockPos

 Returns: `a new BlockPos that is one block higher than this BlockPos`

Return type: net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).up();
```


Creates a new BlockPos based on this BlockPos that is n block(s) higher than this BlockPos

 Returns: `a new BlockPos that is n block(s) higher than this BlockPos`

Return type: net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).up(n as int);
new BlockPos(0, 1, 2).up(45);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| n         | int  | No description provided |


### west

Creates a new BlockPos based on this BlockPos that is one block west of this BlockPos

 Returns: `a new BlockPos that is one block west of this BlockPos`

Return type: net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).west();
```


Creates a new BlockPos based on this BlockPos that is n block(s) west of this BlockPos

 Returns: `a new BlockPos that is n block(s) west of this BlockPos`

Return type: net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).west(n as int);
new BlockPos(0, 1, 2).west(120);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| n         | int  | No description provided |


### withinDistance

Checks if the given BlockPos is within the specified distance of this BlockPos (this uses the middle of the BlockPos)

 Returns: `true if the given BlockPos is within the given distance of this BlockPos`

Return type: boolean

```zenscript
new BlockPos(0, 1, 2).withinDistance(pos as crafttweaker.api.util.BlockPos, distance as double);
new BlockPos(0, 1, 2).withinDistance(new BlockPos(80, 75, 54);, 10);
```

| Parameter | Type                                                         | Description                                    |
| --------- | ------------------------------------------------------------ | ---------------------------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | BlockPos to check if it is within the distance |
| distance  | double                                                       | distance to check within                       |



## Properties

| 이름 | Type | Has Getter | Has Setter |
| -- | ---- | ---------- | ---------- |
| x  | int  | true       | false      |
| y  | int  | true       | false      |
| z  | int  | true       | false      |

## 연산자
### ADD

Adds two positions together and returns the result.

 Returns: `new [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) with the added values.`

```zenscript
new BlockPos(0, 1, 2) + pos as crafttweaker.api.util.BlockPos
new BlockPos(0, 1, 2) + new BlockPos(3, 2, 1)
```

| Parameter | Type                                                         | Description           |
| --------- | ------------------------------------------------------------ | --------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | other position to add |
### SUB

Subtracts two positions together and returns the result.

 Returns: `new [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) with the removed values.`

```zenscript
new BlockPos(0, 1, 2) - pos as crafttweaker.api.util.BlockPos
new BlockPos(0, 1, 2) - new BlockPos(2, 1, 3)
```

| Parameter | Type                                                         | Description              |
| --------- | ------------------------------------------------------------ | ------------------------ |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | other position to remove |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| long        | false       |

