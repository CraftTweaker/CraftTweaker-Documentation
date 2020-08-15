# Предмет выбора игрока

Событие Пикап Игрока запускается всякий раз, когда игрок взаимодействует с сущностью.

## Класс события

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerPickupItemEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий

События PlayerPickupItem реализуют следующие интерфейсы и также могут вызвать все их методы/getters/setters:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Следующая информация может быть получена от события:

| Геттеры   | Возвращаемый тип                              |
| --------- | --------------------------------------------- |
| `элемент` | [IEntityItem](/Vanilla/Entities/IEntityItem/) |
| `player`  | [IPlayer](/Vanilla/Players/IPlayer/)          |