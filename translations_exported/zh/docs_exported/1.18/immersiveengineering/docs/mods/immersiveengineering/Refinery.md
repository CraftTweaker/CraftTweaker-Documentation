# Refinery

Allows you to add or remove Refinery recipes.

 Refinery Recipes consist of two fluid inputs and a fluid output.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.immersiveengineering.Refinery;
```


## 已实现的接口
Refinery implements the following interfaces. That means all methods defined in these interfaces are also available in Refinery

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## 使用方式

:::group{name=addJsonRecipe}

```zenscript
Refinery.addJsonRecipe(name as string, mapData as MapData)
```

| 参数       | 类型                                         |
| -------- | ------------------------------------------ |
| name（名称） | string                                     |
| mapData  | [MapData #地图数据](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Adds a recipe to the Refinery. Make sure that the provided Tags are valid fluid tags.

```zenscript
Refinery.addRecipe(recipePath as string, fluidInput1 as Many<MCTag>, fluidInput2 as Many<MCTag>, catalyst as IIngredient, energy as int, output as IFluidStack)
```

| 参数          | 类型                                                                                | 描述                                             |
| ----------- | --------------------------------------------------------------------------------- | ---------------------------------------------- |
| recipePath  | string                                                                            | The recipe name, without the resource location |
| fluidInput1 | [Many](/vanilla/api/util/Many)&lt;[MCTag](/vanilla/api/tag/MCTag)&gt; | The first fluid input, as Tag                  |
| fluidInput2 | [Many](/vanilla/api/util/Many)&lt;[MCTag](/vanilla/api/tag/MCTag)&gt; | The second fluid input, as Tag                 |
| catalyst    | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient)                            | The catalyst of the recipe                     |
| energy      | int                                                                               | The total energy required                      |
| output（输出）  | [IFluidStack](/forge/api/fluid/IFluidStack)                                       | The output fluid                               |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// Refinery.getAllRecipes() as stdlib.List<T>

<recipetype:immersiveengineering:refinery>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
Refinery.getRecipeByName(name as string) as T
```

| 参数       | 类型     |
| -------- | ------ |
| name（名称） | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// Refinery.getRecipeMap() as T[ResourceLocation]

<recipetype:immersiveengineering:refinery>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
Refinery.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| 参数         | 类型                                                     |
| ---------- | ------------------------------------------------------ |
| output（输出） | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// Refinery.removeAll()

<recipetype:immersiveengineering:refinery>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
Refinery.removeByInput(input as IItemStack)
```

| 参数        | 类型                                         |
| --------- | ------------------------------------------ |
| input（输入） | [IItemstack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
Refinery.removeByModid(modid as string, exclude as Predicate<string>)
```

| 参数    | 类型                                  | 可选    | 默认值                               |
| ----- | ----------------------------------- | ----- | --------------------------------- |
| modid | string                              | false |                                   |
| 不包含   | Predicate&lt;string&gt; | true  | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
Refinery.removeByName(names as string[])
```

| 参数    | 类型       |
| ----- | -------- |
| names | string[] |


:::

:::group{name=removeByRegex}

```zenscript
Refinery.removeByRegex(regex as string, exclude as Predicate<string>)
```

| 参数    | 类型                                  | 可选    | 默认值                               |
| ----- | ----------------------------------- | ----- | --------------------------------- |
| regex | string                              | false |                                   |
| 不包含   | Predicate&lt;string&gt; | true  | (name as string) as bool => false |


:::

:::group{name=removeRecipe}

Removes all recipes that return this given fluid. Since it's only the fluid, it does not check amounts.

```zenscript
// Refinery.removeRecipe(fluid as Fluid)

<recipetype:immersiveengineering:refinery>.removeRecipe(<fluid:immersiveengineering:biodiesel>.fluid);
```

| 参数    | 类型                                | 描述                         |
| ----- | --------------------------------- | -------------------------- |
| fluid | [Fluid](/vanilla/api/fluid/Fluid) | The fluid output to remove |


:::

:::group{name=removeRecipe}

Removes all recipes that return this given fluid Stack. Only removes if the fluid and the fluid amount match.

```zenscript
// Refinery.removeRecipe(fluidStack as IFluidStack)

<recipetype:immersiveengineering:refinery>.removeRecipe(<fluid:immersiveengineering:biodiesel> * 16);
```

| 参数         | 类型                                          | 描述                   |
| ---------- | ------------------------------------------- | -------------------- |
| fluidStack | [IFluidStack](/forge/api/fluid/IFluidStack) | The output to remove |


:::


## 参数

| 名称         | 类型                                                            | 可获得  | 可设置   |
| ---------- | ------------------------------------------------------------- | ---- | ----- |
| allRecipes | stdlib.List&lt;T&gt;                              | true | false |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true | false |

