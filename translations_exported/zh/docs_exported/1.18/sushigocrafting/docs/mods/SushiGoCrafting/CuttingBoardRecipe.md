# CuttingBoardRecipe

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sushigocrafting.CuttingBoardRecipe;
```


## 使用方式

:::group{name=getIngredient}

Return Type: string

```zenscript
// CuttingBoardRecipe.getIngredient() as string

myCuttingBoardRecipe.getIngredient();
```

:::

:::group{name=getInput}

Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
// CuttingBoardRecipe.getInput() as IIngredient

myCuttingBoardRecipe.getInput();
```

:::


## 参数

| 名称         | 类型                                                     | 可获得  | 可设置   | 描述                      |
| ---------- | ------------------------------------------------------ | ---- | ----- | ----------------------- |
| ingredient | string                                                 | true | false | No Description Provided |
| input（输入）  | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) | true | false | No Description Provided |

