# Alchemy Table

## Package

`mods.bloodmagic.AlchemyTable`

## Addition

    inputs has a max size of 6
    //mods.bloodmagic.AlchemyTable.addRecipe(IItemStack output, IItemStack[] inputs, int syphon, int ticks, int minTier);
    mods.bloodmagic.AlchemyTable.addRecipe(<minecraft:diamond>, [<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>], 20,10,0);
    

## Potion addition

    inputs has a max size of 5 to account for catalysts (any potion container object is discarded)
    var pot = <potion:minecraft:strength>.makePotionEffect(6000, 1);
    //mods.bloodmagic.AlchemyTable.addPotionRecipe(IItemStack[] inputs, IPotionEffect effects, int syphon, int ticks, int minTier)
    mods.bloodmagic.AlchemyTable.addPotionRecipe([<bloodmagic:potion_flask>, <minecraft:carrot>,<minecraft:potato>], pot, 20, 10, 0);
    

## Removal

    inputs has a max size of 6
    //mods.bloodmagic.AlchemyTable.removeRecipe(IItemStack[] inputs);
    mods.bloodmagic.AlchemyTable.removeRecipe([<minecraft:carrot>,<minecraft:carrot>,<minecraft:carrot>,<minecraft:dye:15>]);
    

## Potion removal

Any removal is considered as a potential potion if it does not match a recipe in the API's registry.

``` //mods.bloodMagic.AlchemyTable.removeRecipe(IItemStack[] inputs); mods.bloodmagic.AlchemyTable.removeRecipe([<minecraft:ghast_tear>, <bloodmagic:potion_flask>]);