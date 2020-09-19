# Открытый контейнер игрока

Событие OpenContainer запускается, когда игрок открывает контейнер.

## Класс события

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerOpenContainerEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий

События PlayerOpenContainer реализуют следующие интерфейсы и также могут вызвать все их методы/getters/setter:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Следующая информация может быть получена от события:

| Геттеры     | Возвращаемый тип                             |
| ----------- | -------------------------------------------- |
| `player`    | [IPlayer](/Vanilla/Players/IPlayer/)         |
| `контейнер` | [IContainer](/Vanilla/Container/IContainer/) |