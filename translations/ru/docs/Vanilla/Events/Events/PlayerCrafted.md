# Создан игроком

Создаваемое событие запускается каждый раз, когда игрок что-то создает.

## Класс события

Вам нужно оформить событие в заголовке функции как этот класс:  
`crafttweaker.event. layerCraftedEvent`  
, Вы можете, конечно, импортировать класс и [затем импортировать](/AdvancedFunctions/Import/).

## Наследование от интерфейсов событий

PlayerCrafted Events реализуют следующие интерфейсы и могут также вызвать все их методы/getters/setters:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Следующая информация может быть получена от события:

| Геттеры     | Возвращаемый тип                                                     |
| ----------- | -------------------------------------------------------------------- |
| `player`    | [IPlayer](/Vanilla/Players/IPlayer/)                                 |
| `вывод`     | [IItemStack](/Vanilla/Items/IItemStack/)                             |
| `инвентарь` | [Инвентарь ICrafting](/Vanilla/Recipes/Crafting/ICraftingInventory/) |