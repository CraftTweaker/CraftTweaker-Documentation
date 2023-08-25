# ArrowNockEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.events.entity.player.ArrowNockEvent;
```


## Extending PlayerEvent

ArrowNockEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in ArrowNockEvent

## Methods

:::group{name=getBow}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// ArrowNockEvent.getBow() as IItemStack

myArrowNockEvent.getBow();
```

:::

:::group{name=getHand}

Return Type: [InteractionHand](/vanilla/api/util/InteractionHand)

```zenscript
// ArrowNockEvent.getHand() as InteractionHand

myArrowNockEvent.getHand();
```

:::

:::group{name=getLevel}

Return Type: [Level](/vanilla/api/world/Level)

```zenscript
// ArrowNockEvent.getLevel() as Level

myArrowNockEvent.getLevel();
```

:::


## Properties

| Name  |                         Type                         | Has Getter | Has Setter |
|-------|------------------------------------------------------|------------|------------|
| bow   | [IItemStack](/vanilla/api/item/IItemStack)           | true       | false      |
| hand  | [InteractionHand](/vanilla/api/util/InteractionHand) | true       | false      |
| level | [Level](/vanilla/api/world/Level)                    | true       | false      |

