# Washing

This class was added by a mod with mod-id `mekanism`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.mekanism.recipe.FluidSlurryToSlurry.Washing;
```

## Extending FluidSlurryToSlurry

Washing extends [FluidSlurryToSlurry](/mods/Mekanism/recipe/FluidSlurryToSlurry). That means all
methods available in [FluidSlurryToSlurry](/mods/Mekanism/recipe/FluidSlurryToSlurry) are also
available in Washing

## Methods

:::group{name=addJSONRecipe}

Return Type: void

```zenscript
Washing.addJSONRecipe(name as string, data as IData) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |
| data | [IData](/vanilla/api/data/IData) | No Description Provided |

:::

:::group{name=addRecipe}

Adds a recipe that converts a fluid and slurry to another slurry.
<br>
If this is called from the washing recipe manager, this will be a washing recipe and able to be
processed in a chemical washer.

Return Type: void

```zenscript
Washing.addRecipe(name as string, fluidInput as FluidStackIngredient, slurryInput as SlurryStackIngredient, output as SlurryStack) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | Name of the new recipe. |
| fluidInput | [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient) | [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient) representing the fluid input of the recipe. |
| slurryInput | [SlurryStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/SlurryStackIngredient) | [SlurryStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/SlurryStackIngredient) representing the slurry input of the recipe. |
| output | [SlurryStack](/mods/Mekanism/api/chemical/SlurryStack) | [SlurryStack](/mods/Mekanism/api/chemical/SlurryStack) representing the output of the recipe. |

:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
// Washing.getAllRecipes() as stdlib.List<WrapperRecipe>

myWashing.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)

```zenscript
Washing.getRecipeByName(name as string) as WrapperRecipe
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |

:::

:::group{name=getRecipeMap}

Return
Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)[[MCResourceLocation](/vanilla/api/util/MCResourceLocation)]

```zenscript
// Washing.getRecipeMap() as WrapperRecipe[MCResourceLocation]

myWashing.getRecipeMap();
```

:::

:::group{name=removeAll}

Return Type: void

```zenscript
// Washing.removeAll() as void

myWashing.removeAll();
```

:::

:::group{name=removeByModid}

Return Type: void

```zenscript
Washing.removeByModid(modid as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| modid | string | No Description Provided |

:::

:::group{name=removeByModid}

Return Type: void

```zenscript
Washing.removeByModid(modid as string, exclude as RecipeFilter) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| modid | string | No Description Provided |
| exclude | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |

:::

:::group{name=removeByName}

Return Type: void

```zenscript
Washing.removeByName(name as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |

:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
Washing.removeByRegex(regex as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| regex | string | No Description Provided |

:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
Washing.removeByRegex(regex as string, exclude as RecipeFilter) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| regex | string | No Description Provided |
| exclude | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |

:::

:::group{name=removeRecipe}

Return Type: void

```zenscript
Washing.removeRecipe(output as IItemStack) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| output | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |

:::

:::group{name=removeRecipeByInput}

Return Type: void

```zenscript
Washing.removeRecipeByInput(input as IItemStack) as void
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

