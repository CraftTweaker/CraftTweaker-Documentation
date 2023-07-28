# EatFoodEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.pmmo.api.events.projecrtmmo.EatFoodEvent;
```


## Extending PlayerEvent

EatFoodEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in EatFoodEvent

## Methods

:::group{name=getFood}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// EatFoodEvent.getFood() as IItemStack

myEatFoodEvent.getFood();
```

:::

:::group{name=getPlayer}

Return Type: [Player](/mods/sixikutils/curios/player/Player)

```zenscript
// EatFoodEvent.getPlayer() as Player

myEatFoodEvent.getPlayer();
```

:::


## Properties

|  Name  |                      Type                       | Has Getter | Has Setter |
|--------|-------------------------------------------------|------------|------------|
| food   | [IItemStack](/vanilla/api/item/IItemStack)      | true       | false      |
| player | [Player](/mods/sixikutils/curios/player/Player) | true       | false      |

