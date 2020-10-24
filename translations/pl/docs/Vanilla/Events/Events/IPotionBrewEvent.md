# IPotionBrewEvent

This event is extended by all events involving the brewing stand, although not the player-based function for extracting items from the brewing stand.

## Importing the class
It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.event.IPotionBrewEvent;`

## What can be done with them?

| ZenGetter | ZenSetter | type |
| --------- | --------- | ---- |
| `length`  |           | int  |

## Methods

- [IItemStack](/Vanilla/Items/IItemStack/) `getItem()`

Returns the IItemStack contained in the list of items at the specified array. Will return an empty IItemStack if the specified index is greater than `length`.

- `setItem(int,` [`IItemStack`](/Vanilla/Items/IItemStack/) `)`

Replaces the itemstack at the specified index with the specified item. If th index is greater than the length of the item array, nothing will happen.
