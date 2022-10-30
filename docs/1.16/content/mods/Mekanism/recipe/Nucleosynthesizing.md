# Nucleosynthesizing

This class was added by a mod with mod-id `mekanism`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.mekanism.recipe.Nucleosynthesizing;
```

## Extending MekanismRecipeManager

Nucleosynthesizing extends [MekanismRecipeManager](/mods/Mekanism/recipe/MekanismRecipeManager).
That means all methods available
in [MekanismRecipeManager](/mods/Mekanism/recipe/MekanismRecipeManager) are also available in
Nucleosynthesizing

## Methods

:::group{name=addJSONRecipe}

Return Type: void

```zenscript
Nucleosynthesizing.addJSONRecipe(name as string, data as IData) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |
| data | [IData](/vanilla/api/data/IData) | No Description Provided |

:::

:::group{name=addRecipe}

Adds a nucleosynthesizing recipe that uses a gas and massive amounts of energy to convert an item
into another item. Antiprotonic Nucleosynthesizers can process this recipe type.

Return Type: void

```zenscript
Nucleosynthesizing.addRecipe(name as string, itemInput as ItemStackIngredient, gasInput as GasStackIngredient, output as IItemStack, duration as int) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | Name of the new recipe. |
| itemInput | [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) | [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) representing the item input of the recipe. |
| gasInput | [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient) | [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient) representing the gas input of the recipe. |
| output | [IItemStack](/vanilla/api/items/IItemStack) | [IItemStack](/vanilla/api/items/IItemStack) representing the output of the recipe. |
| duration | int | Duration in ticks that it takes the recipe to complete. Must be greater than zero. |

:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
// Nucleosynthesizing.getAllRecipes() as stdlib.List<WrapperRecipe>

myNucleosynthesizing.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)

```zenscript
Nucleosynthesizing.getRecipeByName(name as string) as WrapperRecipe
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |

:::

:::group{name=getRecipeMap}

Return
Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)[[MCResourceLocation](/vanilla/api/util/MCResourceLocation)]

```zenscript
// Nucleosynthesizing.getRecipeMap() as WrapperRecipe[MCResourceLocation]

myNucleosynthesizing.getRecipeMap();
```

:::

:::group{name=removeAll}

Return Type: void

```zenscript
// Nucleosynthesizing.removeAll() as void

myNucleosynthesizing.removeAll();
```

:::

:::group{name=removeByModid}

Return Type: void

```zenscript
Nucleosynthesizing.removeByModid(modid as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| modid | string | No Description Provided |

:::

:::group{name=removeByModid}

Return Type: void

```zenscript
Nucleosynthesizing.removeByModid(modid as string, exclude as RecipeFilter) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| modid | string | No Description Provided |
| exclude | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |

:::

:::group{name=removeByName}

Return Type: void

```zenscript
Nucleosynthesizing.removeByName(name as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |

:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
Nucleosynthesizing.removeByRegex(regex as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| regex | string | No Description Provided |

:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
Nucleosynthesizing.removeByRegex(regex as string, exclude as RecipeFilter) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| regex | string | No Description Provided |
| exclude | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |

:::

:::group{name=removeRecipe}

Return Type: void

```zenscript
Nucleosynthesizing.removeRecipe(output as IItemStack) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| output | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |

:::

:::group{name=removeRecipeByInput}

Return Type: void

```zenscript
Nucleosynthesizing.removeRecipeByInput(input as IItemStack) as void
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

