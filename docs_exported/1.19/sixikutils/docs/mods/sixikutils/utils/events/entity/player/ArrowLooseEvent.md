# ArrowLooseEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.api.events.entity.player.ArrowLooseEvent;
```


## Extending PlayerEvent

ArrowLooseEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in ArrowLooseEvent

## Methods

:::group{name=getBow}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// ArrowLooseEvent.getBow() as IItemStack

myArrowLooseEvent.getBow();
```

:::

:::group{name=getCharge}

Return Type: int

```zenscript
// ArrowLooseEvent.getCharge() as int

myArrowLooseEvent.getCharge();
```

:::

:::group{name=getPlayer}

Return Type: [Player](/mods/sixikutils/curios/player/Player)

```zenscript
// ArrowLooseEvent.getPlayer() as Player

myArrowLooseEvent.getPlayer();
```

:::

:::group{name=getWorld}

Return Type: [Level](/mods/sixikutils/pmmo/server/world)

```zenscript
// ArrowLooseEvent.getWorld() as Level

myArrowLooseEvent.getWorld();
```

:::


