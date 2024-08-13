# AdvancementEarnEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.advancement.AdvancementEarnEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.advancement.AdvancementEarnEvent>(event => {
    println("AdvancementEarnEvent ran!");
});
```


## Supertype

AdvancementEarnEvent extends [AdvancementEvent](/neoforge/api/event/advancement/AdvancementEvent). That means all methods available in [AdvancementEvent](/neoforge/api/event/advancement/AdvancementEvent) are also available in AdvancementEarnEvent

