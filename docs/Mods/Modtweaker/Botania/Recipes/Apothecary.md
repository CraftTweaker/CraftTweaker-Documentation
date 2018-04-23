# Petal Apothecary

The Apothecary package is used for adding or removing recipes to/from the Botania Petal Apothecary.

## Calling
You can call the Apothecary package using `mods.botania.Apothecary`

## Recipe addition

You can either add recipes using the returned [IItemStack](/Vanilla/Items/IItemStack) as output parameter, or the name of the botania flower as string. the string name only works for botania flowers.  
Remember one thing though:  
The Apothecary is **hardcoded to only accept petals**, so while you can add recipes with any ingredients, you should only use items that you can throw in the apothecary.

```
//mods.botania.Apothecary.addRecipe(IItemStack output, IIngredient[] input);
mods.botania.Apothecary.addRecipe(<minecraft:melon>, [<ore:petalLime>, <ore:petalLime>, <ore:petalLime>]);

//mods.botania.Apothecary.addRecipe(String output, IIngredient[] input);
mods.botania.Apothecary.addRecipe("daybloom", [<ore:petalLime>, <ore:petalLime>, <ore:petalLime>, <ore:petalRed>]);
```

## Recipe removal

You can either remove recipes using the returned [IItemStack](/Vanilla/Items/IItemStack) as output parameter, or the name of the botania flower as string. the string name only works for botania flowers.

```
//mods.botania.Apothecary.removeRecipe(IItemStack output);
mods.botania.Apothecary.removeRecipe(<minecraft:melon>);

//mods.botania.Apothecary.removeRecipe(String output);
mods.botania.Apothecary.removeRecipe("daybloom");
```