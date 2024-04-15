# PotionBrewPre

This event is fired directly before vanilla brewing takes place, and, if `canceled`, will prevent brewing from taking place. If cancelled but the items are modified, then the [PotionBrewPostEvent](/Vanilla/Events/Events/PotionBrewPost/) will be automatically fired. This allows for a simulacrum of "modded" brewing.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PotionBrewPreEvent`
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
PotionBrewPre Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPotionBrewEvent](/Vanilla/Events/Events/IPotionBrewEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters/ZenSetters/ZenMethods from extension
The following information can be retrieved/set during the event:

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `length`        |                 | int                                               |
| `canceled`      | `canceled`      | bool                                              |


ZenMethods
- `event.cancel();` Method, returns void (nothing). Can cancel the event and stop something from happening
- `event.getItem(int)` returns [IItemStack](/Vanilla/Items/IItemStack/) on the given index in the crafting station. Will return an empty [IItemStack](/Vanilla/Items/IItemStack/) if the specified index is greater than `length`.
- `event.setItem(int, IItemStack)` Replaces or sets [IItemStack](/Vanilla/Items/IItemStack/) on given index. If the index is greater than the length of the item array, nothing will happen.

## Note
This event is fired right as the calculations for the recipe are taking place, when the "timer" reaches "maximum progress".
