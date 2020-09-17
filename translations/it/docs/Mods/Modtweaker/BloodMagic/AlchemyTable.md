# Tabella Alchimia

## Pacchetto

`mods.blood magic.AlchemyTable`

## Addizione

```zenscript
gli input hanno una dimensione massima di 6
//mods.bloodmagic.AlchemyTable.addRecipe(IItemStack output, IItemStack[] inputs, int syphon, int ticks, int minTier);
mods. loodmagic.AlchemyTable.addRecipe(<minecraft:diamond>, [<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>], 20,10,0);
```

## Aggiunta pozione

```zenscript
gli ingressi hanno una dimensione massima di 5 per tenere conto dei catalizzatori (qualsiasi oggetto contenitore di pozioni viene scartato)
var pot = <potion:minecraft:strength>. akePotionEffect(6000, 1);
//mods.blood magic.AlchemyTable. ddPotionRecipe(IItemStack[] inputs, IPotionEffect effects int syphon, int ticks, int minTier)
mods.bloodmagic.AlchemyTable.addPotionRecipe([<bloodmagic:potion_flask>, <minecraft:carrot>,<minecraft:potato>], pot, 20, 10, 0);
```

## Rimozione

```zenscript
gli input hanno una dimensione massima di 6
//mods.bloodmagic.AlchemyTable.removeRecipe(IItemStack[] inputs);
mods.bloodmagic.AlchemyTable.removeRecipe([<minecraft:carrot>,<minecraft:carrot>,<minecraft:carrot>,<minecraft:dye:15>]);
```

## Eliminazione pozione

Qualsiasi rimozione è considerata come una pozione potenziale se non corrisponde a una ricetta nel registro API.

```zenscript
//mods.bloodMagic.AlchemyTable.removeRecipe(IItemStack[] inputs);
mods.bloodmagic.AlchemyTable.removeRecipe([<minecraft:ghast_tear>, <bloodmagic:potion_flask>]);
```