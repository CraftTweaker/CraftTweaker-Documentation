# ItemApplicationManager



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.create.ItemApplicationManager;
```


## Implemented Interfaces
ItemApplicationManager implements the following interfaces. That means all methods defined in these interfaces are also available in ItemApplicationManager

- [IProcessingRecipeManager](/mods/createtweaker/IProcessingRecipeManager)&lt;[ItemApplicationRecipe](/mods/createtweaker/recipe/type/ItemApplicationRecipe)&gt;

## Methods

:::group{name=addJsonRecipe}

Return Type: void

```zenscript
ItemApplicationManager.addJsonRecipe(name as string, mapData as MapData) as void
```

| Parameter | Type                                 | Description             |
| --------- | ------------------------------------ | ----------------------- |
| name      | string                               | No Description Provided |
| mapData   | [MapData](/vanilla/api/data/MapData) | No Description Provided |


:::

:::group{name=addRecipe}

Adds a new item application recipe.

Return Type: void

```zenscript
// ItemApplicationManager.addRecipe(name as string, outputs as Percentaged<IItemStack>[], block as IIngredient, heldItem as IIngredient, keepHeldItem as boolean) as void

<recipetype:create:item_application>.addRecipe("name", [<item:minecraft:dirt> % 50, <item:minecraft:diamond>], <item:minecraft:diamond_block>, <item:minecraft:emerald>, true);
```

| Parameter    | Type                                                                                                                | Description                        | Optional | DefaultValue |
| ------------ | ------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | -------- | ------------ |
| name         | string                                                                                                              | The name of the recipe.            | false    |              |
| outputs      | [Percentaged](/vanilla/api/util/random/Percentaged)&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt;[] | The recipe outputs                 | false    |              |
| block        | [IIngredient](/vanilla/api/ingredient/IIngredient)                                                                  | The block to be applied on         | false    |              |
| heldItem     | [IIngredient](/vanilla/api/ingredient/IIngredient)                                                                  | The item that needs to be held     | false    |              |
| keepHeldItem | boolean                                                                                                             | Should the item be consumed or not | true     | false        |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// ItemApplicationManager.getAllRecipes() as stdlib.List<T>

<recipetype:create:item_application>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
ItemApplicationManager.getRecipeByName(name as string) as T
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| name      | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// ItemApplicationManager.getRecipeMap() as T[ResourceLocation]

<recipetype:create:item_application>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
ItemApplicationManager.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter | Type                                               | Description             |
| --------- | -------------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=registerRecipe}

Registers a recipe using a builder approach.

Return Type: void

```zenscript
ItemApplicationManager.registerRecipe(name as string, recipeBuilder as Consumer<ProcessingRecipeBuilder<T>>) as void
```

| Parameter     | Type                                                                                                                           | Description             |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| name          | string                                                                                                                         | The name of the recipe. |
| recipeBuilder | Consumer&lt;[ProcessingRecipeBuilder](/mods/createtweaker/recipe/ProcessingRecipeBuilder)&lt;T&gt;&gt; | The recipe builder.     |


:::

:::group{name=remove}

Return Type: void

```zenscript
ItemApplicationManager.remove(output as IIngredient) as void
```

| Parameter | Type                                               | Description             |
| --------- | -------------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=removeAll}

Return Type: void

```zenscript
// ItemApplicationManager.removeAll() as void

<recipetype:create:item_application>.removeAll();
```

:::

:::group{name=removeByInput}

Return Type: void

```zenscript
ItemApplicationManager.removeByInput(input as IItemStack) as void
```

| Parameter | Type                                       | Description             |
| --------- | ------------------------------------------ | ----------------------- |
| input     | [IItemStack](/vanilla/api/item/IItemStack) | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
ItemApplicationManager.removeByModid(modid as string, exclude as Predicate<string>) as void
```

| Parameter | Type                                | Description             | Optional | DefaultValue                      |
| --------- | ----------------------------------- | ----------------------- | -------- | --------------------------------- |
| modid     | string                              | No Description Provided | false    |                                   |
| exclude   | Predicate&lt;string&gt; | No Description Provided | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
ItemApplicationManager.removeByName(names as string[]) as void
```

| Parameter | Type     | Description             |
| --------- | -------- | ----------------------- |
| names     | string[] | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
ItemApplicationManager.removeByRegex(regex as string, exclude as Predicate<string>) as void
```

| Parameter | Type                                | Description             | Optional | DefaultValue                      |
| --------- | ----------------------------------- | ----------------------- | -------- | --------------------------------- |
| regex     | string                              | No Description Provided | false    |                                   |
| exclude   | Predicate&lt;string&gt; | No Description Provided | true     | (name as string) as bool => false |


:::


## Properties

| Name       | Type                                                          | Has Getter | Has Setter | Description             |
| ---------- | ------------------------------------------------------------- | ---------- | ---------- | ----------------------- |
| allRecipes | stdlib.List&lt;T&gt;                              | true       | false      | No Description Provided |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true       | false      | No Description Provided |

