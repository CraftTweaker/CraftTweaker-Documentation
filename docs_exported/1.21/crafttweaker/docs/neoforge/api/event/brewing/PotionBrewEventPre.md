# PotionBrewEventPre

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.brewing.PotionBrewEventPre;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.brewing.PotionBrewEventPre>(event => {
    println("PotionBrewEventPre ran!");
});
```


## Supertype

PotionBrewEventPre extends [PotionBrewEvent](/neoforge/api/event/brewing/PotionBrewEvent). That means all methods available in [PotionBrewEvent](/neoforge/api/event/brewing/PotionBrewEvent) are also available in PotionBrewEventPre

## Implemented Interfaces
PotionBrewEventPre implements the following interfaces. That means all methods defined in these interfaces are also available in PotionBrewEventPre

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

