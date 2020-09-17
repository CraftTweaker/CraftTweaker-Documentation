# EntityLivingDeath

Событие EntityLivingDeath запускается всякий раз, когда сущность погибает.  
Это можно отменить, чтобы позволить сущности жить.

## Класс события

You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityLivingDeathEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий

PlayerDeathDrops реализует следующие интерфейсы и способно вызвать все их методы/геттеры/сеттеры:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters

| Геттеры              | Тип                                             |
| -------------------- | ----------------------------------------------- |
| источник повреждения | [IDamageSource](/Vanilla/Damage/IDamageSource/) |