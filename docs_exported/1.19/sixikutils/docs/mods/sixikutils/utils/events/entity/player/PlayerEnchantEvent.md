# PlayerEnchantEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.api.events.entity.player.PlayerEnchantEvent;
```


## Extending PlayerEvent

PlayerEnchantEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in PlayerEnchantEvent

## Methods

:::group{name=getBlockPos}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// PlayerEnchantEvent.getBlockPos() as BlockPos

myPlayerEnchantEvent.getBlockPos();
```

:::

:::group{name=getEnchantment}

Return Type: [Enchantment](/vanilla/api/item/enchantment/Enchantment)

```zenscript
// PlayerEnchantEvent.getEnchantment() as Enchantment

myPlayerEnchantEvent.getEnchantment();
```

:::

:::group{name=getItem}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// PlayerEnchantEvent.getItem() as IItemStack

myPlayerEnchantEvent.getItem();
```

:::

:::group{name=getPlayer}

Return Type: [Player](/vanilla/api/entity/type/player/Player)

```zenscript
// PlayerEnchantEvent.getPlayer() as Player

myPlayerEnchantEvent.getPlayer();
```

:::

:::group{name=getWorld}

Return Type: [Level](/vanilla/api/world/Level)

```zenscript
// PlayerEnchantEvent.getWorld() as Level

myPlayerEnchantEvent.getWorld();
```

:::


## Properties

|    Name     |                           Type                           | Has Getter | Has Setter |
|-------------|----------------------------------------------------------|------------|------------|
| enchantment | [Enchantment](/vanilla/api/item/enchantment/Enchantment) | true       | false      |
| item        | [IItemStack](/vanilla/api/item/IItemStack)               | true       | false      |
| player      | [Player](/vanilla/api/entity/type/player/Player)         | true       | false      |
| pos         | [BlockPos](/vanilla/api/util/math/BlockPos)              | true       | false      |
| world       | [Level](/vanilla/api/world/Level)                        | true       | false      |

