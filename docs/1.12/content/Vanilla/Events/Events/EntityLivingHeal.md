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
The following information can be retrieved/set during the event:
| ZenGetter        | ZenSetter     | Type                                                               |
|------------------|---------------|--------------------------------------------------------------------|
| `amount`         | `amount`      | float                                                              |

## ZenGetters/ZenSetters from extensions
The following information can be retrieved/set during the event:

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `entityLivingBase`  |             | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/)  |
| `canceled`      | `canceled`      | bool                                              |


ZenMethodes
- `event.cancel();` Method, returns void (nothing). Can cancel the event and stop smth. from happening
