# WrapperRecipe

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipes.WrapperRecipe;
```


## 已实现的接口
WrapperRecipe implements the following interfaces. That means all methods defined in these interfaces are also available in WrapperRecipe

- [CommandStringDisplayable #命令字符串可显示](/vanilla/api/brackets/CommandStringDisplayable)

## 方法

:::group{name=canFit}

Return Type: boolean

```zenscript
WrapperRecipe.canFit(width as int, height as int) as boolean
```

| 参数     | 类型  | 描述                      |
| ------ | --- | ----------------------- |
| width  | int | No Description Provided |
| height | int | No Description Provided |


:::

:::group{name=replace}

Return Type: void

```zenscript
WrapperRecipe.replace(from as IIngredient, to as IIngredient) as void
```

| 参数   | 类型                                                | 描述                      |
| ---- | ------------------------------------------------- | ----------------------- |
| from | [材料（IIngredient）](/vanilla/api/items/IIngredient) | No Description Provided |
| to   | [材料（IIngredient）](/vanilla/api/items/IIngredient) | No Description Provided |


:::


## 参数

| 名称                        | 类型                                                                           | 可获得  | 可设置   | 描述                      |
| ------------------------- | ---------------------------------------------------------------------------- | ---- | ----- | ----------------------- |
| commandString             | string                                                                       | true | false | No Description Provided |
| dynamic                   | boolean                                                                      | true | false | No Description Provided |
| group                     | string                                                                       | true | false | No Description Provided |
| icon                      | [IItemStack](/vanilla/api/items/IItemStack)                                  | true | false | No Description Provided |
| id                        | [MCResourceLocation](/vanilla/api/util/MCResourceLocation)                   | true | false | No Description Provided |
| ingredients               | stdlib.List&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt; | true | false | No Description Provided |
| isShapedCraftingRecipe    | boolean                                                                      | true | false | No Description Provided |
| isShapelessCraftingRecipe | boolean                                                                      | true | false | No Description Provided |
| output（输出）                | [IItemStack](/vanilla/api/items/IItemStack)                                  | true | false | No Description Provided |
| recipeManager             | [IRecipeManager](/vanilla/api/managers/IRecipeManager)                       | true | false | No Description Provided |

