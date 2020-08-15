# Восстановление Игрока

Событие Восстановление PlayerAnvilRepair запускается всякий раз, когда игрок создает что-нибудь в ярости.  
Вы можете изменить вероятность повреждения зла.

## Класс события

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerAnvilRepairEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий

PlayerAnvilRepair События реализуют следующие интерфейсы и также могут вызвать все их методы/getters/setters:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Следующая информация может быть получена от события:

| Геттеры              | ZenSetter      | Возвращаемый тип                         |
| -------------------- | -------------- | ---------------------------------------- |
| `player`             |                | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `itemInput`          |                | [IItemStack](/Vanilla/Items/IItemStack/) |
| `элемент Ингредиент` |                | [IItemStack](/Vanilla/Items/IItemStack/) |
| `itenResult`         |                | [IItemStack](/Vanilla/Items/IItemStack/) |
| `Шанс разрыва`       | `Шанс разрыва` | float                                    |