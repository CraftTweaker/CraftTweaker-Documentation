# Factoriseur

Le Factorizer Manager vous permet d'ajouter des recettes au factorisateur.

## Importer le paquet

Pour raccourcir les appels de méthode, vous pouvez [importer](/AdvancedFunctions/Import/) le paquet comme ceci :

```zenscript
Importer mods.thermalexpansion.Factorizer;
```

## Ajouter des recettes

Vous pouvez ajouter des recettes unidirectionnelles/combinées ou des reliures bidirectionnelles.

```zenscript
//mods.thermalexpansion.Factorizer.addRecipeSplit(IItemStack in, IItemStack out);
mods.thermalexpansion.Factorizer.addRecipeSplit(<minecraft:dirt>, <minecraft:grass> * 5);

//mods.thermalexpansion.Factorizer.addRecipeCombine(IItemStack in, IItemStack out);
mods. hermalexpansion.Factorizer.addRecipeCombine(<minecraft:grass> * 5, <minecraft:dirt>);

//mods.thermalexpansion.Factorizer.addRecipeBoth(IItemStack combined, IItemStack split);
mods.thermalexpansion.Factorizer.addRecipeBoth(<minecraft:trapped_chest>, <minecraft:chest> * 13);
```

## Supprimer les recettes

Vous pouvez bien sûr également supprimer des recettes.  
Si vous voulez supprimer une liaison bidirectionnelle, vous aurez cependant besoin de deux appels.

```zenscript
//mods.thermalexpansion.Factorizer.removeRecipeSplit(IItemStack in);
mods.thermalexpansion.Factorizer.removeRecipeSplit(<minecraft:iron_block>);

//mods.thermalexpansion.Factorizer.removeRecipeCombine(IItemStack in);
mods.thermalexpansion.Factorizer.removeRecipeCombine(<minecraft:iron_ingot> * 9);
```