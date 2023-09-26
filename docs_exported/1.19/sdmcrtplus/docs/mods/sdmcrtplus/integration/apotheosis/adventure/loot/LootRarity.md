# LootRarity

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.apotheosis.adventure.loot.LootRarity;
```


## Implemented Interfaces
LootRarity implements the following interfaces. That means all methods defined in these interfaces are also available in LootRarity

- Comparable&lt;[LootRarity](/mods/sdmcrtplus/integration/apotheosis/adventure/loot/LootRarity)&gt;

## Methods

:::group{name=getColor}

Return Type: [TextColor](/vanilla/api/text/TextColor)

```zenscript
// LootRarity.getColor() as TextColor

myLootRarity.getColor();
```

:::

:::group{name=getID}

Return Type: string

```zenscript
// LootRarity.getID() as string

myLootRarity.getID();
```

:::

:::group{name=getMaterial}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
// LootRarity.getMaterial() as ItemStack

myLootRarity.getMaterial();
```

:::

:::group{name=getQuality}

Return Type: float

```zenscript
// LootRarity.getQuality() as float

myLootRarity.getQuality();
```

:::

:::group{name=getWeight}

Return Type: float

```zenscript
// LootRarity.getWeight() as float

myLootRarity.getWeight();
```

:::

:::group{name=isAtLeast}

Return Type: boolean

```zenscript
LootRarity.isAtLeast(rarity as LootRarity) as boolean
```

| Parameter |                                      Type                                       |
|-----------|---------------------------------------------------------------------------------|
| rarity    | [LootRarity](/mods/sdmcrtplus/integration/apotheosis/adventure/loot/LootRarity) |


:::

:::group{name=isAtMost}

Return Type: boolean

```zenscript
LootRarity.isAtMost(rarity as LootRarity) as boolean
```

| Parameter |                                      Type                                       |
|-----------|---------------------------------------------------------------------------------|
| rarity    | [LootRarity](/mods/sdmcrtplus/integration/apotheosis/adventure/loot/LootRarity) |


:::


