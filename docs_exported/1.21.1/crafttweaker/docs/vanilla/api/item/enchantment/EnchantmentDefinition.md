# EnchantmentDefinition

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.enchantment.EnchantmentDefinition;
```


## Extending Record

EnchantmentDefinition extends Record. That means all methods available in Record are also available in EnchantmentDefinition

## Properties

|      Name      |                                           Type                                            | Has Getter | Has Setter |
|----------------|-------------------------------------------------------------------------------------------|------------|------------|
| anvilCost      | int                                                                                       | true       | false      |
| maxCost        | [EnchantmentCost](/vanilla/api/item/enchantment/EnchantmentCost)                          | true       | false      |
| maxLevel       | int                                                                                       | true       | false      |
| minCost        | [EnchantmentCost](/vanilla/api/item/enchantment/EnchantmentCost)                          | true       | false      |
| primaryItems   | [ItemDefinition](/vanilla/api/item/ItemDefinition)[]                                      | true       | false      |
| slots          | stdlib.List&lt;[EquipmentSlotGroup](/vanilla/api/entity/equipment/EquipmentSlotGroup)&gt; | true       | false      |
| supportedItems | [ItemDefinition](/vanilla/api/item/ItemDefinition)[]                                      | true       | false      |
| weight         | int                                                                                       | true       | false      |

