# EntityTravelToDimension

The EntityTravelToDimension event is fired whenever an entity is about to travel to another dimension. If canceled, the entity is prevented from travel.

## Notes

`event.dimension` contains the dimension the entity is about to travel to.

## Event-Klasse
You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityTravelToDimensionEvent` You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Erweiterte Event-Schnittellen
EntityTravelToDimension Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEntityEvent](/Vanilla/Events/Events/IEntityEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter/ZenSetter
The following information can be retrieved/set during the event:

| ZenGetter   | Rückgabetyp |
| ----------- | ----------- |
| `dimension` | int         |
