# Создатель Игрока

Событие PlayerSetSpawn запускается всякий раз, когда местоположение спавна игрока меняется.  
Оно может быть отменено, чтобы предотвратить дальнейшую обработку.

## Класс события

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerSetSpawnEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий

События PlayerSetSpawn реализуют следующие интерфейсы и также могут вызвать все их методы/getters/setters:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters

Следующая информация может быть получена от события:

| Геттеры           | Возвращаемый тип                       |
| ----------------- | -------------------------------------- |
| `player`          | [IPlayer](/Vanilla/Players/IPlayer/)   |
| `насильно`        | bool                                   |
| `Новая Появление` | [IBlockPos](/Vanilla/World/IBlockPos/) |