# SummonedEntityEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.enigmaticlegacy.events.SummonedEntityEvent;
```


## Extending PlayerEvent

SummonedEntityEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in SummonedEntityEvent

## Methods

:::group{name=getSummonedEntity}

Return Type: [Entity](/vanilla/api/entity/Entity)

```zenscript
// SummonedEntityEvent.getSummonedEntity() as Entity

mySummonedEntityEvent.getSummonedEntity();
```

:::


