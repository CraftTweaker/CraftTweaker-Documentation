# Orechid Ignem

Le paquet OrechidIgnem est utilisé pour ajouter ou supprimer les minerais générés vers/de la Botania Orechid Ignem Flowers.

## Appel en cours

Vous pouvez appeler le paquet OrechidIgnem en utilisant `mods.botania.OrechidIgnem`

## Ajout de recette

You can either add recipes using the returned [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) as output parameter, or the name of said oreDictEntry as string.

```zenscript
//mods.botania.OrechidIgnem.addOre(IOreDictEntry oreDict, int weight);
mods.botania.OrechidIgnem.addOre(<ore:logWood>, 500);

//mods.botania.OrechidIgnem.addOre(String oreDict, int weight);
mods.botania.OrechidIgnem.addOre("logWood", 500);
```

## Suppression de la recette

Vous pouvez soit supprimer des recettes en utilisant le [IOreDictEntry retourné](/Vanilla/OreDict/IOreDictEntry/) en tant que paramètre de sortie, soit le nom de ladite oreDictEntry en tant que chaîne.

```zenscript
//mods.botania.OrechidIgnem.removeOre(IOreDictEntry oreDict);
mods.botania.OrechidIgnem.removeOre(<ore:oreGold>);

//mods.botania.OrechidIgnem.removeOre(String oreDict);
mods.botania.OrechidIgnem.removeOre("oreGold");
```