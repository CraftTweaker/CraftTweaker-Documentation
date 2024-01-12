# EntityTravelToDimensionEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.entity.EntityTravelToDimensionEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.entity.EntityTravelToDimensionEvent>(event => {
    println("EntityTravelToDimensionEvent ran!");
});
```


## Supertype

EntityTravelToDimensionEvent extends [EntityEvent](/neoforge/api/event/entity/EntityEvent). That means all methods available in [EntityEvent](/neoforge/api/event/entity/EntityEvent) are also available in EntityTravelToDimensionEvent

## Implemented Interfaces
EntityTravelToDimensionEvent implements the following interfaces. That means all methods defined in these interfaces are also available in EntityTravelToDimensionEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

## Properties

|   Name    |                            Type                            | Has Getter | Has Setter |
|-----------|------------------------------------------------------------|------------|------------|
| dimension | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | true       | false      |

