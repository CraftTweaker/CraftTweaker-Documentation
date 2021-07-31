# EnchantmentRarity



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.enchantment.EnchantmentRarity;
```


## Extending Enum&lt;EnchantmentRarity&gt;

EnchantmentRarity extends Enum&lt;[EnchantmentRarity](/vanilla/api/enchantment/EnchantmentRarity)&gt;. That means all methods available in Enum&lt;[EnchantmentRarity](/vanilla/api/enchantment/EnchantmentRarity)&gt; are also available in EnchantmentRarity

## Static Properties

| Nombre    | Type                                                            | Has Getter | Has Setter | Description             |
| --------- | --------------------------------------------------------------- | ---------- | ---------- | ----------------------- |
| COMMON    | [EnchantmentRarity](/vanilla/api/enchantment/EnchantmentRarity) | true       | false      | No Description Provided |
| RARE      | [EnchantmentRarity](/vanilla/api/enchantment/EnchantmentRarity) | true       | false      | No Description Provided |
| UNCOMMON  | [EnchantmentRarity](/vanilla/api/enchantment/EnchantmentRarity) | true       | false      | No Description Provided |
| VERY_RARE | [EnchantmentRarity](/vanilla/api/enchantment/EnchantmentRarity) | true       | false      | No Description Provided |

## Methods

:::group{name=getWeight}

Gets the weight of this enchantment rarity.

Returns: The weight of the enchantment rarity.  
Return Type: int

```zenscript
// EnchantmentRarity.getWeight() as int

EnchantmentRarity.COMMON.getWeight();
```

:::


## Properties

| Nombre | Type | Has Getter | Has Setter | Description                                 |
| ------ | ---- | ---------- | ---------- | ------------------------------------------- |
| weight | int  | true       | false      | Gets the weight of this enchantment rarity. |

