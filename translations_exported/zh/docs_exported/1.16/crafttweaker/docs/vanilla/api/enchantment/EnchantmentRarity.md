# EnchantmentRarity



## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.enchantment.EnchantmentRarity;
```


## Enum Constants

EnchantmentRarity is an enum. It has 4 enum constants. They are accessible using the code below.

```zenscript
EnchantmentRarity.COMMON
EnchantmentRarity.UNCOMMON
EnchantmentRarity.RARE
EnchantmentRarity.VERY_RARE
```
## 使用方式

:::group{name=getWeight}

Gets the weight of this enchantment rarity.

Returns: The weight of the enchantment rarity.  
Return Type: int

```zenscript
// EnchantmentRarity.getWeight() as int

EnchantmentRarity.COMMON.getWeight();
```

:::


## 参数

| 名称     | 类型  | 可获得  | 可设置   | 描述                                          |
| ------ | --- | ---- | ----- | ------------------------------------------- |
| weight | int | true | false | Gets the weight of this enchantment rarity. |

