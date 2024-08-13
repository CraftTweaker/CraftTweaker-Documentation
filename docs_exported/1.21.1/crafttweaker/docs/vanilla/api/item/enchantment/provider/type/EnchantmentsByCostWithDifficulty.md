# EnchantmentsByCostWithDifficulty

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.enchantment.provider.type.EnchantmentsByCostWithDifficulty;
```


## Extending Record

EnchantmentsByCostWithDifficulty extends Record. That means all methods available in Record are also available in EnchantmentsByCostWithDifficulty

## Implemented Interfaces
EnchantmentsByCostWithDifficulty implements the following interfaces. That means all methods defined in these interfaces are also available in EnchantmentsByCostWithDifficulty

- [EnchantmentProvider](/vanilla/api/item/enchantment/provider/EnchantmentProvider)

## Static Methods

:::group{name=of}

Return Type: [EnchantmentsByCostWithDifficulty](/vanilla/api/item/enchantment/provider/type/EnchantmentsByCostWithDifficulty)

```zenscript
EnchantmentsByCostWithDifficulty.of(enchantments as Enchantment[], minCost as int, maxCostSpan as int) as EnchantmentsByCostWithDifficulty
```

|  Parameter   |                            Type                            |
|--------------|------------------------------------------------------------|
| enchantments | [Enchantment](/vanilla/api/item/enchantment/Enchantment)[] |
| minCost      | int                                                        |
| maxCostSpan  | int                                                        |


:::

## Properties

|     Name     |                            Type                            | Has Getter | Has Setter |
|--------------|------------------------------------------------------------|------------|------------|
| enchantments | [Enchantment](/vanilla/api/item/enchantment/Enchantment)[] | true       | false      |
| maxCostSpan  | int                                                        | true       | false      |
| minCost      | int                                                        | true       | false      |

