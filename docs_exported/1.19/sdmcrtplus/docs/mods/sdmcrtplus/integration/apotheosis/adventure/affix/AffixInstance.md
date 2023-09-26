# AffixInstance

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.apotheosis.adventure.affix.AffixInstance;
```


## Extending Record

AffixInstance extends Record. That means all methods available in Record are also available in AffixInstance

## Constructors


```zenscript
new AffixInstance(affix as AffixType, stack as ItemStack, rarity as LootRarity, level as float?) as AffixInstance
```
| Parameter |                                      Type                                       |
|-----------|---------------------------------------------------------------------------------|
| affix     | [AffixType](/mods/sdmcrtplus/integration/apotheosis/adventure/affix/AffixType)  |
| stack     | [ItemStack](/vanilla/api/item/ItemStack)                                        |
| rarity    | [LootRarity](/mods/sdmcrtplus/integration/apotheosis/adventure/loot/LootRarity) |
| level     | float?                                                                          |



## Methods

:::group{name=affix}

Return Type: [Affix](/mods/sdmcrtplus/integration/apotheosis/adventure/affix/Affix)

```zenscript
// AffixInstance.affix() as Affix

myAffixInstance.affix();
```

:::

:::group{name=enablesTelepathy}

Return Type: boolean

```zenscript
// AffixInstance.enablesTelepathy() as boolean

myAffixInstance.enablesTelepathy();
```

:::

:::group{name=equals}

Return Type: boolean

```zenscript
AffixInstance.equals(object as Object) as boolean
```

| Parameter |  Type  |
|-----------|--------|
| object    | Object |


:::

:::group{name=getDamageBonus}

Return Type: float

```zenscript
AffixInstance.getDamageBonus(type as MobType) as float
```

| Parameter |                  Type                  |
|-----------|----------------------------------------|
| type      | [MobType](/vanilla/api/entity/MobType) |


:::

:::group{name=getDurabilityBonusPercentage}

Return Type: float

```zenscript
AffixInstance.getDurabilityBonusPercentage(player as ServerPlayer) as float
```

| Parameter |                             Type                             |
|-----------|--------------------------------------------------------------|
| player    | [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer) |


:::

:::group{name=level}

Return Type: float

```zenscript
// AffixInstance.level() as float

myAffixInstance.level();
```

:::

:::group{name=stack}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
// AffixInstance.stack() as ItemStack

myAffixInstance.stack();
```

:::


