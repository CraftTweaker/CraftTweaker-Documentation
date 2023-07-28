# PlayerPotionEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.api.events.entity.player.PlayerPotionEvent;
```


## Extending PlayerEvent

PlayerPotionEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in PlayerPotionEvent

## Methods

:::group{name=getLevel}

Return Type: [Level](/mods/sixikutils/pmmo/server/world)

```zenscript
// PlayerPotionEvent.getLevel() as Level

myPlayerPotionEvent.getLevel();
```

:::

:::group{name=getPlayer}

Return Type: [Player](/mods/sixikutils/curios/player/Player)

```zenscript
// PlayerPotionEvent.getPlayer() as Player

myPlayerPotionEvent.getPlayer();
```

:::

:::group{name=getStack}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// PlayerPotionEvent.getStack() as IItemStack

myPlayerPotionEvent.getStack();
```

:::


## Properties

|  Name  |                      Type                       | Has Getter | Has Setter |
|--------|-------------------------------------------------|------------|------------|
| item   | [IItemStack](/vanilla/api/item/IItemStack)      | true       | false      |
| level  | [Level](/mods/sixikutils/pmmo/server/world)     | true       | false      |
| player | [Player](/mods/sixikutils/curios/player/Player) | true       | false      |

