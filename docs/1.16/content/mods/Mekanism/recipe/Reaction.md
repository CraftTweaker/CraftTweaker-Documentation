# Reaction

This class was added by a mod with mod-id `mekanism`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.mekanism.recipe.Reaction;
```

## Extending MekanismRecipeManager

Reaction extends [MekanismRecipeManager](/mods/Mekanism/recipe/MekanismRecipeManager). That means
all methods available in [MekanismRecipeManager](/mods/Mekanism/recipe/MekanismRecipeManager) are
also available in Reaction

## Methods

:::group{name=addJSONRecipe}

Return Type: void

```zenscript
Reaction.addJSONRecipe(name as string, data as IData) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |
| data | [IData](/vanilla/api/data/IData) | No Description Provided |

:::

:::group{name=addRecipe}

Adds a reaction recipe that converts an item, fluid, and gas into another gas. Pressurized Reaction
Chambers can process this recipe type.

Return Type: void

```zenscript
Reaction.addRecipe(name as string, inputSolid as ItemStackIngredient, inputFluid as FluidStackIngredient, inputGas as GasStackIngredient, duration as int, outputGas as GasStack, energyRequired as FloatingLong) as void
```

| Parameter | Type | Description | Optional | DefaultValue |
|-----------|------|-------------|----------|--------------|
| name | string | Name of the new recipe. | false |  |
| inputSolid | [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) | [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) representing the item input of the recipe. | false |  |
| inputFluid | [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient) | [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient) representing the fluid input of the recipe. | false |  |
| inputGas | [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient) | [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient) representing the gas input of the recipe. | false |  |
| duration | int | Base duration in ticks that this recipe takes to complete. Must be greater than zero. | false |  |
| outputGas | [GasStack](/mods/Mekanism/api/chemical/GasStack) | [GasStack](/mods/Mekanism/api/chemical/GasStack) representing the gas output of the recipe. | false |  |
| energyRequired | [FloatingLong](/mods/Mekanism/api/FloatingLong) | Optional value representing how much "extra" energy this recipe requires, compared to the base energy requirements of the machine performing <br />                        the recipe. Defaults to zero. | true | 0 as mods.mekanism.api.FloatingLong |

:::

:::group{name=addRecipe}

Adds a reaction recipe that converts an item, fluid, and gas into another item. Pressurized Reaction
Chambers can process this recipe type.

Return Type: void

```zenscript
Reaction.addRecipe(name as string, inputSolid as ItemStackIngredient, inputFluid as FluidStackIngredient, inputGas as GasStackIngredient, duration as int, outputItem as IItemStack, energyRequired as FloatingLong) as void
```

| Parameter | Type | Description | Optional | DefaultValue |
|-----------|------|-------------|----------|--------------|
| name | string | Name of the new recipe. | false |  |
| inputSolid | [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) | [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) representing the item input of the recipe. | false |  |
| inputFluid | [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient) | [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient) representing the fluid input of the recipe. | false |  |
| inputGas | [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient) | [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient) representing the gas input of the recipe. | false |  |
| duration | int | Base duration in ticks that this recipe takes to complete. Must be greater than zero. | false |  |
| outputItem | [IItemStack](/vanilla/api/items/IItemStack) | [IItemStack](/vanilla/api/items/IItemStack) representing the item output of the recipe. | false |  |
| energyRequired | [FloatingLong](/mods/Mekanism/api/FloatingLong) | Optional value representing how much "extra" energy this recipe requires, compared to the base energy requirements of the machine performing <br />                        the recipe. Defaults to zero. | true | 0 as mods.mekanism.api.FloatingLong |

:::

:::group{name=addRecipe}

Adds a reaction recipe that converts an item, fluid, and gas into another item and gas. Pressurized
Reaction Chambers can process this recipe type.

Return Type: void

```zenscript
Reaction.addRecipe(name as string, inputSolid as ItemStackIngredient, inputFluid as FluidStackIngredient, inputGas as GasStackIngredient, duration as int, outputItem as IItemStack, outputGas as GasStack, energyRequired as FloatingLong) as void
```

| Parameter | Type | Description | Optional | DefaultValue |
|-----------|------|-------------|----------|--------------|
| name | string | Name of the new recipe. | false |  |
| inputSolid | [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) | [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) representing the item input of the recipe. | false |  |
| inputFluid | [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient) | [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient) representing the fluid input of the recipe. | false |  |
| inputGas | [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient) | [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient) representing the gas input of the recipe. | false |  |
| duration | int | Base duration in ticks that this recipe takes to complete. Must be greater than zero. | false |  |
| outputItem | [IItemStack](/vanilla/api/items/IItemStack) | [IItemStack](/vanilla/api/items/IItemStack) representing the item output of the recipe. | false |  |
| outputGas | [GasStack](/mods/Mekanism/api/chemical/GasStack) | [GasStack](/mods/Mekanism/api/chemical/GasStack) representing the gas output of the recipe. | false |  |
| energyRequired | [FloatingLong](/mods/Mekanism/api/FloatingLong) | Optional value representing how much "extra" energy this recipe requires, compared to the base energy requirements of the machine performing <br />                        the recipe. Defaults to zero. | true | 0 as mods.mekanism.api.FloatingLong |

:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
// Reaction.getAllRecipes() as stdlib.List<WrapperRecipe>

myReaction.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)

```zenscript
Reaction.getRecipeByName(name as string) as WrapperRecipe
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |

:::

:::group{name=getRecipeMap}

Return
Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)[[MCResourceLocation](/vanilla/api/util/MCResourceLocation)]

```zenscript
// Reaction.getRecipeMap() as WrapperRecipe[MCResourceLocation]

myReaction.getRecipeMap();
```

:::

:::group{name=removeAll}

Return Type: void

```zenscript
// Reaction.removeAll() as void

myReaction.removeAll();
```

:::

:::group{name=removeByModid}

Return Type: void

```zenscript
Reaction.removeByModid(modid as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| modid | string | No Description Provided |

:::

:::group{name=removeByModid}

Return Type: void

```zenscript
Reaction.removeByModid(modid as string, exclude as RecipeFilter) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| modid | string | No Description Provided |
| exclude | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |

:::

:::group{name=removeByName}

Return Type: void

```zenscript
Reaction.removeByName(name as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |

:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
Reaction.removeByRegex(regex as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| regex | string | No Description Provided |

:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
Reaction.removeByRegex(regex as string, exclude as RecipeFilter) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| regex | string | No Description Provided |
| exclude | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |

:::

:::group{name=removeRecipe}

Return Type: void

```zenscript
Reaction.removeRecipe(output as IItemStack) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| output | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |

:::

:::group{name=removeRecipeByInput}

Return Type: void

```zenscript
Reaction.removeRecipeByInput(input as IItemStack) as void
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

