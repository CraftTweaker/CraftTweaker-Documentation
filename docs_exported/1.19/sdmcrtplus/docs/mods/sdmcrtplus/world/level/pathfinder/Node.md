# Node

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.world.level.pathfinder.Node;
```


## Methods

:::group{name=asBlockPos}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// Node.asBlockPos() as BlockPos

myNode.asBlockPos();
```

:::

:::group{name=asVec3}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)

```zenscript
// Node.asVec3() as Vec3

myNode.asVec3();
```

:::

:::group{name=distanceManhattan}

Return Type: float

```zenscript
Node.distanceManhattan(node as Node) as float
```

| Parameter |                         Type                         |
|-----------|------------------------------------------------------|
| node      | [Node](/mods/sdmcrtplus/world/level/pathfinder/Node) |


:::

:::group{name=distanceManhattan}

Return Type: float

```zenscript
Node.distanceManhattan(pos as BlockPos) as float
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=distanceTo}

Return Type: float

```zenscript
Node.distanceTo(node as Node) as float
```

| Parameter |                         Type                         |
|-----------|------------------------------------------------------|
| node      | [Node](/mods/sdmcrtplus/world/level/pathfinder/Node) |


:::

:::group{name=distanceTo}

Return Type: float

```zenscript
Node.distanceTo(pos as BlockPos) as float
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=distanceToSqr}

Return Type: float

```zenscript
Node.distanceToSqr(node as Node) as float
```

| Parameter |                         Type                         |
|-----------|------------------------------------------------------|
| node      | [Node](/mods/sdmcrtplus/world/level/pathfinder/Node) |


:::

:::group{name=distanceToSqr}

Return Type: float

```zenscript
Node.distanceToSqr(pos as BlockPos) as float
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=distanceToXZ}

Return Type: float

```zenscript
Node.distanceToXZ(node as Node) as float
```

| Parameter |                         Type                         |
|-----------|------------------------------------------------------|
| node      | [Node](/mods/sdmcrtplus/world/level/pathfinder/Node) |


:::


