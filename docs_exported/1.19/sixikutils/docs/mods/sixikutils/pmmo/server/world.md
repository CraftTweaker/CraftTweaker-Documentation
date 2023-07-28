# Level

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.Level;
```


## Extending CapabilityProvider&lt;Level&gt;

Level extends [CapabilityProvider](/forge/api/capability/CapabilityProvider)&lt;[Level](/mods/sixikutils/pmmo/server/world)&gt;. That means all methods available in [CapabilityProvider](/forge/api/capability/CapabilityProvider)&lt;[Level](/mods/sixikutils/pmmo/server/world)&gt; are also available in Level

## Implemented Interfaces
Level implements the following interfaces. That means all methods defined in these interfaces are also available in Level

- [LevelAccessor](/mods/sixikutils/utils/world/LevelAccessor)
- AutoCloseable

## Methods

:::group{name=getRequirementMap}

Return Type: int?[string]

```zenscript
Level.getRequirementMap(entity as Entity, type as invalid) as int?[string]
```

| Parameter |                         Type                         |
|-----------|------------------------------------------------------|
| entity    | [Entity](/mods/sixikutils/utils/entity/ExpandEntity) |
| type      | **invalid**                                          |


:::

:::group{name=getRequirementMap}

Return Type: int?[string]

```zenscript
Level.getRequirementMap(itemStack as IItemStack, type as invalid) as int?[string]
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| itemStack | [IItemStack](/vanilla/api/item/IItemStack) |
| type      | **invalid**                                |


:::

:::group{name=getRequirementMap}

Return Type: int?[string]

```zenscript
Level.getRequirementMap(pos as BlockPos, type as invalid) as int?[string]
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) |
| type      | **invalid**                                 |


:::


