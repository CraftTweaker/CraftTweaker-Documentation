# Enchantment

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.enchantment.Enchantment;
```


## Metodi

:::group{name=canEnchant}

Return Type: boolean

```zenscript
Enchantment.canEnchant(stack as ItemStack) as boolean
```

| Parametro | Tipo                                     |
| --------- | ---------------------------------------- |
| stack     | [ItemStack](/vanilla/api/item/ItemStack) |


:::

:::group{name=doPostAttack}

```zenscript
Enchantment.doPostAttack(source as LivingEntity, target as Entity, level as int)
```

| Parametro | Tipo                                             |
| --------- | ------------------------------------------------ |
| sorgente  | [LivingEntity](/vanilla/api/entity/LivingEntity) |
| target    | [Entity](/vanilla/api/entity/Entity)             |
| level     | int                                              |


:::

:::group{name=doPostHurt}

```zenscript
Enchantment.doPostHurt(source as LivingEntity, target as Entity, level as int)
```

| Parametro | Tipo                                             |
| --------- | ------------------------------------------------ |
| sorgente  | [LivingEntity](/vanilla/api/entity/LivingEntity) |
| target    | [Entity](/vanilla/api/entity/Entity)             |
| level     | int                                              |


:::

:::group{name=getDamageBonus}

Return Type: float

```zenscript
Enchantment.getDamageBonus(level as int, mobType as MobType) as float
```

| Parametro | Tipo                                   |
| --------- | -------------------------------------- |
| level     | int                                    |
| mobType   | [MobType](/vanilla/api/entity/MobType) |


:::

:::group{name=getDamageProtection}

Return Type: int

```zenscript
Enchantment.getDamageProtection(level as int, source as DamageSource) as int
```

| Parametro | Tipo                                            |
| --------- | ----------------------------------------------- |
| level     | int                                             |
| sorgente  | [DamageSource](/vanilla/api/world/DamageSource) |


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

| Parametro | Tipo |
| --------- | ---- |
| level     | int  |


:::

:::group{name=getMaxCost}

Return Type: int

```zenscript
Enchantment.getMaxCost(level as int) as int
```

| Parametro | Tipo |
| --------- | ---- |
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

| Parametro | Tipo |
| --------- | ---- |
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

:::group{name=getSlotItems}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)[[EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)]

```zenscript
Enchantment.getSlotItems(entity as LivingEntity) as ItemStack[EquipmentSlot]
```

| Parametro | Tipo                                             |
| --------- | ------------------------------------------------ |
| entity    | [LivingEntity](/vanilla/api/entity/LivingEntity) |


:::

:::group{name=isCompatibleWith}

Return Type: boolean

```zenscript
Enchantment.isCompatibleWith(other as Enchantment) as boolean
```

| Parametro | Tipo                                                     |
| --------- | -------------------------------------------------------- |
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


## Proprietà

| Nome           | Tipo                                           | Ha Getter | Ha Setter |
| -------------- | ---------------------------------------------- | --------- | --------- |
| commandString  | string                                         | sì        | no        |
| descriptionId  | string                                         | sì        | no        |
| isCurse        | boolean                                        | sì        | no        |
| isDiscoverable | boolean                                        | sì        | no        |
| isTradeable    | boolean                                        | sì        | no        |
| isTreasureOnly | boolean                                        | sì        | no        |
| maxLevel       | int                                            | sì        | no        |
| minLevel       | int                                            | sì        | no        |
| rarity         | [Rarity](/vanilla/api/item/enchantment/Rarity) | sì        | no        |

