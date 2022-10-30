# Rotary

This class was added by a mod with mod-id `mekanism`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.mekanism.recipe.Rotary;
```

## Extending MekanismRecipeManager

Rotary extends [MekanismRecipeManager](/mods/Mekanism/recipe/MekanismRecipeManager). That means all
methods available in [MekanismRecipeManager](/mods/Mekanism/recipe/MekanismRecipeManager) are also
available in Rotary

## Methods

:::group{name=addJSONRecipe}

Return Type: void

```zenscript
Rotary.addJSONRecipe(name as string, data as IData) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |
| data | [IData](/vanilla/api/data/IData) | No Description Provided |

:::

:::group{name=addRecipe}

Adds a rotary recipe that converts a fluid into a gas. Rotary Condensers set to Decondensentrating
can process this recipe type.

Return Type: void

```zenscript
Rotary.addRecipe(name as string, fluidInput as FluidStackIngredient, gasOutput as GasStack) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | Name of the new recipe. |
| fluidInput | [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient) | [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient) representing the input of the recipe. |
| gasOutput | [GasStack](/mods/Mekanism/api/chemical/GasStack) | [GasStack](/mods/Mekanism/api/chemical/GasStack) representing the output of the recipe. |

:::

:::group{name=addRecipe}

Adds a rotary recipe that converts a gas into a fluid. Rotary Condensers set to Condensentrating can
process this recipe type.

Return Type: void

```zenscript
Rotary.addRecipe(name as string, gasInput as GasStackIngredient, fluidOutput as IFluidStack) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | Name of the new recipe. |
| gasInput | [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient) | [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient) representing the input of the recipe. |
| fluidOutput | [IFluidStack](/vanilla/api/fluid/IFluidStack) | [IFluidStack](/vanilla/api/fluid/IFluidStack) representing the output of the recipe. |

:::

:::group{name=addRecipe}

Adds a rotary recipe that is capable of converting a fluid into a gas and a gas into a fluid. Rotary
Condensers can process this recipe type, converting from fluid to gas when set to Decondensentrating
and converting from gas to fluid when set to Condensentrating.

Return Type: void

```zenscript
Rotary.addRecipe(name as string, fluidInput as FluidStackIngredient, gasInput as GasStackIngredient, gasOutput as GasStack, fluidOutput as IFluidStack) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | Name of the new recipe. |
| fluidInput | [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient) | [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient) representing the input of the recipe when converting from a fluid to a gas. |
| gasInput | [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient) | [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient) representing the input of the recipe when converting from a gas to a fluid. |
| gasOutput | [GasStack](/mods/Mekanism/api/chemical/GasStack) | [GasStack](/mods/Mekanism/api/chemical/GasStack) representing the output of the recipe when converting from a fluid to a gas. |
| fluidOutput | [IFluidStack](/vanilla/api/fluid/IFluidStack) | [IFluidStack](/vanilla/api/fluid/IFluidStack) representing the output of the recipe when converting from a gas to a fluid. |

:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
// Rotary.getAllRecipes() as stdlib.List<WrapperRecipe>

myRotary.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)

```zenscript
Rotary.getRecipeByName(name as string) as WrapperRecipe
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |

:::

:::group{name=getRecipeMap}

Return
Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)[[MCResourceLocation](/vanilla/api/util/MCResourceLocation)]

```zenscript
// Rotary.getRecipeMap() as WrapperRecipe[MCResourceLocation]

myRotary.getRecipeMap();
```

:::

:::group{name=removeAll}

Return Type: void

```zenscript
// Rotary.removeAll() as void

myRotary.removeAll();
```

:::

:::group{name=removeByModid}

Return Type: void

```zenscript
Rotary.removeByModid(modid as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| modid | string | No Description Provided |

:::

:::group{name=removeByModid}

Return Type: void

```zenscript
Rotary.removeByModid(modid as string, exclude as RecipeFilter) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| modid | string | No Description Provided |
| exclude | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |

:::

:::group{name=removeByName}

Return Type: void

```zenscript
Rotary.removeByName(name as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |

:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
Rotary.removeByRegex(regex as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| regex | string | No Description Provided |

:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
Rotary.removeByRegex(regex as string, exclude as RecipeFilter) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| regex | string | No Description Provided |
| exclude | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |

:::

:::group{name=removeRecipe}

Return Type: void

```zenscript
Rotary.removeRecipe(output as IItemStack) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| output | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |

:::

:::group{name=removeRecipeByInput}

Return Type: void

```zenscript
Rotary.removeRecipeByInput(input as IItemStack) as void
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

