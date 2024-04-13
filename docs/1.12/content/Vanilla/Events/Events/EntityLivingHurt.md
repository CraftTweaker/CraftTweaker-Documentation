# EntityLivingHurt

The EntityLivingHurt Event is fired whenever an Entity is about to get hurt.  
It can be canceled to stop the entity from being hurt.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityLivingHurtEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
PlayerDeathDrops Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter/ZenSetter

| ZenGetter        | ZenSetter     | Type                                                               |
|------------------|---------------|--------------------------------------------------------------------|
| `amount`         | `amount`      | float                                                              |

## ZenGetters/ZenSetters/ZenMethods from extensions
The following information can be retrieved/set during the event:

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `entityLivingBase`  |             | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/)  |
| `canceled`      | `canceled`      | bool                                              |


ZenMethods
- `event.cancel();` Method, returns void (nothing). Can cancel the event and stop smth. from happening
