# EnderDragon

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.entity.boss.EnderDragon;
```


## Extending Mob

EnderDragon extends [Mob](/mods/sdmcrtplus/entity/Mob). That means all methods available in [Mob](/mods/sdmcrtplus/entity/Mob) are also available in EnderDragon

## Implemented Interfaces
EnderDragon implements the following interfaces. That means all methods defined in these interfaces are also available in EnderDragon

- [Enemy](/mods/sdmcrtplus/entity/monster/Enemy)

## Methods

:::group{name=findClosestNode}

```zenscript
// EnderDragon.findClosestNode()

myEnderDragon.findClosestNode();
```

:::

:::group{name=findClosestNode}

```zenscript
EnderDragon.findClosestNode(x as double, y as double, z as double)
```

| Parameter |  Type  |
|-----------|--------|
| x         | double |
| y         | double |
| z         | double |


:::

:::group{name=findPath}

Return Type: **invalid**

```zenscript
EnderDragon.findPath(x as int, z as int, node as Node?) as invalid
```

| Parameter |                         Type                          |
|-----------|-------------------------------------------------------|
| x         | int                                                   |
| z         | int                                                   |
| node      | [Node](/mods/sdmcrtplus/world/level/pathfinder/Node)? |


:::


