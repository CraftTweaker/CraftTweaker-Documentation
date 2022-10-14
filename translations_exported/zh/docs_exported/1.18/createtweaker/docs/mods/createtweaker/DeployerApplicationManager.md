# DeployerApplicationManager



## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.create.DeployerApplicationManager;
```


## 已实现的接口
DeployerApplicationManager implements the following interfaces. That means all methods defined in these interfaces are also available in DeployerApplicationManager

- [IProcessingRecipeManager](/mods/createtweaker/IProcessingRecipeManager)&lt;[DeployerApplicationRecipe](/mods/createtweaker/recipe/type/DeployerApplicationRecipe)&gt;

## 使用方式

:::group{name=addJsonRecipe}

Return Type: void

```zenscript
DeployerApplicationManager.addJsonRecipe(name as string, mapData as MapData) as void
```

| 参数       | 类型                                         | 描述                      |
| -------- | ------------------------------------------ | ----------------------- |
| name（名称） | string                                     | No Description Provided |
| mapData  | [MapData #地图数据](/vanilla/api/data/MapData) | No Description Provided |


:::

:::group{name=addRecipe}

Adds a new deployer application recipe.

Return Type: void

```zenscript
// DeployerApplicationManager.addRecipe(name as string, processedItem as IIngredient, heldItem as IIngredient, outputs as Percentaged<IItemStack>[], keepHeldItem as boolean) as void

<recipetype:create:deploying>.addRecipe("name", <item:minecraft:air>, <item:minecraft:diamond>, [<item:minecraft:dirt> % 50], true);
```

| 参数            | 类型                                                                                                                  | 描述                               | 可选    | DefaultValue |
| ------------- | ------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----- | ------------ |
| name（名称）      | string                                                                                                              | The name of the recipe           | false |              |
| processedItem | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient)                                                              | The item to be deployed onto     | false |              |
| heldItem      | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient)                                                              | The item to deploy with          | false |              |
| outputs       | [Percentaged](/vanilla/api/util/random/Percentaged)&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt;[] | The output of the recipe         | false |              |
| keepHeldItem  | 布尔值                                                                                                                 | Should the held item be consumed | true  | false        |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// DeployerApplicationManager.getAllRecipes() as stdlib.List<T>

<recipetype:create:deploying>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
DeployerApplicationManager.getRecipeByName(name as string) as T
```

| 参数       | 类型     | 描述                      |
| -------- | ------ | ----------------------- |
| name（名称） | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// DeployerApplicationManager.getRecipeMap() as T[ResourceLocation]

<recipetype:create:deploying>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
DeployerApplicationManager.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| 参数         | 类型                                                     | 描述                      |
| ---------- | ------------------------------------------------------ | ----------------------- |
| output（输出） | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=registerRecipe}

Registers a recipe using a builder approach.

Return Type: void

```zenscript
DeployerApplicationManager.registerRecipe(name as string, recipeBuilder as Consumer<ProcessingRecipeBuilder<T>>) as void
```

| 参数            | 类型                                                                                                                             | 描述                      |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| name（名称）      | string                                                                                                                         | The name of the recipe. |
| recipeBuilder | Consumer&lt;[ProcessingRecipeBuilder](/mods/createtweaker/recipe/ProcessingRecipeBuilder)&lt;T&gt;&gt; | The recipe builder.     |


:::

:::group{name=remove}

Return Type: void

```zenscript
DeployerApplicationManager.remove(output as IIngredient) as void
```

| 参数         | 类型                                                     | 描述                      |
| ---------- | ------------------------------------------------------ | ----------------------- |
| output（输出） | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=removeAll}

Return Type: void

```zenscript
// DeployerApplicationManager.removeAll() as void

<recipetype:create:deploying>.removeAll();
```

:::

:::group{name=removeByInput}

Return Type: void

```zenscript
DeployerApplicationManager.removeByInput(input as IItemStack) as void
```

| 参数        | 类型                                         | 描述                      |
| --------- | ------------------------------------------ | ----------------------- |
| input（输入） | [IItemstack](/vanilla/api/item/IItemStack) | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
DeployerApplicationManager.removeByModid(modid as string, exclude as Predicate<string>) as void
```

| 参数    | 类型                                  | 描述                      | 可选    | DefaultValue                      |
| ----- | ----------------------------------- | ----------------------- | ----- | --------------------------------- |
| modid | string                              | No Description Provided | false |                                   |
| 不包含   | Predicate&lt;string&gt; | No Description Provided | true  | (name as string) as bool => false |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
DeployerApplicationManager.removeByName(names as string[]) as void
```

| 参数    | 类型       | 描述                      |
| ----- | -------- | ----------------------- |
| names | string[] | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
DeployerApplicationManager.removeByRegex(regex as string, exclude as Predicate<string>) as void
```

| 参数    | 类型                                  | 描述                      | 可选    | DefaultValue                      |
| ----- | ----------------------------------- | ----------------------- | ----- | --------------------------------- |
| regex | string                              | No Description Provided | false |                                   |
| 不包含   | Predicate&lt;string&gt; | No Description Provided | true  | (name as string) as bool => false |


:::


## 参数

| 名称         | 类型                                                            | 可获得  | 可设置   | 描述                      |
| ---------- | ------------------------------------------------------------- | ---- | ----- | ----------------------- |
| allRecipes | stdlib.List&lt;T&gt;                              | true | false | No Description Provided |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true | false | No Description Provided |

