# Forge Tartarique

## Paquet

`format@@0 mods.bloodmagic.TartaricForge`

## Ajouter

```zenscript
les entrées ont une taille maximale de 4
//mods.bloodmagic.TartaricForge.addRecipe(IItemStack, IItemStack[] entrées, double minSouls, double soulDrain);
mods. loodmagic.TartaricForge.addRecipe(<minecraft:diamond>,[<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>], 10,10);
```

## Retirer

```zenscript
inputs a une taille maximale de 4
//mods.bloodmagic.TartaricForge.removeRecipe(IItemStack[] entrées);
mods.bloodmagic.TartaricForge.removeRecipe([<minecraft:ghast_tear>,<minecraft:feather>, <minecraft:feather>]);
```