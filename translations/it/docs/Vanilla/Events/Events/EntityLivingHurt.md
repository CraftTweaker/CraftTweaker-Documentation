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

## ZenGetters

| ZenGetter    | Type                                            |
| ------------ | ----------------------------------------------- |
| damageSource | [IDamageSource](/Vanilla/Damage/IDamageSource/) |
| amount       | float                                           |