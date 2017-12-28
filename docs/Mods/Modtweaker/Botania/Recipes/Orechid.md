# Orechid

The Orechid package is used for adding or removing generated ores to/from the Botania Orechid Flowers.

## Calling
You can call the Orechid package using `mods.botania.Orechid`

## Find all registered Recipes
You can find all registered ElvenTrade recipes using [`/ct botorechid`](/Mods/Modtweaker/Botania/Commands).

## Recipe addition

You can either add recipes using the returned [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry) as output parameter, or the name of said oreDictEntry as string.

```
//mods.botania.Orechid.addRecipe(IOreDictEntry oreDict, int weight);
mods.botania.Orechid.addRecipe(<ore:logWood>, 500);

//mods.botania.Orechid.addRecipe(String oreDict, int weight);
mods.botania.Orechid.addRecipe("logWood", 500);
```

## Recipe removal

You can either remove recipes using the returned [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry) as output parameter, or the name of said oreDictEntry as string.

```
//mods.botania.Orechid.removeRecipe(IOreDictEntry oreDict);
mods.botania.Orechid.removeRecipe(<ore:oreGold>);

//mods.botania.Orechid.removeRecipe(String oreDict);
mods.botania.Orechid.removeRecipe("oreGold");
```