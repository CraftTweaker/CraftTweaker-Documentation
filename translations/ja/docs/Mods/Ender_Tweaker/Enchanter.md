# Enchanter

## Package

`import mods.enderio.Enchanter;`

## Methods

**- [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) output** The output enchantment.

**- [IIngredient](/Vanilla/Variable_Types/IIngredient/) input** The item that it used to make this enchantment.

**- int amountPerLevel** The number of input items per level of enchantment.

**- double costMultiplier** Used to modify how expensive the recipe is.

## Addition

    mods.enderio.Enchanter.addRecipe(IEnchantmentDefinition output, IIngredient input, int amountPerLevel, double costMultiplier);
    
    mods.enderio.Enchanter.addRecipe(<enchantment:minecraft:sharpness>, <minecraft:prismarine_shard>, 32, 60);
    

## Removal

    mods.enderio.Enchanter.removeRecipe(IEnchantmentDefinition output);
    
    mods.enderio.Enchanter.removeRecipe(<enchantment:minecraft:sharpness>);