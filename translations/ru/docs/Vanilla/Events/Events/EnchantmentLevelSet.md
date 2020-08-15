# EnchantmentLevelSetEvent

The EnchantmentLevelSet Event is fired when the levels for the three potential enchantments are generated in the Enchantment Table.

## Примечания

`event.enchantRow` lists the row (1-3) of the Enchantment Table, while `event.originalLevel` represents the original level of the row. `event.power` is the cumulative value of bookshelves surrounding the Enchantment Table, while `event.item` is the item that is being enchanted.

`event.level` can be arbitrarily modified to a value between 0 & 30.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.EnchantmentLevelSetEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
EnchantmentLevelSet Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [Событие доступно](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetters

| ZenGetter       | ZenSetter | Возвращаемый тип                         |
| --------------- | --------- | ---------------------------------------- |
| `world`         |           | [IWorld](/Vanilla/World/IWorld/)         |
| `enchantRow`    |           | int                                      |
| `power`         |           | int                                      |
| `элемент`       |           | [IItemStack](/Vanilla/Items/IItemStack/) |
| `originalLevel` |           | int                                      |
| `уровень`       | `уровень` | int                                      |
