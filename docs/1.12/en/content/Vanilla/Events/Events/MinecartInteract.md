# MinecartInteract

MinecartInteractEvent is fired whenever a player begins to interact with a minecart. The event is **cancelable**, and doing so will prevent the container from being opened.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.MinecartInteractEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
MinecartInteract Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IMinecartEvent](/Vanilla/Events/Events/IMinecartEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters 

| ZenGetter    | Type                                           |
|--------------|------------------------------------------------|
| `player`     | [IPlayer](/Vanilla/Players/IPlayer/)           |
| `item`       | [IItemStack](/Vanilla/Items/IItemStack/)       |
| `hand`       | String                                         |
