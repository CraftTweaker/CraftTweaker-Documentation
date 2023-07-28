# ArrowNockEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.api.events.entity.player.ArrowNockEvent;
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

:::group{name=getPlayer}

Return Type: [Player](/mods/sixikutils/curios/player/Player)

```zenscript
// ArrowNockEvent.getPlayer() as Player

myArrowNockEvent.getPlayer();
```

:::

:::group{name=getWorld}

Return Type: [Level](/mods/sixikutils/pmmo/server/world)

```zenscript
// ArrowNockEvent.getWorld() as Level

myArrowNockEvent.getWorld();
```

:::


