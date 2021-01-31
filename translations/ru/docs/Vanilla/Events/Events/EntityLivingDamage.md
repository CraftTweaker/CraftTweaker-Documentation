# EntityLivingDamage

EntityLivingDamage Event is fired just before damage is applied to entity. At this point armor, potion and absorption modifiers have already been applied to damage - this is FINAL value. Also note that appropriate resources (like armor durability and absorption extra hearths) have already been consumed.

If this event is canceled, the Entity is not hurt. Used resources WILL NOT be restored.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityLivingDamageEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
EntityLivingDamageEvent implements the following interfaces and are able to call all of their methods/getters/setters as well:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter/ZenSetter

| ZenGetter    | ZenSetter | Тип                                             |
| ------------ | --------- | ----------------------------------------------- |
| damageSource |           | [IDamageSource](/Vanilla/Damage/IDamageSource/) |
| amount       | amount    | float                                           |
