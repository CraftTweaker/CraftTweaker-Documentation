# LivingEntityXpDropEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.events.entity.living.LivingEntityXpDropEvent;
```


## Extending LivingEvent

LivingEntityXpDropEvent extends [LivingEvent](/forge/api/event/entity/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/LivingEvent) are also available in LivingEntityXpDropEvent

## Methods

:::group{name=getXp}

Return Type: int

```zenscript
// LivingEntityXpDropEvent.getXp() as int

myLivingEntityXpDropEvent.getXp();
```

:::


## Properties

| Name | Type | Has Getter | Has Setter |
|------|------|------------|------------|
| xp   | int  | true       | false      |

