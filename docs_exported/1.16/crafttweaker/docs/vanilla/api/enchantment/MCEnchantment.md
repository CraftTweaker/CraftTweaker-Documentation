# MCEnchantment



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.enchantment.MCEnchantment;
```


## Methods

:::group{name=canApply}

Checks if this Enchantment can be applied to the given IItemStack.

Returns: True if this Enchantment can apply to the given IItemStack. False otherwise.  
Return Type: boolean

```zenscript
// MCEnchantment.canApply(stack as IItemStack) as boolean

<enchantment:minecraft:protection>.canApply(<item:minecraft:diamond_sword>);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| stack | [IItemStack](/vanilla/api/items/IItemStack) | The stack to check if this enchantment can be applied to. |


:::

:::group{name=canApplyAtEnchantingTable}

Checks if this Enchantment can be applied to the given IItemStack at an enchanting table..

Returns: True if this Enchantment can be applied. False otherwise.  
Return Type: boolean

```zenscript
// MCEnchantment.canApplyAtEnchantingTable(stack as ItemStack) as boolean

<enchantment:minecraft:protection>.canApplyAtEnchantingTable(<item:minecraft:stone_sword>);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| stack | [ItemStack](/vanilla/api/item/ItemStack) | The IItemStack to check against. |


:::

:::group{name=canGenerateInLoot}

Checks if this Enchantment can generate in loot.

Returns: True if this Enchantment can generate in loot.  
Return Type: boolean

```zenscript
// MCEnchantment.canGenerateInLoot() as boolean

<enchantment:minecraft:protection>.canGenerateInLoot();
```

:::

:::group{name=canVillagerTrade}

Checks if a villager can sell this Enchantment.

Returns: True if a villager can sell this Enchantment. False otherwise.  
Return Type: boolean

```zenscript
// MCEnchantment.canVillagerTrade() as boolean

<enchantment:minecraft:protection>.canVillagerTrade();
```

:::

:::group{name=getDisplayName}

Gets the display name of this Enchantment at the given level.

Returns: The display name of this Enchantment at the level.  
Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
// MCEnchantment.getDisplayName(level as int) as MCTextComponent

<enchantment:minecraft:protection>.getDisplayName(2);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| level | int | The level of this enchantment |


:::

:::group{name=getEntityEquipment}

Gets a map of all equipment that the entity is currently holding that this Enchantment can be applied to.

Returns: A map of EquipmentSlotType to IItemStack  
Return Type: [IItemStack](/vanilla/api/items/IItemStack)[[MCEquipmentSlotType](/vanilla/api/util/MCEquipmentSlotType)]

```zenscript
// MCEnchantment.getEntityEquipment(livingEntity as MCLivingEntity) as IItemStack[MCEquipmentSlotType]

<enchantment:minecraft:protection>.getEntityEquipment(entity);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| livingEntity | [MCLivingEntity](/vanilla/api/entity/MCLivingEntity) | The entity to check. |


:::

:::group{name=getMaxEnchantability}

Gets the maximum enchantability required to enchant this Enchantment at the given enchantment level.

 For example, to enchant an item with Fire Aspect at level 1, you need an enchantability that is less than 60..

Returns: The enchantability of the Enchantment at the given level.  
Return Type: int

```zenscript
// MCEnchantment.getMaxEnchantability(enchantmentLevel as int) as int

<enchantment:minecraft:protection>.getMaxEnchantability(1);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| enchantmentLevel | int | The enchantment level to get the enchantability for. |


:::

:::group{name=getMaxLevel}

Gets the maximum level for this Enchantment.

Returns: The maximum level for this Enchantment.  
Return Type: int

```zenscript
// MCEnchantment.getMaxLevel() as int

<enchantment:minecraft:protection>.getMaxLevel();
```

:::

:::group{name=getMinEnchantability}

Gets the minimum enchantability required to enchant this Enchantment at the given enchantment level.

 For example, to enchant an item with Fire Aspect at level 1, you need an enchantability of at-least 10.

Returns: The enchantability of the Enchantment at the given level.  
Return Type: int

```zenscript
// MCEnchantment.getMinEnchantability(enchantmentLevel as int) as int

<enchantment:minecraft:protection>.getMinEnchantability(1);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| enchantmentLevel | int | The enchantment level to get the enchantability for. |


:::

:::group{name=getMinLevel}

Gets the minimum level for this Enchantment.

Returns: The minimum level for this Enchantment.  
Return Type: int

```zenscript
// MCEnchantment.getMinLevel() as int

<enchantment:minecraft:protection>.getMinLevel();
```

:::

:::group{name=getName}

Gets the name of this Enchantment

Returns: The name of this Enchantment  
Return Type: string

```zenscript
// MCEnchantment.getName() as string

<enchantment:minecraft:protection>.getName();
```

:::

:::group{name=getRarity}

Gets the Rarity of this Enchantment

Returns: The Rarity of this Enchantment  
Return Type: [EnchantmentRarity](/vanilla/api/enchantment/EnchantmentRarity)

```zenscript
// MCEnchantment.getRarity() as EnchantmentRarity

<enchantment:minecraft:protection>.getRarity();
```

:::

:::group{name=getType}

Gets the EnchantmentType of this Enchantment.

Returns: The EnchantmentType of this Enchantment.  
Return Type: [EnchantmentType](/vanilla/api/enchantment/EnchantmentType)

```zenscript
// MCEnchantment.getType() as EnchantmentType

<enchantment:minecraft:protection>.getType();
```

:::

:::group{name=isAllowedOnBooks}

Check if this Enchantment is allowed on books.

Returns: True if this Enchantment can be applied on books. False otherwise.  
Return Type: boolean

```zenscript
// MCEnchantment.isAllowedOnBooks() as boolean

<enchantment:minecraft:protection>.isAllowedOnBooks();
```

:::

:::group{name=isCompatibleWith}

Checks if this Enchantment is compatible with the other given Enchantment.

Returns: True if the Enchantments are compatible. False otherwise.  
Return Type: boolean

```zenscript
// MCEnchantment.isCompatibleWith(other as MCEnchantment) as boolean

<enchantment:minecraft:protection>.isCompatibleWith(<enchantment:minecraft:efficiency>);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| other | [MCEnchantment](/vanilla/api/enchantment/MCEnchantment) | The other Enchantment to check if it is compatible with this Enchantment |


:::

:::group{name=isCurse}

Checks if this Enchantment is a curse Enchantment.

Returns: True if this Enchantment is a curse enchantment. False otherwise.  
Return Type: boolean

```zenscript
// MCEnchantment.isCurse() as boolean

<enchantment:minecraft:protection>.isCurse();
```

:::

:::group{name=isTreasureEnchantment}

Checks if this Enchantment is a treasure Enchantment.

Returns: True if this Enchantment is a treasure enchantment. False otherwise.  
Return Type: boolean

```zenscript
// MCEnchantment.isTreasureEnchantment() as boolean

<enchantment:minecraft:protection>.isTreasureEnchantment();
```

:::


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| allowedOnBook | boolean | true | false | Check if this Enchantment is allowed on books. |
| canGenerateInLoot | boolean | true | false | Checks if this Enchantment can generate in loot. |
| canVillagerTrade | boolean | true | false | Checks if a villager can sell this Enchantment. |
| curse | boolean | true | false | Checks if this Enchantment is a curse Enchantment. |
| maxLevel | int | true | false | Gets the maximum level for this Enchantment. |
| minLevel | int | true | false | Gets the minimum level for this Enchantment. |
| name | string | true | false | Gets the name of this Enchantment |
| rarity | [EnchantmentRarity](/vanilla/api/enchantment/EnchantmentRarity) | true | false | Gets the Rarity of this Enchantment |
| treasure | boolean | true | false | Checks if this Enchantment is a treasure Enchantment. |
| type | [EnchantmentType](/vanilla/api/enchantment/EnchantmentType) | true | false | Gets the EnchantmentType of this Enchantment. |

