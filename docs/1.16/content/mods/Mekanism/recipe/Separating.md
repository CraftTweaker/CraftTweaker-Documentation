# Separating

This class was added by a mod with mod-id `mekanism`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.mekanism.recipe.Separating;
```

## Extending MekanismRecipeManager

Separating extends [MekanismRecipeManager](/mods/Mekanism/recipe/MekanismRecipeManager). That means
all methods available in [MekanismRecipeManager](/mods/Mekanism/recipe/MekanismRecipeManager) are
also available in Separating

## Methods

:::group{name=addJSONRecipe}

Return Type: void

```zenscript
Separating.addJSONRecipe(name as string, data as IData) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |
| data | [IData](/vanilla/api/data/IData) | No Description Provided |

:::

:::group{name=addRecipe}

Adds a separating recipe that separates a fluid into two gases. Electrolytic Separators can process
this recipe type.

Return Type: void

```zenscript
Separating.addRecipe(name as string, input as FluidStackIngredient, leftGasOutput as GasStack, rightGasOutput as GasStack, energyMultiplier as FloatingLong) as void
```

| Parameter | Type | Description | Optional | DefaultValue |
|-----------|------|-------------|----------|--------------|
| name | string | Name of the new recipe. | false |  |
| input | [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient) | [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient) representing the input of the recipe. | false |  |
| leftGasOutput | [GasStack](/mods/Mekanism/api/chemical/GasStack) | [GasStack](/mods/Mekanism/api/chemical/GasStack) representing the left output of the recipe. | false |  |
| rightGasOutput | [GasStack](/mods/Mekanism/api/chemical/GasStack) | [GasStack](/mods/Mekanism/api/chemical/GasStack) representing the right output of the recipe. | false |  |
| energyMultiplier | [FloatingLong](/mods/Mekanism/api/FloatingLong) | Optional value representing the multiplier to the energy cost in relation to the configured hydrogen separating energy cost. If this is not <br />                          specified it will default to one. If this value is specified it must be greater than or equal to one. | true | 1 as mods.mekanism.api.FloatingLong |

:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
// Separating.getAllRecipes() as stdlib.List<WrapperRecipe>

mySeparating.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)

```zenscript
Separating.getRecipeByName(name as string) as WrapperRecipe
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |

:::

:::group{name=getRecipeMap}

Return
Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)[[MCResourceLocation](/vanilla/api/util/MCResourceLocation)]

```zenscript
// Separating.getRecipeMap() as WrapperRecipe[MCResourceLocation]

mySeparating.getRecipeMap();
```

:::

:::group{name=removeAll}

Return Type: void

```zenscript
// Separating.removeAll() as void

mySeparating.removeAll();
```

:::

:::group{name=removeByModid}

Return Type: void

```zenscript
Separating.removeByModid(modid as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| modid | string | No Description Provided |

:::

:::group{name=removeByModid}

Return Type: void

```zenscript
Separating.removeByModid(modid as string, exclude as RecipeFilter) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| modid | string | No Description Provided |
| exclude | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |

:::

:::group{name=removeByName}

Return Type: void

```zenscript
Separating.removeByName(name as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |

:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
Separating.removeByRegex(regex as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| regex | string | No Description Provided |

:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
Separating.removeByRegex(regex as string, exclude as RecipeFilter) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| regex | string | No Description Provided |
| exclude | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |

:::

:::group{name=removeRecipe}

Return Type: void

```zenscript
Separating.removeRecipe(output as IItemStack) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| output | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |

:::

:::group{name=removeRecipeByInput}

Return Type: void

```zenscript
Separating.removeRecipeByInput(input as IItemStack) as void
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

