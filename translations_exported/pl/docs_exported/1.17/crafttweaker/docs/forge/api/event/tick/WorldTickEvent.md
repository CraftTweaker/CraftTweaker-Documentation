# WorldTickEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.tick.WorldTickEvent;
```


## Extending TickEvent

WorldTickEvent extends [TickEvent](/forge/api/event/tick/TickEvent). That means all methods available in [TickEvent](/forge/api/event/tick/TickEvent) are also available in WorldTickEvent

## Methods

:::group{name=getWorld}

Return Type: [Level](/vanilla/api/world/Level)

```zenscript
// WorldTickEvent.getWorld() as Level

myWorldTickEvent.getWorld();
```

:::


## Properties

| Name  | Type                              | Has Getter | Has Setter | Description             |
| ----- | --------------------------------- | ---------- | ---------- | ----------------------- |
| world | [Level](/vanilla/api/world/Level) | true       | false      | No Description Provided |

