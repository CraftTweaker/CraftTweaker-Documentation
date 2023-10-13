# EnchantmentType



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.enchantment.EnchantmentType;
```


## Enum Constants

EnchantmentType is an enum. It has 14 enum constants. They are accessible using the code below.

```zenscript
EnchantmentType.ARMOR
EnchantmentType.ARMOR_FEET
EnchantmentType.ARMOR_LEGS
EnchantmentType.ARMOR_CHEST
EnchantmentType.ARMOR_HEAD
EnchantmentType.WEAPON
EnchantmentType.DIGGER
EnchantmentType.FISHING_ROD
EnchantmentType.TRIDENT
EnchantmentType.BREAKABLE
EnchantmentType.BOW
EnchantmentType.WEARABLE
EnchantmentType.CROSSBOW
EnchantmentType.VANISHABLE
```
## Static Methods

:::group{name=create}

Creates a new EnchantmentType with the given name and given can enchantment predicate.

Returns: A new EnchantmentType with the given name and predicate.  
Return Type: [EnchantmentType](/vanilla/api/enchantment/EnchantmentType)

```zenscript
EnchantmentType.create(name as string, canEnchantPredicate as Predicate<MCItemDefinition>) as EnchantmentType
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | The name of the new EnchantmentType. |
| canEnchantPredicate | Predicate&lt;[MCItemDefinition](/vanilla/api/item/MCItemDefinition)&gt; | The can enchant predicate. |


:::

:::group{name=getTypesForItem}

Creates a new List of EnchantmentType that are applicable to an item.

Returns: A new List of EnchantmentType that are applicable to an item.  
Return Type: stdlib.List&lt;[EnchantmentType](/vanilla/api/enchantment/EnchantmentType)&gt;

```zenscript
// EnchantmentType.getTypesForItem(item as MCItemDefinition) as stdlib.List<EnchantmentType>

EnchantmentType.getTypesForItem(<item:minecraft:diamond_sword>);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| item | [MCItemDefinition](/vanilla/api/item/MCItemDefinition) | The item to calculate applicable enchantment types for. |


:::

## Methods

:::group{name=canEnchantItem}

Checks if the given Item can be enchanted with this EnchantmentType

Returns: True if the Item can be enchanted. False otherwise.  
Return Type: boolean

```zenscript
EnchantmentType.canEnchantItem(itemIn as MCItemDefinition) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| itemIn | [MCItemDefinition](/vanilla/api/item/MCItemDefinition) | No Description Provided |


:::

:::group{name=getEnchantments}

Creates a new List of MCEnchantment that define the EnchantmentType as their type.

Returns: A new List of MCEnchantment that define the EnchantmentType as their type.  
Return Type: stdlib.List&lt;[MCEnchantment](/vanilla/api/enchantment/MCEnchantment)&gt;

```zenscript
// EnchantmentType.getEnchantments() as stdlib.List<MCEnchantment>

EnchantmentType.ARMOR.getEnchantments();
```

:::

:::group{name=getItems}

Creates a new List of ItemDefinition that are valid for this EnchantmentType.

Returns: A new List of ItemDefinition that are valid for this EnchantmentType.  
Return Type: stdlib.List&lt;[MCItemDefinition](/vanilla/api/item/MCItemDefinition)&gt;

```zenscript
// EnchantmentType.getItems() as stdlib.List<MCItemDefinition>

EnchantmentType.ARMOR.getItems();
```

:::


