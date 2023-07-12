# FillBucketEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.entity.player.FillBucketEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.entity.player.FillBucketEvent>(event => {
    println("FillBucketEvent ran!");
});
```


## Supertype

FillBucketEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in FillBucketEvent

## Properties

|     Name     |                    Type                    | Has Getter | Has Setter |
|--------------|--------------------------------------------|------------|------------|
| emptyBucket  | [IItemStack](/vanilla/api/item/IItemStack) | true       | false      |
| filledBucket | [IItemStack](/vanilla/api/item/IItemStack) | true       | true       |
| level        | [Level](/vanilla/api/world/Level)          | true       | false      |
| target       | [HitResult](/vanilla/api/util/HitResult)?  | true       | false      |

