# MechanicalCrafterManager



## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.create.MechanicalCrafterManager;
```


## 已实现的接口
MechanicalCrafterManager implements the following interfaces. That means all methods defined in these interfaces are also available in MechanicalCrafterManager

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## 使用方式

:::group{name=addJsonRecipe}

Return Type: void

```zenscript
MechanicalCrafterManager.addJsonRecipe(name as string, mapData as MapData) as void
```

| 参数       | 类型                                         | 描述                      |
| -------- | ------------------------------------------ | ----------------------- |
| name（名称） | string                                     | No Description Provided |
| mapData  | [MapData #地图数据](/vanilla/api/data/MapData) | No Description Provided |


:::

:::group{name=addMirroredRecipe}

Adds a mirrored recipe to the Mechanical Crafter.

Return Type: void

```zenscript
// MechanicalCrafterManager.addMirroredRecipe(name as string, output as IItemStack, ingredients as IIngredient[][]) as void

<recipetype:create:mechanical_crafting>.addMirroredRecipe("mirrorized", <item:minecraft:glass>, [[<item:minecraft:diamond>, <item:minecraft:air>, <item:minecraft:diamond>], [<item:minecraft:air>, <item:minecraft:diamond>, <item:minecraft:air>]]);
```

| 参数          | 类型                                                     | 描述                             |
| ----------- | ------------------------------------------------------ | ------------------------------ |
| name（名称）    | string                                                 | The name of the recipe.        |
| output（输出）  | [IItemstack](/vanilla/api/item/IItemStack)             | The output of the recipe.      |
| ingredients | [IIngredient](/vanilla/api/ingredient/IIngredient)[][] | The ingredients of the recipe. |


:::

:::group{name=addRecipe}

Adds a recipe to the Mechanical Crafter.

Return Type: void

```zenscript
// MechanicalCrafterManager.addRecipe(name as string, output as IItemStack, ingredients as IIngredient[][]) as void

<recipetype:create:mechanical_crafting>.addRecipe("mechanized", <item:minecraft:diamond>, [[<item:minecraft:dirt>, <item:minecraft:air>, <item:minecraft:dirt>], [<item:minecraft:air>, <item:minecraft:dirt>, <item:minecraft:air>]]);
```

| 参数          | 类型                                                     | 描述                             |
| ----------- | ------------------------------------------------------ | ------------------------------ |
| name（名称）    | string                                                 | The name of the recipe.        |
| output（输出）  | [IItemstack](/vanilla/api/item/IItemStack)             | The output of the recipe.      |
| ingredients | [IIngredient](/vanilla/api/ingredient/IIngredient)[][] | The ingredients of the recipe. |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// MechanicalCrafterManager.getAllRecipes() as stdlib.List<T>

<recipetype:create:mechanical_crafting>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
MechanicalCrafterManager.getRecipeByName(name as string) as T
```

| 参数       | 类型     | 描述                      |
| -------- | ------ | ----------------------- |
| name（名称） | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// MechanicalCrafterManager.getRecipeMap() as T[ResourceLocation]

<recipetype:create:mechanical_crafting>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
MechanicalCrafterManager.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| 参数         | 类型                                                     | 描述                      |
| ---------- | ------------------------------------------------------ | ----------------------- |
| output（输出） | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=remove}

Return Type: void

```zenscript
MechanicalCrafterManager.remove(output as IIngredient) as void
```

| 参数         | 类型                                                     | 描述                      |
| ---------- | ------------------------------------------------------ | ----------------------- |
| output（输出） | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=removeAll}

Return Type: void

```zenscript
// MechanicalCrafterManager.removeAll() as void

<recipetype:create:mechanical_crafting>.removeAll();
```

:::

:::group{name=removeByInput}

Return Type: void

```zenscript
MechanicalCrafterManager.removeByInput(input as IItemStack) as void
```

| 参数        | 类型                                         | 描述                      |
| --------- | ------------------------------------------ | ----------------------- |
| input（输入） | [IItemstack](/vanilla/api/item/IItemStack) | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
MechanicalCrafterManager.removeByModid(modid as string, exclude as Predicate<string>) as void
```

| 参数    | 类型                                  | 描述                      | 可选    | DefaultValue                      |
| ----- | ----------------------------------- | ----------------------- | ----- | --------------------------------- |
| modid | string                              | No Description Provided | false |                                   |
| 不包含   | Predicate&lt;string&gt; | No Description Provided | true  | (name as string) as bool => false |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
MechanicalCrafterManager.removeByName(names as string[]) as void
```

| 参数    | 类型       | 描述                      |
| ----- | -------- | ----------------------- |
| names | string[] | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
MechanicalCrafterManager.removeByRegex(regex as string, exclude as Predicate<string>) as void
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

