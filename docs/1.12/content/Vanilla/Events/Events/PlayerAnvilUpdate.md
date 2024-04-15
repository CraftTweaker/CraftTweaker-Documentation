# PlayerAnvilUpdate

The PlayerAnvilUpdate Event is fired when a player places items in both the left and right slots of a anvil.
 * If the event is canceled, vanilla behavior will not run, and the output will be set to null.
 * If the event is not canceled, but the output is not null, it will set the output and not run vanilla behavior.
 * if the output is null, and the event is not canceled, vanilla behavior will execute.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerAnvilUpdateEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
PlayerAnvilUpdate Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters & ZenSetters
The following information can be retrieved from the event:

| ZenGetter            | ZenSetter            |  type                                    | Description            |
|----------------------|----------------------|------------------------------------------|------------------------|
| `leftItem`           |                      | [IItemStack](/Vanilla/Items/IItemStack/) | The left side of the input. |
| `rightItem`          |                      | [IItemStack](/Vanilla/Items/IItemStack/) | The right side of the input. |
| `outputItem`         | `outputItem`         | [IItemStack](/Vanilla/Items/IItemStack/) | Set this to set the output stack. |
| `itemName`           |                      | string                                   | The name to set the item, if the user specified one. |
| `xpCost`             | `xpCost`             | int                                      | The base cost, set this to change it if output != null. |
| `materialCost`       | `materialCost`       | int                                      | The number of items from the right slot to be consumed during the repair. Leave as 0 to consume the entire stack. |



## ZenGetters/ZenSetters/ZenMethods from extensions
The following information can be retrieved/set during the event:

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `canceled`      | `canceled`      | bool                                              |


ZenMethods
- `event.cancel();` Method, returns void (nothing). Can cancel the event and stop something from happening

