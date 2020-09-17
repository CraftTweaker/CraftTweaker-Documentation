# Orechid Ignem

Pakiet OrechidIgnem jest używany do dodawania lub usuwania wygenerowanych rud do/z Botania Orechid Ignem Flowerów.

## Dzwonienie

Możesz wywołać pakiet OrechidIgnem używając `mods.botania.OrechidIgnem`

## Dodanie przepisu

Możesz dodać receptury używając zwróconego [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) jako parametru wyjściowego lub nazwy wspomnianego oreDictEntry jako ciągu.

```zenscript
//mods.botania.OrechidIgnem.addOre(IOreDictEntry oreDict, int weight);
mods.botania.OrechidIgnem.addOre(<ore:logWood>, 500);

//mods.botania.OrechidIgnem.addOre(String oreDict, int weight);
mods.botania.OrechidIgnem.addOre("logWood", 500);
```

## Usuwanie przepisów

Możesz usunąć przepisy używając zwróconego [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) jako parametru wyjściowego lub nazwy wspomnianego oreDictEntry jako ciągu.

```zenscript
//mods.botania.OrechidIgnem.removeOre(IOreDictEntry oreDictRe);
mods.botania.OrechidIgnem.removeOre(<ore:oreGold>);

//mods.botania.OrechidIgnem.removeOre(String oreDict);
mods.botania.OrechidIgnem.removeOre("oreGold");
```