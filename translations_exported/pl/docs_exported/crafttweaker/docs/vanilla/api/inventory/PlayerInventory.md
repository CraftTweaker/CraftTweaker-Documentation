# PlayerInventory

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.inventory.PlayerInventory;
```


## Implemented Interfaces
PlayerInventory implements the following interfaces. That means all methods defined in these interfaces are also available in PlayerInventory

- [IInventory](/vanilla/api/inventory/IInventory)

## Methods

:::group{name=add}

Adds the stack to the given slot in the player's inventory.

Returns: True if the stack was inserted. False otherwise.  
Return Type: boolean

```zenscript
PlayerInventory.add(slot as int, stack as IItemStack) as boolean
```

| Parameter | Type                                        | Description                |
| --------- | ------------------------------------------- | -------------------------- |
| slot      | int                                         | The slot to put the stack. |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | The stack to add.          |


:::

:::group{name=addIItemStackToInventory}

Adds the stack to the first empty slot in the player's inventory.

Returns: True if the stack was added. False otherwise.  
Return Type: boolean

```zenscript
// PlayerInventory.addIItemStackToInventory(stack as IItemStack) as boolean

myPlayerInventory.addIItemStackToInventory(<item:minecraft:diamond>);
```

| Parameter | Type                                        | Description       |
| --------- | ------------------------------------------- | ----------------- |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | The stack to add. |


:::

:::group{name=canStoreIItemStack}

Checks if a stack can be stored in the player's inventory. It first tries to place it in the selected slot in the player's hotbar, then the offhand slot, then any available/empty slot in the player's inventory.

Returns: The slot that the stack can be stored in, or `-1` if it can't be stored.  
Return Type: int

```zenscript
// PlayerInventory.canStoreIItemStack(stack as IItemStack) as int

myPlayerInventory.canStoreIItemStack(<item:minecraft:diamond>);
```

| Parameter | Type                                        | Description         |
| --------- | ------------------------------------------- | ------------------- |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | The stack to store. |


:::

:::group{name=deleteStack}

Removes the first instance of the given stack from the inventory.

Return Type: void

```zenscript
// PlayerInventory.deleteStack(stack as IItemStack) as void

myPlayerInventory.deleteStack(<item:minecraft:diamond>);
```

| Parameter | Type                                        | Description          |
| --------- | ------------------------------------------- | -------------------- |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | The stack to remove. |


:::

:::group{name=dropAllItems}

Drop all items in the inventory..

Return Type: void

```zenscript
// PlayerInventory.dropAllItems() as void

myPlayerInventory.dropAllItems();
```

:::

:::group{name=getCurrentItem}

Gets the currently held item by the player.

Returns: The currently held stack by the player.  
Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
// PlayerInventory.getCurrentItem() as IItemStack

myPlayerInventory.getCurrentItem();
```

:::

:::group{name=getFirstEmptyStack}

Gets the first slot in the inventory that is empty.

 If no slot is found, it returns `-1`.

Returns: The found slot or `-1` if no slot is found.  
Return Type: int

```zenscript
// PlayerInventory.getFirstEmptyStack() as int

myPlayerInventory.getFirstEmptyStack();
```

:::

:::group{name=getIItemStack}

Gets the IItemStack that is being held by the mouse in a Gui/Container.

Returns: The held IItemStack  
Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
// PlayerInventory.getIItemStack() as IItemStack

myPlayerInventory.getIItemStack();
```

:::

:::group{name=hasIItemStack}

Checks if any of the ItemStacks in the inventory match the given ingredient.

Returns: True if any of the stacks match. False otherwise.  
Return Type: boolean

```zenscript
PlayerInventory.hasIItemStack(ingredient as IIngredient) as boolean
```

| Parameter  | Type                                          | Description                       |
| ---------- | --------------------------------------------- | --------------------------------- |
| ingredient | [IIngredient](/vanilla/api/items/IIngredient) | The ingredient to check against.. |


:::

:::group{name=remove}

Removes all stacks that match the ingredient.

Returns: True if anything was removed. False otherwise.  
Return Type: boolean

```zenscript
// PlayerInventory.remove(ingredient as IIngredient) as boolean

myPlayerInventory.remove(<item:minecraft:diamond>);
```

| Parameter  | Type                                          | Description                      |
| ---------- | --------------------------------------------- | -------------------------------- |
| ingredient | [IIngredient](/vanilla/api/items/IIngredient) | The ingredient to match against. |


:::

:::group{name=setIItemStack}

Sets the IItemStack that is being held by the mouse in a Gui/Container.

Return Type: void

```zenscript
// PlayerInventory.setIItemStack(stack as IItemStack) as void

myPlayerInventory.setIItemStack(<item:minecraft:dirt>);
```

| Parameter | Type                                        | Description        |
| --------- | ------------------------------------------- | ------------------ |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | The stack to hold. |


:::


## Properties

| Name             | Type                                        | Has Getter | Has Setter | Description                                                                                                           |
| ---------------- | ------------------------------------------- | ---------- | ---------- | --------------------------------------------------------------------------------------------------------------------- |
| currentItem      | [IItemStack](/vanilla/api/items/IItemStack) | true       | false      | Gets the currently held item by the player.                                                                           |
| firstEmptyStack  | int                                         | true       | false      | Gets the first slot in the inventory that is empty. <br />  <br />  If no slot is found, it returns `-1`. |
| stos przedmiotów | [IItemStack](/vanilla/api/items/IItemStack) | true       | true       | Gets the IItemStack that is being held by the mouse in a Gui/Container.                                               |

