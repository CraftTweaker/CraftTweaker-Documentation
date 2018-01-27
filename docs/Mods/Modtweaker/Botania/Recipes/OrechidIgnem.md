# Orechid Ignem

The OrechidIgnem package is used for adding or removing generated ores to/from the Botania Orechid Ignem Flowers.

## Calling
You can call the OrechidIgnem package using `mods.botania.OrechidIgnem`

## Recipe addition

You can either add recipes using the returned [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry) as output parameter, or the name of said oreDictEntry as string.

```
//mods.botania.OrechidIgnem.addOre(IOreDictEntry oreDict, int weight);
mods.botania.OrechidIgnem.addOre(<ore:logWood>, 500);

//mods.botania.OrechidIgnem.addOre(String oreDict, int weight);
mods.botania.OrechidIgnem.addOre("logWood", 500);
```

## Recipe removal

You can either remove recipes using the returned [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry) as output parameter, or the name of said oreDictEntry as string.

```
//mods.botania.OrechidIgnem.removeOre(IOreDictEntry oreDict);
mods.botania.OrechidIgnem.removeOre(<ore:oreGold>);

//mods.botania.OrechidIgnem.removeOre(String oreDict);
mods.botania.OrechidIgnem.removeOre("oreGold");
```