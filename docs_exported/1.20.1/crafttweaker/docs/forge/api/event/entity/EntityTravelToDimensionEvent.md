# EntityTravelToDimensionEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.entity.EntityTravelToDimensionEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.entity.EntityTravelToDimensionEvent>(event => {
    println("EntityTravelToDimensionEvent ran!");
});
```


## Supertype

EntityTravelToDimensionEvent extends [EntityEvent](/forge/api/event/entity/EntityEvent). That means all methods available in [EntityEvent](/forge/api/event/entity/EntityEvent) are also available in EntityTravelToDimensionEvent

## Properties

|   Name    |                            Type                            | Has Getter | Has Setter |
|-----------|------------------------------------------------------------|------------|------------|
| dimension | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | true       | false      |

