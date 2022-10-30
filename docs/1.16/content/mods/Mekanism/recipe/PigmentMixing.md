# PigmentMixing

This class was added by a mod with mod-id `mekanism`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.mekanism.recipe.PigmentMixing;
```

## Extending MekanismRecipeManager

PigmentMixing extends [MekanismRecipeManager](/mods/Mekanism/recipe/MekanismRecipeManager). That
means all methods available in [MekanismRecipeManager](/mods/Mekanism/recipe/MekanismRecipeManager)
are also available in PigmentMixing

## Methods

:::group{name=addJSONRecipe}

Return Type: void

```zenscript
PigmentMixing.addJSONRecipe(name as string, data as IData) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |
| data | [IData](/vanilla/api/data/IData) | No Description Provided |

:::

:::group{name=addRecipe}

Adds a pigment mixing recipe that converts two pigments into another pigment. Pigment mixers can
process this recipe type and the pigments can be put in any order into the mixer.

Return Type: void

```zenscript
PigmentMixing.addRecipe(name as string, leftInput as PigmentStackIngredient, rightInput as PigmentStackIngredient, output as PigmentStack) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | Name of the new recipe. |
| leftInput | [PigmentStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/PigmentStackIngredient) | [PigmentStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/PigmentStackIngredient) representing the "left" pigment input of the recipe. |
| rightInput | [PigmentStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/PigmentStackIngredient) | [PigmentStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/PigmentStackIngredient) representing the "right" pigment input of the recipe. |
| output | [PigmentStack](/mods/Mekanism/api/chemical/PigmentStack) | [PigmentStack](/mods/Mekanism/api/chemical/PigmentStack) representing the output of the recipe. |

:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
// PigmentMixing.getAllRecipes() as stdlib.List<WrapperRecipe>

myPigmentMixing.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)

```zenscript
PigmentMixing.getRecipeByName(name as string) as WrapperRecipe
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |

:::

:::group{name=getRecipeMap}

Return
Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)[[MCResourceLocation](/vanilla/api/util/MCResourceLocation)]

```zenscript
// PigmentMixing.getRecipeMap() as WrapperRecipe[MCResourceLocation]

myPigmentMixing.getRecipeMap();
```

:::

:::group{name=removeAll}

Return Type: void

```zenscript
// PigmentMixing.removeAll() as void

myPigmentMixing.removeAll();
```

:::

:::group{name=removeByModid}

Return Type: void

```zenscript
PigmentMixing.removeByModid(modid as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| modid | string | No Description Provided |

:::

:::group{name=removeByModid}

Return Type: void

```zenscript
PigmentMixing.removeByModid(modid as string, exclude as RecipeFilter) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| modid | string | No Description Provided |
| exclude | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |

:::

:::group{name=removeByName}

Return Type: void

```zenscript
PigmentMixing.removeByName(name as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |

:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
PigmentMixing.removeByRegex(regex as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| regex | string | No Description Provided |

:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
PigmentMixing.removeByRegex(regex as string, exclude as RecipeFilter) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| regex | string | No Description Provided |
| exclude | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |

:::

:::group{name=removeRecipe}

Return Type: void

```zenscript
PigmentMixing.removeRecipe(output as IItemStack) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| output | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |

:::

:::group{name=removeRecipeByInput}

Return Type: void

```zenscript
PigmentMixing.removeRecipeByInput(input as IItemStack) as void
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

