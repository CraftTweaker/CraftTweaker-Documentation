# Rarity

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.property.Rarity;
```


## Enum Constants

Rarity is an enum. It has 4 enum constants. They are accessible using the code below.

```zenscript
Rarity.COMMON
Rarity.UNCOMMON
Rarity.RARE
Rarity.EPIC
```
## 使用方式

:::group{name=color}

Gets the color of this Rarity

Returns: The color of this Rarity.  
Return Type: [ChatFormatting](/vanilla/api/text/ChatFormatting)

```zenscript
// Rarity.color() as ChatFormatting

myRarity.color();
```

:::


## 参数

| 名称    | 类型                                                 | 可获得  | 可设置   | 描述                            |
| ----- | -------------------------------------------------- | ---- | ----- | ----------------------------- |
| color | [ChatFormatting](/vanilla/api/text/ChatFormatting) | true | false | Gets the color of this Rarity |

