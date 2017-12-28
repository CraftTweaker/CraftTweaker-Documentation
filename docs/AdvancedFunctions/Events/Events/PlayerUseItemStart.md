# PlayerUseItemStart

The PlayerUseItemStart Event is fired whenever a player starts using an item.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerUseItemStartEvent`  
You can, of course, also [import](/AdvancedFunctions/Import) the class before and use that name then.


## ZenGetters
The following information can be retrieved from the event:

| ZenGetter   | Return Type                               |
|-------------|-------------------------------------------|
| `canceled`  | boolean                                   |
| `player`    | [IPlayer](/Vanilla/Game/IPlayer)          |
| `item`      | [IItemStack](/Vanilla/Item/IItemStack)    |

## ZenMethods

- `event.cancel()` sets the event as cancelled