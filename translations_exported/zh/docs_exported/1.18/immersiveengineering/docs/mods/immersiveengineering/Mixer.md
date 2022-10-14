# Mixer

Allows you to add or remove Mixer recipes.

 Mixer Recipes consist of a fluid input, multiple item inputs and a fluid output.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.immersiveengineering.Mixer;
```


## 已实现的接口
Mixer implements the following interfaces. That means all methods defined in these interfaces are also available in Mixer

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## 使用方式

:::group{name=addJsonRecipe}

```zenscript
Mixer.addJsonRecipe(name as string, mapData as MapData)
```

| 参数       | 类型                                         |
| -------- | ------------------------------------------ |
| name（名称） | string                                     |
| mapData  | [MapData #地图数据](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Adds a recipe to the Mixer. Make sure that the provided Tag is a valid fluid tag.

 Mixer recipes will always convert 1mB of the input fluid to 1mB of the output fluid. The `amount` parameter specifies for how many mB the given ingredients last

```zenscript
// Mixer.addRecipe(recipePath as string, fluidInput as MCTag, inputItems as IIngredientWithAmount[], energy as int, output as Fluid, amount as int)

<recipetype:immersiveengineering:mixer>.addRecipe("grow_creosote_oil", <tag:minecraft:water>, [<item:minecraft:oak_sapling>, <item:minecraft:bone_meal> * 4, <item:immersiveengineering:creosote_bucket>], 5000, <fluid:immersiveengineering:creosote>.fluid, 8000);
```

| 参数         | 类型                                                                       | 描述                                                                       |
| ---------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| recipePath | string                                                                   | The recipe name, without the resource location                           |
| fluidInput | [MCTag](/vanilla/api/tag/MCTag)                                          | The fluid input as Tag                                                   |
| inputItems | [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)[] | The required input items                                                 |
| energy     | int                                                                      | The total energy required                                                |
| output（输出） | [Fluid](/vanilla/api/fluid/Fluid)                                        | The produced output fluidStack                                           |
| amount     | int                                                                      | The amount of fluid that can be converted per set of input items (in mB) |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// Mixer.getAllRecipes() as stdlib.List<T>

<recipetype:immersiveengineering:mixer>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
Mixer.getRecipeByName(name as string) as T
```

| 参数       | 类型     |
| -------- | ------ |
| name（名称） | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// Mixer.getRecipeMap() as T[ResourceLocation]

<recipetype:immersiveengineering:mixer>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
Mixer.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| 参数         | 类型                                                     |
| ---------- | ------------------------------------------------------ |
| output（输出） | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// Mixer.removeAll()

<recipetype:immersiveengineering:mixer>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
Mixer.removeByInput(input as IItemStack)
```

| 参数        | 类型                                         |
| --------- | ------------------------------------------ |
| input（输入） | [IItemstack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
Mixer.removeByModid(modid as string, exclude as Predicate<string>)
```

| 参数    | 类型                                  | 可选    | 默认值                               |
| ----- | ----------------------------------- | ----- | --------------------------------- |
| modid | string                              | false |                                   |
| 不包含   | Predicate&lt;string&gt; | true  | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
Mixer.removeByName(names as string[])
```

| 参数    | 类型       |
| ----- | -------- |
| names | string[] |


:::

:::group{name=removeByRegex}

```zenscript
Mixer.removeByRegex(regex as string, exclude as Predicate<string>)
```

| 参数    | 类型                                  | 可选    | 默认值                               |
| ----- | ----------------------------------- | ----- | --------------------------------- |
| regex | string                              | false |                                   |
| 不包含   | Predicate&lt;string&gt; | true  | (name as string) as bool => false |


:::

:::group{name=removeRecipe}

Removes all recipes that return this given fluid. Since it's only the fluid, it does not check amounts. Does not remove potion recipes!

```zenscript
// Mixer.removeRecipe(fluid as Fluid)

<recipetype:immersiveengineering:mixer>.removeRecipe(<fluid:immersiveengineering:concrete>.fluid);
```

| 参数    | 类型                                | 描述                         |
| ----- | --------------------------------- | -------------------------- |
| fluid | [Fluid](/vanilla/api/fluid/Fluid) | The fluid output to remove |


:::

:::group{name=removeRecipe}

Removes all recipes that return this given fluid Stack. Only removes if the fluid and the fluid amount match. Does not remove potion recipes!

```zenscript
// Mixer.removeRecipe(fluidStack as IFluidStack)

<recipetype:immersiveengineering:mixer>.removeRecipe(<fluid:immersiveengineering:concrete> * 500);
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

