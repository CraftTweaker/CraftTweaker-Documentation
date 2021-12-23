# FluidSlurryToSlurry

This class was added by a mod with mod-id `mekanism`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.mekanism.recipe.FluidSlurryToSlurry;
```

## Extending MekanismRecipeManager

FluidSlurryToSlurry extends [MekanismRecipeManager](/mods/Mekanism/recipe/MekanismRecipeManager).
That means all methods available
in [MekanismRecipeManager](/mods/Mekanism/recipe/MekanismRecipeManager) are also available in
FluidSlurryToSlurry

## Methods

:::group{name=addJSONRecipe}

Return Type: void

```zenscript
FluidSlurryToSlurry.addJSONRecipe(name as string, data as IData) as void
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
FluidSlurryToSlurry.addRecipe(name as string, fluidInput as FluidStackIngredient, slurryInput as SlurryStackIngredient, output as SlurryStack) as void
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
// FluidSlurryToSlurry.getAllRecipes() as stdlib.List<WrapperRecipe>

myFluidSlurryToSlurry.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)

```zenscript
FluidSlurryToSlurry.getRecipeByName(name as string) as WrapperRecipe
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |

:::

:::group{name=getRecipeMap}

Return
Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)[[MCResourceLocation](/vanilla/api/util/MCResourceLocation)]

```zenscript
// FluidSlurryToSlurry.getRecipeMap() as WrapperRecipe[MCResourceLocation]

myFluidSlurryToSlurry.getRecipeMap();
```

:::

:::group{name=removeAll}

Return Type: void

```zenscript
// FluidSlurryToSlurry.removeAll() as void

myFluidSlurryToSlurry.removeAll();
```

:::

:::group{name=removeByModid}

Return Type: void

```zenscript
FluidSlurryToSlurry.removeByModid(modid as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| modid | string | No Description Provided |

:::

:::group{name=removeByModid}

Return Type: void

```zenscript
FluidSlurryToSlurry.removeByModid(modid as string, exclude as RecipeFilter) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| modid | string | No Description Provided |
| exclude | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |

:::

:::group{name=removeByName}

Return Type: void

```zenscript
FluidSlurryToSlurry.removeByName(name as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |

:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
FluidSlurryToSlurry.removeByRegex(regex as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| regex | string | No Description Provided |

:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
FluidSlurryToSlurry.removeByRegex(regex as string, exclude as RecipeFilter) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| regex | string | No Description Provided |
| exclude | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |

:::

:::group{name=removeRecipe}

Return Type: void

```zenscript
FluidSlurryToSlurry.removeRecipe(output as IItemStack) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| output | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |

:::

:::group{name=removeRecipeByInput}

Return Type: void

```zenscript
FluidSlurryToSlurry.removeRecipeByInput(input as IItemStack) as void
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

