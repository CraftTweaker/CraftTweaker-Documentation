# MCEnchantmentLevelSetEvent

Fired when the enchantment level is set for each of the three potential enchantments in the enchanting table. The level is set to the vanilla value and can be modified by this event handler.

 The enchantRow is used to determine which enchantment level is being set, 1, 2, or 3. The power is a number from 0-15 and indicates how many bookshelves surround the enchanting table. The itemStack representing the item being enchanted is also available.

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.enchantming.MCEnchantmentLevelSetEvent;
```


## Extending MCEvent

MCEnchantmentLevelSetEvent extends [MCEvent](/vanilla/api/event/MCEvent). That means all methods available in [MCEvent](/vanilla/api/event/MCEvent) are also available in MCEnchantmentLevelSetEvent

## Methods

:::group{name=getEnchantRow}

Gets the row in the Enchanting Table that this event is fired for.

Returns: The row that this event is fired for.  
Return Type: int

```zenscript
// MCEnchantmentLevelSetEvent.getEnchantRow() as int

myMCEnchantmentLevelSetEvent.getEnchantRow();
```

:::

:::group{name=getItem}

Gets the ItemStack that is being enchanted.

Returns: The ItemStack that is being enchanted.  
Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
// MCEnchantmentLevelSetEvent.getItem() as IItemStack

myMCEnchantmentLevelSetEvent.getItem();
```

:::

:::group{name=getLevel}

Gets the current level of the enchantment for this row.

 This value can be changed by other mods.

Returns: The current level of the enchantment for this row.  
Return Type: int

```zenscript
// MCEnchantmentLevelSetEvent.getLevel() as int

myMCEnchantmentLevelSetEvent.getLevel();
```

:::

:::group{name=getOriginalLevel}

Gets the original level of the enchantment for this row.

Returns: The original level of the enchantment for this row.  
Return Type: int

```zenscript
// MCEnchantmentLevelSetEvent.getOriginalLevel() as int

myMCEnchantmentLevelSetEvent.getOriginalLevel();
```

:::

:::group{name=getPos}

Gets the position of the Enchanting Table firing this event.

Returns: The positiong of the Enchanting Table.  
Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
// MCEnchantmentLevelSetEvent.getPos() as BlockPos

myMCEnchantmentLevelSetEvent.getPos();
```

:::

:::group{name=getPower}

Gets the Enchanting Power of the Enchanting Table.

Returns: The Enchanting Power of the Enchanting Table.  
Return Type: int

```zenscript
// MCEnchantmentLevelSetEvent.getPower() as int

myMCEnchantmentLevelSetEvent.getPower();
```

:::

:::group{name=getWorld}

Gets the World where the Enchanting Table is.

Returns: The World where the event is fired in.  
Return Type: [MCWorld](/vanilla/api/world/MCWorld)

```zenscript
// MCEnchantmentLevelSetEvent.getWorld() as MCWorld

myMCEnchantmentLevelSetEvent.getWorld();
```

:::

:::group{name=setLevel}

Sets the level of the enchantment for this row.

 Setting this to `0` will make this row not have an enchantment.

Return Type: void

```zenscript
// MCEnchantmentLevelSetEvent.setLevel(level as int) as void

myMCEnchantmentLevelSetEvent.setLevel(5);
```

| Parameter | Type | Description                |
| --------- | ---- | -------------------------- |
| level     | int  | The new enchantment level. |


:::


## Properties

| Name          | Type                                        | Has Getter | Has Setter | Description                                                                                                                  |
| ------------- | ------------------------------------------- | ---------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------- |
| enchantRow    | int                                         | true       | false      | Gets the row in the Enchanting Table that this event is fired for.                                                           |
| item          | [IItemStack](/vanilla/api/items/IItemStack) | true       | false      | Gets the ItemStack that is being enchanted.                                                                                  |
| level         | int                                         | true       | true       | Gets the current level of the enchantment for this row. <br />  <br />  This value can be changed by other mods. |
| originalLevel | int                                         | true       | false      | Gets the original level of the enchantment for this row.                                                                     |
| pos           | [BlockPos](/vanilla/api/util/BlockPos)      | true       | false      | Gets the position of the Enchanting Table firing this event.                                                                 |
| power         | int                                         | true       | false      | Gets the Enchanting Power of the Enchanting Table.                                                                           |
| world         | [MCWorld](/vanilla/api/world/MCWorld)       | true       | false      | Gets the World where the Enchanting Table is.                                                                                |

