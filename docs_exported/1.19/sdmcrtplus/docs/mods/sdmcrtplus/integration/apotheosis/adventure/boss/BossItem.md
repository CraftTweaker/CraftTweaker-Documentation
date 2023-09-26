# BossItem

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.apotheosis.adventure.boss.BossItem;
```


## Methods

:::group{name=createBoss}

Return Type: [Mob](/mods/sdmcrtplus/entity/Mob)

```zenscript
BossItem.createBoss(world as ServerLevel, pos as BlockPos, random as RandomSource, luck as float) as Mob
```

| Parameter |                        Type                         |
|-----------|-----------------------------------------------------|
| world     | [ServerLevel](/vanilla/api/world/ServerLevel)       |
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos)         |
| random    | [RandomSource](/vanilla/api/util/math/RandomSource) |
| luck      | float                                               |


:::

:::group{name=createBoss}

Return Type: [Mob](/mods/sdmcrtplus/entity/Mob)

```zenscript
BossItem.createBoss(world as ServerLevel, pos as BlockPos, random as RandomSource, luck as float, rarity as LootRarity?) as Mob
```

| Parameter |                                       Type                                       |
|-----------|----------------------------------------------------------------------------------|
| world     | [ServerLevel](/vanilla/api/world/ServerLevel)                                    |
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos)                                      |
| random    | [RandomSource](/vanilla/api/util/math/RandomSource)                              |
| luck      | float                                                                            |
| rarity    | [LootRarity](/mods/sdmcrtplus/integration/apotheosis/adventure/loot/LootRarity)? |


:::

:::group{name=enchantBossItem}

```zenscript
BossItem.enchantBossItem(rand as RandomSource, stack as ItemStack, level as int, treasure as boolean)
```

| Parameter |                        Type                         |
|-----------|-----------------------------------------------------|
| rand      | [RandomSource](/vanilla/api/util/math/RandomSource) |
| stack     | [ItemStack](/vanilla/api/item/ItemStack)            |
| level     | int                                                 |
| treasure  | boolean                                             |


:::

:::group{name=getDimensions}

Return Type: stdlib.List&lt;[ResourceLocation](/vanilla/api/resource/ResourceLocation)&gt;

```zenscript
// BossItem.getDimensions() as stdlib.List<ResourceLocation>

myBossItem.getDimensions();
```

:::

:::group{name=getEntity}

Return Type: [EntityType](/vanilla/api/entity/EntityType)

```zenscript
// BossItem.getEntity() as EntityType

myBossItem.getEntity();
```

:::

:::group{name=getMaxRarity}

Return Type: [LootRarity](/mods/sdmcrtplus/integration/apotheosis/adventure/loot/LootRarity)

```zenscript
// BossItem.getMaxRarity() as LootRarity

myBossItem.getMaxRarity();
```

:::

:::group{name=getMinRarity}

Return Type: [LootRarity](/mods/sdmcrtplus/integration/apotheosis/adventure/loot/LootRarity)

```zenscript
// BossItem.getMinRarity() as LootRarity

myBossItem.getMinRarity();
```

:::

:::group{name=getQuality}

Return Type: float

```zenscript
// BossItem.getQuality() as float

myBossItem.getQuality();
```

:::

:::group{name=getSize}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
// BossItem.getSize() as AABB

myBossItem.getSize();
```

:::

:::group{name=getWeight}

Return Type: int

```zenscript
// BossItem.getWeight() as int

myBossItem.getWeight();
```

:::

:::group{name=initBoss}

```zenscript
BossItem.initBoss(rand as RandomSource, entity as Mob, luck as float, rarity as LootRarity?)
```

| Parameter |                                       Type                                       |
|-----------|----------------------------------------------------------------------------------|
| rand      | [RandomSource](/vanilla/api/util/math/RandomSource)                              |
| entity    | [Mob](/mods/sdmcrtplus/entity/Mob)                                               |
| luck      | float                                                                            |
| rarity    | [LootRarity](/mods/sdmcrtplus/integration/apotheosis/adventure/loot/LootRarity)? |


:::

:::group{name=modifyBossItem}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
BossItem.modifyBossItem(stack as ItemStack, rand as RandomSource, bossName as Component?, luck as float, rarity as LootRarity, stats as BossStats) as ItemStack
```

| Parameter |                                      Type                                       |
|-----------|---------------------------------------------------------------------------------|
| stack     | [ItemStack](/vanilla/api/item/ItemStack)                                        |
| rand      | [RandomSource](/vanilla/api/util/math/RandomSource)                             |
| bossName  | [Component](/vanilla/api/text/Component)?                                       |
| luck      | float                                                                           |
| rarity    | [LootRarity](/mods/sdmcrtplus/integration/apotheosis/adventure/loot/LootRarity) |
| stats     | [BossStats](/mods/sdmcrtplus/integration/apotheosis/adventure/boss/BossStats)   |


:::


