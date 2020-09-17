# PlayerLoggedOut

Событие PlayerLoggedOut запускается, когда игрок выходит из игры.

## Класс события

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerLoggedOutEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий

PlayerLoggedIn События реализуют следующие интерфейсы и также могут вызвать все их методы/getters/setters:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Следующая информация может быть получена от события:

| Геттеры  | Возвращаемый тип                     |
| -------- | ------------------------------------ |
| `player` | [IPlayer](/Vanilla/Players/IPlayer/) |