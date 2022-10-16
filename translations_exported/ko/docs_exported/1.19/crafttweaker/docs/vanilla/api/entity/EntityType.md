# EntityType

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.EntityType;
```


## Casters

| Result Type                                              | 암묵적  |
| -------------------------------------------------------- | ---- |
| [EntityIngredient](/vanilla/api/entity/EntityIngredient) | true |

## Methods

:::group{name=canSpawnFarFromPlayer}

Return Type: boolean

```zenscript
// EntityType.canSpawnFarFromPlayer() as boolean

myEntityType.canSpawnFarFromPlayer();
```

:::

:::group{name=canSummon}

Return Type: boolean

```zenscript
// EntityType.canSummon() as boolean

myEntityType.canSummon();
```

:::

:::group{name=create}

Return Type: [Entity](/vanilla/api/entity/Entity)?

```zenscript
EntityType.create(level as Level) as Entity?
```

| Parameter | Type                              |
| --------- | --------------------------------- |
| level     | [Level](/vanilla/api/world/Level) |


:::

:::group{name=create}

Return Type: [Entity](/vanilla/api/entity/Entity)?

```zenscript
EntityType.create(level as ServerLevel, data as MapData?, displayName as Component?, spawningPlayer as Player?, pos as BlockPos, spawnType as MobSpawnType, alignPosition as boolean, invertY as boolean) as Entity?
```

| Parameter      | Type                                              |
| -------------- | ------------------------------------------------- |
| level          | [ServerLevel](/vanilla/api/world/ServerLevel)     |
| data           | [MapData](/vanilla/api/data/MapData)?             |
| displayName    | [Component](/vanilla/api/text/Component)?         |
| spawningPlayer | [Player](/vanilla/api/entity/type/player/Player)? |
| pos            | [BlockPos](/vanilla/api/util/math/BlockPos)       |
| spawnType      | [MobSpawnType](/vanilla/api/entity/MobSpawnType)  |
| alignPosition  | boolean                                           |
| invertY        | boolean                                           |


:::

:::group{name=fireImmune}

Return Type: boolean

```zenscript
// EntityType.fireImmune() as boolean

myEntityType.fireImmune();
```

:::

:::group{name=getCategory}

Return Type: [MobCategory](/vanilla/api/entity/MobCategory)

```zenscript
// EntityType.getCategory() as MobCategory

myEntityType.getCategory();
```

:::

:::group{name=getDefaultLootTable}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// EntityType.getDefaultLootTable() as ResourceLocation

myEntityType.getDefaultLootTable();
```

:::

:::group{name=getDescription}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
// EntityType.getDescription() as Component

myEntityType.getDescription();
```

:::

:::group{name=getDescriptionId}

Return Type: string

```zenscript
// EntityType.getDescriptionId() as string

myEntityType.getDescriptionId();
```

:::

:::group{name=getDimensions}

Return Type: [EntityDimensions](/vanilla/api/entity/EntityDimensions)

```zenscript
// EntityType.getDimensions() as EntityDimensions

myEntityType.getDimensions();
```

:::

:::group{name=getHeight}

Return Type: float

```zenscript
// EntityType.getHeight() as float

myEntityType.getHeight();
```

:::

:::group{name=getWidth}

Return Type: float

```zenscript
// EntityType.getWidth() as float

myEntityType.getWidth();
```

:::

:::group{name=isBlockDangerous}

Return Type: boolean

```zenscript
EntityType.isBlockDangerous(state as BlockState) as boolean
```

| Parameter | Type                                        |
| --------- | ------------------------------------------- |
| state     | [BlockState](/vanilla/api/block/BlockState) |


:::

:::group{name=isIn}

Return Type: boolean

```zenscript
EntityType.isIn(tag as KnownTag<EntityType<Entity>>) as boolean
```

| Parameter | Type                                                                                                                                                               |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| tag       | [KnownTag](/vanilla/api/tag/type/KnownTag)&lt;[EntityType](/vanilla/api/entity/EntityType)&lt;[Entity](/vanilla/api/entity/Entity)&gt;&gt; |


:::

:::group{name=spawn}

Return Type: [Entity](/vanilla/api/entity/Entity)?

```zenscript
EntityType.spawn(level as ServerLevel, data as MapData?, displayName as Component?, spawningPlayer as Player?, pos as BlockPos, spawnType as MobSpawnType, alignPosition as boolean, invertY as boolean) as Entity?
```

| Parameter      | Type                                              |
| -------------- | ------------------------------------------------- |
| level          | [ServerLevel](/vanilla/api/world/ServerLevel)     |
| data           | [MapData](/vanilla/api/data/MapData)?             |
| displayName    | [Component](/vanilla/api/text/Component)?         |
| spawningPlayer | [Player](/vanilla/api/entity/type/player/Player)? |
| pos            | [BlockPos](/vanilla/api/util/math/BlockPos)       |
| spawnType      | [MobSpawnType](/vanilla/api/entity/MobSpawnType)  |
| alignPosition  | boolean                                           |
| invertY        | boolean                                           |


:::

:::group{name=toShortString}

Return Type: string

```zenscript
// EntityType.toShortString() as string

myEntityType.toShortString();
```

:::


## Properties

| 이름                    | Type                                                       | Has Getter | Has Setter |
| --------------------- | ---------------------------------------------------------- | ---------- | ---------- |
| canSpawnFarFromPlayer | boolean                                                    | true       | false      |
| canSummon             | boolean                                                    | true       | false      |
| category              | [MobCategory](/vanilla/api/entity/MobCategory)             | true       | false      |
| commandString         | string                                                     | true       | false      |
| defaultLootTable      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | true       | false      |
| description           | [Component](/vanilla/api/text/Component)                   | true       | false      |
| descriptionId         | string                                                     | true       | false      |
| dimensions            | [EntityDimensions](/vanilla/api/entity/EntityDimensions)   | true       | false      |
| fireImmune            | boolean                                                    | true       | false      |
| height                | float                                                      | true       | false      |
| toShortString         | string                                                     | true       | false      |
| width                 | float                                                      | true       | false      |

