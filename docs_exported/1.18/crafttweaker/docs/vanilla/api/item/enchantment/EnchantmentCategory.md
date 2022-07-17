# EnchantmentCategory

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.enchantment.EnchantmentCategory;
```


## Enum Constants

EnchantmentCategory is an enum. It has 14 enum constants. They are accessible using the code below.

```zenscript
<constant:minecraft:enchantment/category:armor>
<constant:minecraft:enchantment/category:armor_feet>
<constant:minecraft:enchantment/category:armor_legs>
<constant:minecraft:enchantment/category:armor_chest>
<constant:minecraft:enchantment/category:armor_head>
<constant:minecraft:enchantment/category:weapon>
<constant:minecraft:enchantment/category:digger>
<constant:minecraft:enchantment/category:fishing_rod>
<constant:minecraft:enchantment/category:trident>
<constant:minecraft:enchantment/category:breakable>
<constant:minecraft:enchantment/category:bow>
<constant:minecraft:enchantment/category:wearable>
<constant:minecraft:enchantment/category:crossbow>
<constant:minecraft:enchantment/category:vanishable>
```
## Methods

:::group{name=canEnchant}

Return Type: boolean

```zenscript
EnchantmentCategory.canEnchant(item as ItemDefinition) as boolean
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| item      | [ItemDefinition](/vanilla/api/item/ItemDefinition) |


:::


