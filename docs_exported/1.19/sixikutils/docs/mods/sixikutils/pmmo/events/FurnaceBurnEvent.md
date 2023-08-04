# FurnaceBurnEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.pmmo.api.events.projectmmo.FurnaceBurnEvent;
```


## Extending Event

FurnaceBurnEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in FurnaceBurnEvent

## Methods

:::group{name=getInput}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// FurnaceBurnEvent.getInput() as IItemStack

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


## Properties

| Name  |                    Type                    | Has Getter | Has Setter |
|-------|--------------------------------------------|------------|------------|
| input | [IItemStack](/vanilla/api/item/IItemStack) | true       | false      |
| level | [Level](/vanilla/api/world/Level)          | true       | false      |

