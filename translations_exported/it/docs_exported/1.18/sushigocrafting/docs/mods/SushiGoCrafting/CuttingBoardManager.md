# CuttingBoardManager

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sushigocrafting.CuttingBoardManager;
```


## Interfacce Implementate
CuttingBoardManager implements the following interfaces. That means all methods defined in these interfaces are also available in CuttingBoardManager

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)&lt;[CuttingBoardRecipe](/mods/SushiGoCrafting/CuttingBoardRecipe)&gt;

## Metodi

:::group{name=addJsonRecipe}

Return Type: void

```zenscript
CuttingBoardManager.addJsonRecipe(name as string, mapData as MapData) as void
```

| Parametro | Tipo                                 | Descrizione             |
| --------- | ------------------------------------ | ----------------------- |
| nome      | string                               | No Description Provided |
| mapData   | [MapData](/vanilla/api/data/MapData) | No Description Provided |


:::

:::group{name=addRecipe}



Return Type: void

```zenscript
// CuttingBoardManager.addRecipe(name as string, input as IIngredient, foodOutput as string) as void

myCuttingBoardManager.addRecipe("cutting_board_test_recipe", <item:minecraft:egg>, "avocado");
```

| Parametro  | Tipo                                               | Descrizione                                                                              |
| ---------- | -------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| nome       | string                                             | The unique name of the recipe. Standard naming rules apply.                              |
| input      | [IIngredient](/vanilla/api/ingredient/IIngredient) | The input of the recipe.                                                                 |
| foodOutput | string                                             | The foodOutput of the recipe. You can get it from /ct sushigocrafting_food_ingredients |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// CuttingBoardManager.getAllRecipes() as stdlib.List<T>

myCuttingBoardManager.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
CuttingBoardManager.getRecipeByName(name as string) as T
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| nome      | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// CuttingBoardManager.getRecipeMap() as T[ResourceLocation]

myCuttingBoardManager.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
CuttingBoardManager.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parametro | Tipo                                               | Descrizione             |
| --------- | -------------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=removeAll}

Return Type: void

```zenscript
// CuttingBoardManager.removeAll() as void

myCuttingBoardManager.removeAll();
```

:::

:::group{name=removeByInput}

Return Type: void

```zenscript
CuttingBoardManager.removeByInput(input as IItemStack) as void
```

| Parametro | Tipo                                       | Descrizione             |
| --------- | ------------------------------------------ | ----------------------- |
| input     | [IItemStack](/vanilla/api/item/IItemStack) | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
CuttingBoardManager.removeByModid(modid as string, exclude as Predicate<string>) as void
```

| Parametro | Tipo                                | Descrizione             | Optional | DefaultValue                      |
| --------- | ----------------------------------- | ----------------------- | -------- | --------------------------------- |
| modid     | string                              | No Description Provided | no       |                                   |
| esclude   | Predicate&lt;string&gt; | No Description Provided | sì       | (name as string) as bool => false |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
CuttingBoardManager.removeByName(name as string) as void
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| nome      | string | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
CuttingBoardManager.removeByRegex(regex as string, exclude as Predicate<string>) as void
```

| Parametro | Tipo                                | Descrizione             | Optional | DefaultValue                      |
| --------- | ----------------------------------- | ----------------------- | -------- | --------------------------------- |
| regex     | string                              | No Description Provided | no       |                                   |
| esclude   | Predicate&lt;string&gt; | No Description Provided | sì       | (name as string) as bool => false |


:::


## Proprietà

| Nome       | Tipo                                                          | Ha Getter | Ha Setter | Descrizione             |
| ---------- | ------------------------------------------------------------- | --------- | --------- | ----------------------- |
| allRecipes | stdlib.List&lt;T&gt;                              | sì        | no        | No Description Provided |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | sì        | no        | No Description Provided |

