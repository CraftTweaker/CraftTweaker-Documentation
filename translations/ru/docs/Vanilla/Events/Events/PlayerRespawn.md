# Возрождение игрока

Событие Восстановления Игрока запускается при возрождении игрока.

## Класс события

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerRespawnEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий

PlayerRespawn События реализуют следующие интерфейсы и также могут вызвать все их методы/getters/setters:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## Геттеры

Следующая информация может быть получена от события:

| Геттер           | Возвращаемый тип                                      |
| ---------------- | ----------------------------------------------------- |
| `player`         | [IPlayer](/Vanilla/Players/IPlayer/)                  |
| `isEndConquered` | bool (государства, если респаун из конечного портала) |