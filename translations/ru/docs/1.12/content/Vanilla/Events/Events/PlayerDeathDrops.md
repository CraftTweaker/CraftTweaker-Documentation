# PlayerDeathDrops

The PlayerDeathDrops Event is fired whenever a player's items fall to the ground due to the player's death.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerDeathDropsEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
PlayerDeathDrops реализует следующие интерфейсы и способно вызвать все их методы/геттеры/сеттеры:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetters
Следующая информация может быть получена от события:

| ZenGetter      | Возвращаемый тип                                            |
| -------------- | ----------------------------------------------------------- |
| `player`       | [IPlayer](/Vanilla/Players/IPlayer/)                        |
| `items`        | [`List<IEntityItem>`](/Vanilla/Entities/IEntityItem/) |
| `damageSource` | [IDamageSource](/Vanilla/Damage/IDamageSource/)             |

## Modifying the item drops

You can either add to the droplist or completely substitute it with a new one:
```zenscript
event.items = //reference to IEntityItem list.

//event.addItem(IItemStack item);
event.addItem(<minecraft:iron_ingot>);

//event.addItem(IEntityItem iten);
event.addItem(<minecraft:iron_ingot>.createEntityItem(event.player.world, event.player.position));
```