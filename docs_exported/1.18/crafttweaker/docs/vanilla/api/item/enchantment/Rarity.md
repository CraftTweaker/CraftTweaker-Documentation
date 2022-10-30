# Rarity

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.enchantment.Rarity;
```


## Enum Constants

Rarity is an enum. It has 4 enum constants. They are accessible using the code below.

```zenscript
<constant:minecraft:enchantment/rarity:common>
<constant:minecraft:enchantment/rarity:uncommon>
<constant:minecraft:enchantment/rarity:rare>
<constant:minecraft:enchantment/rarity:very_rare>
```
## Methods

:::group{name=getWeight}

Gets the weight of this Rarity

Returns: The weight of this Rarity.  
Return Type: int

```zenscript
// Rarity.getWeight() as int

myRarity.getWeight();
```

:::


## Properties

|  Name  | Type | Has Getter | Has Setter |          Description           |
|--------|------|------------|------------|--------------------------------|
| weight | int  | true       | false      | Gets the weight of this Rarity |

