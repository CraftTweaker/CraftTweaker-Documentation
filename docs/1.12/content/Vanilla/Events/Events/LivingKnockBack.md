# LivingKnockBack 

This event is fired whenever an entity is knocked back. The event is **cancelable** and doing so will prevent the entity from being knocked back. Alternately, the strength of the knockback in addition to the X and Z ratios can be adjusted.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.LivingKnockBackEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
LivingKnockBack Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)


## ZenGetters/ZenSetters
The following information can be retrieved/set during the event:

| ZenGetter          | ZenSetter       | Type                                              |
|--------------------|-----------------|---------------------------------------------------|
| `attacker`         | `attacker`      | [IEntity](/Vanilla/Entities/IEntity/)             |
| `originalAttacker` |                 | [IEntity](/Vanilla/Entities/IEntity/)             |
| `strength`         | `strength`      | float                                             |
| `originalStrength` |                 | float                                             |
| `ratioX`           | `ratioX`        | double                                            |
| `ratioZ`           | `ratioZ`        | double                                            |
| `originalRatioX`   |                 | double                                            |
| `originalRatioZ`   |                 | double                                            |

## Notes

When the event arrives, it's possible that the `attacker`, `strength`, or the various `ratio`s have already been modified. You can find these values in the `original*` variables.

## ZenGetters/ZenSetters/ZenMethods from extensions
The following information can be retrieved/set during the event:

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `entityLivingBase`  |             | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/)  |
| `canceled`      | `canceled`      | bool                                              |


ZenMethods
- `event.cancel();` Method, returns void (nothing). Can cancel the event and stop something from happening
