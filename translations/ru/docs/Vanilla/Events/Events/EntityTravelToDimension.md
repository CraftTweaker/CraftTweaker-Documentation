# EntityTravelToDimension

The EntityTravelToDimension event is fired whenever an entity is about to travel to another dimension. If canceled, the entity is prevented from travel.

## Notes

`event.dimension` contains the dimension the entity is about to travel to.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityTravelToDimensionEvent` You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
EntityTravelToDimension Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEntityEvent](/Vanilla/Events/Events/IEntityEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## Геттеры/сеттеры
The following information can be retrieved/set during the event:

| ZenGetter   | Возвращаемый тип |
| ----------- | ---------------- |
| `dimension` | int              |
