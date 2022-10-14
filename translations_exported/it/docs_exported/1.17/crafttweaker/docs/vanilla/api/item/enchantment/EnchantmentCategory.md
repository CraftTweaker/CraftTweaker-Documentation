# EnchantmentCategory

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.enchantment.EnchantmentCategory;
```


## Enum Constants

EnchantmentCategory is an enum. It has 14 enum constants. They are accessible using the code below.

```zenscript
EnchantmentCategory.ARMOR
EnchantmentCategory.ARMOR_FEET
EnchantmentCategory.ARMOR_LEGS
EnchantmentCategory.ARMOR_CHEST
EnchantmentCategory.ARMOR_HEAD
EnchantmentCategory.WEAPON
EnchantmentCategory.DIGGER
EnchantmentCategory.FISHING_ROD
EnchantmentCategory.TRIDENT
EnchantmentCategory.BREAKABLE
EnchantmentCategory.BOW
EnchantmentCategory.WEARABLE
EnchantmentCategory.CROSSBOW
EnchantmentCategory.VANISHABLE
```
## Metodi

:::group{name=canEnchant}

Return Type: boolean

```zenscript
EnchantmentCategory.canEnchant(item as ItemDefinition) as boolean
```

| Parametro | Tipo                                               | Descrizione             |
| --------- | -------------------------------------------------- | ----------------------- |
| item      | [ItemDefinition](/vanilla/api/item/ItemDefinition) | No Description Provided |


:::


