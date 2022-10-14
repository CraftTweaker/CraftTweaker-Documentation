# BlastFurnaceRecipeManager



## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipe.BlastFurnaceRecipeManager;
```


## 已实现的接口
BlastFurnaceRecipeManager implements the following interfaces. That means all methods defined in these interfaces are also available in BlastFurnaceRecipeManager

- [ICookingRecipeManager](/vanilla/api/recipe/manager/ICookingRecipeManager)&lt;[BlastingRecipe](/vanilla/api/recipe/type/BlastingRecipe)&gt;

## Enum Constants

BlastFurnaceRecipeManager is an enum. It has 1 enum constants. They are accessible using the code below.

```zenscript
BlastFurnaceRecipeManager.INSTANCE
```
## 使用方式

:::group{name=addJsonRecipe}

基于提供的IData添加配方 The provided IData should represent a DataPack json, this effectively allows you to register recipes for any DataPack supporting RecipeType systems.

Return Type: void

```zenscript
BlastFurnaceRecipeManager.addJsonRecipe(name as string, mapData as MapData) as void
```

| 参数       | 类型                                         | 描述                              |
| -------- | ------------------------------------------ | ------------------------------- |
| name（名称） | string                                     | name of the recipe              |
| mapData  | [MapData #地图数据](/vanilla/api/data/MapData) | data representing the json file |


:::

:::group{name=addRecipe}

添加基于给定参数的合成表

 Note: A `cookTime` of `0` will cause the recipe to never complete, it will burn and use fuel, but no progress will be made on the recipe, it needs to be at-least `1` or more.

 Saying that, if you would like to make a recipe that will never complete (for example being able to give the player an infinitely burning furnace for whatever reason), you can still use a `cookTime` of `0`.

Return Type: void

```zenscript
// BlastFurnaceRecipeManager.addRecipe(name as string, output as IItemStack, input as IIngredient, xp as float, cookTime as int) as void

blastFurnace.addRecipe("wool2diamond", <item:minecraft:diamond>, <tag:items:minecraft:wool>, 1.0, 30);
```

| 参数             | 类型                                                     | 描述         |
| -------------- | ------------------------------------------------------ | ---------- |
| name（名称）       | string                                                 | 新的合成表名称    |
| output（输出）     | [IItemstack](/vanilla/api/item/IItemStack)             | 合成表的输出物品id |
| input（输入）      | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) | 合成表的输入成分   |
| xp (经验值)       | float                                                  | 玩家获得多少经验   |
| cookTime #烧制时间 | int                                                    | 烧制需要多长时间   |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// BlastFurnaceRecipeManager.getAllRecipes() as stdlib.List<T>

blastFurnace.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: @org.openzen.zencode.java.ZenCodeType.Nullable T

```zenscript
BlastFurnaceRecipeManager.getRecipeByName(name as string) as @org.openzen.zencode.java.ZenCodeType.Nullable T
```

| 参数       | 类型     | 描述                      |
| -------- | ------ | ----------------------- |
| name（名称） | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Returns a map of all known recipes.

Returns: A Map of recipe name to recipe of all known recipes.  
Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// BlastFurnaceRecipeManager.getRecipeMap() as T[ResourceLocation]

blastFurnace.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
BlastFurnaceRecipeManager.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| 参数         | 类型                                                     | 描述                      |
| ---------- | ------------------------------------------------------ | ----------------------- |
| output（输出） | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=remove}

Remove a recipe based on it's output.

Return Type: void

```zenscript
// BlastFurnaceRecipeManager.remove(output as IIngredient) as void

blastFurnace.remove(<tag:items:minecraft:wool>);
```

| 参数         | 类型                                                     | 描述                   |
| ---------- | ------------------------------------------------------ | -------------------- |
| output（输出） | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) | output of the recipe |


:::

:::group{name=removeAll}

Remove all recipes in this registry

Return Type: void

```zenscript
// BlastFurnaceRecipeManager.removeAll() as void

blastFurnace.removeAll();
```

:::

:::group{name=removeByInput}

Removes all recipes where the input contains the given IItemStack.

Return Type: void

```zenscript
// BlastFurnaceRecipeManager.removeByInput(input as IItemStack) as void

blastFurnace.removeByInput(<item:minecraft:iron_ingot>);
```

| 参数        | 类型                                         | 描述                    |
| --------- | ------------------------------------------ | --------------------- |
| input（输入） | [IItemstack](/vanilla/api/item/IItemStack) | The input IItemStack. |


:::

:::group{name=removeByModid}

Remove recipe based on Registry name modid

Return Type: void

```zenscript
BlastFurnaceRecipeManager.removeByModid(modid as string, exclude as Predicate<string>) as void
```

| 参数    | 类型                                  | 描述                             | 可选    | DefaultValue    |
| ----- | ----------------------------------- | ------------------------------ | ----- | --------------- |
| modid | string                              | modid of the recipes to remove | false |                 |
| 不包含   | Predicate&lt;string&gt; | No Description Provided        | true  | (name) => false |


:::

:::group{name=removeByName}

Remove recipe based on Registry name

Return Type: void

```zenscript
// BlastFurnaceRecipeManager.removeByName(name as string) as void

blastFurnace.removeByName("minecraft:furnace");
```

| 参数       | 类型     | 描述                                |
| -------- | ------ | --------------------------------- |
| name（名称） | string | registry name of recipe to remove |


:::

:::group{name=removeByRegex}

Remove recipe based on regex with an added exclusion check, so you can remove the whole mod besides a few specified.

Return Type: void

```zenscript
// BlastFurnaceRecipeManager.removeByRegex(regex as string, exclude as Predicate<string>) as void

blastFurnace.removeByRegex("\\d_\\d", (name as string) => {return name == "orange_wool";});
```

| 参数    | 类型                                  | 描述                      | 可选    | DefaultValue    |
| ----- | ----------------------------------- | ----------------------- | ----- | --------------- |
| regex | string                              | regex to match against  | false |                 |
| 不包含   | Predicate&lt;string&gt; | No Description Provided | true  | (name) => false |


:::

:::group{name=removeRecipe}

移除基于输出和输入的合成表

Return Type: void

```zenscript
// BlastFurnaceRecipeManager.removeRecipe(output as IItemStack, input as IIngredient) as void

blastFurnace.removeRecipe(<item:minecraft:diamond>, <tag:items:minecraft:wool>);
```

| 参数         | 类型                                                     | 描述          |
| ---------- | ------------------------------------------------------ | ----------- |
| output（输出） | [IItemstack](/vanilla/api/item/IItemStack)             | 合成表的输出物品id. |
| input（输入）  | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) | 要移除的配方的成分。  |


:::


## 参数

| 名称         | 类型                                                            | 可获得  | 可设置   | 描述                                  |
| ---------- | ------------------------------------------------------------- | ---- | ----- | ----------------------------------- |
| allRecipes | stdlib.List&lt;T&gt;                              | true | false | No Description Provided             |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true | false | Returns a map of all known recipes. |

