# PlayerNameFormatEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.entity.player.PlayerNameFormatEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.entity.player.PlayerNameFormatEvent>(event => {
    println("PlayerNameFormatEvent ran!");
});
```


## Supertype

PlayerNameFormatEvent extends [PlayerEvent](/neoforge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/neoforge/api/event/entity/player/PlayerEvent) are also available in PlayerNameFormatEvent

## Properties

|    Name     |                   Type                   | Has Getter | Has Setter |
|-------------|------------------------------------------|------------|------------|
| displayName | [Component](/vanilla/api/text/Component) | true       | true       |
| username    | [Component](/vanilla/api/text/Component) | true       | false      |

