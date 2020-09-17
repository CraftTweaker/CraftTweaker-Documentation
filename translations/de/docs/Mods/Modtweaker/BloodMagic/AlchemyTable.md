# Alchemie-Tisch

## Paket

`mods.bloodmagic.AlchemyTable`

## Addition

```zenscript
inputs hat eine maximale Größe von 6
//mods.bloodmagic.AlchemyTable.addRecipe(IItemStack Output, IItemStack[] Inputs, int syphon, int ticks, int minTier);
mods. loodmagic.AlchemyTable.addRecipe(<minecraft:diamond>, [<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>], 20,10,0);
```

## Trank Zusatz

```zenscript
inputs haben eine maximale Größe von 5 für Katalysatoren (jedes Trank Container Objekt wird verworfen)
var pot = <potion:minecraft:strength>. akePotionEffect(6000, 1);
//mods.bloodmagic.AlchemyTable. ddPotionRecipe(IItemStack[] Eingänge, IPotionEffect Effects, int syphon, int ticks, int minTier)
mods.bloodmagic.AlchemyTable.addPotionRecipe([<bloodmagic:potion_flask>, <minecraft:carrot>,<minecraft:potato>], Pot, 20, 10, 0);
```

## Entfernen

```zenscript
inputs hat eine maximale Größe von 6
//mods.bloodmagic.AlchemyTable.removeRecipe(IItemStack[] Eingabe);
mods.bloodmagic.AlchemyTable.removeRecipe([<minecraft:carrot>,<minecraft:carrot>,<minecraft:carrot>,<minecraft:dye:15>]);
```

## Trank entfernen

Jede Entfernung wird als möglicher Trank betrachtet, wenn sie nicht mit einem Rezept im Register der API übereinstimmt.

```zenscript
//mods.bloodMagic.AlchemyTable.removeRecipe(IItemStack[] Eingänge);
mods.bloodmagic.AlchemyTable.removeRecipe([<minecraft:ghast_tear>, <bloodmagic:potion_flask>]);
```