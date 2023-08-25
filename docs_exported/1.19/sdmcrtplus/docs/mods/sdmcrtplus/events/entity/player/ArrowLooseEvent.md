# ArrowLooseEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.events.entity.player.ArrowLooseEvent;
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

:::group{name=getLevel}

Return Type: [Level](/vanilla/api/world/Level)

```zenscript
// ArrowLooseEvent.getLevel() as Level

myArrowLooseEvent.getLevel();
```

:::

:::group{name=getPlayer}

Return Type: [Player](/vanilla/api/entity/type/player/Player)

```zenscript
// ArrowLooseEvent.getPlayer() as Player

myArrowLooseEvent.getPlayer();
```

:::


## Properties

|  Name  |                       Type                       | Has Getter | Has Setter |
|--------|--------------------------------------------------|------------|------------|
| bow    | [IItemStack](/vanilla/api/item/IItemStack)       | true       | false      |
| charge | int                                              | true       | false      |
| level  | [Level](/vanilla/api/world/Level)                | true       | false      |
| player | [Player](/vanilla/api/entity/type/player/Player) | true       | false      |

