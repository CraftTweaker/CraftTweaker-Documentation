# Container

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.Container;
```


## Implemented Interfaces
Container implements the following interfaces. That means all methods defined in these interfaces are also available in Container

- [Clearable](/vanilla/api/world/Clearable)

## Methods

:::group{name=fill}

Return Type: boolean

```zenscript
Container.fill(level as Level, rs as ResourceLocation, context as LootContext) as boolean
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| level     | [Level](/mods/sixikutils/pmmo/server/world)                |
| rs        | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |
| context   | [LootContext](/vanilla/api/loot/LootContext)               |


:::

:::group{name=splitContainer}

Allows you to transfer items from one container to another

Returns: True or False  
Return Type: boolean

```zenscript
Container.splitContainer(container2 as Container) as boolean
```

| Parameter  |                           Type                            |           Description            |
|------------|-----------------------------------------------------------|----------------------------------|
| container2 | [Container](/mods/sixikutils/utils/world/ExpandContainer) | - Container to transfer items to |


:::

:::group{name=splitContainer}

Allows you to transfer items from one container to another

Returns: True or False  
Return Type: boolean

```zenscript
Container.splitContainer(container2 as Container, bool as boolean) as boolean
```

| Parameter  |                           Type                            |                       Description                       |
|------------|-----------------------------------------------------------|---------------------------------------------------------|
| container2 | [Container](/mods/sixikutils/utils/world/ExpandContainer) | - Container to transfer items to                        |
| bool       | boolean                                                   | - If you need to remove items from a portable container |


:::


