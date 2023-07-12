# PlayerChangedDimensionEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.entity.player.PlayerChangedDimensionEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.entity.player.PlayerChangedDimensionEvent>(event => {
    println("PlayerChangedDimensionEvent ran!");
});
```


## Supertype

PlayerChangedDimensionEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in PlayerChangedDimensionEvent

## Properties

| Name |                            Type                            | Has Getter | Has Setter |
|------|------------------------------------------------------------|------------|------------|
| from | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | true       | false      |
| to   | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | true       | false      |

