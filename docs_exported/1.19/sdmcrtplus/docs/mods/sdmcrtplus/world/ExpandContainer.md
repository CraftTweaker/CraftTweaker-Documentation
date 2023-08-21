# Expansion for Container

## Methods

:::group{name=fill}

Fills the contents of the container with a loot table.

Return Type: boolean

```zenscript
Container.fill(level as Level, resourceLocation as ResourceLocation, context as LootContext) as boolean
```

|    Parameter     |                            Type                            |                                                                                    Description                                                                                     |
|------------------|------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| level            | [Level](/vanilla/api/world/Level)                          |                                                                                                                                                                                    |
| resourceLocation | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | Loot table                                                                                                                                                                         |
| context          | [LootContext](/vanilla/api/loot/LootContext)               | Loot conditions. At which the content will be selected. It is equivalent to when you create a table with some condition. If a player kills a mob with enchantment, loot and so on. |


:::

:::group{name=transferringContainer}

Allows you to transfer the contents of a container to another container. Without removing items from the portable.

Return Type: boolean

```zenscript
Container.transferringContainer(target as Container) as boolean
```

| Parameter |                   Type                    |                        Description                        |
|-----------|-------------------------------------------|-----------------------------------------------------------|
| target    | [Container](/vanilla/api/world/Container) | The container to which the transfer should be carried out |


:::

:::group{name=transferringContainer}

Allows you to transfer the contents of a container to another container.

Return Type: boolean

```zenscript
Container.transferringContainer(target as Container, removeItems as boolean) as boolean
```

|  Parameter  |                   Type                    |                              Description                               |
|-------------|-------------------------------------------|------------------------------------------------------------------------|
| target      | [Container](/vanilla/api/world/Container) | The container to which the transfer should be carried out              |
| removeItems | boolean                                   | Removes items from the container from which the transfer is being made |


:::


