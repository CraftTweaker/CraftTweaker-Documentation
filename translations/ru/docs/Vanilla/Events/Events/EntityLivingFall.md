# EntityLivingFall

The EntityLivingFall Event is fired whenever an entity is set to be falling.  
It can be canceled to preven the entity from falling.

## Класс события

You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityLivingFallEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий

PlayerDeathDrops реализует следующие интерфейсы и способно вызвать все их методы/геттеры/сеттеры:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter/ZenSetter

| ZenGetter        | ZenSetter        | Тип   |
| ---------------- | ---------------- | ----- |
| disance          | disance          | float |
| damageMultiplier | damageMultiplier | float |