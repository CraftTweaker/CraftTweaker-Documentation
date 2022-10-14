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

| Parameter | Type                                     | Description             |
| --------- | ---------------------------------------- | ----------------------- |
| stack     | [ItemStack](/vanilla/api/item/ItemStack) | No Description Provided |


:::

:::group{name=doPostAttack}

Return Type: void

```zenscript
Enchantment.doPostAttack(source as LivingEntity, target as Entity, level as int) as void
```

| Parameter | Type                                             | Description             |
| --------- | ------------------------------------------------ | ----------------------- |
| ソース       | [LivingEntity](/vanilla/api/entity/LivingEntity) | No Description Provided |
| target    | [Entity](/vanilla/api/entity/Entity)             | No Description Provided |
| level     | int                                              | No Description Provided |


:::

:::group{name=doPostHurt}

Return Type: void

```zenscript
Enchantment.doPostHurt(source as LivingEntity, target as Entity, level as int) as void
```

| Parameter | Type                                             | Description             |
| --------- | ------------------------------------------------ | ----------------------- |
| ソース       | [LivingEntity](/vanilla/api/entity/LivingEntity) | No Description Provided |
| target    | [Entity](/vanilla/api/entity/Entity)             | No Description Provided |
| level     | int                                              | No Description Provided |


:::

:::group{name=getDamageBonus}

Return Type: float

```zenscript
Enchantment.getDamageBonus(level as int, mobType as MobType) as float
```

| Parameter | Type                                   | Description             |
| --------- | -------------------------------------- | ----------------------- |
| level     | int                                    | No Description Provided |
| mobType   | [MobType](/vanilla/api/entity/MobType) | No Description Provided |


:::

:::group{name=getDamageProtection}

Return Type: int

```zenscript
Enchantment.getDamageProtection(level as int, source as DamageSource) as int
```

| Parameter | Type                                            | Description             |
| --------- | ----------------------------------------------- | ----------------------- |
| level     | int                                             | No Description Provided |
| ソース       | [DamageSource](/vanilla/api/world/DamageSource) | No Description Provided |


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

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| level     | int  | No Description Provided |


:::

:::group{name=getMaxCost}

Return Type: int

```zenscript
Enchantment.getMaxCost(level as int) as int
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| level     | int  | No Description Provided |


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

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| level     | int  | No Description Provided |


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

:::group{name=getSlotItems}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)[[EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)]

```zenscript
Enchantment.getSlotItems(entity as LivingEntity) as ItemStack[EquipmentSlot]
```

| Parameter | Type                                             | Description             |
| --------- | ------------------------------------------------ | ----------------------- |
| entity    | [LivingEntity](/vanilla/api/entity/LivingEntity) | No Description Provided |


:::

:::group{name=isCompatibleWith}

Return Type: boolean

```zenscript
Enchantment.isCompatibleWith(other as Enchantment) as boolean
```

| Parameter | Type                                                     | Description             |
| --------- | -------------------------------------------------------- | ----------------------- |
| other     | [Enchantment](/vanilla/api/item/enchantment/Enchantment) | No Description Provided |


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

| 名称             | Type                                           | Has Getter | Has Setter | Description             |
| -------------- | ---------------------------------------------- | ---------- | ---------- | ----------------------- |
| commandString  | string                                         | true       | false      | No Description Provided |
| descriptionId  | string                                         | true       | false      | No Description Provided |
| isCurse        | boolean型                                       | true       | false      | No Description Provided |
| isDiscoverable | boolean型                                       | true       | false      | No Description Provided |
| isTradeable    | boolean型                                       | true       | false      | No Description Provided |
| isTreasureOnly | boolean型                                       | true       | false      | No Description Provided |
| maxLevel       | int                                            | true       | false      | No Description Provided |
| minLevel       | int                                            | true       | false      | No Description Provided |
| rarity         | [Rarity](/vanilla/api/item/enchantment/Rarity) | true       | false      | No Description Provided |

