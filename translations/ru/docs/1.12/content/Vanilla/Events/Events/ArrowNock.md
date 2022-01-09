# ArrowNock

This event is fired when a player begins using a bow.
## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.ArrowNockEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
AnimalTame Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventHasResult](/Vanilla/Events/Events/IEventHasResult/)


## Геттеры/сеттеры
The following information can be retrieved/set during the event:

| ZenGetter | ZenSetter | Тип                                      |
| --------- | --------- | ---------------------------------------- |
| `bow`     |           | [IItemStack](/Vanilla/Items/IItemStack/) |
| `hand`    |           | [String]                                 |
| `player`  |           | [IPlayer](/Vanilla/Players/IPlayer/)     |
