# EnchantmentType



## 导入类

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

| 参数                  | 类型                                                                                  | 描述                                   |
| ------------------- | ----------------------------------------------------------------------------------- | ------------------------------------ |
| name（名称）            | string                                                                              | The name of the new EnchantmentType. |
| canEnchantPredicate | Predicate&lt;[MCItemDefinition](/vanilla/api/item/MCItemDefinition)&gt; | The can enchant predicate.           |


:::

## 使用方式

:::group{name=canEnchantItem}

Checks if the given Item can be enchanted with this EnchantmentType

Returns: True if the Item can be enchanted. False otherwise.  
Return Type: boolean

```zenscript
EnchantmentType.canEnchantItem(itemIn as MCItemDefinition) as boolean
```

| 参数     | 类型                                                     | 描述                      |
| ------ | ------------------------------------------------------ | ----------------------- |
| itemIn | [MCItemDefinition](/vanilla/api/item/MCItemDefinition) | No Description Provided |


:::


