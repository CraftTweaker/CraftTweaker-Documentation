# EnchantmentsByCost

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.enchantment.provider.type.EnchantmentsByCost;
```


## Extending Record

EnchantmentsByCost extends Record. That means all methods available in Record are also available in EnchantmentsByCost

## Implemented Interfaces
EnchantmentsByCost implements the following interfaces. That means all methods defined in these interfaces are also available in EnchantmentsByCost

- [EnchantmentProvider](/vanilla/api/item/enchantment/provider/EnchantmentProvider)

## Static Methods

:::group{name=of}

Return Type: [EnchantmentsByCost](/vanilla/api/item/enchantment/provider/type/EnchantmentsByCost)

```zenscript
EnchantmentsByCost.of(enchantments as Enchantment[], cost as IntProvider) as EnchantmentsByCost
```

|  Parameter   |                            Type                            |
|--------------|------------------------------------------------------------|
| enchantments | [Enchantment](/vanilla/api/item/enchantment/Enchantment)[] |
| cost         | [IntProvider](/vanilla/api/util/valueprovider/IntProvider) |


:::

## Properties

|     Name     |                            Type                            | Has Getter | Has Setter |
|--------------|------------------------------------------------------------|------------|------------|
| cost         | [IntProvider](/vanilla/api/util/valueprovider/IntProvider) | true       | false      |
| enchantments | [Enchantment](/vanilla/api/item/enchantment/Enchantment)[] | true       | false      |

