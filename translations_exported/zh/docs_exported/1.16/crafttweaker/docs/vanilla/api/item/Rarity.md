# Rarity

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.Rarity;
```


## Enum Constants

Rarity is an enum. It has 4 enum constants. They are accessible using the code below.

```zenscript
Rarity.COMMON
Rarity.UNCOMMON
Rarity.RARE
Rarity.EPIC
```
## Static Methods

:::group{name=create}

Creates a new Rarity with the given name and given color.

Returns: A new Rarity with the given name and color  
Return Type: [Rarity](/vanilla/api/item/Rarity)

```zenscript
// Rarity.create(name as string, formatting as TextFormatting) as Rarity

Rarity.create("insanely_epic", <formatting:obfucated>);
```

| 参数       | 类型                                                      | 描述                          |
| -------- | ------------------------------------------------------- | --------------------------- |
| name（名称） | string                                                  | The name of the new Rarity. |
| 格式化      | [TextFormatting](/vanilla/api/util/text/TextFormatting) | The color of the rarity.    |


:::

## 使用方式

:::group{name=color}

Gets the color of this Rarity

Returns: The color of this Rarity.  
Return Type: [TextFormatting](/vanilla/api/util/text/TextFormatting)

```zenscript
// Rarity.color() as TextFormatting

myRarity.color();
```

:::


## 参数

| 名称    | 类型                                                      | 可获得  | 可设置   | 描述                            |
| ----- | ------------------------------------------------------- | ---- | ----- | ----------------------------- |
| color | [TextFormatting](/vanilla/api/util/text/TextFormatting) | true | false | Gets the color of this Rarity |

