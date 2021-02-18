# BlockPos

Represents a position of a block in the world

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.BlockPos;
```


## Constructors


```zenscript
new BlockPos(x as int, y as int, z as int) as BlockPos
```

| Parameter | Type | Description                 |
| --------- | ---- | --------------------------- |
| x         | int  | Nessuna descrizione fornita |
| y         | int  | Nessuna descrizione fornita |
| z         | int  | Nessuna descrizione fornita |



## Caster

| Tipo Risultato | Implicito |
| -------------- | --------- |
| long           | false     |
| string         | true      |

## Methods

### add

Adds two positions together and returns the result.

Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
BlockPos.add(pos as BlockPos) as BlockPos
new BlockPos(0, 1, 2).add(new BlockPos(3, 2, 1));
```

| Parameter | Type                                   | Description           |
| --------- | -------------------------------------- | --------------------- |
| pos       | [BlockPos](/vanilla/api/util/BlockPos) | other position to add |


Adds the given values to this position, and returns a new position with the new values.

Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
BlockPos.add(x as double, y as double, z as double) as BlockPos
new BlockPos(0, 1, 2).add(50.21, -20.8, -25.2);
```

| Parameter | Type   | Description    |
| --------- | ------ | -------------- |
| x         | double | x value to add |
| y         | double | y value to add |
| z         | double | z value to add |


Adds the given values to this position, and returns a new position with the new values.

Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
BlockPos.add(x as int, y as int, z as int) as BlockPos
new BlockPos(0, 1, 2).add(50, -20, -25);
```

| Parameter | Type | Description    |
| --------- | ---- | -------------- |
| x         | int  | x value to add |
| y         | int  | y value to add |
| z         | int  | z value to add |


### crossProduct

Creates a new BlockPos based on the cross product of this position, and the given position

Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
BlockPos.crossProduct(pos as BlockPos) as BlockPos
new BlockPos(0, 1, 2).crossProduct(new BlockPos(5, 8, 2););
```

| Parameter | Type                                   | Description               |
| --------- | -------------------------------------- | ------------------------- |
| pos       | [BlockPos](/vanilla/api/util/BlockPos) | BlockPos to cross product |


### distanceSq

Gets the squared distance of this position to the specified BlockPos, using the center of the BlockPos

Return Type: double

```zenscript
BlockPos.distanceSq(to as BlockPos) as double
new BlockPos(0, 1, 2).distanceSq(new BlockPos(256, 128, 10););
```

| Parameter | Type                                   | Description               |
| --------- | -------------------------------------- | ------------------------- |
| to        | [BlockPos](/vanilla/api/util/BlockPos) | BlockPos to check against |


Gets the squared distance of this position to the specified BlockPos

Return Type: double

```zenscript
BlockPos.distanceSq(to as BlockPos, useCenter as boolean) as double
new BlockPos(0, 1, 2).distanceSq(new BlockPos(256, 128, 10);, true);
```

| Parameter | Type                                   | Description                                                           |
| --------- | -------------------------------------- | --------------------------------------------------------------------- |
| to        | [BlockPos](/vanilla/api/util/BlockPos) | BlockPos to check against                                             |
| useCenter | boolean                                | should the center of the coordinate be used? (adds 0.5 to each value) |


Gets the squared distance of this position to the specified coordinates

Return Type: double

```zenscript
BlockPos.distanceSq(x as double, y as double, z as double, useCenter as boolean) as double
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

Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
BlockPos.down() as BlockPos
new BlockPos(0, 1, 2).down();
```

Creates a new BlockPos based on this BlockPos that is n block(s) lower than this BlockPos

Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
BlockPos.down(n as int) as BlockPos
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| n         | int  | No Description Provided |


### east

Creates a new BlockPos based on this BlockPos that is one block east of this BlockPos

Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
BlockPos.east() as BlockPos
new BlockPos(0, 1, 2).east();
```

Creates a new BlockPos based on this BlockPos that is n block(s) east of this BlockPos

Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
BlockPos.east(n as int) as BlockPos
new BlockPos(0, 1, 2).east(2);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| n         | int  | No Description Provided |


### manhattanDistance

Gets the Manhattan Distance of this pos compared to a different position

Return Type: int

```zenscript
BlockPos.manhattanDistance(other as BlockPos) as int
new BlockPos(0, 1, 2).manhattanDistance(new BlockPos(4, 5, 6));
```

| Parameter | Type                                   | Description                           |
| --------- | -------------------------------------- | ------------------------------------- |
| other     | [BlockPos](/vanilla/api/util/BlockPos) | other position to get the distance to |


### north

Creates a new BlockPos based on this BlockPos that is one block north of this BlockPos

Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
BlockPos.north() as BlockPos
new BlockPos(0, 1, 2).north();
```

Creates a new BlockPos based on this BlockPos that is n block(s) north of this BlockPos

Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
BlockPos.north(n as int) as BlockPos
new BlockPos(0, 1, 2).north(10);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| n         | int  | No Description Provided |


### offset

Creates a new BlockPos based on this BlockPos that is one block offset of this BlockPos based on the given [Direction](/vanilla/api/util/Direction)

Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
BlockPos.offset(direction as Direction) as BlockPos
new BlockPos(0, 1, 2).offset(<direction:east>);
```

| Parameter | Type                                     | Description             |
| --------- | ---------------------------------------- | ----------------------- |
| direction | [Direction](/vanilla/api/util/Direction) | No Description Provided |


Creates a new BlockPos based on this BlockPos that is n block(s) offset of this BlockPos based on the given [Direction](/vanilla/api/util/Direction)

Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
BlockPos.offset(direction as Direction, n as int) as BlockPos
new BlockPos(0, 1, 2).offset(<direction:south>, 3);
```

| Parameter | Type                                     | Description             |
| --------- | ---------------------------------------- | ----------------------- |
| direction | [Direction](/vanilla/api/util/Direction) | No Description Provided |
| n         | int                                      | No Description Provided |


### south

Creates a new BlockPos based on this BlockPos that is one block south of this BlockPos

Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
BlockPos.south() as BlockPos
new BlockPos(0, 1, 2).south();
```

Creates a new BlockPos based on this BlockPos that is n block(s) south of this BlockPos

Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
BlockPos.south(n as int) as BlockPos
new BlockPos(0, 1, 2).south(12);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| n         | int  | No Description Provided |


### subtract

Subtracts two positions together and returns the result.

Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
BlockPos.subtract(pos as BlockPos) as BlockPos
new BlockPos(0, 1, 2).subtract(new BlockPos(2, 1, 3));
```

| Parameter | Type                                   | Description              |
| --------- | -------------------------------------- | ------------------------ |
| pos       | [BlockPos](/vanilla/api/util/BlockPos) | other position to remove |


### up

Creates a new BlockPos based on this BlockPos that is one block higher than this BlockPos

Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
BlockPos.up() as BlockPos
new BlockPos(0, 1, 2).up();
```

Creates a new BlockPos based on this BlockPos that is n block(s) higher than this BlockPos

Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
BlockPos.up(n as int) as BlockPos
new BlockPos(0, 1, 2).up(45);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| n         | int  | No Description Provided |


### west

Creates a new BlockPos based on this BlockPos that is one block west of this BlockPos

Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
BlockPos.west() as BlockPos
new BlockPos(0, 1, 2).west();
```

Creates a new BlockPos based on this BlockPos that is n block(s) west of this BlockPos

Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
BlockPos.west(n as int) as BlockPos
new BlockPos(0, 1, 2).west(120);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| n         | int  | No Description Provided |


### withinDistance

Checks if the given BlockPos is within the specified distance of this BlockPos (this uses the middle of the BlockPos)

Return Type: boolean

```zenscript
BlockPos.withinDistance(pos as BlockPos, distance as double) as boolean
new BlockPos(0, 1, 2).withinDistance(new BlockPos(80, 75, 54);, 10);
```

| Parameter | Type                                   | Description                                    |
| --------- | -------------------------------------- | ---------------------------------------------- |
| pos       | [BlockPos](/vanilla/api/util/BlockPos) | BlockPos to check if it is within the distance |
| distance  | double                                 | distance to check within                       |



## Properties

| Name | Type | Ha Getter | Ha Setter |
| ---- | ---- | --------- | --------- |
| x    | int  | true      | false     |
| y    | int  | true      | false     |
| z    | int  | true      | false     |

