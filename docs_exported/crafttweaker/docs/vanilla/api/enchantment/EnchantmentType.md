# EnchantmentType



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.enchantment.EnchantmentType;
```


## Extending Enum&lt;EnchantmentType&gt;

EnchantmentType extends Enum&lt;[EnchantmentType](/vanilla/api/enchantment/EnchantmentType)&gt;. That means all methods available in Enum&lt;[EnchantmentType](/vanilla/api/enchantment/EnchantmentType)&gt; are also available in EnchantmentType

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

## Static Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| ARMOR | [EnchantmentType](/vanilla/api/enchantment/EnchantmentType) | true | false | No Description Provided |
| ARMOR_CHEST | [EnchantmentType](/vanilla/api/enchantment/EnchantmentType) | true | false | No Description Provided |
| ARMOR_FEET | [EnchantmentType](/vanilla/api/enchantment/EnchantmentType) | true | false | No Description Provided |
| ARMOR_HEAD | [EnchantmentType](/vanilla/api/enchantment/EnchantmentType) | true | false | No Description Provided |
| ARMOR_LEGS | [EnchantmentType](/vanilla/api/enchantment/EnchantmentType) | true | false | No Description Provided |
| BOW | [EnchantmentType](/vanilla/api/enchantment/EnchantmentType) | true | false | No Description Provided |
| BREAKABLE | [EnchantmentType](/vanilla/api/enchantment/EnchantmentType) | true | false | No Description Provided |
| CROSSBOW | [EnchantmentType](/vanilla/api/enchantment/EnchantmentType) | true | false | No Description Provided |
| DIGGER | [EnchantmentType](/vanilla/api/enchantment/EnchantmentType) | true | false | No Description Provided |
| FISHING_ROD | [EnchantmentType](/vanilla/api/enchantment/EnchantmentType) | true | false | No Description Provided |
| TRIDENT | [EnchantmentType](/vanilla/api/enchantment/EnchantmentType) | true | false | No Description Provided |
| VANISHABLE | [EnchantmentType](/vanilla/api/enchantment/EnchantmentType) | true | false | No Description Provided |
| WEAPON | [EnchantmentType](/vanilla/api/enchantment/EnchantmentType) | true | false | No Description Provided |
| WEARABLE | [EnchantmentType](/vanilla/api/enchantment/EnchantmentType) | true | false | No Description Provided |

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


