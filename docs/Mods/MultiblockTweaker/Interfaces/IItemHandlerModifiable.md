# IItemHandlerModifiable

## Importing the Package

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
import mods.forge.items.IItemHandlerModifiable;
```
## Information
Used for interacting with inventories.

## ZenMethods

### Instance Methods
#### IItemHandlerModifiable#setStackInSlot(int, IItemStack)
-> void

Set the item stack in a slot.

 * **Parameters:**
   * `slot` — The slot to set.
   * `itemStack` — The stack to set it to.

#### IItemHandlerModifiable#getSlots()
-> int

 * **Returns:** How many slots this has.

#### IItemHandlerModifiable#getStackInSlot(int)
-> IItemStack

Get the item stack in a slot.

 * **Parameters:** `slot` — The slot to get.
 * **Returns:** The item stack in it.

#### IItemHandlerModifiable#insertItem(int, IItemStack, boolean)
-> IItemStack

Try to insert an item stack in a specific slot.

 * **Parameters:**
   * `slot` — The slot to insert into.
   * `itemStack` — The item stack to insert.
   * `simulate` — Whether the insertion should be only simulated, or actually performed.
 * **Returns:** The remaining item stack.

#### IItemHandlerModifiable#extractItem(int, int, boolean)
-> IItemStack

Try to extract from an item stack in a specific slot.

 * **Parameters:**
   * `slot` — The slot to extract from.
   * `amount` — How much to extract.
   * `simulate` — Whether the extraction should be only simulated, or actually performed.
 * **Returns:** The item stack that was extracted.

#### IItemHandlerModifiable#getSlotLimit(int)
-> int

 * **Parameters:** `slot` — The slot to check.
 * **Returns:** How many items can fit into the slot at most.

#### IItemHandlerModifiable#isItemValid(int, IItemStack)
-> boolean

Check whether an item stack could potentially be inserted into a slot.

 * **Parameters:**
   * `slot` — The slot to check.
   * `stack` — The stack to check.
 * **Returns:** Whether the slot is valid for the stack.
