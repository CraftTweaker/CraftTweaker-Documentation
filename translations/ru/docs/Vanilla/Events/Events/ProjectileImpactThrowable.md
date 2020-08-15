# Влияние снаряда

Это событие запускается всякий раз, когда бросаемый снаряд влияет на сущность, но до нанесения урона и т. д. рассчитывается. Это **отменимый**, и в случае отмены влияние не будет обработано.

## Импорт класса
Может потребоваться [импортировать](/AdvancedFunctions/Import/) класс, чтобы избежать ошибок.  
`импортировать crafttweaker.event.ProjectileImpactThrowableEvent;`

## Расширение IEntityEvent
ProjectileImpactThrowable Events реализуют следующие интерфейсы и также могут назвать все их методы/getters/setters:

- [Событие снаряда](/Vanilla/Events/Events/IProjectileEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters и ZenSetters

Следующая информация может быть получена от события:

| ZenGetter      | ZenSetter | Тип                                                       |
| -------------- | --------- | --------------------------------------------------------- |
| `Огненный шар` |           | [IEntity](/Vanilla/Entities/IEntity/)                     |
| `стрелок`      |           | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) |
