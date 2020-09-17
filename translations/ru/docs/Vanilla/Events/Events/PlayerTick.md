# PlayerTick

Событие PlayerTick запускается каждый тик для каждого игрока.

## Класс события

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerTickEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий

PlayerTick Events реализует следующие интерфейсы и могут также вызвать все их методы/getters/setters:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Следующая информация может быть получена от события:

| Геттеры  | Возвращаемый тип                     |
| -------- | ------------------------------------ |
| `player` | [IPlayer](/Vanilla/Players/IPlayer/) |
| `фаза`   | string                               |