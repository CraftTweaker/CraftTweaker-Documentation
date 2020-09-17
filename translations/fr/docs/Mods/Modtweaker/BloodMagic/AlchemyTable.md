# Table d'alchimie

## Paquet

`mods.bloodmagic.AlchemyTable`

## Ajouter

```zenscript
inputs a une taille maximale de 6
//mods.bloodmagic.AlchemyTable.addRecipe(IItemStack sortie, IItemStack[] entrées, int syphon, int ticks, int minTier);
mods. loodmagic.AlchemyTable.addRecipe(<minecraft:diamond>, [<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>], 20,10,0);
```

## Ajout de potions

```zenscript
les entrées ont une taille maximale de 5 pour tenir compte des catalyseurs (tout objet conteneur de potion est jeté)
var pot = <potion:minecraft:strength>. akePotionEffect(6000, 1);
//mods.bloodmagic.AlchemyTable. ddPotionRecipe(IItemStack[] entrées, Effets IPotionEffect, int syphon, int ticks, int minTier)
mods.bloodmagic.AlchemyTable.addPotionRecipe([<bloodmagic:potion_flask>, <minecraft:carrot>,<minecraft:potato>], pot, 20, 10, 0);
```

## Retirer

```zenscript
les entrées ont une taille maximale de 6
//mods.bloodmagic.AlchemyTable.removeRecipe(IItemStack[] entrées);
mods.bloodmagic.AlchemyTable.removeRecipe([<minecraft:carrot>,<minecraft:carrot>,<minecraft:carrot>,<minecraft:dye:15>]);
```

## Enlèvement de potions

Toute suppression est considérée comme une potion potentielle si elle ne correspond pas à une recette dans le registre de l'API.

```zenscript
//mods.bloodMagic.AlchemyTable.removeRecipe(IItemStack[] entrées);
mods.bloodmagic.AlchemyTable.removeRecipe([<minecraft:ghast_tear>, <bloodmagic:potion_flask>]);
```