# Orechid

Le paquet Orechid est utilisé pour ajouter ou supprimer les minerais générés vers/depuis les fleurs Botania Orechid.

## Appel en cours

Vous pouvez appeler le paquet Orechid en utilisant `mods.botania.Orechid`

## Trouver toutes les recettes enregistrées

Vous pouvez trouver toutes les recettes Orechid enregistrées en utilisant [`/ct botorechid`](/Mods/Modtweaker/Botania/Commands/).

## Ajout de recette

You can either add recipes using the returned [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) as output parameter, or the name of said oreDictEntry as string.

```zenscript
//mods.botania.Orechid.addOre(IOreDictEntry oreDict, int weight);
mods.botania.Orechid.addOre(<ore:logWood>, 500);

//mods.botania.Orechid.addOre(String oreDict, int weight);
mods.botania.Orechid.addOre("logWood", 500);
```

## Suppression de la recette

Vous pouvez soit supprimer des recettes en utilisant le [IOreDictEntry retourné](/Vanilla/OreDict/IOreDictEntry/) en tant que paramètre de sortie, soit le nom de ladite oreDictEntry en tant que chaîne.

```zenscript
//mods.botania.Orechid.removeOre(IOreDictEntry oreDict);
mods.botania.Orechid.removeOre(<ore:oreGold>);

//mods.botania.Orechid.removeOre(String oreDict);
mods.botania.Orechid.removeOre("oreGold");
```