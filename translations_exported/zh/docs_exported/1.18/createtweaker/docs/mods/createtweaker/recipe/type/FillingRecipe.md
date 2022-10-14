# FillingRecipe

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.createtweaker.FillingRecipe;
```


## Extending ProcessingRecipe

FillingRecipe extends [ProcessingRecipe](/mods/createtweaker/recipe/type/ProcessingRecipe). That means all methods available in [ProcessingRecipe](/mods/createtweaker/recipe/type/ProcessingRecipe) are also available in FillingRecipe

## 已实现的接口
FillingRecipe implements the following interfaces. That means all methods defined in these interfaces are also available in FillingRecipe

- [IAssemblyRecipe](/mods/createtweaker/recipe/type/IAssemblyRecipe)

## 使用方式

:::group{name=getRequiredFluid}

Return Type: [FluidIngredient](/mods/createtweaker/FluidIngredient)

```zenscript
// FillingRecipe.getRequiredFluid() as FluidIngredient

myFillingRecipe.getRequiredFluid();
```

:::


## 参数

| 名称            | 类型                                                     | 可获得  | 可设置   | 描述                      |
| ------------- | ------------------------------------------------------ | ---- | ----- | ----------------------- |
| requiredFluid | [FluidIngredient](/mods/createtweaker/FluidIngredient) | true | false | No Description Provided |

