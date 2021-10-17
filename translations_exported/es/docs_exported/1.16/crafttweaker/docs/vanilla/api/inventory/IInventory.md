# IInventory

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.inventory.IInventory;
```


## Methods

:::group{name=clear}

Clears this inventory of all items.

Return Type: void

```zenscript
// IInventory.clear() as void

myIInventory.clear();
```

:::

:::group{name=closeInventory}

Marks the inventory as closed, this is used by chests and barrels to determine if they should have a closed texture / model, but other inventories may use it in a different way.

Return Type: void

```zenscript
// IInventory.closeInventory(player as MCPlayerEntity) as void

myIInventory.closeInventory(player);
```

| Parameter | Type                                                 | Description                           |
| --------- | ---------------------------------------------------- | ------------------------------------- |
| player    | [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity) | The player that opened the inventory. |


:::

:::group{name=count}

Counts how many of the given Item is in this inventory.

 NOTE: This does not work for IItemStacks, so all NBT will be ignored.

Returns: The amount of the Item in this inventory.  
Return Type: int

```zenscript
// IInventory.count(item as MCItemDefinition) as int

myIInventory.count(<item:minecraft:dirt>);
```

| Parameter | Type                                                   | Description           |
| --------- | ------------------------------------------------------ | --------------------- |
| item      | [MCItemDefinition](/vanilla/api/item/MCItemDefinition) | The Item to look for. |


:::

:::group{name=count}

Counts how many ItemStacks in this inventory match the given predicate.

Returns: The amount of ItemStacks in this inventory that match the predicate.  
Return Type: int

```zenscript
// IInventory.count(predicate as Predicate<IItemStack>) as int

myIInventory.count((stack) => stack.amount == 2);
```

| Parameter | Type                                                                     | Description                   |
| --------- | ------------------------------------------------------------------------ | ----------------------------- |
| predicate | Predicate&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt; | The predicate to test against |


:::

:::group{name=decrStackSize}

Decreases the stack size of the stack in the given slot by the given count.

Returns: A new stack with how much was removed.  
Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
// IInventory.decrStackSize(index as int, count as int) as IItemStack

myIInventory.decrStackSize(2, 2);
```

| Parameter | Type | Description                  | Optional | DefaultValue |
| --------- | ---- | ---------------------------- | -------- | ------------ |
| index     | int  | The slot index to decrement. | false    |              |
| count     | int  | How much should be removed.  | true     | 1            |


:::

:::group{name=getInventorySize}

Gets how many slots this inventory has.

 Example: A hopper will return `5`

Returns: The amount of slots this inventory has.  
Return Type: int

```zenscript
// IInventory.getInventorySize() as int

myIInventory.getInventorySize();
```

:::

:::group{name=getInventoryStackLimit}

Gets the max stack size that is allowed in this inventory.

 This is nearly always 64, but some inventories like the Beacon and Compostor have a limit of 1.

Returns: The max stack size allowed in the inventory.  
Return Type: int

```zenscript
// IInventory.getInventoryStackLimit() as int

myIInventory.getInventoryStackLimit();
```

:::

:::group{name=getStackInSlot}

Gets the IItemStack in the given slot.

Returns: The IItemStack in the slot.  
Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
// IInventory.getStackInSlot(index as int) as IItemStack

myIInventory.getStackInSlot(2);
```

| Parameter | Type | Description                      |
| --------- | ---- | -------------------------------- |
| index     | int  | The index to get the stack from. |


:::

:::group{name=getStacks}

Gets the ItemStacks in this inventory that match the given predicate.

Returns: A list of IItemStacks that match the given predicate.  
Return Type: stdlib.List&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt;

```zenscript
// IInventory.getStacks(predicate as Predicate<IItemStack>) as stdlib.List<IItemStack>

myIInventory.getStacks((stack) => stack.amount == 2;);
```

| Parameter | Type                                                                     | Description                    |
| --------- | ------------------------------------------------------------------------ | ------------------------------ |
| predicate | Predicate&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt; | The predicate to test against. |


:::

:::group{name=hasAny}

Checks if this inventory has any of the given Items.

 NOTE: This does not work for IItemStacks, so all NBT will be ignored.

Returns: True if this inventory has any of the items. False otherwise.  
Return Type: boolean

```zenscript
// IInventory.hasAny(list as stdlib.List<MCItemDefinition>) as boolean

myIInventory.hasAny([<item:minecraft:diamond>]);
```

| Parameter | Type                                                                                  | Description            |
| --------- | ------------------------------------------------------------------------------------- | ---------------------- |
| list      | stdlib.List&lt;[MCItemDefinition](/vanilla/api/item/MCItemDefinition)&gt; | The Items to look for. |


:::

:::group{name=isEmpty}

Checks if this inventory is empty.

Returns: True if this inventory is empty. False otherwise.  
Return Type: boolean

```zenscript
// IInventory.isEmpty() as boolean

myIInventory.isEmpty();
```

:::

:::group{name=isItemValidForSlot}

Checks if the given stack is valid for the given slot index.

Returns: True if the stack is valid. False otherwise.  
Return Type: boolean

```zenscript
// IInventory.isItemValidForSlot(index as int, stack as IItemStack) as boolean

myIInventory.isItemValidForSlot(2, <item:minecraft:dirt>);
```

| Parameter | Type                                        | Description              |
| --------- | ------------------------------------------- | ------------------------ |
| index     | int                                         | The slot index to check. |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | The stack to check.      |


:::

:::group{name=isUsableByPlayer}

Checks if this IInventory can be used by the player.

Returns: True if the player can use this inventory. False otherwise.  
Return Type: boolean

```zenscript
// IInventory.isUsableByPlayer(player as MCPlayerEntity) as boolean

myIInventory.isUsableByPlayer(player);
```

| Parameter | Type                                                 | Description                                         |
| --------- | ---------------------------------------------------- | --------------------------------------------------- |
| player    | [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity) | The player to check if they can use this inventory. |


:::

:::group{name=markDirty}

Used by tile entities to ensure that chunks are up to date when they are saved to disk.

Return Type: void

```zenscript
// IInventory.markDirty() as void

myIInventory.markDirty();
```

:::

:::group{name=openInventory}

Marks the inventory as opened, this is used by chests and barrels to determine if they should have an open texture / model, but other inventories may use it in a different way.

Return Type: void

```zenscript
// IInventory.openInventory(player as MCPlayerEntity) as void

myIInventory.openInventory(player);
```

| Parameter | Type                                                 | Description                           |
| --------- | ---------------------------------------------------- | ------------------------------------- |
| player    | [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity) | The player that opened the inventory. |


:::

:::group{name=removeStackFromSlot}

Removes the IItemStack from the given slot and returns it.

Returns: The removed stack from the slot.  
Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
// IInventory.removeStackFromSlot(index as int) as IItemStack

myIInventory.removeStackFromSlot(2);
```

| Parameter | Type | Description               |
| --------- | ---- | ------------------------- |
| index     | int  | The slot index to remove. |


:::

:::group{name=setInventorySlotContents}

Sets the contents of the given slot to the given IItemStack.

Return Type: void

```zenscript
// IInventory.setInventorySlotContents(index as int, stack as IItemStack) as void

myIInventory.setInventorySlotContents(2, <item:minecraft:diamond>);
```

| Parameter | Type                                        | Description                        |
| --------- | ------------------------------------------- | ---------------------------------- |
| index     | int                                         | The slot index to set.             |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | The IItemStack to put in the slot. |


:::


## Properties

| Nombre              | Type    | Has Getter | Has Setter | Description                                                                                                                                                                            |
| ------------------- | ------- | ---------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| inventorySize       | int     | true       | false      | Gets how many slots this inventory has. <br />  <br />  Example: <br />  A hopper will return `5`                                                                    |
| inventoryStackLimit | int     | true       | false      | Gets the max stack size that is allowed in this inventory. <br />  <br />  This is nearly always 64, but some inventories like the Beacon and Compostor have a limit of 1. |
| isEmpty             | boolean | true       | false      | Checks if this inventory is empty.                                                                                                                                                     |

