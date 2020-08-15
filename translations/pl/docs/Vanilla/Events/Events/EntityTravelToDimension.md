# EntityTravelToDimension

The EntityTravelToDimension event is fired whenever an entity is about to travel to another dimension. If canceled, the entity is prevented from travel.

## Uwagi

`event.dimension` contains the dimension the entity is about to travel to.

## Klasa wydarzenia
You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityTravelToDimensionEvent` You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Rozszerzenia interfejsu zdarzenia
EntityTravelToDimension Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters
Następujące informacje mogą być pobierane/ustawione podczas wydarzenia:

| ZenGetter | Typ zwrotu |
| --------- | ---------- |
| `wymiary` | odcień     |
