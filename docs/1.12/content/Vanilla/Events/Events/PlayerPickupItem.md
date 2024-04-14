# PlayerPickupItem

The PlayerPickupItem Event is fired whenever a player interacts with an Entity.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerPickupItemEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
PlayerPickupItem Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventHasResult](/Vanilla/Events/Events/IEventHasResult)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable)


## ZenGetters/ZenSetters
The following information can be retrieved from the event:

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `item`          |                 | [IEntityItem](/Vanilla/Entities/IEntityItem/)     | 

## ZenGetters/ZenSetters/ZenMethods from extensions
The following information can be retrieved from the event:
| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `canceled`      | `canceled`      | bool                                              |
| `result`        |                 | string with value of `default`, `deny` or `allow` |
| `player`         |                 | [IPlayer](/Vanilla/Players/IPlayer/)             |

ZenMethods
- `event.cancel();` Method, returns void (nothing). Can cancel the event and stop smth. from happening
- `event.deny()` Method, sets the event's result to `deny`
- `event.allow()` Method, sets the event's result to `allow`
- `event.default()` Method, sets the event's result to `default`

## From extension of extension

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `entityLivingBase`  |             | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/)   |
