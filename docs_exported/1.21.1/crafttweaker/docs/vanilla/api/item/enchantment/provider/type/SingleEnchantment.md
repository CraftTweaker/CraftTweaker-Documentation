# SingleEnchantment

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.enchantment.provider.type.SingleEnchantment;
```


## Extending Record

SingleEnchantment extends Record. That means all methods available in Record are also available in SingleEnchantment

## Implemented Interfaces
SingleEnchantment implements the following interfaces. That means all methods defined in these interfaces are also available in SingleEnchantment

- [EnchantmentProvider](/vanilla/api/item/enchantment/provider/EnchantmentProvider)

## Static Methods

:::group{name=of}

Return Type: [SingleEnchantment](/vanilla/api/item/enchantment/provider/type/SingleEnchantment)

```zenscript
SingleEnchantment.of(enchantment as Enchantment, level as IntProvider) as SingleEnchantment
```

|  Parameter  |                            Type                            |
|-------------|------------------------------------------------------------|
| enchantment | [Enchantment](/vanilla/api/item/enchantment/Enchantment)   |
| level       | [IntProvider](/vanilla/api/util/valueprovider/IntProvider) |


:::

## Properties

|    Name     |                            Type                            | Has Getter | Has Setter |
|-------------|------------------------------------------------------------|------------|------------|
| enchantment | [Enchantment](/vanilla/api/item/enchantment/Enchantment)   | true       | false      |
| level       | [IntProvider](/vanilla/api/util/valueprovider/IntProvider) | true       | false      |

