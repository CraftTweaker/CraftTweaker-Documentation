# CuttingBoardManager

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sushigocrafting.CuttingBoardManager;
```


## Implemented Interfaces
CuttingBoardManager implements the following interfaces. That means all methods defined in these interfaces are also available in CuttingBoardManager

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)&lt;[CuttingBoardRecipe](/mods/SushiGoCrafting/CuttingBoardRecipe)&gt;

## Methods

:::group{name=addJsonRecipe}

Return Type: void

```zenscript
CuttingBoardManager.addJsonRecipe(name as string, mapData as MapData) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |
| mapData | [MapData](/vanilla/api/data/MapData) | No Description Provided |


:::

:::group{name=addRecipe}



Return Type: void

```zenscript
// CuttingBoardManager.addRecipe(name as string, input as IIngredient, foodOutput as string) as void

myCuttingBoardManager.addRecipe("cutting_board_test_recipe", <item:minecraft:egg>, "avocado");
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | The unique name of the recipe. Standard naming rules apply. |
| input | [IIngredient](/vanilla/api/ingredient/IIngredient) | The input of the recipe. |
| foodOutput | string | The foodOutput of the recipe. You can get it from /ct sushigocrafting_food_ingredients |


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

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |


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

| Parameter | Type | Description |
|-----------|------|-------------|
| output | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


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

| Parameter | Type | Description |
|-----------|------|-------------|
| input | [IItemStack](/vanilla/api/item/IItemStack) | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
CuttingBoardManager.removeByModid(modid as string, exclude as Predicate<string>) as void
```

| Parameter | Type | Description | Optional | DefaultValue |
|-----------|------|-------------|----------|--------------|
| modid | string | No Description Provided | false |  |
| exclude | Predicate&lt;string&gt; | No Description Provided | true | (name as string) as bool => false |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
CuttingBoardManager.removeByName(name as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
CuttingBoardManager.removeByRegex(regex as string, exclude as Predicate<string>) as void
```

| Parameter | Type | Description | Optional | DefaultValue |
|-----------|------|-------------|----------|--------------|
| regex | string | No Description Provided | false |  |
| exclude | Predicate&lt;string&gt; | No Description Provided | true | (name as string) as bool => false |


:::


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| allRecipes | stdlib.List&lt;T&gt; | true | false | No Description Provided |
| recipeMap | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true | false | No Description Provided |

