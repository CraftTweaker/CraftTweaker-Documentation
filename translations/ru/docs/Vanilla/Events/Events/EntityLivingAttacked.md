# EntityLivingAttacked

Событие EntityLivingAttacked вызывается, когда сущность атакуется.  
Оно позволяет отменить получение урона сущностью.

## Класс события

Вам потребуется привести тип события в заголовке функции к этому классу  
`crafttweaker.event.EntityLivingAttacked`  
И, конечно, вы можете [импортировать](/AdvancedFunctions/Import/) класс перед использованием.

## Наследование от интерфейсов событий

PlayerDeathDrops реализует следующие интерфейсы и способно вызвать все их методы/геттеры/сеттеры:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## Геттеры

| Геттер       | Тип                                             |
| ------------ | ----------------------------------------------- |
| damageSource | [IDamageSource](/Vanilla/Damage/IDamageSource/) |
| amount       | float                                           |