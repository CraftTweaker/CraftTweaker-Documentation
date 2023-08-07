# Expansion for Container

## Methods

:::group{name=fill}

Allows you to fill the chest with some kind of loot table.

Return Type: boolean

```zenscript
Container.fill(level as Level, rs as ResourceLocation, context as LootContext) as boolean
```

| Parameter |                            Type                            |   Description   |
|-----------|------------------------------------------------------------|-----------------|
| level     | [Level](/vanilla/api/world/Level)                          |                 |
| rs        | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | Loot table      |
| context   | [LootContext](/vanilla/api/loot/LootContext)               | Loot conditions |


:::

:::group{name=splitContainer}

Allows you to transfer items from one container to another

Return Type: boolean

```zenscript
Container.splitContainer(container2 as Container) as boolean
```

| Parameter  |                   Type                    |           Description            |
|------------|-------------------------------------------|----------------------------------|
| container2 | [Container](/vanilla/api/world/Container) | - Container to transfer items to |


:::

:::group{name=splitContainer}

Allows you to transfer items from one container to another

Return Type: boolean

```zenscript
Container.splitContainer(container2 as Container, bool as boolean) as boolean
```

| Parameter  |                   Type                    |                       Description                       |
|------------|-------------------------------------------|---------------------------------------------------------|
| container2 | [Container](/vanilla/api/world/Container) | - Container to transfer items to                        |
| bool       | boolean                                   | - If you need to remove items from a portable container |


:::


