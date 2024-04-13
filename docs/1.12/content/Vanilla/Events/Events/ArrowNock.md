# ArrowNock

This event is fired when a player begins using a bow.
## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.ArrowNockEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
AnimalTame Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventHasResult](/Vanilla/Events/Events/IEventHasResult/)


## ZenGetters/ZenSetters
The following information can be retrieved/set during the event:

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `bow`           |                 | [IItemStack](/Vanilla/Items/IItemStack/)          |
| `hand`          |                 | String                                            |
| `player`        |                 | [IPlayer](/Vanilla/Players/IPlayer/)              |


## ZenGetters/ZenSetters/ZenMethodes from extensions
The following information can be retrieved/set during the event:

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `result`        |                 | string with value of `default`, `deny` or `allow` |


ZenMethodes
- `event.deny()` Method, sets the event's result to `deny`
- `event.allow()` Method, sets the event's result to `allow`
- `event.default()` Method, sets the event's result to `default`
