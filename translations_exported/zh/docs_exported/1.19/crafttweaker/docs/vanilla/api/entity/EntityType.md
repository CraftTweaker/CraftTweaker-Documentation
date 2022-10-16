# EntityType

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.EntityType;
```


## Casters

| Result Type                                              | 是否隐藏 |
| -------------------------------------------------------- | ---- |
| [EntityIngredient](/vanilla/api/entity/EntityIngredient) | true |

## 使用方式

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

| 参数    | 类型                                |
| ----- | --------------------------------- |
| level | [Level](/vanilla/api/world/Level) |


:::

:::group{name=create}

Return Type: [Entity](/vanilla/api/entity/Entity)?

```zenscript
EntityType.create(level as ServerLevel, data as MapData?, displayName as Component?, spawningPlayer as Player?, pos as BlockPos, spawnType as MobSpawnType, alignPosition as boolean, invertY as boolean) as Entity?
```

| 参数              | 类型                                                |
| --------------- | ------------------------------------------------- |
| level           | [ServerLevel](/vanilla/api/world/ServerLevel)     |
| data            | [MapData](/vanilla/api/data/MapData)?             |
| displayName     | [Component](/vanilla/api/text/Component)?         |
| spawningPlayer  | [Player](/vanilla/api/entity/type/player/Player)? |
| 点               | [BlockPos](/vanilla/api/util/math/BlockPos)       |
| 生成类型（spawnType） | [MobSpawnType](/vanilla/api/entity/MobSpawnType)  |
| alignPosition   | 布尔值                                               |
| invertY         | 布尔值                                               |


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

| 参数    | 类型                                          |
| ----- | ------------------------------------------- |
| state | [BlockState](/vanilla/api/block/BlockState) |


:::

:::group{name=isIn}

Return Type: boolean

```zenscript
EntityType.isIn(tag as KnownTag<EntityType<Entity>>) as boolean
```

| 参数      | 类型                                                                                                                                                                 |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| tag #标签 | [KnownTag](/vanilla/api/tag/type/KnownTag)&lt;[EntityType](/vanilla/api/entity/EntityType)&lt;[Entity](/vanilla/api/entity/Entity)&gt;&gt; |


:::

:::group{name=spawn}

Return Type: [Entity](/vanilla/api/entity/Entity)?

```zenscript
EntityType.spawn(level as ServerLevel, data as MapData?, displayName as Component?, spawningPlayer as Player?, pos as BlockPos, spawnType as MobSpawnType, alignPosition as boolean, invertY as boolean) as Entity?
```

| 参数              | 类型                                                |
| --------------- | ------------------------------------------------- |
| level           | [ServerLevel](/vanilla/api/world/ServerLevel)     |
| data            | [MapData](/vanilla/api/data/MapData)?             |
| displayName     | [Component](/vanilla/api/text/Component)?         |
| spawningPlayer  | [Player](/vanilla/api/entity/type/player/Player)? |
| 点               | [BlockPos](/vanilla/api/util/math/BlockPos)       |
| 生成类型（spawnType） | [MobSpawnType](/vanilla/api/entity/MobSpawnType)  |
| alignPosition   | 布尔值                                               |
| invertY         | 布尔值                                               |


:::

:::group{name=toShortString}

Return Type: string

```zenscript
// EntityType.toShortString() as string

myEntityType.toShortString();
```

:::


## 参数

| 名称                    | 类型                                                       | 可获得  | 可设置   |
| --------------------- | -------------------------------------------------------- | ---- | ----- |
| canSpawnFarFromPlayer | 布尔值                                                      | true | false |
| canSummon             | 布尔值                                                      | true | false |
| category              | [MobCategory](/vanilla/api/entity/MobCategory)           | true | false |
| commandString #命令字符串  | string                                                   | true | false |
| defaultLootTable      | [资源位置](/vanilla/api/resource/ResourceLocation)           | true | false |
| description           | [Component](/vanilla/api/text/Component)                 | true | false |
| descriptionId         | string                                                   | true | false |
| dimensions            | [EntityDimensions](/vanilla/api/entity/EntityDimensions) | true | false |
| fireImmune            | 布尔值                                                      | true | false |
| height #实体高度          | float                                                    | true | false |
| toShortString         | string                                                   | true | false |
| width #宽度             | float                                                    | true | false |

