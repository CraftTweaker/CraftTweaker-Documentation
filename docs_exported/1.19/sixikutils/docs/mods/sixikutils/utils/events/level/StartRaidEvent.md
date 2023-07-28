# StartRaidEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.crafttweakerutils.api.events.world.StartRaidEvent;
```


## Extending Event

StartRaidEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in StartRaidEvent

## Methods

:::group{name=getBlockpos}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// StartRaidEvent.getBlockpos() as BlockPos

myStartRaidEvent.getBlockpos();
```

:::

:::group{name=getPlayer}

Return Type: [Player](/mods/sixikutils/curios/player/Player)

```zenscript
// StartRaidEvent.getPlayer() as Player

myStartRaidEvent.getPlayer();
```

:::

:::group{name=getRaid}

Return Type: [Raid](/mods/sixikutils/utils/world/Raid)

```zenscript
// StartRaidEvent.getRaid() as Raid

myStartRaidEvent.getRaid();
```

:::

:::group{name=getRaidMap}

Return Type: [Raid](/mods/sixikutils/utils/world/Raid)[int?]

```zenscript
// StartRaidEvent.getRaidMap() as Raid[int?]

myStartRaidEvent.getRaidMap();
```

:::

:::group{name=getWorld}

Return Type: [Level](/mods/sixikutils/pmmo/server/world)

```zenscript
// StartRaidEvent.getWorld() as Level

myStartRaidEvent.getWorld();
```

:::

:::group{name=isCancelable}

Return Type: boolean

```zenscript
// StartRaidEvent.isCancelable() as boolean

myStartRaidEvent.isCancelable();
```

:::


## Properties

|  Name   |                      Type                       | Has Getter | Has Setter |
|---------|-------------------------------------------------|------------|------------|
| player  | [Player](/mods/sixikutils/curios/player/Player) | true       | false      |
| pos     | [BlockPos](/vanilla/api/util/math/BlockPos)     | true       | false      |
| raid    | [Raid](/mods/sixikutils/utils/world/Raid)       | true       | false      |
| raidMap | [Raid](/mods/sixikutils/utils/world/Raid)[int?] | true       | false      |
| world   | [Level](/mods/sixikutils/pmmo/server/world)     | true       | false      |

