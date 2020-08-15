# Зелье питомца игрока

Событие "Зелье пивоварения" запускается, когда игрок вытягивает зелье из стола пива.

## Класс события

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerBrewedPotionEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий

PlayerBrewedPotion Events реализуют следующие интерфейсы и также могут вызвать все их методы/getters/setters:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## Геттеры

Следующая информация может быть получена от события:

| Геттеры  | Возвращаемый тип                         |
| -------- | ---------------------------------------- |
| `player` | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `зелье`  | [IItemStack](/Vanilla/Items/IItemStack/) |
| `рука`   | string                                   |