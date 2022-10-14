# AlloySmelter

Allows you to add or remove alloy smelter recipes.

 Alloy smelter recipes consist of two input ingredients (size dependent) and one output ItemStack

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.immersiveengineering.AlloySmelter;
```


## 已实现的接口
AlloySmelter implements the following interfaces. That means all methods defined in these interfaces are also available in AlloySmelter

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## 使用方式

:::group{name=addJsonRecipe}

```zenscript
AlloySmelter.addJsonRecipe(name as string, mapData as MapData)
```

| 参数       | 类型                                         |
| -------- | ------------------------------------------ |
| name（名称） | string                                     |
| mapData  | [MapData #地图数据](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Adds a recipe to the alloy smelter

```zenscript
// AlloySmelter.addRecipe(recipePath as string, inputA as IIngredientWithAmount, inputB as IIngredientWithAmount, time as int, output as IItemStack)

<recipetype:immersiveengineering:alloy>.addRecipe("spin_iron_to_gold", <item:minecraft:iron_ingot> * 10, <tag:minecraft:wool>, 200, <item:minecraft:gold_ingot> * 2);
```

| 参数         | 类型                                                                     | 描述                                             |
| ---------- | ---------------------------------------------------------------------- | ---------------------------------------------- |
| recipePath | string                                                                 | The recipe name, without the resource location |
| inputA     | [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount) | The first item input                           |
| inputB     | [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount) | The second item input                          |
| time       | int                                                                    | The time this recipe needs, in ticks           |
| output（输出） | [IItemstack](/vanilla/api/item/IItemStack)                             | The recipe output                              |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// AlloySmelter.getAllRecipes() as stdlib.List<T>

<recipetype:immersiveengineering:alloy>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
AlloySmelter.getRecipeByName(name as string) as T
```

| 参数       | 类型     |
| -------- | ------ |
| name（名称） | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// AlloySmelter.getRecipeMap() as T[ResourceLocation]

<recipetype:immersiveengineering:alloy>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
AlloySmelter.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| 参数         | 类型                                                     |
| ---------- | ------------------------------------------------------ |
| output（输出） | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=remove}

```zenscript
AlloySmelter.remove(output as IIngredient)
```

| 参数         | 类型                                                     |
| ---------- | ------------------------------------------------------ |
| output（输出） | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// AlloySmelter.removeAll()

<recipetype:immersiveengineering:alloy>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
AlloySmelter.removeByInput(input as IItemStack)
```

| 参数        | 类型                                         |
| --------- | ------------------------------------------ |
| input（输入） | [IItemstack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
AlloySmelter.removeByModid(modid as string, exclude as Predicate<string>)
```

| 参数    | 类型                                  | 可选    | 默认值                               |
| ----- | ----------------------------------- | ----- | --------------------------------- |
| modid | string                              | false |                                   |
| 不包含   | Predicate&lt;string&gt; | true  | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
AlloySmelter.removeByName(names as string[])
```

| 参数    | 类型       |
| ----- | -------- |
| names | string[] |


:::

:::group{name=removeByRegex}

```zenscript
AlloySmelter.removeByRegex(regex as string, exclude as Predicate<string>)
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

