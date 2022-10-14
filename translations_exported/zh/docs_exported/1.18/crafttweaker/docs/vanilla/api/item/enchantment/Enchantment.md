# Enchantment

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.enchantment.Enchantment;
```


## 使用方式

:::group{name=canEnchant}

Return Type: boolean

```zenscript
Enchantment.canEnchant(stack as ItemStack) as boolean
```

| 参数 | 类型                                  |
| -- | ----------------------------------- |
| 堆叠 | [物品应用](/vanilla/api/item/ItemStack) |


:::

:::group{name=doPostAttack}

```zenscript
Enchantment.doPostAttack(source as LivingEntity, target as Entity, level as int)
```

| 参数     | 类型                                               |
| ------ | ------------------------------------------------ |
| 来源     | [LivingEntity](/vanilla/api/entity/LivingEntity) |
| target | [Entity](/vanilla/api/entity/Entity)             |
| level  | int                                              |


:::

:::group{name=doPostHurt}

```zenscript
Enchantment.doPostHurt(source as LivingEntity, target as Entity, level as int)
```

| 参数     | 类型                                               |
| ------ | ------------------------------------------------ |
| 来源     | [LivingEntity](/vanilla/api/entity/LivingEntity) |
| target | [Entity](/vanilla/api/entity/Entity)             |
| level  | int                                              |


:::

:::group{name=getDamageBonus}

Return Type: float

```zenscript
Enchantment.getDamageBonus(level as int, mobType as MobType) as float
```

| 参数      | 类型                                     |
| ------- | -------------------------------------- |
| level   | int                                    |
| mobType | [MobType](/vanilla/api/entity/MobType) |


:::

:::group{name=getDamageProtection}

Return Type: int

```zenscript
Enchantment.getDamageProtection(level as int, source as DamageSource) as int
```

| 参数    | 类型                                              |
| ----- | ----------------------------------------------- |
| level | int                                             |
| 来源    | [DamageSource](/vanilla/api/world/DamageSource) |


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

| 参数    | 类型  |
| ----- | --- |
| level | int |


:::

:::group{name=getMaxCost}

Return Type: int

```zenscript
Enchantment.getMaxCost(level as int) as int
```

| 参数    | 类型  |
| ----- | --- |
| level | int |


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

| 参数    | 类型  |
| ----- | --- |
| level | int |


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

| 参数     | 类型                                               |
| ------ | ------------------------------------------------ |
| entity | [LivingEntity](/vanilla/api/entity/LivingEntity) |


:::

:::group{name=isCompatibleWith}

Return Type: boolean

```zenscript
Enchantment.isCompatibleWith(other as Enchantment) as boolean
```

| 参数    | 类型                                                       |
| ----- | -------------------------------------------------------- |
| other | [Enchantment](/vanilla/api/item/enchantment/Enchantment) |


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


## 参数

| 名称                   | 类型                                             | 可获得  | 可设置   |
| -------------------- | ---------------------------------------------- | ---- | ----- |
| commandString #命令字符串 | string                                         | true | false |
| descriptionId        | string                                         | true | false |
| isCurse              | 布尔值                                            | true | false |
| isDiscoverable       | 布尔值                                            | true | false |
| isTradeable          | 布尔值                                            | true | false |
| isTreasureOnly       | 布尔值                                            | true | false |
| maxLevel             | int                                            | true | false |
| minLevel             | int                                            | true | false |
| rarity               | [Rarity](/vanilla/api/item/enchantment/Rarity) | true | false |

