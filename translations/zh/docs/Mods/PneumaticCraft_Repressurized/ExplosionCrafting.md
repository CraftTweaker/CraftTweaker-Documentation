# Explosion Crafting

Explosion Crafting is used to transform one item into another by exposing it to an explosion when it is an item on the ground. A configurable (random) loss rate can be specified. By default, this is used to convert Iron Ingots into Compressed Iron Ingots with a 20% loss rate.

## 导入

You can call the Explosion Crafting package using `mods.pneumaticcraft.explosioncrafting`

## Removing

This function removes the first recipe it finds with the given [IIngredient](/Vanilla/Variable_Types/IIngredient/) `output`:

    mods.pneumaticcraft.explosioncrafting.removeRecipe(IIngredient output);
    // Example
    mods.pneumaticcraft.explosioncrafting.removeRecipe(<pneumaticcraft:ingot_iron_compressed>);
    

This function removes *all* Explosion Crafting recipes:

    mods.pneumaticcraft.explosioncrafting.removeAllRecipes();
    

## Adding

These functions are used to add new Explosion Crafting recipes:

    mods.pneumaticcraft.explosioncrafting.addRecipe(IItemStack input, IItemStack output, int loss_rate);
    mods.pneumaticcraft.explosioncrafting.addRecipe(IOreDictEntry input, IItemStack output, int loss_rate);
    
    // Example
    mods.pneumaticcraft.explosioncrafting.removeAllRecipes();
    // An expert-mode pack might make plain iron a very poor choice, and steel much better.
    mods.pneumaticcraft.explosioncrafting.addRecipe(<ore:ingotIron>, <pneumaticcraft:ingot_iron_compressed>, 95);
    mods.pneumaticcraft.explosioncrafting.addRecipe(<ore:ingotSteel>, <pneumaticcraft:ingot_iron_compressed>, 10);
    // A way to make lots of Nether Brick, for (on average) 4x the cost of Netherrack
    mods.pneumaticcraft.explosioncrafting.addRecipe(<ore:netherrack>, <minecraft:netherbrick>, 75);