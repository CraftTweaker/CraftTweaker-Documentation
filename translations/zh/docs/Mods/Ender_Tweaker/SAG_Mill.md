# SAG Mill

## Package

`import mods.enderio.SagMill;`

## Methods

- **[IItemStack](/Vanilla/Items/IItemStack/)[] output** The results of the recipe.
- **float[] chances** The chance that this item appears. Must have the same length as output.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** The input.
- **String bonusType** This impacts how Grinding Balls work. May be NONE (no bonus), MULTIPLY_OUTPUT (can increase chance > 1.0), and CHANCE_ONLY (caps chance at 1.0).
- **int energyCost** How much FE the recipe uses. Defaults to 5000.
- **float xp** The xp is granted from this recipe. May not be negative.

## 添加配方

    mods.enderio.SagMill.addRecipe(IItemStack[] output, float[] chances, IIngredient input, @Optional String bonusType, @Optional int energyCost, @Optional float[] xp);
    
    mods.enderio.SagMill.addRecipe([<minecraft:planks>], [100], <minecraft:log>);
    

## Removal

    mods.enderio.SagMill.removeRecipe(IItemStack input);
    
    mods.enderio.SagMill.removeRecipe(<minecraft:cobblestone>);