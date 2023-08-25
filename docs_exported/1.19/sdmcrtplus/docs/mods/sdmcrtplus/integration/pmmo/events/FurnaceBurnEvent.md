# FurnaceBurnEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.pmmo.events.FurnaceBurnEvent;
```


## Extending Event

FurnaceBurnEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in FurnaceBurnEvent

## Methods

:::group{name=getInput}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
// FurnaceBurnEvent.getInput() as ItemStack

myFurnaceBurnEvent.getInput();
```

:::

:::group{name=getLevel}

Return Type: [Level](/vanilla/api/world/Level)

```zenscript
// FurnaceBurnEvent.getLevel() as Level

myFurnaceBurnEvent.getLevel();
```

:::

:::group{name=getPos}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// FurnaceBurnEvent.getPos() as BlockPos

myFurnaceBurnEvent.getPos();
```

:::

:::group{name=isCancelable}

Return Type: boolean

```zenscript
// FurnaceBurnEvent.isCancelable() as boolean

myFurnaceBurnEvent.isCancelable();
```

:::


## Properties

| Name  |                    Type                     | Has Getter | Has Setter |
|-------|---------------------------------------------|------------|------------|
| input | [ItemStack](/vanilla/api/item/ItemStack)    | true       | false      |
| level | [Level](/vanilla/api/world/Level)           | true       | false      |
| pos   | [BlockPos](/vanilla/api/util/math/BlockPos) | true       | false      |

