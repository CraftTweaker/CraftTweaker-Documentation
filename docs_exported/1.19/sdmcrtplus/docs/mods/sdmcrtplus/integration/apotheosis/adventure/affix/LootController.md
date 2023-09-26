# LootController

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.apotheosis.adventure.affix.LootController;
```


## Static Methods

:::group{name=createLootItem}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
LootController.createLootItem(stack as ItemStack, rarity as LootRarity, rand as RandomSource) as ItemStack
```

| Parameter |                                      Type                                       |
|-----------|---------------------------------------------------------------------------------|
| stack     | [ItemStack](/vanilla/api/item/ItemStack)                                        |
| rarity    | [LootRarity](/mods/sdmcrtplus/integration/apotheosis/adventure/loot/LootRarity) |
| rand      | [RandomSource](/vanilla/api/util/math/RandomSource)                             |


:::

:::group{name=createRandomLootItem}

```zenscript
LootController.createRandomLootItem(rand as RandomSource, rarity as LootRarity?, player as Player, level as ServerLevel)
```

| Parameter |                                       Type                                       |
|-----------|----------------------------------------------------------------------------------|
| rand      | [RandomSource](/vanilla/api/util/math/RandomSource)                              |
| rarity    | [LootRarity](/mods/sdmcrtplus/integration/apotheosis/adventure/loot/LootRarity)? |
| player    | [Player](/vanilla/api/entity/type/player/Player)                                 |
| level     | [ServerLevel](/vanilla/api/world/ServerLevel)                                    |


:::

