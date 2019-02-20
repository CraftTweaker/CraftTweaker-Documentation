# Alloy Smelter

## Package

`import mods.enderio.AlloySmelter;`

## Methods

- **[IItemStack](/Vanilla/Items/IItemStack/) output** The result of the recipe.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/)[] input** The ingredients. Must be between 1 and 3 ingredients.
- **int energyCost** How much FE the recipe uses. Defaults to 5000.
- **float xp** The xp is granted from this recipe. May not be negative.

## Addition

    mods.enderio.AlloySmelter.addRecipe(IItemStack output, IIngredient[] input, @Optional int energyCost, @Optional float xp);
    
    mods.enderio.AlloySmelter.addRecipe(<minecraft:iron_ingot>, [<minecraft:sand>, <minecraft:gravel>, <minecraft:brick>]);
    

## Removal

    mods.enderio.AlloySmelter.removeRecipe(IItemStack output);
    
    mods.enderio.AlloySmelter.removeRecipe(<enderio:item_alloy_ingot:7>);