# ItemFishedEvent

This event is fired to when a player is about to fish up an item. Cancelling the event will prevent the player from receiving an item, but the rod will still take damage.

## Примечания

Additional damage can be done to the rod by setting `event.additionalDamage`. A list of IItemStacks (which is **not modifiable**) that are going to be fished up is contained within `event.drops`.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.ItemFishedEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
ItemFished Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## Геттеры/сеттеры
Во время события можно извлечь/задать следующую информацию:

| ZenGetter | ZenSetter          | Тип                                        |
| --------- | ------------------ | ------------------------------------------ |
| `damage`  |                    | int                                        |
|           | `additionalDamage` | int                                        |
| `капли`   |                    | [IItemStack](/Vanilla/Items/IItemStack/)[] |
