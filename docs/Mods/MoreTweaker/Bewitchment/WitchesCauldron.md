# Witches Cauldron

## Package
`moretweaker.bewitchment.WitchesCauldron`

## Addition

```zenscript
//moretweaker.bewitchment.WitchesCauldron.addRecipe(IItemStack[] outputs, IIngredient[] inputs);
moretweaker.bewitchment.WitchesCauldron.addRecipe([<minecraft:diamond>, <minecraft:dirt>], [<minecraft:sand>, <minecraft:gravel>]);

//moretweaker.bewitchment.WitchesCauldron.addBrew(IIngredient[] trigger, String potion, @Optional int duration, @Optional int amplifier);
moretweaker.bewitchment.WitchesCauldron.addBrew(<minecraft:diamond>, "minecraft:resistance", 200 /* 10 sec */, 2 /* 3 in game */);
```

## Removal

```zenscript
//moretweaker.bewitchment.WitchesCauldron.removeRecipe(IIngredient output);
moretweaker.bewitchment.WitchesCauldron.removeRecipe(<minecraft:slime_ball>);

moretweaker.bewitchment.WitchesCauldron.removeAllRecipes();

//moretweaker.bewitchment.WitchesCauldron.removeBrew(IIngredient trigger);
moretweaker.bewitchment.WitchesCauldron.removeBrew(<minecraft:spider_eye>);

moretweaker.bewitchment.WitchesCauldron.removeAllBrews();
`````