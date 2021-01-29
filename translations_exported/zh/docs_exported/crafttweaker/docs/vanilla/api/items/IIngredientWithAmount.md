# IIngredientWithAmount

Consists of an ingredient and an amount.

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.IIngredientWithAmount;
```


## 已实现的接口
IIngredientWithAmount implements the following interfaces. That means all methods defined in these interfaces are also available in IIngredientWithAmount

- [CommandStringDisplayable #命令字符串可显示](/vanilla/api/brackets/CommandStringDisplayable)
## 参数

| 名称         | 类型                                                | 可获得  | 可设置   |
| ---------- | ------------------------------------------------- | ---- | ----- |
| amount     | int                                               | true | false |
| ingredient | [材料（IIngredient）](/vanilla/api/items/IIngredient) | true | false |

