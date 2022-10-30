# ChemicalInfusing

This class was added by a mod with mod-id `mekanism`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.mekanism.recipe.ChemicalInfusing;
```

## Extending MekanismRecipeManager

ChemicalInfusing extends [MekanismRecipeManager](/mods/Mekanism/recipe/MekanismRecipeManager). That
means all methods available in [MekanismRecipeManager](/mods/Mekanism/recipe/MekanismRecipeManager)
are also available in ChemicalInfusing

## Methods

:::group{name=addJSONRecipe}

Return Type: void

```zenscript
ChemicalInfusing.addJSONRecipe(name as string, data as IData) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |
| data | [IData](/vanilla/api/data/IData) | No Description Provided |

:::

:::group{name=addRecipe}

Adds a chemical infuser recipe that converts two gases into another gas. Chemical Infusers can
process this recipe type and the gases can be put in any order into the infuser.

Return Type: void

```zenscript
ChemicalInfusing.addRecipe(name as string, leftInput as GasStackIngredient, rightInput as GasStackIngredient, output as GasStack) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | Name of the new recipe. |
| leftInput | [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient) | [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient) representing the "left" gas input of the recipe. |
| rightInput | [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient) | [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient) representing the "right" gas input of the recipe. |
| output | [GasStack](/mods/Mekanism/api/chemical/GasStack) | [GasStack](/mods/Mekanism/api/chemical/GasStack) representing the output of the recipe. |

:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
// ChemicalInfusing.getAllRecipes() as stdlib.List<WrapperRecipe>

myChemicalInfusing.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)

```zenscript
ChemicalInfusing.getRecipeByName(name as string) as WrapperRecipe
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |

:::

:::group{name=getRecipeMap}

Return
Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)[[MCResourceLocation](/vanilla/api/util/MCResourceLocation)]

```zenscript
// ChemicalInfusing.getRecipeMap() as WrapperRecipe[MCResourceLocation]

myChemicalInfusing.getRecipeMap();
```

:::

:::group{name=removeAll}

Return Type: void

```zenscript
// ChemicalInfusing.removeAll() as void

myChemicalInfusing.removeAll();
```

:::

:::group{name=removeByModid}

Return Type: void

```zenscript
ChemicalInfusing.removeByModid(modid as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| modid | string | No Description Provided |

:::

:::group{name=removeByModid}

Return Type: void

```zenscript
ChemicalInfusing.removeByModid(modid as string, exclude as RecipeFilter) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| modid | string | No Description Provided |
| exclude | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |

:::

:::group{name=removeByName}

Return Type: void

```zenscript
ChemicalInfusing.removeByName(name as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |

:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
ChemicalInfusing.removeByRegex(regex as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| regex | string | No Description Provided |

:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
ChemicalInfusing.removeByRegex(regex as string, exclude as RecipeFilter) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| regex | string | No Description Provided |
| exclude | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |

:::

:::group{name=removeRecipe}

Return Type: void

```zenscript
ChemicalInfusing.removeRecipe(output as IItemStack) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| output | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |

:::

:::group{name=removeRecipeByInput}

Return Type: void

```zenscript
ChemicalInfusing.removeRecipeByInput(input as IItemStack) as void
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

