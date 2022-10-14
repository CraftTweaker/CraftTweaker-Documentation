# CokeOven

Allows you to add or remove Coke Oven recipes.

 Coke Oven recipes consist of an input, an output and the amount of creosote produced

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.immersiveengineering.CokeOven;
```


## 已实现的接口
CokeOven implements the following interfaces. That means all methods defined in these interfaces are also available in CokeOven

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## 使用方式

:::group{name=addJsonRecipe}

```zenscript
CokeOven.addJsonRecipe(name as string, mapData as MapData)
```

| 参数       | 类型                                         |
| -------- | ------------------------------------------ |
| name（名称） | string                                     |
| mapData  | [MapData #地图数据](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Adds a coke oven recipe

```zenscript
// CokeOven.addRecipe(recipePath as string, ingredient as IIngredientWithAmount, time as int, output as IItemStack, creosoteProduced as int)

<recipetype:immersiveengineering:coke_oven>.addRecipe("burn_a_stick", <item:minecraft:stick>, 100, <item:immersiveengineering:stick_treated>, 1);
```

| 参数               | 类型                                                                     | 描述                                                        | 可选    | 默认值 |
| ---------------- | ---------------------------------------------------------------------- | --------------------------------------------------------- | ----- | --- |
| recipePath       | string                                                                 | RecipePath The recipe name, without the resource location | false |     |
| ingredient       | [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount) | The recipe's input                                        | false |     |
| time             | int                                                                    | The time the recipe requires, in ticks                    | false |     |
| output（输出）       | [IItemstack](/vanilla/api/item/IItemStack)                             | The produced item                                         | false |     |
| creosoteProduced | int                                                                    | The amount of creosote produced                           | true  | 0   |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// CokeOven.getAllRecipes() as stdlib.List<T>

<recipetype:immersiveengineering:coke_oven>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
CokeOven.getRecipeByName(name as string) as T
```

| 参数       | 类型     |
| -------- | ------ |
| name（名称） | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// CokeOven.getRecipeMap() as T[ResourceLocation]

<recipetype:immersiveengineering:coke_oven>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
CokeOven.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| 参数         | 类型                                                     |
| ---------- | ------------------------------------------------------ |
| output（输出） | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=remove}

```zenscript
CokeOven.remove(output as IIngredient)
```

| 参数         | 类型                                                     |
| ---------- | ------------------------------------------------------ |
| output（输出） | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// CokeOven.removeAll()

<recipetype:immersiveengineering:coke_oven>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
CokeOven.removeByInput(input as IItemStack)
```

| 参数        | 类型                                         |
| --------- | ------------------------------------------ |
| input（输入） | [IItemstack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
CokeOven.removeByModid(modid as string, exclude as Predicate<string>)
```

| 参数    | 类型                                  | 可选    | 默认值                               |
| ----- | ----------------------------------- | ----- | --------------------------------- |
| modid | string                              | false |                                   |
| 不包含   | Predicate&lt;string&gt; | true  | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
CokeOven.removeByName(names as string[])
```

| 参数    | 类型       |
| ----- | -------- |
| names | string[] |


:::

:::group{name=removeByRegex}

```zenscript
CokeOven.removeByRegex(regex as string, exclude as Predicate<string>)
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

