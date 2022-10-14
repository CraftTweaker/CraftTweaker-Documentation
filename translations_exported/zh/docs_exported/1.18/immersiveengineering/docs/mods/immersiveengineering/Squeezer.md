# Squeezer

Allows you to add or remove Squeezer recipes.

 Squeezer Recipes consist of an input, a fluid output and an item output.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.immersiveengineering.Squeezer;
```


## 已实现的接口
Squeezer implements the following interfaces. That means all methods defined in these interfaces are also available in Squeezer

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## 使用方式

:::group{name=addJsonRecipe}

```zenscript
Squeezer.addJsonRecipe(name as string, mapData as MapData)
```

| 参数       | 类型                                         |
| -------- | ------------------------------------------ |
| name（名称） | string                                     |
| mapData  | [MapData #地图数据](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Adds a recipe to the Squeezer. Short form if you don't want a fluid output. Does the same as if you provided `<fluid:minecraft:empty> * 0` to the other addRecipe Method.

```zenscript
// Squeezer.addRecipe(recipePath as string, input as IIngredientWithAmount, energy as int, itemOutput as IItemStack)

<recipetype:immersiveengineering:squeezer>.addRecipe("slag_off", <item:immersiveengineering:slag> * 9, 5000, <item:minecraft:dirt>);
```

| 参数         | 类型                                                                     | 描述                                             |
| ---------- | ---------------------------------------------------------------------- | ---------------------------------------------- |
| recipePath | string                                                                 | The recipe name, without the resource location |
| input（输入）  | [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount) | 输入的物品                                          |
| energy     | int                                                                    | The total energy required for this recipe      |
| itemOutput | [IItemstack](/vanilla/api/item/IItemStack)                             | The item output                                |


:::

:::group{name=addRecipe}

Adds a recipe to the Squeezer. The item output is optional.

```zenscript
// Squeezer.addRecipe(recipePath as string, input as IIngredientWithAmount, energy as int, fluidOutput as IFluidStack, itemOutput as IItemStack)

<recipetype:immersiveengineering:squeezer>.addRecipe("pressure_creates_diamonds", <item:minecraft:coal_block> * 8, 6000, <fluid:immersiveengineering:creosote> * 2500, <item:minecraft:diamond>);
```

| 参数          | 类型                                                                     | 描述                                             | 可选    | 默认值                  |
| ----------- | ---------------------------------------------------------------------- | ---------------------------------------------- | ----- | -------------------- |
| recipePath  | string                                                                 | The recipe name, without the resource location | false |                      |
| input（输入）   | [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount) | 输入的物品                                          | false |                      |
| energy      | int                                                                    | The total energy required for this recipe      | false |                      |
| fluidOutput | [IFluidStack](/forge/api/fluid/IFluidStack)                            | The fluid output                               | false |                      |
| itemOutput  | [IItemstack](/vanilla/api/item/IItemStack)                             | The item output                                | true  | <item:minecraft:air> |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// Squeezer.getAllRecipes() as stdlib.List<T>

<recipetype:immersiveengineering:squeezer>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
Squeezer.getRecipeByName(name as string) as T
```

| 参数       | 类型     |
| -------- | ------ |
| name（名称） | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// Squeezer.getRecipeMap() as T[ResourceLocation]

<recipetype:immersiveengineering:squeezer>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
Squeezer.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| 参数         | 类型                                                     |
| ---------- | ------------------------------------------------------ |
| output（输出） | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=remove}

Removes all recipes that return this given fluid. Since it's only the fluid, it does not check amounts.

```zenscript
// Squeezer.remove(fluid as Fluid)

<recipetype:immersiveengineering:squeezer>.remove(<fluid:immersiveengineering:plantoil>.fluid);
```

| 参数    | 类型                                | 描述                         |
| ----- | --------------------------------- | -------------------------- |
| fluid | [Fluid](/vanilla/api/fluid/Fluid) | The fluid output to remove |


:::

:::group{name=remove}

Removes all recipes that return this given fluid Stack. Only removes if the fluid and the fluid amount match.

```zenscript
// Squeezer.remove(fluidStack as IFluidStack)

<recipetype:immersiveengineering:squeezer>.remove(<fluid:immersiveengineering:plantoil> * 60);
```

| 参数         | 类型                                          | 描述                   |
| ---------- | ------------------------------------------- | -------------------- |
| fluidStack | [IFluidStack](/forge/api/fluid/IFluidStack) | The output to remove |


:::

:::group{name=remove}

```zenscript
Squeezer.remove(output as IIngredient)
```

| 参数         | 类型                                                     |
| ---------- | ------------------------------------------------------ |
| output（输出） | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// Squeezer.removeAll()

<recipetype:immersiveengineering:squeezer>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
Squeezer.removeByInput(input as IItemStack)
```

| 参数        | 类型                                         |
| --------- | ------------------------------------------ |
| input（输入） | [IItemstack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
Squeezer.removeByModid(modid as string, exclude as Predicate<string>)
```

| 参数    | 类型                                  | 可选    | 默认值                               |
| ----- | ----------------------------------- | ----- | --------------------------------- |
| modid | string                              | false |                                   |
| 不包含   | Predicate&lt;string&gt; | true  | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
Squeezer.removeByName(names as string[])
```

| 参数    | 类型       |
| ----- | -------- |
| names | string[] |


:::

:::group{name=removeByRegex}

```zenscript
Squeezer.removeByRegex(regex as string, exclude as Predicate<string>)
```

| 参数    | 类型                                  | 可选    | 默认值                               |
| ----- | ----------------------------------- | ----- | --------------------------------- |
| regex | string                              | false |                                   |
| 不包含   | Predicate&lt;string&gt; | true  | (name as string) as bool => false |


:::


## 参数

| 名称         | 类型                                                            | 可获得  | 可设置   |
| ---------- | ------------------------------------------------------------- | ---- | ----- |
| allRecipes | stdlib.List&lt;T&gt;                              | true | false |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true | false |

