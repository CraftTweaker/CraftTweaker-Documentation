# ПлеерСмертельная Смерть

Событие PlayerDeathDrops запускается, когда предметы игрока попадут на землю из-за смерти игрока.

## Класс события

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerDeathDropsEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий

PlayerDeathDrops реализует следующие интерфейсы и способно вызвать все их методы/геттеры/сеттеры:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## Геттеры

Следующая информация может быть получена от события:

| Геттер                 | Возвращаемый тип                                              |
| ---------------------- | ------------------------------------------------------------- |
| `player`               | [IPlayer](/Vanilla/Players/IPlayer/)                          |
| `элементы`             | [`Список<IEntityItem>`](/Vanilla/Entities/IEntityItem/) |
| `источник повреждения` | [IDamageSource](/Vanilla/Damage/IDamageSource/)               |

## Изменение выпадения предмета

Вы можете либо добавить в дроплист, либо полностью заменить его новым:

```zenscript
event.items = //ссылка на список IEntityItem .

//event.addItem(IItemStack item);
event.addItem(<minecraft:iron_ingot>);

//event.addItem(IEntityItem iten);
event.addItem(<minecraft:iron_ingot>.createEntityItem(event.player.world, event.player.position));
```