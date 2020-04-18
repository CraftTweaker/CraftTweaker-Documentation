# PlayerRespawn

The PlayerRespawn Event is fired whenever a player respawns.

## Event Class

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerRespawnEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий

PlayerRespawn Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## Геттеры

Следующая информация может быть получена от события:

| Геттер           | Возвращаемый тип                                          |
| ---------------- | --------------------------------------------------------- |
| `player`         | [IPlayer](/Vanilla/Players/IPlayer/)                      |
| `isEndConquered` | bool (states if the respawn is because of the end portal) |