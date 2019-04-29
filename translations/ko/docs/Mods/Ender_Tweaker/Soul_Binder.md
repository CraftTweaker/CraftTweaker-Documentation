# Soul Binder

## Package

`import mods.enderio.SoulBinder;`

## Method

- **[IItemStack](/Vanilla/Items/IItemStack/) output** The result of the recipe.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** The main (non-soul vial) ingredient.
- **String[] entities** Allowed entities that must be present in a soul vial for this recipe to work.
- **int xp** The Experience cost for this recipe
- **int energyCost** How much FE the recipe uses. Defaults to 5000.

## Addition

    mods.enderio.SoulBinder.addRecipe(IItemStack output, IIngredient input, String[] entities, int xp, int energyCost);
    
    mods.enderio.SoulBinder.addRecipe(<minecraft:nether_star>, <minecraft:bone>, ["minecraft:skeleton"], 50000);
    

## Removal

    mods.enderio.SoulBinder.removeRecipe(IItemStack output);
    
    mods.enderio.SoulBinder.removeRecipe(<enderio:item_material:19>);