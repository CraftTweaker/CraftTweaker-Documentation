# EnchantmentProvider

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.enchantment.provider.EnchantmentProvider;
```


## Methods

:::group{name=enchant}

```zenscript
EnchantmentProvider.enchant(stack as ItemStack, enchantments as ItemEnchantmentsMutable, random as RandomSource, difficulty as DifficultyInstance)
```

|  Parameter   |                                      Type                                      |
|--------------|--------------------------------------------------------------------------------|
| stack        | [ItemStack](/vanilla/api/item/ItemStack)                                       |
| enchantments | [ItemEnchantmentsMutable](/vanilla/api/item/component/ItemEnchantmentsMutable) |
| random       | [RandomSource](/vanilla/api/util/math/RandomSource)                            |
| difficulty   | [DifficultyInstance](/vanilla/api/world/DifficultyInstance)                    |


:::


