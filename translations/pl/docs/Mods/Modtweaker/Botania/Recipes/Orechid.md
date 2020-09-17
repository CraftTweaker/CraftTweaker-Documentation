# Orechid

Orechid jest używany do dodawania lub usuwania wygenerowanych rud do/z kwiatów Orechid Botanii.

## Dzwonienie

Możesz wywołać pakiet Orechid używając `mods.botania.Orechid`

## Znajdź wszystkie zarejestrowane przepisy

Wszystkie zarejestrowane przepisy Orechid można znaleźć używając [`/ct botorechid`](/Mods/Modtweaker/Botania/Commands/).

## Dodanie przepisu

Możesz dodać receptury używając zwróconego [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) jako parametru wyjściowego lub nazwy wspomnianego oreDictEntry jako ciągu.

```zenscript
//mods.botania.Orechid.addOre(IOreDictEntry oreDict, int weight);
mods.botania.Orechid.addOre(<ore:logWood>, 500);

//mods.botania.Orechid.addOre(String oreDict, int weight);
mods.botania.Orechid.addOre("logWood", 500);
```

## Usuwanie przepisów

Możesz usunąć przepisy używając zwróconego [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) jako parametru wyjściowego lub nazwy wspomnianego oreDictEntry jako ciągu.

```zenscript
//mods.botania.Orechid.removeOre(IOreDictEntry oreDict);
mods.botania.Orechid.removeOre(<ore:oreGold>);

//mods.botania.Orechid.removeOre(String oreDict);
mods.botania.Orechid.removeOre("oreGold");
```