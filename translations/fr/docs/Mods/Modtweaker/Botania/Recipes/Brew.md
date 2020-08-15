# Brassage de la Botanie

Le package de brassage est utilisé pour ajouter ou enlever des recettes vers/vers le stand de brassage Botanique.

## Appel en cours

Vous pouvez appeler le package Brew en utilisant `mods.botania.Brew`

## Noms de breuvage

Pour utiliser ce paquet, vous devez connaître les noms de brasseurs enregistrés par la botanique.  
Vous pouvez les trouver en utilisant [`/ct botbrews`](/Mods/Modtweaker/Botania/Commands/).

## Ajout de recette

```zenscript
//mods.botania.Brew.addRecipe(IIngredient[] entrée, String brewName);
mods.botania.Brew.addRecipe([<minecraft:nether_wart>, <minecraft:reeds>, <minecraft:redstone>], "speed");
```

## Suppression de la recette

```zenscript
//mods.botania.Brew.removeRecipe(String brewName);
mods.botania.Brew.removeRecipe("absorption");
```