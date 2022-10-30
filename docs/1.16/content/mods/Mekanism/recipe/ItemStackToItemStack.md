# ItemStackToItemStack

This class was added by a mod with mod-id `mekanism`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.mekanism.recipe.ItemStackToItemStack;
```

## Extending MekanismRecipeManager

ItemStackToItemStack extends [MekanismRecipeManager](/mods/Mekanism/recipe/MekanismRecipeManager).
That means all methods available
in [MekanismRecipeManager](/mods/Mekanism/recipe/MekanismRecipeManager) are also available in
ItemStackToItemStack

## Methods

:::group{name=addJSONRecipe}

Return Type: void

```zenscript
ItemStackToItemStack.addJSONRecipe(name as string, data as IData) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |
| data | [IData](/vanilla/api/data/IData) | No Description Provided |

:::

:::group{name=addRecipe}

Adds a recipe that converts an item into another item.
<br>
If this is called from the crushing recipe manager, this will be a crushing recipe. Crushers and
Crushing Factories can process this recipe type.
<br>
If this is called from the enriching recipe manager, this will be an enriching recipe. Enrichment
Chambers and Enriching Factories can process this recipe type.
<br>
If this is called from the smelting recipe manager, this will be a smelting recipe. Energized
Smelters, Smelting Factories, and Robits can process this recipe type.

Return Type: void

```zenscript
ItemStackToItemStack.addRecipe(name as string, input as ItemStackIngredient, output as IItemStack) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | Name of the new recipe. |
| input | [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) | [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) representing the input of the recipe. |
| output | [IItemStack](/vanilla/api/items/IItemStack) | [IItemStack](/vanilla/api/items/IItemStack) representing the output of the recipe. |

:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
// ItemStackToItemStack.getAllRecipes() as stdlib.List<WrapperRecipe>

myItemStackToItemStack.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)

```zenscript
ItemStackToItemStack.getRecipeByName(name as string) as WrapperRecipe
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |

:::

:::group{name=getRecipeMap}

Return
Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)[[MCResourceLocation](/vanilla/api/util/MCResourceLocation)]

```zenscript
// ItemStackToItemStack.getRecipeMap() as WrapperRecipe[MCResourceLocation]

myItemStackToItemStack.getRecipeMap();
```

:::

:::group{name=removeAll}

Return Type: void

```zenscript
// ItemStackToItemStack.removeAll() as void

myItemStackToItemStack.removeAll();
```

:::

:::group{name=removeByModid}

Return Type: void

```zenscript
ItemStackToItemStack.removeByModid(modid as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| modid | string | No Description Provided |

:::

:::group{name=removeByModid}

Return Type: void

```zenscript
ItemStackToItemStack.removeByModid(modid as string, exclude as RecipeFilter) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| modid | string | No Description Provided |
| exclude | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |

:::

:::group{name=removeByName}

Return Type: void

```zenscript
ItemStackToItemStack.removeByName(name as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |

:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
ItemStackToItemStack.removeByRegex(regex as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| regex | string | No Description Provided |

:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
ItemStackToItemStack.removeByRegex(regex as string, exclude as RecipeFilter) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| regex | string | No Description Provided |
| exclude | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |

:::

:::group{name=removeRecipe}

Return Type: void

```zenscript
ItemStackToItemStack.removeRecipe(output as IItemStack) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| output | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |

:::

:::group{name=removeRecipeByInput}

Return Type: void

```zenscript
ItemStackToItemStack.removeRecipeByInput(input as IItemStack) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| input | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |

:::

## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| allRecipes | stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt; | true | false | No Description Provided |
| recipeMap | [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)[[MCResourceLocation](/vanilla/api/util/MCResourceLocation)] | true | false | No Description Provided |

