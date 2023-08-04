# Expansion for Container

## Methods

:::group{name=fill}

Return Type: boolean

```zenscript
Container.fill(level as Level, rs as ResourceLocation, context as LootContext) as boolean
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| level     | [Level](/vanilla/api/world/Level)                          |
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

| Parameter  |                   Type                    |           Description            |
|------------|-------------------------------------------|----------------------------------|
| container2 | [Container](/vanilla/api/world/Container) | - Container to transfer items to |


:::

:::group{name=splitContainer}

Allows you to transfer items from one container to another

Returns: True or False  
Return Type: boolean

```zenscript
Container.splitContainer(container2 as Container, bool as boolean) as boolean
```

| Parameter  |                   Type                    |                       Description                       |
|------------|-------------------------------------------|---------------------------------------------------------|
| container2 | [Container](/vanilla/api/world/Container) | - Container to transfer items to                        |
| bool       | boolean                                   | - If you need to remove items from a portable container |


:::


