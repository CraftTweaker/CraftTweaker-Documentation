# EnchantmentLevelSetEvent

Fired when the enchantment level is set for each of the three potential enchantments in the enchanting table. The level is set to the vanilla value and can be modified by this event handler.

 The enchantRow is used to determine which enchantment level is being set, 1, 2, or 3. The power is a number from 0-15 and indicates how many bookshelves surround the enchanting table. The itemStack representing the item being enchanted is also available.

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.enchanting.EnchantmentLevelSetEvent;
```


## Extending Event

EnchantmentLevelSetEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in EnchantmentLevelSetEvent

## Methods

:::group{name=getEnchantRow}

Gets the row in the Enchanting Table that this event is fired for.

Returns: The row that this event is fired for.  
Return Type: int

```zenscript
// EnchantmentLevelSetEvent.getEnchantRow() as int

myEnchantmentLevelSetEvent.getEnchantRow();
```

:::

:::group{name=getItem}

Gets the ItemStack that is being enchanted.

Returns: The ItemStack that is being enchanted.  
Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// EnchantmentLevelSetEvent.getItem() as IItemStack

myEnchantmentLevelSetEvent.getItem();
```

:::

:::group{name=getLevel}

Gets the current level of the enchantment for this row.

 This value can be changed by other mods.

Returns: The current level of the enchantment for this row.  
Return Type: int

```zenscript
// EnchantmentLevelSetEvent.getLevel() as int

myEnchantmentLevelSetEvent.getLevel();
```

:::

:::group{name=getOriginalLevel}

Gets the original level of the enchantment for this row.

Returns: The original level of the enchantment for this row.  
Return Type: int

```zenscript
// EnchantmentLevelSetEvent.getOriginalLevel() as int

myEnchantmentLevelSetEvent.getOriginalLevel();
```

:::

:::group{name=getPos}

Gets the position of the Enchanting Table firing this event.

Returns: The positiong of the Enchanting Table.  
Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// EnchantmentLevelSetEvent.getPos() as BlockPos

myEnchantmentLevelSetEvent.getPos();
```

:::

:::group{name=getPower}

Gets the Enchanting Power of the Enchanting Table.

Returns: The Enchanting Power of the Enchanting Table.  
Return Type: int

```zenscript
// EnchantmentLevelSetEvent.getPower() as int

myEnchantmentLevelSetEvent.getPower();
```

:::

:::group{name=getWorld}

Gets the Level where the Enchanting Table is.

Returns: The Level where the event is fired in.  
Return Type: [Level](/vanilla/api/world/Level)

```zenscript
// EnchantmentLevelSetEvent.getWorld() as Level

myEnchantmentLevelSetEvent.getWorld();
```

:::

:::group{name=setLevel}

Sets the level of the enchantment for this row.

 Setting this to `0` will make this row not have an enchantment.

Return Type: void

```zenscript
// EnchantmentLevelSetEvent.setLevel(level as int) as void

myEnchantmentLevelSetEvent.setLevel(5);
```

| Parameter | Type | Description                |
| --------- | ---- | -------------------------- |
| level     | int  | The new enchantment level. |


:::


## Properties

| 이름            | Type                                        | Has Getter | Has Setter | Description                                                                                                                  |
| ------------- | ------------------------------------------- | ---------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------- |
| enchantRow    | int                                         | true       | false      | Gets the row in the Enchanting Table that this event is fired for.                                                           |
| item          | [IItemStack](/vanilla/api/item/IItemStack)  | true       | false      | Gets the ItemStack that is being enchanted.                                                                                  |
| level         | int                                         | true       | true       | Gets the current level of the enchantment for this row. <br />  <br />  This value can be changed by other mods. |
| originalLevel | int                                         | true       | false      | Gets the original level of the enchantment for this row.                                                                     |
| pos           | [BlockPos](/vanilla/api/util/math/BlockPos) | true       | false      | Gets the position of the Enchanting Table firing this event.                                                                 |
| power         | int                                         | true       | false      | Gets the Enchanting Power of the Enchanting Table.                                                                           |
| world         | [Level](/vanilla/api/world/Level)           | true       | false      | Gets the Level where the Enchanting Table is.                                                                                |

