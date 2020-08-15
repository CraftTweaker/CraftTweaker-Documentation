# Взаимодействие с Minecartact

MinecartInteractEvent стреляется, когда игрок начинает взаимодействовать с minecart. Событие **отменено**, и это предотвратит открытие контейнера.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.MinecartInteractEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
MinecartInteract Events реализуют следующие интерфейсы и могут вызвать все их методы/getters/setters:

- [IMinecartEvent](/Vanilla/Events/Events/IMinecartEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## Геттеры

| ZenGetter | Тип                                      |
| --------- | ---------------------------------------- |
| `player`  | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `элемент` | [IItemStack](/Vanilla/Items/IItemStack/) |
| `рука`    | String                                   |
