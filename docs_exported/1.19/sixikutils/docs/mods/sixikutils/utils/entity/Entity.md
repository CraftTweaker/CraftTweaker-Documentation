# Entity

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.Entity;
```


## Extending CapabilityProvider&lt;Entity&gt;

Entity extends [CapabilityProvider](/forge/api/capability/CapabilityProvider)&lt;[Entity](/mods/sixikutils/utils/entity/Entity)&gt;. That means all methods available in [CapabilityProvider](/forge/api/capability/CapabilityProvider)&lt;[Entity](/mods/sixikutils/utils/entity/Entity)&gt; are also available in Entity

## Implemented Interfaces
Entity implements the following interfaces. That means all methods defined in these interfaces are also available in Entity

- [Nameable](/vanilla/api/world/Nameable)
- [EntityAccess](/vanilla/api/entity/EntityAccess)
- [CommandSource](/vanilla/api/command/CommandSource)

## Methods

:::group{name=getBlocksAround}

Return Type: [BlockState](/vanilla/api/block/BlockState)[[BlockPos](/vanilla/api/util/math/BlockPos)]

```zenscript
Entity.getBlocksAround(size as int) as BlockState[BlockPos]
```

| Parameter | Type |
|-----------|------|
| size      | int  |


:::

:::group{name=getLeftBlocksToUp}

Return Type: int

```zenscript
// Entity.getLeftBlocksToUp() as int

myEntity.getLeftBlocksToUp();
```

:::


