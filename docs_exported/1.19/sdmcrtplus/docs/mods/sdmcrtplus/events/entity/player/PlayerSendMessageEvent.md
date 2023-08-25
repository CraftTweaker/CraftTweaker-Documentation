# PlayerSendMessageEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.events.entity.player.PlayerSendMessageEvent;
```


## Extending PlayerEvent

PlayerSendMessageEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in PlayerSendMessageEvent

## Methods

:::group{name=getMessage}

Return Type: string

```zenscript
// PlayerSendMessageEvent.getMessage() as string

myPlayerSendMessageEvent.getMessage();
```

:::


## Properties

|  Name   |  Type  | Has Getter | Has Setter |
|---------|--------|------------|------------|
| message | string | true       | false      |

