# EntityStruckByLightning

The EntityStruckByLightning event is fired whenever a lightning bolt is about to hit an entity.

## Event-Klasse

You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityStruckByLightningEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Erweiterte Event-Schnittellen

LivingEntityUseItem Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter/ZenSetter

The following information can be retrieved/set during the event:

| ZenGetter   | Rückgabetyp                           |
| ----------- | ------------------------------------- |
| `lightning` | [IEntity](/Vanilla/Entities/IEntity/) |