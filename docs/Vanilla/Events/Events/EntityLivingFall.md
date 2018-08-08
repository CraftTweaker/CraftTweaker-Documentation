# EntityLivingFall

The EntityLivingFall Event is fired whenever an entity is set to be falling.  
It can be canceled to preven the entity from falling.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityLivingFallEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
PlayerDeathDrops Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter/ZenSetter

| ZenGetter        | ZenSetter        | Type  |
|------------------|------------------|-------|
| disance          | disance          | float |
| damageMultiplier | damageMultiplier | float |