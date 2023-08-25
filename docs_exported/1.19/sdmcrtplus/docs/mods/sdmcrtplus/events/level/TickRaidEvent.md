# TickRaidEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.events.level.TickRaidEvent;
```


## Extending Event

TickRaidEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in TickRaidEvent

## Methods

:::group{name=getRaid}

Return Type: [Raid](/mods/sdmcrtplus/world/Raid)

```zenscript
// TickRaidEvent.getRaid() as Raid

myTickRaidEvent.getRaid();
```

:::

:::group{name=getRaidMap}

Return Type: [Raid](/mods/sdmcrtplus/world/Raid)[int?]

```zenscript
// TickRaidEvent.getRaidMap() as Raid[int?]

myTickRaidEvent.getRaidMap();
```

:::

:::group{name=getWorld}

Return Type: [Level](/vanilla/api/world/Level)

```zenscript
// TickRaidEvent.getWorld() as Level

myTickRaidEvent.getWorld();
```

:::

:::group{name=isCancelable}

Return Type: boolean

```zenscript
// TickRaidEvent.isCancelable() as boolean

myTickRaidEvent.isCancelable();
```

:::


## Properties

|  Name   |                   Type                    | Has Getter | Has Setter |
|---------|-------------------------------------------|------------|------------|
| raid    | [Raid](/mods/sdmcrtplus/world/Raid)       | true       | false      |
| raidMap | [Raid](/mods/sdmcrtplus/world/Raid)[int?] | true       | false      |
| world   | [Level](/vanilla/api/world/Level)         | true       | false      |

