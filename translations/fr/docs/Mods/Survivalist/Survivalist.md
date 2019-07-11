# Survivalist

## Chopping Block

### InputStack, OutputStack, {outputMultiplier}, {hitCountMultiplier}

    gigaherz.survivalist.Choppable.addRecipe(IIngredient input,  IItemStack output, outputMultiplier, hitCountMultiplier);

##### Example

    gigaherz.survivalist.Choppable.addRecipe(<minecraft:bone>,<minecraft:dye:15>, 1.0, 1.0);

### OutputStack, {InputStack}

    gigaherz.survivalist.Choppable.removeRecipe(IIngredient output, IIngredient input);

##### Example

    gigaherz.survivalist.Choppable.removeRecipe(<minecraft:stick>);

## Drying Rack

### InputStack, OutputStack, Time in Ticks

    gigaherz.survivalist.Dryable.addRecipe(IIngredient input, IItemStack output, int time);

##### Example

    gigaherz.survivalist.Dryable.addRecipe(<minecraft:rotten_flesh>, <minecraft:leather>, 300);

### OutputStack, {InputStack}

    gigaherz.survivalist.Dryable.removeRecipe(IIngredient output, IIngredient input);

##### Example

    gigaherz.survivalist.Dryable.removeRecipe(<minecraft:leather>, <minecraft:rotten_flesh>);

#### InputStack can be ore dictionary and anything surrounded by {} is optional