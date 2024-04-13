# IPotionBrewEvent

This event is extended by all events involving the brewing stand, although not the player-based function for extracting items from the brewing stand.

## Importing the class
It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.event.IPotionBrewEvent;`


## ZenGetters/ZenSetters
The following information can be retrieved/set during the event:

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `length`        |                 | int                                               |


## ZenMethodes
- `event.getItem(int)` returns [IItemStack](/Vanilla/Items/IItemStack/) on the given index in the crafting station. Will return an empty [IItemStack](/Vanilla/Items/IItemStack/) if the specified index is greater than `length`.
- `event.setItem(int, IItemStack)` Replaces or sets [IItemStack](/Vanilla/Items/IItemStack/) on given index. If th index is greater than the length of the item array, nothing will happen.
