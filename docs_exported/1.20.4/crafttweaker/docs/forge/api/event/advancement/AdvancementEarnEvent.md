# AdvancementEarnEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.advancement.AdvancementEarnEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.advancement.AdvancementEarnEvent>(event => {
    println("AdvancementEarnEvent ran!");
});
```


## Properties

|    Name     |                              Type                               | Has Getter | Has Setter |
|-------------|-----------------------------------------------------------------|------------|------------|
| advancement | [AdvancementHolder](/vanilla/api/advancement/AdvancementHolder) | true       | false      |

