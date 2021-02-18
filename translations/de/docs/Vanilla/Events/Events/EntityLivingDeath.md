# EntityLivingDeath

The EntityLivingDeath event is fired whenever an Entity is about to die.  
It can be canceled to let the entity live.

## Event-Klasse

You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityLivingDeathEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Erweiterte Event-Schnittellen

EntityLivingDeathEvent implements the following interfaces and are able to call all of their methods/getters/setters as well:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter

| ZenGetter    | Type                                            |
| ------------ | ----------------------------------------------- |
| damageSource | [IDamageSource](/Vanilla/Damage/IDamageSource/) |