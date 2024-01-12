# PlayerHarvestCheckEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.entity.player.PlayerHarvestCheckEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.entity.player.PlayerHarvestCheckEvent>(event => {
    println("PlayerHarvestCheckEvent ran!");
});
```


## Supertype

PlayerHarvestCheckEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in PlayerHarvestCheckEvent

## Properties

|    Name     |                    Type                     | Has Getter | Has Setter |
|-------------|---------------------------------------------|------------|------------|
| canHarvest  | boolean                                     | true       | true       |
| targetBlock | [BlockState](/vanilla/api/block/BlockState) | true       | false      |

