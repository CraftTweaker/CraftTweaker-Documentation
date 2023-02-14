# Enchantment

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.enchantment.Enchantment;
```


## Methods

:::group{name=canEnchant}

Return Type: boolean

```zenscript
Enchantment.canEnchant(stack as ItemStack) as boolean
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| stack     | [ItemStack](/vanilla/api/item/ItemStack) |


:::

:::group{name=doPostAttack}

```zenscript
Enchantment.doPostAttack(source as LivingEntity, target as Entity, level as int)
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| source    | [LivingEntity](/vanilla/api/entity/LivingEntity) |
| target    | [Entity](/vanilla/api/entity/Entity)             |
| level     | int                                              |


:::

:::group{name=doPostHurt}

```zenscript
Enchantment.doPostHurt(source as LivingEntity, target as Entity, level as int)
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| source    | [LivingEntity](/vanilla/api/entity/LivingEntity) |
| target    | [Entity](/vanilla/api/entity/Entity)             |
| level     | int                                              |


:::

:::group{name=getDamageBonus}

Return Type: float

```zenscript
Enchantment.getDamageBonus(level as int, mobType as MobType) as float
```

| Parameter |                  Type                  |
|-----------|----------------------------------------|
| level     | int                                    |
| mobType   | [MobType](/vanilla/api/entity/MobType) |


:::

:::group{name=getDamageProtection}

Return Type: int

```zenscript
Enchantment.getDamageProtection(level as int, source as DamageSource) as int
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| level     | int                                             |
| source    | [DamageSource](/vanilla/api/world/DamageSource) |


:::

:::group{name=getDescriptionId}

Return Type: string

```zenscript
// Enchantment.getDescriptionId() as string

myEnchantment.getDescriptionId();
```

:::

:::group{name=getFullname}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
Enchantment.getFullname(level as int) as Component
```

| Parameter | Type |
|-----------|------|
| level     | int  |


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

:::group{name=getMaxLevel}

Return Type: int

```zenscript
// Enchantment.getMaxLevel() as int

myEnchantment.getMaxLevel();
```

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

:::group{name=getMinLevel}

Return Type: int

```zenscript
// Enchantment.getMinLevel() as int

myEnchantment.getMinLevel();
```

:::

:::group{name=getRarity}

Return Type: [Rarity](/vanilla/api/item/enchantment/Rarity)

```zenscript
// Enchantment.getRarity() as Rarity

myEnchantment.getRarity();
```

:::

:::group{name=getRegistryName}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// Enchantment.getRegistryName() as ResourceLocation

myEnchantment.getRegistryName();
```

:::

:::group{name=getSlotItems}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)[[EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)]

```zenscript
Enchantment.getSlotItems(entity as LivingEntity) as ItemStack[EquipmentSlot]
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| entity    | [LivingEntity](/vanilla/api/entity/LivingEntity) |


:::

:::group{name=isCompatibleWith}

Return Type: boolean

```zenscript
Enchantment.isCompatibleWith(other as Enchantment) as boolean
```

| Parameter |                           Type                           |
|-----------|----------------------------------------------------------|
| other     | [Enchantment](/vanilla/api/item/enchantment/Enchantment) |


:::

:::group{name=isCurse}

Return Type: boolean

```zenscript
// Enchantment.isCurse() as boolean

myEnchantment.isCurse();
```

:::

:::group{name=isDiscoverable}

Return Type: boolean

```zenscript
// Enchantment.isDiscoverable() as boolean

myEnchantment.isDiscoverable();
```

:::

:::group{name=isTradeable}

Return Type: boolean

```zenscript
// Enchantment.isTradeable() as boolean

myEnchantment.isTradeable();
```

:::

:::group{name=isTreasureOnly}

Return Type: boolean

```zenscript
// Enchantment.isTreasureOnly() as boolean

myEnchantment.isTreasureOnly();
```

:::


## Properties

|      Name      |                            Type                            | Has Getter | Has Setter |
|----------------|------------------------------------------------------------|------------|------------|
| commandString  | string                                                     | true       | false      |
| descriptionId  | string                                                     | true       | false      |
| isCurse        | boolean                                                    | true       | false      |
| isDiscoverable | boolean                                                    | true       | false      |
| isTradeable    | boolean                                                    | true       | false      |
| isTreasureOnly | boolean                                                    | true       | false      |
| maxLevel       | int                                                        | true       | false      |
| minLevel       | int                                                        | true       | false      |
| rarity         | [Rarity](/vanilla/api/item/enchantment/Rarity)             | true       | false      |
| registryName   | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | true       | false      |

