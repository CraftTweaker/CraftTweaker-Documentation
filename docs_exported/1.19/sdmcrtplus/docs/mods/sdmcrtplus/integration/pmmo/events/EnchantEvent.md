# EnchantEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.pmmo.events.EnchantEvent;
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

:::group{name=getEnchantmentLevel}

Return Type: int

```zenscript
// EnchantEvent.getEnchantmentLevel() as int

myEnchantEvent.getEnchantmentLevel();
```

:::

:::group{name=getItem}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
// EnchantEvent.getItem() as ItemStack

myEnchantEvent.getItem();
```

:::

:::group{name=isCancelable}

Return Type: boolean

```zenscript
// EnchantEvent.isCancelable() as boolean

myEnchantEvent.isCancelable();
```

:::


## Properties

|       Name       |                           Type                           | Has Getter | Has Setter |
|------------------|----------------------------------------------------------|------------|------------|
| enchantment      | [Enchantment](/vanilla/api/item/enchantment/Enchantment) | true       | false      |
| enchantmentLevel | int                                                      | true       | false      |
| item             | [ItemStack](/vanilla/api/item/ItemStack)                 | true       | false      |

