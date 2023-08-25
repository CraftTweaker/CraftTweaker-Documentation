# SlotModifiersUpdatedEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.curios.events.SlotModifiersUpdatedEvent;
```


## Extending LivingEvent

SlotModifiersUpdatedEvent extends [LivingEvent](/forge/api/event/entity/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/LivingEvent) are also available in SlotModifiersUpdatedEvent

## Methods

:::group{name=getTypes}

Return Type: Set&lt;string&gt;

```zenscript
// SlotModifiersUpdatedEvent.getTypes() as Set<string>

mySlotModifiersUpdatedEvent.getTypes();
```

:::


## Properties

| Name  |       Type        | Has Getter | Has Setter |
|-------|-------------------|------------|------------|
| types | Set&lt;string&gt; | true       | false      |

