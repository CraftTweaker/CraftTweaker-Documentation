# TabListNameFormat

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.entity.player.TabListNameFormat;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.entity.player.TabListNameFormat>(event => {
    println("TabListNameFormat ran!");
});
```


## Supertype

TabListNameFormat extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in TabListNameFormat

## Properties

|    Name     |                   Type                    | Has Getter | Has Setter |
|-------------|-------------------------------------------|------------|------------|
| displayName | [Component](/vanilla/api/text/Component)? | true       | true       |

