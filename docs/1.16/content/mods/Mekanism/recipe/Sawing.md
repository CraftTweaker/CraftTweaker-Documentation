# Sawing

This class was added by a mod with mod-id `mekanism`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.mekanism.recipe.Sawing;
```

## Extending MekanismRecipeManager

Sawing extends [MekanismRecipeManager](/mods/Mekanism/recipe/MekanismRecipeManager). That means all
methods available in [MekanismRecipeManager](/mods/Mekanism/recipe/MekanismRecipeManager) are also
available in Sawing

## Methods

:::group{name=addJSONRecipe}

Return Type: void

```zenscript
Sawing.addJSONRecipe(name as string, data as IData) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |
| data | [IData](/vanilla/api/data/IData) | No Description Provided |

:::

:::group{name=addRecipe}

Adds a sawing recipe that converts an item into another item with no secondary output. Precision
Sawmills and Sawing Factories can process this recipe type.

Return Type: void

```zenscript
Sawing.addRecipe(name as string, input as ItemStackIngredient, mainOutput as IItemStack) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | Name of the new recipe. |
| input | [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) | [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) representing the input of the recipe. |
| mainOutput | [IItemStack](/vanilla/api/items/IItemStack) | [IItemStack](/vanilla/api/items/IItemStack) representing the main output of the recipe. |

:::

:::group{name=addRecipe}

Adds a sawing recipe that converts an item into a chance based item output. Precision Sawmills and
Sawing Factories can process this recipe type.

Return Type: void

```zenscript
Sawing.addRecipe(name as string, input as ItemStackIngredient, secondaryOutput as MCWeightedItemStack) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | Name of the new recipe. |
| input | [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) | [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) representing the input of the recipe. |
| secondaryOutput | [MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack) | [MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack) representing the secondary chance based output of the recipe and the chance that it is produced. |

:::

:::group{name=addRecipe}

Adds a sawing recipe that converts an item into another item and a chance based secondary item.
Precision Sawmills and Sawing Factories can process this recipe type.

Return Type: void

```zenscript
Sawing.addRecipe(name as string, input as ItemStackIngredient, mainOutput as IItemStack, secondaryOutput as MCWeightedItemStack) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | Name of the new recipe. |
| input | [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) | [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) representing the input of the recipe. |
| mainOutput | [IItemStack](/vanilla/api/items/IItemStack) | [IItemStack](/vanilla/api/items/IItemStack) representing the main output of the recipe. |
| secondaryOutput | [MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack) | [MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack) representing the secondary chance based output of the recipe and the chance that it is produced. |

:::

:::group{name=addRecipe}

Adds a sawing recipe that converts an item into a chance based item output. Precision Sawmills and
Sawing Factories can process this recipe type.

Return Type: void

```zenscript
Sawing.addRecipe(name as string, input as ItemStackIngredient, secondaryOutput as IItemStack, secondaryChance as double) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | Name of the new recipe. |
| input | [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) | [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) representing the input of the recipe. |
| secondaryOutput | [IItemStack](/vanilla/api/items/IItemStack) | [IItemStack](/vanilla/api/items/IItemStack) representing the secondary chance based output of the recipe. |
| secondaryChance | double | Chance of the secondary output being produced. This must be a number greater than zero and at most one. |

:::

:::group{name=addRecipe}

Adds a sawing recipe that converts an item into another item and a chance based secondary item.
Precision Sawmills and Sawing Factories can process this recipe type.

Return Type: void

```zenscript
Sawing.addRecipe(name as string, input as ItemStackIngredient, mainOutput as IItemStack, secondaryOutput as IItemStack, secondaryChance as double) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | Name of the new recipe. |
| input | [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) | [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) representing the input of the recipe. |
| mainOutput | [IItemStack](/vanilla/api/items/IItemStack) | [IItemStack](/vanilla/api/items/IItemStack) representing the main output of the recipe. |
| secondaryOutput | [IItemStack](/vanilla/api/items/IItemStack) | [IItemStack](/vanilla/api/items/IItemStack) representing the secondary chance based output of the recipe. |
| secondaryChance | double | Chance of the secondary output being produced. This must be a number greater than zero and at most one. |

:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
// Sawing.getAllRecipes() as stdlib.List<WrapperRecipe>

mySawing.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)

```zenscript
Sawing.getRecipeByName(name as string) as WrapperRecipe
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |

:::

:::group{name=getRecipeMap}

Return
Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)[[MCResourceLocation](/vanilla/api/util/MCResourceLocation)]

```zenscript
// Sawing.getRecipeMap() as WrapperRecipe[MCResourceLocation]

mySawing.getRecipeMap();
```

:::

:::group{name=removeAll}

Return Type: void

```zenscript
// Sawing.removeAll() as void

mySawing.removeAll();
```

:::

:::group{name=removeByModid}

Return Type: void

```zenscript
Sawing.removeByModid(modid as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| modid | string | No Description Provided |

:::

:::group{name=removeByModid}

Return Type: void

```zenscript
Sawing.removeByModid(modid as string, exclude as RecipeFilter) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| modid | string | No Description Provided |
| exclude | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |

:::

:::group{name=removeByName}

Return Type: void

```zenscript
Sawing.removeByName(name as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |

:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
Sawing.removeByRegex(regex as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| regex | string | No Description Provided |

:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
Sawing.removeByRegex(regex as string, exclude as RecipeFilter) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| regex | string | No Description Provided |
| exclude | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |

:::

:::group{name=removeRecipe}

Return Type: void

```zenscript
Sawing.removeRecipe(output as IItemStack) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| output | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |

:::

:::group{name=removeRecipeByInput}

Return Type: void

```zenscript
Sawing.removeRecipeByInput(input as IItemStack) as void
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

