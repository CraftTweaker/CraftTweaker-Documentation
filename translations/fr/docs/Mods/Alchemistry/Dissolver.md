# Dissolver

## Package
`mods.alchemistry.Dissolver`

## Methods
- **[IItemStack](/Vanilla/Items/IItemStack/) input** - The input of the recipe.
- **boolean relativeProbability** - Probability Calculation Boolean
- **int rolls** -  Possibilty of Roles
- **probabilityGroups** - An array of arrays with an double followed by any # of [IItemStack](/Vanilla/Items/IItemStack/)s. The double refers to the probability for its group.

## Addition
```zenscript
mods.alchemistry.Dissolver.addRecipe(IIngredient input, boolean relativeProbability, int rolls, Object[][] probabilityGroups);
mods.alchemistry.Dissolver.addRecipe(<minecraft:dye:9>, false, 5,
[[10, <minecraft:stone>], 
 [20, <minecraft:sand>,<minecraft:iron_ore>]]);
```

## Removal
```zenscript
mods.alchemistry.Dissolver.removeRecipe(IIngredient input);
mods.alchemistry.Dissolver.removeRecipe(<minecraft:ender_pearl>);

mods.alchemistry.Dissolver.removeAllRecipes();
```

# Notes
To ease in the development of modifying existing dissolver recipes there is a command, simply /dissolver that will fetch the crafttweaker recipe for the item that you are holding and copy it into your clipboard

If relative probability is true, then each probability will be calculated based on the sum of all of the probabilities. In the example above that would mean there is a 33.3% chance of outputting stone each roll and a 66.6% chance of outputting a sand and an iron ore each roll.

If relative probability is false, then these numbers are absolute percentages i.e. a 10% chance of outputting stone and a 20% chance of outputting sand and iron ore (regardless of whether or not stone was outputted). Floating-point probabilities are supported, so 4.5 would mean 4.5%

