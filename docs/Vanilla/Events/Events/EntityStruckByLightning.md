# EntityStruckByLightning

The EntityStruckByLightning event is fired whenever a lightning bolt is about to hit an entity.  

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityStruckByLightningEvent`  
You can, of course, also [import](/AdvancedFunctions/Import) the class before and use that name then.

## Event interface extensions
LivingEntityUseItem Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [ILivingEvent](ILivingEvent)
- [IEventCancelable](IEventCancelable)


## ZenGetters/ZenSetters
The following information can be retrieved/set during the event:

| ZenGetter       | Return Type                          |
|-----------------|--------------------------------------|
| `lightning`     | [IEntity](/Vanilla/Entities/IEntity) |
