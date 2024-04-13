# EntityLivingFall

The EntityLivingFall Event is fired whenever an entity is set to be falling.  
It can be canceled to preven the entity from falling.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityLivingFallEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
EntityLivingFallEvent implements the following interfaces and are able to call all of their methods/getters/setters as well:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter/ZenSetter

| ZenGetter        | ZenSetter        | Type  |
|------------------|------------------|-------|
| `distance`          | `distance`    | float |
| `damageMultiplier` | `damageMultiplier` | float |


## ZenGetters/ZenSetters from extensions
The following information can be retrieved/set during the event:

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `entityLivingBase`  |             | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/)  |
| `canceled`      | `canceled`      | bool                                              |


ZenMethodes
- `event.cancel();` Method, returns void (nothing). Can cancel the event and stop smth. from happening
