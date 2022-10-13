# BlockPos

Represents a position of a block in the world

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.BlockPos;
```


## Extending MCVector3i

BlockPos extends [MCVector3i](/vanilla/api/util/MCVector3i). That means all methods available in [MCVector3i](/vanilla/api/util/MCVector3i) are also available in BlockPos

## Static Methods

:::group{name=getAllInBox}

Gets all the BlockPos inside the given positions. <br />  <br />  For example, doing <br />  <br />  `getAllInBox(new BlockPos(0,0,0), new BlockPos(2,2,0` <br />  <br />  Would return a list of the following positions: <br />  <br />  `[(0,0,0), (1,0,0), (1,1,0), (0,1,0)]`

Returns: A list of all the BlockPos within the given position.  
Return Type: stdlib.List&lt;[BlockPos](/vanilla/api/util/BlockPos)&gt;

```zenscript
// BlockPos.getAllInBox(first as BlockPos, second as BlockPos) as stdlib.List<BlockPos>

BlockPos.getAllInBox(new BlockPos(0, 0, 0), new BlockPos(5, 5, 5));
```

| Parameter | Type                                   | Description          |
| --------- | -------------------------------------- | -------------------- |
| first     | [BlockPos](/vanilla/api/util/BlockPos) | The first position.  |
| second    | [BlockPos](/vanilla/api/util/BlockPos) | The second position. |


:::

## Constructors


```zenscript
new BlockPos(x as int, y as int, z as int) as BlockPos
```
| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| x         | int  | No description provided |
| y         | int  | No description provided |
| z         | int  | No description provided |



## Casters

| 반환 자료형 | 암묵적   |
| ------ | ----- |
| long   | false |
| string | true  |

## Methods

:::group{name=add}

Adds two positions together and returns the result.

Returns: new [BlockPos](/vanilla/api/util/BlockPos) with the added values.  
Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
// BlockPos.add(pos as BlockPos) as BlockPos

new BlockPos(0, 1, 2).add(new BlockPos(3, 2, 1));
```

| Parameter | Type                                   | Description           |
| --------- | -------------------------------------- | --------------------- |
| pos       | [BlockPos](/vanilla/api/util/BlockPos) | other position to add |


:::

:::group{name=add}

Adds the given values to this position, and returns a new position with the new values.

Returns: a new position based on values of provided values and this position  
Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
// BlockPos.add(x as double, y as double, z as double) as BlockPos

new BlockPos(0, 1, 2).add(50.21, -20.8, -25.2);
```

| Parameter | Type   | Description    |
| --------- | ------ | -------------- |
| x         | double | x value to add |
| y         | double | y value to add |
| z         | double | z value to add |


:::

:::group{name=add}

Adds the given values to this position, and returns a new position with the new values.

Returns: a new position based on values of provided values and this position  
Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
// BlockPos.add(x as int, y as int, z as int) as BlockPos

new BlockPos(0, 1, 2).add(50, -20, -25);
```

| Parameter | Type | Description    |
| --------- | ---- | -------------- |
| x         | int  | x value to add |
| y         | int  | y value to add |
| z         | int  | z value to add |


:::

:::group{name=crossProduct}

Creates a new BlockPos based on the cross product of this position, and the given position

Returns: a new BlockPos based on the cross product of this BlockPos and the given BlockPos  
Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
// BlockPos.crossProduct(pos as BlockPos) as BlockPos

new BlockPos(0, 1, 2).crossProduct(new BlockPos(5, 8, 2););
```

| Parameter | Type                                   | Description               |
| --------- | -------------------------------------- | ------------------------- |
| pos       | [BlockPos](/vanilla/api/util/BlockPos) | BlockPos to cross product |


:::

:::group{name=distanceSq}

Gets the squared distance of this position to the specified BlockPos, using the center of the BlockPos

Returns: the squared distance of this current position and the given BlockPos.  
Return Type: double

```zenscript
// BlockPos.distanceSq(to as BlockPos) as double

new BlockPos(0, 1, 2).distanceSq(new BlockPos(256, 128, 10););
```

| Parameter | Type                                   | Description               |
| --------- | -------------------------------------- | ------------------------- |
| to        | [BlockPos](/vanilla/api/util/BlockPos) | BlockPos to check against |


:::

:::group{name=distanceSq}

Gets the squared distance of this position to the specified BlockPos

Returns: the squared distance of this current position and the given BlockPos.  
Return Type: double

```zenscript
// BlockPos.distanceSq(to as BlockPos, useCenter as boolean) as double

new BlockPos(0, 1, 2).distanceSq(new BlockPos(256, 128, 10);, true);
```

| Parameter | Type                                   | Description                                                           |
| --------- | -------------------------------------- | --------------------------------------------------------------------- |
| to        | [BlockPos](/vanilla/api/util/BlockPos) | BlockPos to check against                                             |
| useCenter | boolean                                | should the center of the coordinate be used? (adds 0.5 to each value) |


:::

:::group{name=distanceSq}

Gets the squared distance of this position to the specified coordinates

Returns: the squared distance of this current position and the given coordinates.  
Return Type: double

```zenscript
// BlockPos.distanceSq(x as double, y as double, z as double, useCenter as boolean) as double

new BlockPos(0, 1, 2).distanceSq(500.25, 250.75, 100.20, false);
```

| Parameter | Type    | Description                                                           |
| --------- | ------- | --------------------------------------------------------------------- |
| x         | double  | x position to check against                                           |
| y         | double  | y position to check against                                           |
| z         | double  | z position to check against                                           |
| useCenter | boolean | should the center of the coordinate be used? (adds 0.5 to each value) |


:::

:::group{name=down}

Creates a new BlockPos based on this BlockPos that is one block lower than this BlockPos

Returns: a new BlockPos that is one block lower than this BlockPos  
Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
// BlockPos.down() as BlockPos

new BlockPos(0, 1, 2).down();
```

:::

:::group{name=down}

Creates a new BlockPos based on this BlockPos that is n block(s) lower than this BlockPos

Returns: a new BlockPos that is n block(s) lower than this BlockPos  
Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
BlockPos.down(n as int) as BlockPos
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| n         | int  | No Description Provided |


:::

:::group{name=east}

Creates a new BlockPos based on this BlockPos that is one block east of this BlockPos

Returns: a new BlockPos that is one block east of this BlockPos  
Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
// BlockPos.east() as BlockPos

new BlockPos(0, 1, 2).east();
```

:::

:::group{name=east}

Creates a new BlockPos based on this BlockPos that is n block(s) east of this BlockPos

Returns: a new BlockPos that is n block(s) east of this BlockPos  
Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
// BlockPos.east(n as int) as BlockPos

new BlockPos(0, 1, 2).east(2);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| n         | int  | No Description Provided |


:::

:::group{name=manhattanDistance}

Gets the Manhattan Distance of this pos compared to a different position

Returns: The manhattan distance of the positions  
Return Type: int

```zenscript
// BlockPos.manhattanDistance(other as BlockPos) as int

new BlockPos(0, 1, 2).manhattanDistance(new BlockPos(4, 5, 6));
```

| Parameter | Type                                   | Description                           |
| --------- | -------------------------------------- | ------------------------------------- |
| other     | [BlockPos](/vanilla/api/util/BlockPos) | other position to get the distance to |


:::

:::group{name=north}

Creates a new BlockPos based on this BlockPos that is one block north of this BlockPos

Returns: a new BlockPos that is one block north of this BlockPos  
Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
// BlockPos.north() as BlockPos

new BlockPos(0, 1, 2).north();
```

:::

:::group{name=north}

Creates a new BlockPos based on this BlockPos that is n block(s) north of this BlockPos

Returns: a new BlockPos that is n block(s) north of this BlockPos  
Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
// BlockPos.north(n as int) as BlockPos

new BlockPos(0, 1, 2).north(10);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| n         | int  | No Description Provided |


:::

:::group{name=offset}

Creates a new BlockPos based on this BlockPos that is one block offset of this BlockPos based on the given [Direction](/vanilla/api/util/Direction)

Returns: a new BlockPos that is 1 block offset of this BlockPos  
Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
// BlockPos.offset(direction as Direction) as BlockPos

new BlockPos(0, 1, 2).offset(<direction:east>);
```

| Parameter | Type                                     | Description             |
| --------- | ---------------------------------------- | ----------------------- |
| direction | [Direction](/vanilla/api/util/Direction) | No Description Provided |


:::

:::group{name=offset}

Creates a new BlockPos based on this BlockPos that is n block(s) offset of this BlockPos based on the given [Direction](/vanilla/api/util/Direction)

Returns: a new BlockPos that is n block(s) offset of this BlockPos  
Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
// BlockPos.offset(direction as Direction, n as int) as BlockPos

new BlockPos(0, 1, 2).offset(<direction:south>, 3);
```

| Parameter | Type                                     | Description             |
| --------- | ---------------------------------------- | ----------------------- |
| direction | [Direction](/vanilla/api/util/Direction) | No Description Provided |
| n         | int                                      | No Description Provided |


:::

:::group{name=south}

Creates a new BlockPos based on this BlockPos that is one block south of this BlockPos

Returns: a new BlockPos that is one block south of this BlockPos  
Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
// BlockPos.south() as BlockPos

new BlockPos(0, 1, 2).south();
```

:::

:::group{name=south}

Creates a new BlockPos based on this BlockPos that is n block(s) south of this BlockPos

Returns: a new BlockPos that is n block(s) south of this BlockPos  
Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
// BlockPos.south(n as int) as BlockPos

new BlockPos(0, 1, 2).south(12);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| n         | int  | No Description Provided |


:::

:::group{name=subtract}

Subtracts two positions together and returns the result.

Returns: new [BlockPos](/vanilla/api/util/BlockPos) with the removed values.  
Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
// BlockPos.subtract(pos as BlockPos) as BlockPos

new BlockPos(0, 1, 2).subtract(new BlockPos(2, 1, 3));
```

| Parameter | Type                                   | Description              |
| --------- | -------------------------------------- | ------------------------ |
| pos       | [BlockPos](/vanilla/api/util/BlockPos) | other position to remove |


:::

:::group{name=up}

Creates a new BlockPos based on this BlockPos that is one block higher than this BlockPos

Returns: a new BlockPos that is one block higher than this BlockPos  
Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
// BlockPos.up() as BlockPos

new BlockPos(0, 1, 2).up();
```

:::

:::group{name=up}

Creates a new BlockPos based on this BlockPos that is n block(s) higher than this BlockPos

Returns: a new BlockPos that is n block(s) higher than this BlockPos  
Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
// BlockPos.up(n as int) as BlockPos

new BlockPos(0, 1, 2).up(45);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| n         | int  | No Description Provided |


:::

:::group{name=west}

Creates a new BlockPos based on this BlockPos that is one block west of this BlockPos

Returns: a new BlockPos that is one block west of this BlockPos  
Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
// BlockPos.west() as BlockPos

new BlockPos(0, 1, 2).west();
```

:::

:::group{name=west}

Creates a new BlockPos based on this BlockPos that is n block(s) west of this BlockPos

Returns: a new BlockPos that is n block(s) west of this BlockPos  
Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
// BlockPos.west(n as int) as BlockPos

new BlockPos(0, 1, 2).west(120);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| n         | int  | No Description Provided |


:::

:::group{name=withinDistance}

Checks if the given BlockPos is within the specified distance of this BlockPos (this uses the middle of the BlockPos)

Returns: true if the given BlockPos is within the given distance of this BlockPos  
Return Type: boolean

```zenscript
// BlockPos.withinDistance(pos as BlockPos, distance as double) as boolean

new BlockPos(0, 1, 2).withinDistance(new BlockPos(80, 75, 54);, 10);
```

| Parameter | Type                                   | Description                                    |
| --------- | -------------------------------------- | ---------------------------------------------- |
| pos       | [BlockPos](/vanilla/api/util/BlockPos) | BlockPos to check if it is within the distance |
| distance  | double                                 | distance to check within                       |


:::


## Properties

| 이름 | Type | Has Getter | Has Setter | Description             |
| -- | ---- | ---------- | ---------- | ----------------------- |
| x  | int  | true       | false      | No Description Provided |
| y  | int  | true       | false      | No Description Provided |
| z  | int  | true       | false      | No Description Provided |

