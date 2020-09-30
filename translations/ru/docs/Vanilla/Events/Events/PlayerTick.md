# PlayerTick

The PlayerTick Event is fired each tick for each player.

## Класс события

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerTickEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий

PlayerTick Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Следующая информация может быть получена от события:

| ZenGetter | Возвращаемый тип                     |
| --------- | ------------------------------------ |
| `player`  | [IPlayer](/Vanilla/Players/IPlayer/) |
| `phase`   | string                               |