# EntityLivingAttacked

The EntityLivingAttacked Event is fired whenever an entity is being attacked.  
It can be canceled to stop the entity from taking damage.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityLivingAttackedEvent`  
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