# LootRarityManager

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.apotheosis.adventure.loot.LootRarityManager;
```


## Static Methods

:::group{name=getListRarity}

Return Type: stdlib.List&lt;[LootRarity](/mods/sdmcrtplus/integration/apotheosis/adventure/loot/LootRarity)&gt;

```zenscript
// LootRarityManager.getListRarity() as stdlib.List<LootRarity>

LootRarityManager.getListRarity();
```

:::

:::group{name=random}

Return Type: [LootRarity](/mods/sdmcrtplus/integration/apotheosis/adventure/loot/LootRarity)

```zenscript
LootRarityManager.random(rand as RandomSource, luck as float) as LootRarity
```

| Parameter |                        Type                         |
|-----------|-----------------------------------------------------|
| rand      | [RandomSource](/vanilla/api/util/math/RandomSource) |
| luck      | float                                               |


:::

## Static Properties

|   Name   |                                      Type                                       | Has Getter | Has Setter |
|----------|---------------------------------------------------------------------------------|------------|------------|
| ANCIENT  | [LootRarity](/mods/sdmcrtplus/integration/apotheosis/adventure/loot/LootRarity) | true       | false      |
| COMMON   | [LootRarity](/mods/sdmcrtplus/integration/apotheosis/adventure/loot/LootRarity) | true       | false      |
| EPIC     | [LootRarity](/mods/sdmcrtplus/integration/apotheosis/adventure/loot/LootRarity) | true       | false      |
| MYTHIC   | [LootRarity](/mods/sdmcrtplus/integration/apotheosis/adventure/loot/LootRarity) | true       | false      |
| RARE     | [LootRarity](/mods/sdmcrtplus/integration/apotheosis/adventure/loot/LootRarity) | true       | false      |
| UNCOMMON | [LootRarity](/mods/sdmcrtplus/integration/apotheosis/adventure/loot/LootRarity) | true       | false      |

