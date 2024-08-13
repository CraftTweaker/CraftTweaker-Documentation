# Enchantment

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.enchantment.Enchantment;
```


## Extending Record

Enchantment extends Record. That means all methods available in Record are also available in Enchantment

## Methods

:::group{name=canEnchant}

Return Type: boolean

```zenscript
Enchantment.canEnchant(stack as IItemStack) as boolean
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| stack     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=getMaxCost}

Return Type: int

```zenscript
Enchantment.getMaxCost(level as int) as int
```

| Parameter | Type |
|-----------|------|
| level     | int  |


:::

:::group{name=getMinCost}

Return Type: int

```zenscript
Enchantment.getMinCost(level as int) as int
```

| Parameter | Type |
|-----------|------|
| level     | int  |


:::

:::group{name=getSlotItems}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)[[EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)]

```zenscript
Enchantment.getSlotItems(entity as LivingEntity) as IItemStack[EquipmentSlot]
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| entity    | [LivingEntity](/vanilla/api/entity/LivingEntity) |


:::

:::group{name=isPrimaryItem}

Return Type: boolean

```zenscript
Enchantment.isPrimaryItem(stack as IItemStack) as boolean
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| stack     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=isSupportedItem}

Return Type: boolean

```zenscript
Enchantment.isSupportedItem(stack as IItemStack) as boolean
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| stack     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=matchingSlot}

Return Type: boolean

```zenscript
Enchantment.matchingSlot(slot as EquipmentSlot) as boolean
```

| Parameter |                             Type                             |
|-----------|--------------------------------------------------------------|
| slot      | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot) |


:::


## Properties

|      Name      |                                     Type                                     | Has Getter | Has Setter |
|----------------|------------------------------------------------------------------------------|------------|------------|
|                | int                                                                          | true       | false      |
| anvilCost      | int                                                                          | true       | false      |
| commandString  | string                                                                       | true       | false      |
| definition     | [EnchantmentDefinition](/vanilla/api/item/enchantment/EnchantmentDefinition) | true       | false      |
| description    | [Component](/vanilla/api/text/Component)                                     | true       | false      |
| exclusiveSet   | [Enchantment](/vanilla/api/item/enchantment/Enchantment)[]                   | true       | false      |
| minLevel       | int                                                                          | true       | false      |
| registryName   | [ResourceLocation](/vanilla/api/resource/ResourceLocation)                   | true       | false      |
| supportedItems | [ItemDefinition](/vanilla/api/item/ItemDefinition)[]                         | true       | false      |
| weight         | int                                                                          | true       | false      |

