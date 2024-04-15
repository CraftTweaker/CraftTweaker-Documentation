# EntityLivingAttacked

The EntityLivingAttacked Event is fired whenever an entity is being attacked.  
It can be canceled to stop the entity from taking damage.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityLivingAttackedEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
PlayerDeathDrops Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters/ZenSetters
The following information can be retrieved/set during the event:

| ZenGetter       | ZenSetter       | Type       |
|-----------------|-----------------|------------|
| `damageSource`  |                 | [IDamageSource](/Vanilla/Damage/IDamageSource/)     |
| `amount`        |                 | float      |

## ZenGetters/ZenSetters/Zenmethods from extensions
The following information can be retrieved/set during the event:

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `entityLivingBase`  |             | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/)  |
| `canceled`      | `canceled`      | bool                                              |


ZenMethods
- `event.cancel();` Method, returns void (nothing). Can cancel the event and stop something from happening
