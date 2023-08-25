# StopRaidEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.events.level.StopRaidEvent;
```


## Extending Event

StopRaidEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in StopRaidEvent

## Methods

:::group{name=getRaid}

Return Type: [Raid](/mods/sdmcrtplus/world/Raid)

```zenscript
// StopRaidEvent.getRaid() as Raid

myStopRaidEvent.getRaid();
```

:::

:::group{name=getRaidMap}

Return Type: [Raid](/mods/sdmcrtplus/world/Raid)[int?]

```zenscript
// StopRaidEvent.getRaidMap() as Raid[int?]

myStopRaidEvent.getRaidMap();
```

:::

:::group{name=getWorld}

Return Type: [Level](/vanilla/api/world/Level)

```zenscript
// StopRaidEvent.getWorld() as Level

myStopRaidEvent.getWorld();
```

:::

:::group{name=isCancelable}

Return Type: boolean

```zenscript
// StopRaidEvent.isCancelable() as boolean

myStopRaidEvent.isCancelable();
```

:::


## Properties

|  Name   |                   Type                    | Has Getter | Has Setter |
|---------|-------------------------------------------|------------|------------|
| raid    | [Raid](/mods/sdmcrtplus/world/Raid)       | true       | false      |
| raidMap | [Raid](/mods/sdmcrtplus/world/Raid)[int?] | true       | false      |
| world   | [Level](/vanilla/api/world/Level)         | true       | false      |

