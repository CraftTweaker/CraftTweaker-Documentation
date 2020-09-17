# Сущность LivingDeathDrops

Событие EntityLivingDeathDrops запускается при смерти сущности.  
Это может быть отменено, чтобы остановить сущность от удаления ничего.

## Класс события

You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityLivingDeathDropsEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий

PlayerDeathDrops реализует следующие интерфейсы и способно вызвать все их методы/геттеры/сеттеры:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## Геттеры

Следующая информация может быть получена от события:

| Геттер                 | Возвращаемый тип                                              |
| ---------------------- | ------------------------------------------------------------- |
| `капли`                | [`Список<IEntityItem>`](/Vanilla/Entities/IEntityItem/) |
| `источник повреждения` | [IDamageSource](/Vanilla/Damage/IDamageSource/)               |
| `Недавно`              | bool                                                          |
| `уровень добычи`       | int                                                           |

## Изменение выпадения предмета

Вы можете либо добавить в дроплист, либо полностью заменить его новым:

```zenscript
event.drops = //ссылка на список IEntityItem .

//event.addItem(IItemStack item);
event.addItem(<minecraft:iron_ingot>);

//event.addItem(IEntityItem iten);
event.addItem(<minecraft:iron_ingot>.createEntityItem(event.player.world, event.player.position));
```