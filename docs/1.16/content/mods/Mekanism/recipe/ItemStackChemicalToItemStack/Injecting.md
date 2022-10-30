# Injecting

This class was added by a mod with mod-id `mekanism`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.mekanism.recipe.ItemStackChemicalToItemStack.Injecting;
```

## Extending ItemStackChemicalToItemStack

Injecting extends [ItemStackChemicalToItemStack](/mods/Mekanism/recipe/ItemStackChemicalToItemStack)
. That means all methods available
in [ItemStackChemicalToItemStack](/mods/Mekanism/recipe/ItemStackChemicalToItemStack) are also
available in Injecting

## Methods

:::group{name=addJSONRecipe}

Return Type: void

```zenscript
Injecting.addJSONRecipe(name as string, data as IData) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |
| data | [IData](/vanilla/api/data/IData) | No Description Provided |

:::

:::group{name=addRecipe}

Adds a recipe that converts an item and a chemical into an item.
<br>
If this is called from the compressing recipe manager, this will be a compressing recipe and the
chemical input must be
a [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient)
that will be used at a constant rate over the duration of the recipe. Osmium Compressors and
Compressing Factories can process this recipe type.
<br>
If this is called from the injecting recipe manager, this will be an injecting recipe and the
chemical input must be
a [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient)
that will be used at a near constant rate over the duration of the recipe. Chemical Injection
Chambers and Injecting Factories can process this recipe type.
<br>
If this is called from the purifying recipe manager, this will be a purifying recipe and the
chemical input must be
a [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient)
that will be used at a near constant rate over the duration of the recipe. Purification Chambers and
Purifying Factories can process this recipe type.
<br>
If this is called from the metallurgic infusing recipe manager, this will be a metallurgic infusing
recipe and the chemical input must be an {

Return Type: void

```zenscript
Injecting.addRecipe(name as string, itemInput as ItemStackIngredient, chemicalInput as INGREDIENT, output as IItemStack) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | Name of the new recipe. |
| itemInput | [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) | [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) representing the item input of the recipe. |
| chemicalInput | INGREDIENT | [ChemicalStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient)&lt;CHEMICAL,STACK&gt; representing the chemical input of the recipe. The type of this chemical depends on the recipe manager it is <br />                       called from. |
| output | [IItemStack](/vanilla/api/items/IItemStack) | [IItemStack](/vanilla/api/items/IItemStack) representing the output of the recipe. |

:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
// Injecting.getAllRecipes() as stdlib.List<WrapperRecipe>

myInjecting.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)

```zenscript
Injecting.getRecipeByName(name as string) as WrapperRecipe
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |

:::

:::group{name=getRecipeMap}

Return
Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)[[MCResourceLocation](/vanilla/api/util/MCResourceLocation)]

```zenscript
// Injecting.getRecipeMap() as WrapperRecipe[MCResourceLocation]

myInjecting.getRecipeMap();
```

:::

:::group{name=removeAll}

Return Type: void

```zenscript
// Injecting.removeAll() as void

myInjecting.removeAll();
```

:::

:::group{name=removeByModid}

Return Type: void

```zenscript
Injecting.removeByModid(modid as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| modid | string | No Description Provided |

:::

:::group{name=removeByModid}

Return Type: void

```zenscript
Injecting.removeByModid(modid as string, exclude as RecipeFilter) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| modid | string | No Description Provided |
| exclude | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |

:::

:::group{name=removeByName}

Return Type: void

```zenscript
Injecting.removeByName(name as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |

:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
Injecting.removeByRegex(regex as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| regex | string | No Description Provided |

:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
Injecting.removeByRegex(regex as string, exclude as RecipeFilter) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| regex | string | No Description Provided |
| exclude | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |

:::

:::group{name=removeRecipe}

Return Type: void

```zenscript
Injecting.removeRecipe(output as IItemStack) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| output | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |

:::

:::group{name=removeRecipeByInput}

Return Type: void

```zenscript
Injecting.removeRecipeByInput(input as IItemStack) as void
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

