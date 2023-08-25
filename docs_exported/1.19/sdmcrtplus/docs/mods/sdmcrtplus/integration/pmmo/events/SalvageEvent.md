# SalvageEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.pmmo.events.SalvageEvent;
```


## Extending PlayerEvent

SalvageEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in SalvageEvent

## Methods

:::group{name=getBlockPos}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// SalvageEvent.getBlockPos() as BlockPos

mySalvageEvent.getBlockPos();
```

:::

:::group{name=isCancelable}

Return Type: boolean

```zenscript
// SalvageEvent.isCancelable() as boolean

mySalvageEvent.isCancelable();
```

:::


## Properties

| Name |                    Type                     | Has Getter | Has Setter |
|------|---------------------------------------------|------------|------------|
| pos  | [BlockPos](/vanilla/api/util/math/BlockPos) | true       | false      |

