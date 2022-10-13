# LivingConversionEvent

LivingConversionEvent is fired when an event involving entity conversion occures, such as when a Villager is struck by lightning turning it into a Witch.

 This event is fired for both phases of the conversion events, both Pre and Post, it is generally advised to use the specific events to target a specific phase instead of this event.

The event is not cancelable.

The event does not have a result.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.conversion.LivingConversionEvent;
```


## Extending LivingEvent

LivingConversionEvent extends [LivingEvent](/forge/api/event/entity/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/LivingEvent) are also available in LivingConversionEvent

