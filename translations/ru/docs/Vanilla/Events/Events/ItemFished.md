# Событие Рыба-Предмета

Это событие запускается, когда игрок собирается выловить предмет. Отмена события не позволит игроку получить предметы, но шпилька все еще получит урон.

## Примечания

Дополнительный урон может быть нанесен стерженью, установив `event.Дополнительный урон`. Список IItemStacks (которые **не изменяются**), которые будут выгружены, содержится в `event.drops`.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.ItemFishedEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
ItemFished Events реализуют следующие интерфейсы и также могут вызвать все их методы/getters/setters:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## Геттеры/сеттеры
Во время события можно извлечь/задать следующую информацию:

| ZenGetter | ZenSetter             | Тип                                        |
| --------- | --------------------- | ------------------------------------------ |
| `damage`  |                       | int                                        |
|           | `дополнительный урон` | int                                        |
| `капли`   |                       | [IItemStack](/Vanilla/Items/IItemStack/)[] |
