# PotionBrewEventPost

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.brewing.PotionBrewEventPost;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.brewing.PotionBrewEventPost>(event => {
    println("PotionBrewEventPost ran!");
});
```


## Supertype

PotionBrewEventPost extends [PotionBrewEvent](/neoforge/api/event/brewing/PotionBrewEvent). That means all methods available in [PotionBrewEvent](/neoforge/api/event/brewing/PotionBrewEvent) are also available in PotionBrewEventPost

