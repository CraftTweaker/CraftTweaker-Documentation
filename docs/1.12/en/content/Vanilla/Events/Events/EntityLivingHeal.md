# EntityLivingHeal

EntityLivingHeal Event is fired when an Entity is set to be healed. 

If this event is canceled, the Entity is not healed.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityLivingHealEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
EntityLivingHealEvent implements the following interfaces and are able to call all of their methods/getters/setters as well:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter/ZenSetter

| ZenGetter        | ZenSetter     | Type                                                               |
|------------------|---------------|--------------------------------------------------------------------|
| amount           | amount        | float                                                              |
