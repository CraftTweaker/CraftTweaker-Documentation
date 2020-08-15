# Самовывоз Игрока

Событие Пикап Игрока запускается после того, как игрок пообщался с предметом, а предмет или количество предмета были подняты. Событие происходит после того, как [Выстрелили предмет Лидера](/Vanilla/Events/Events/PlayerPickupItem/)

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerItemPickupEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
PlayerItemPickup События реализуют следующие интерфейсы и также могут вызвать все методы/getters/setters:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)


## Геттеры
Следующая информация может быть получена от события:

| ZenGetter             | Возвращаемый тип                              |
| --------------------- | --------------------------------------------- |
| `копия стека`         | [IItemStack](/Vanilla/Items/IItemStack/)      |
| `оригинальный объект` | [IEntityItem](/Vanilla/Entities/IEntityItem/) |

## Примечания

`stackCopy` является копией предмета, содержащегося в оригинальном элементе сущности, представление того, что было взято и помещено в инвентарь игрока. `originalEntity` — это предмет с любым оставшимся количеством предмета (если игрок не забрал полную сумму).
