# Эффект снаряда

Это событие запускается, когда огненный шар воздействует на объект, но до повреждения и т. д. рассчитывается. Это **отменимый**, и в случае отмены влияние не будет обработано.

Значения ускорения от огненной части доступны через зонгеттеры.

## Импорт класса
Может потребоваться [импортировать](/AdvancedFunctions/Import/) класс, чтобы избежать ошибок.  
`импорт crafttweaker.event.ProjectileImpactFireballEvent;`

## Расширение IEntityEvent
События ProjectileImpactFireball реализуют следующие интерфейсы и также могут вызвать все их методы/getters/setters:

- [Событие снаряда](/Vanilla/Events/Events/IProjectileEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters и ZenSetters

Следующая информация может быть получена от события:

| ZenGetter       | ZenSetter       | Тип                                                       |
| --------------- | --------------- | --------------------------------------------------------- |
| `Огненный шар`  |                 | [IEntity](/Vanilla/Entities/IEntity/)                     |
| `стрелок`       |                 | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) |
| `ускорениеX`    | `ускорениеX`    | double                                                    |
| `ускорение Y`   | `ускорение Y`   | double                                                    |
| `accelerationZ` | `accelerationZ` | double                                                    |
