# IIngredientWithAmount

Consists of an ingredient and an amount.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.ingredient.IIngredientWithAmount;
```


## 已实现的接口
IIngredientWithAmount implements the following interfaces. That means all methods defined in these interfaces are also available in IIngredientWithAmount

- [CommandStringDisplayable #命令字符串可显示](/vanilla/api/bracket/CommandStringDisplayable)

## 参数

| 名称                   | 类型                                                     | 可获得  | 可设置   | 描述                                        |
| -------------------- | ------------------------------------------------------ | ---- | ----- | ----------------------------------------- |
| amount               | int                                                    | true | false | Gets the amount of Items in the ItemStack |
| commandString #命令字符串 | string                                                 | true | false | Returns the BEP to get this thingy        |
| ingredient           | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) | true | false | The backing ingredient                    |

