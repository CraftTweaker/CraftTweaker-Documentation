# BlastFurnaceRecipeManager



## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipe.BlastFurnaceRecipeManager;
```


## Implemented Interfaces
BlastFurnaceRecipeManager implements the following interfaces. That means all methods defined in these interfaces are also available in BlastFurnaceRecipeManager

- [ICookingRecipeManager](/vanilla/api/recipe/manager/ICookingRecipeManager)&lt;[BlastingRecipe](/vanilla/api/recipe/type/BlastingRecipe)&gt;

## Enum Constants

BlastFurnaceRecipeManager is an enum. It has 1 enum constants. They are accessible using the code below.

```zenscript
BlastFurnaceRecipeManager.INSTANCE
```
## Методы

:::group{name=addJsonRecipe}

Adds a recipe based on a provided IData. The provided IData should represent a DataPack json, this effectively allows you to register recipes for any DataPack supporting RecipeType systems.

Return Type: void

```zenscript
BlastFurnaceRecipeManager.addJsonRecipe(name as string, mapData as MapData) as void
```

| Параметр | Тип                                  | Описание                |
| -------- | ------------------------------------ | ----------------------- |
| name     | string                               | name of the recipe      |
| mapData  | [MapData](/vanilla/api/data/MapData) | No Description Provided |


:::

:::group{name=addRecipe}

Adds a recipe based on given params.

 Note: A `cookTime` of `0` will cause the recipe to never complete, it will burn and use fuel, but no progress will be made on the recipe, it needs to be at-least `1` or more.

 Saying that, if you would like to make a recipe that will never complete (for example being able to give the player an infinitely burning furnace for whatever reason), you can still use a `cookTime` of `0`.

Return Type: void

```zenscript
// BlastFurnaceRecipeManager.addRecipe(name as string, output as IItemStack, input as IIngredient, xp as float, cookTime as int) as void

blastFurnace.addRecipe("wool2diamond", <item:minecraft:diamond>, <tag:items:minecraft:wool>, 1.0, 30);
```

| Параметр | Тип                                                | Описание                        |
| -------- | -------------------------------------------------- | ------------------------------- |
| name     | string                                             | Name of the new recipe          |
| output   | [IItemStack](/vanilla/api/item/IItemStack)         | IItemStack output of the recipe |
| input    | [IIngredient](/vanilla/api/ingredient/IIngredient) | IIngredient input of the recipe |
| xp       | float                                              | how much xp the player gets     |
| cookTime | int                                                | how long it takes to cook       |


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

| Параметр | Тип    | Описание                |
| -------- | ------ | ----------------------- |
| name     | string | No Description Provided |


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

| Параметр | Тип                                                | Описание                |
| -------- | -------------------------------------------------- | ----------------------- |
| output   | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=remove}

Remove a recipe based on it's output.

Return Type: void

```zenscript
// BlastFurnaceRecipeManager.remove(output as IIngredient) as void

blastFurnace.remove(<tag:items:minecraft:wool>);
```

| Параметр | Тип                                                | Описание             |
| -------- | -------------------------------------------------- | -------------------- |
| output   | [IIngredient](/vanilla/api/ingredient/IIngredient) | output of the recipe |


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

| Параметр | Тип                                        | Описание              |
| -------- | ------------------------------------------ | --------------------- |
| input    | [IItemStack](/vanilla/api/item/IItemStack) | The input IItemStack. |


:::

:::group{name=removeByModid}

Remove recipe based on Registry name modid

Return Type: void

```zenscript
BlastFurnaceRecipeManager.removeByModid(modid as string, exclude as Predicate<string>) as void
```

| Параметр  | Тип                                 | Описание                       | Optional | DefaultValue    |
| --------- | ----------------------------------- | ------------------------------ | -------- | --------------- |
| modid     | string                              | modid of the recipes to remove | false    |                 |
| исключить | Predicate&lt;string&gt; | No Description Provided        | true     | (name) => false |


:::

:::group{name=removeByName}

Remove recipe based on Registry name

Return Type: void

```zenscript
// BlastFurnaceRecipeManager.removeByName(name as string) as void

blastFurnace.removeByName("minecraft:furnace");
```

| Параметр | Тип    | Описание                          |
| -------- | ------ | --------------------------------- |
| name     | string | registry name of recipe to remove |


:::

:::group{name=removeByRegex}

Remove recipe based on regex with an added exclusion check, so you can remove the whole mod besides a few specified.

Return Type: void

```zenscript
// BlastFurnaceRecipeManager.removeByRegex(regex as string, exclude as Predicate<string>) as void

blastFurnace.removeByRegex("\\d_\\d", (name as string) => {return name == "orange_wool";});
```

| Параметр  | Тип                                 | Описание                | Optional | DefaultValue    |
| --------- | ----------------------------------- | ----------------------- | -------- | --------------- |
| regex     | string                              | regex to match against  | false    |                 |
| исключить | Predicate&lt;string&gt; | No Description Provided | true     | (name) => false |


:::

:::group{name=removeRecipe}

Removes a recipe based on it's output and input.

Return Type: void

```zenscript
// BlastFurnaceRecipeManager.removeRecipe(output as IItemStack, input as IIngredient) as void

blastFurnace.removeRecipe(<item:minecraft:diamond>, <tag:items:minecraft:wool>);
```

| Параметр | Тип                                                | Описание                             |
| -------- | -------------------------------------------------- | ------------------------------------ |
| output   | [IItemStack](/vanilla/api/item/IItemStack)         | IItemStack output of the recipe.     |
| input    | [IIngredient](/vanilla/api/ingredient/IIngredient) | IIngredient of the recipe to remove. |


:::


## Свойства

| Название   | Тип                                                           | Имеет Getter | Имеет Setter | Описание                            |
| ---------- | ------------------------------------------------------------- | ------------ | ------------ | ----------------------------------- |
| allRecipes | stdlib.List&lt;T&gt;                              | true         | false        | No Description Provided             |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true         | false        | Returns a map of all known recipes. |

