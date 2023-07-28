# EnchantEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.pmmo.api.events.projecrtmmo.EnchantEvent;
```


## Extending PlayerEvent

EnchantEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in EnchantEvent

## Methods

:::group{name=getEnchantment}

Return Type: [Enchantment](/vanilla/api/item/enchantment/Enchantment)

```zenscript
// EnchantEvent.getEnchantment() as Enchantment

myEnchantEvent.getEnchantment();
```

:::

:::group{name=getItem}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// EnchantEvent.getItem() as IItemStack

myEnchantEvent.getItem();
```

:::

:::group{name=getPlayer}

Return Type: [Player](/mods/sixikutils/curios/player/Player)

```zenscript
// EnchantEvent.getPlayer() as Player

myEnchantEvent.getPlayer();
```

:::


## Properties

|    Name     |                           Type                           | Has Getter | Has Setter |
|-------------|----------------------------------------------------------|------------|------------|
| enchantment | [Enchantment](/vanilla/api/item/enchantment/Enchantment) | true       | false      |
| item        | [IItemStack](/vanilla/api/item/IItemStack)               | true       | false      |
| player      | [Player](/mods/sixikutils/curios/player/Player)          | true       | false      |

