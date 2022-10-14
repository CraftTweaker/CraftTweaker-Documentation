# IRecipeManager&LT;T : Recipe&GT;

Default interface for Registry based handlers as they can all remove recipes by ResourceLocation.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipe.IRecipeManager;
```


## Implemented Interfaces
IRecipeManager implements the following interfaces. That means all methods defined in these interfaces are also available in IRecipeManager

- [CommandStringDisplayable](/vanilla/api/bracket/CommandStringDisplayable)

## Методы

:::group{name=addJsonRecipe}

Adds a recipe based on a provided IData. The provided IData should represent a DataPack json, this effectively allows you to register recipes for any DataPack supporting RecipeType systems.

Return Type: void

```zenscript
IRecipeManager.addJsonRecipe(name as string, mapData as MapData) as void
```

| Параметр | Тип                                  | Описание                        |
| -------- | ------------------------------------ | ------------------------------- |
| name     | string                               | name of the recipe              |
| mapData  | [MapData](/vanilla/api/data/MapData) | data representing the json file |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// IRecipeManager.getAllRecipes() as stdlib.List<T>

craftingTable.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: @org.openzen.zencode.java.ZenCodeType.Nullable T

```zenscript
IRecipeManager.getRecipeByName(name as string) as @org.openzen.zencode.java.ZenCodeType.Nullable T
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
// IRecipeManager.getRecipeMap() as T[ResourceLocation]

craftingTable.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
IRecipeManager.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Параметр | Тип                                                | Описание                |
| -------- | -------------------------------------------------- | ----------------------- |
| output   | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=remove}

Remove a recipe based on it's output.

Return Type: void

```zenscript
// IRecipeManager.remove(output as IIngredient) as void

craftingTable.remove(<tag:items:minecraft:wool>);
```

| Параметр | Тип                                                | Описание             |
| -------- | -------------------------------------------------- | -------------------- |
| output   | [IIngredient](/vanilla/api/ingredient/IIngredient) | output of the recipe |


:::

:::group{name=removeAll}

Remove all recipes in this registry

Return Type: void

```zenscript
// IRecipeManager.removeAll() as void

craftingTable.removeAll();
```

:::

:::group{name=removeByInput}

Removes all recipes where the input contains the given IItemStack.

Return Type: void

```zenscript
// IRecipeManager.removeByInput(input as IItemStack) as void

craftingTable.removeByInput(<item:minecraft:iron_ingot>);
```

| Параметр | Тип                                        | Описание              |
| -------- | ------------------------------------------ | --------------------- |
| input    | [IItemStack](/vanilla/api/item/IItemStack) | The input IItemStack. |


:::

:::group{name=removeByModid}

Remove recipe based on Registry name modid

Return Type: void

```zenscript
IRecipeManager.removeByModid(modid as string, exclude as Predicate<string>) as void
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
// IRecipeManager.removeByName(name as string) as void

craftingTable.removeByName("minecraft:furnace");
```

| Параметр | Тип    | Описание                          |
| -------- | ------ | --------------------------------- |
| name     | string | registry name of recipe to remove |


:::

:::group{name=removeByRegex}

Remove recipe based on regex with an added exclusion check, so you can remove the whole mod besides a few specified.

Return Type: void

```zenscript
// IRecipeManager.removeByRegex(regex as string, exclude as Predicate<string>) as void

craftingTable.removeByRegex("\\d_\\d", (name as string) => {return name == "orange_wool";});
```

| Параметр  | Тип                                 | Описание                | Optional | DefaultValue    |
| --------- | ----------------------------------- | ----------------------- | -------- | --------------- |
| regex     | string                              | regex to match against  | false    |                 |
| исключить | Predicate&lt;string&gt; | No Description Provided | true     | (name) => false |


:::


## Свойства

| Название   | Тип                                                           | Имеет Getter | Имеет Setter | Описание                            |
| ---------- | ------------------------------------------------------------- | ------------ | ------------ | ----------------------------------- |
| allRecipes | stdlib.List&lt;T&gt;                              | true         | false        | No Description Provided             |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true         | false        | Returns a map of all known recipes. |

