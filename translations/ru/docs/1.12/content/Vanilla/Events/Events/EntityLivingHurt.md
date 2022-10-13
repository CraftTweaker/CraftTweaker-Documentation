# EntityLivingHurt

The EntityLivingHurt Event is fired whenever an Entity is about to get hurt.  
It can be canceled to stop the entity from being hurt.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityLivingHurtEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
PlayerDeathDrops реализует следующие интерфейсы и способно вызвать все их методы/геттеры/сеттеры:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters

| ZenGetter    | Тип                                             |
| ------------ | ----------------------------------------------- |
| damageSource | [IDamageSource](/Vanilla/Damage/IDamageSource/) |
| amount       | float                                           |

## ZenSetters
| ZenSetter | Тип   |
| --------- | ----- |
| amount    | float |
