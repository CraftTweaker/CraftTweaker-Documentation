# PlayerEatFoodEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.api.events.entity.player.PlayerEatFoodEvent;
```


## Extending PlayerEvent

PlayerEatFoodEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in PlayerEatFoodEvent

## Methods

:::group{name=canAlwaysEat}

Return Type: boolean

```zenscript
// PlayerEatFoodEvent.canAlwaysEat() as boolean

myPlayerEatFoodEvent.canAlwaysEat();
```

:::

:::group{name=getItem}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// PlayerEatFoodEvent.getItem() as IItemStack

myPlayerEatFoodEvent.getItem();
```

:::

:::group{name=getNutrition}

Return Type: int

```zenscript
// PlayerEatFoodEvent.getNutrition() as int

myPlayerEatFoodEvent.getNutrition();
```

:::

:::group{name=getPlayer}

Return Type: [Player](/mods/sixikutils/curios/player/Player)

```zenscript
// PlayerEatFoodEvent.getPlayer() as Player

myPlayerEatFoodEvent.getPlayer();
```

:::

:::group{name=getSaturationModifier}

Return Type: float

```zenscript
// PlayerEatFoodEvent.getSaturationModifier() as float

myPlayerEatFoodEvent.getSaturationModifier();
```

:::

:::group{name=isCancelable}

Return Type: boolean

```zenscript
// PlayerEatFoodEvent.isCancelable() as boolean

myPlayerEatFoodEvent.isCancelable();
```

:::

:::group{name=isFastFood}

Return Type: boolean

```zenscript
// PlayerEatFoodEvent.isFastFood() as boolean

myPlayerEatFoodEvent.isFastFood();
```

:::

:::group{name=isMeat}

Return Type: boolean

```zenscript
// PlayerEatFoodEvent.isMeat() as boolean

myPlayerEatFoodEvent.isMeat();
```

:::


## Properties

|    Name    |                      Type                       | Has Getter | Has Setter |
|------------|-------------------------------------------------|------------|------------|
| item       | [IItemStack](/vanilla/api/item/IItemStack)      | true       | false      |
| nutrition  | int                                             | true       | false      |
| player     | [Player](/mods/sixikutils/curios/player/Player) | true       | false      |
| saturation | float                                           | true       | false      |

