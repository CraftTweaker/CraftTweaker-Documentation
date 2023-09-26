# Affix

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.apotheosis.adventure.affix.Affix;
```


## Constructors


```zenscript
new Affix(type as AffixType) as Affix
```
| Parameter |                                      Type                                      |
|-----------|--------------------------------------------------------------------------------|
| type      | [AffixType](/mods/sdmcrtplus/integration/apotheosis/adventure/affix/AffixType) |



## Methods

:::group{name=canApplyTo}

Return Type: boolean

```zenscript
Affix.canApplyTo(var1 as ItemStack, var2 as invalid, var3 as LootRarity) as boolean
```

| Parameter |                                      Type                                       |
|-----------|---------------------------------------------------------------------------------|
| var1      | [ItemStack](/vanilla/api/item/ItemStack)                                        |
| var2      | **invalid**                                                                     |
| var3      | [LootRarity](/mods/sdmcrtplus/integration/apotheosis/adventure/loot/LootRarity) |


:::

:::group{name=enablesTelepathy}

Return Type: boolean

```zenscript
// Affix.enablesTelepathy() as boolean

myAffix.enablesTelepathy();
```

:::

:::group{name=equals}

Return Type: boolean

```zenscript
Affix.equals(object as Object) as boolean
```

| Parameter |  Type  |
|-----------|--------|
| object    | Object |


:::

:::group{name=getDamageProtection}

Return Type: int

```zenscript
Affix.getDamageProtection(stack as ItemStack, rarity as LootRarity, level as float, source as DamageSource) as int
```

| Parameter |                                      Type                                       |
|-----------|---------------------------------------------------------------------------------|
| stack     | [ItemStack](/vanilla/api/item/ItemStack)                                        |
| rarity    | [LootRarity](/mods/sdmcrtplus/integration/apotheosis/adventure/loot/LootRarity) |
| level     | float                                                                           |
| source    | [DamageSource](/vanilla/api/world/DamageSource)                                 |


:::

:::group{name=getDurabilityBonusPercentage}

Return Type: float

```zenscript
Affix.getDurabilityBonusPercentage(stack as ItemStack, rarity as LootRarity, level as float, user as ServerPlayer?) as float
```

| Parameter |                                      Type                                       |
|-----------|---------------------------------------------------------------------------------|
| stack     | [ItemStack](/vanilla/api/item/ItemStack)                                        |
| rarity    | [LootRarity](/mods/sdmcrtplus/integration/apotheosis/adventure/loot/LootRarity) |
| level     | float                                                                           |
| user      | [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)?                   |


:::

:::group{name=getEnchantmentLevels}

```zenscript
Affix.getEnchantmentLevels(stack as ItemStack, rarity as LootRarity, level as float, enchantments as int?[Enchantment])
```

|  Parameter   |                                      Type                                       |
|--------------|---------------------------------------------------------------------------------|
| stack        | [ItemStack](/vanilla/api/item/ItemStack)                                        |
| rarity       | [LootRarity](/mods/sdmcrtplus/integration/apotheosis/adventure/loot/LootRarity) |
| level        | float                                                                           |
| enchantments | int?[[Enchantment](/vanilla/api/item/enchantment/Enchantment)]                  |


:::

:::group{name=getName}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
Affix.getName(stack as ItemStack, rarity as LootRarity, level as float, prefix as boolean) as Component
```

| Parameter |                                      Type                                       |
|-----------|---------------------------------------------------------------------------------|
| stack     | [ItemStack](/vanilla/api/item/ItemStack)                                        |
| rarity    | [LootRarity](/mods/sdmcrtplus/integration/apotheosis/adventure/loot/LootRarity) |
| level     | float                                                                           |
| prefix    | boolean                                                                         |


:::

:::group{name=getType}

Return Type: [AffixType](/mods/sdmcrtplus/integration/apotheosis/adventure/affix/AffixType)

```zenscript
// Affix.getType() as AffixType

myAffix.getType();
```

:::

:::group{name=getType}

Return Type: float

```zenscript
Affix.getType(stack as ItemStack, rarity as LootRarity, level as float, creatureType as MobType) as float
```

|  Parameter   |                                      Type                                       |
|--------------|---------------------------------------------------------------------------------|
| stack        | [ItemStack](/vanilla/api/item/ItemStack)                                        |
| rarity       | [LootRarity](/mods/sdmcrtplus/integration/apotheosis/adventure/loot/LootRarity) |
| level        | float                                                                           |
| creatureType | [MobType](/vanilla/api/entity/MobType)                                          |


:::

:::group{name=onHurt}

Return Type: float

```zenscript
Affix.onHurt(stack as ItemStack, rarity as LootRarity, level as float, src as DamageSource, ent as LivingEntity, amount as float) as float
```

| Parameter |                                      Type                                       |
|-----------|---------------------------------------------------------------------------------|
| stack     | [ItemStack](/vanilla/api/item/ItemStack)                                        |
| rarity    | [LootRarity](/mods/sdmcrtplus/integration/apotheosis/adventure/loot/LootRarity) |
| level     | float                                                                           |
| src       | [DamageSource](/vanilla/api/world/DamageSource)                                 |
| ent       | [LivingEntity](/vanilla/api/entity/LivingEntity)                                |
| amount    | float                                                                           |


:::

:::group{name=onItemUse}

Return Type: [InteractionResult](/vanilla/api/world/InteractionResult)

```zenscript
Affix.onItemUse(stack as ItemStack, rarity as LootRarity, level as float, ctx as UseOnContext) as InteractionResult
```

| Parameter |                                      Type                                       |
|-----------|---------------------------------------------------------------------------------|
| stack     | [ItemStack](/vanilla/api/item/ItemStack)                                        |
| rarity    | [LootRarity](/mods/sdmcrtplus/integration/apotheosis/adventure/loot/LootRarity) |
| level     | float                                                                           |
| ctx       | [UseOnContext](/vanilla/api/item/UseOnContext)                                  |


:::

:::group{name=onShieldBlock}

Return Type: float

```zenscript
Affix.onShieldBlock(stack as ItemStack, rarity as LootRarity, level as float, entity as LivingEntity, source as DamageSource, amount as float) as float
```

| Parameter |                                      Type                                       |
|-----------|---------------------------------------------------------------------------------|
| stack     | [ItemStack](/vanilla/api/item/ItemStack)                                        |
| rarity    | [LootRarity](/mods/sdmcrtplus/integration/apotheosis/adventure/loot/LootRarity) |
| level     | float                                                                           |
| entity    | [LivingEntity](/vanilla/api/entity/LivingEntity)                                |
| source    | [DamageSource](/vanilla/api/world/DamageSource)                                 |
| amount    | float                                                                           |


:::


