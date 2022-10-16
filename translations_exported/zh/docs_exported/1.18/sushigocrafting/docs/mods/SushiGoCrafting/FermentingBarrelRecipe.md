# FermentingBarrelRecipe

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sushigocrafting.FermentingBarrelRecipe;
```


## 使用方式

:::group{name=getFluid}

Return Type: [IFluidStack](/forge/api/fluid/IFluidStack)

```zenscript
// FermentingBarrelRecipe.getFluid() as IFluidStack

myFermentingBarrelRecipe.getFluid();
```

:::

:::group{name=getInput}

Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
// FermentingBarrelRecipe.getInput() as IIngredient

myFermentingBarrelRecipe.getInput();
```

:::

:::group{name=getOutput}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// FermentingBarrelRecipe.getOutput() as IItemStack

myFermentingBarrelRecipe.getOutput();
```

:::


## 参数

| 名称         | 类型                                                     | 可获得  | 可设置   | 描述                      |
| ---------- | ------------------------------------------------------ | ---- | ----- | ----------------------- |
| fluid      | [IFluidStack](/forge/api/fluid/IFluidStack)            | true | false | No Description Provided |
| input（输入）  | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) | true | false | No Description Provided |
| output（输出） | [IItemstack](/vanilla/api/item/IItemStack)             | true | false | No Description Provided |

