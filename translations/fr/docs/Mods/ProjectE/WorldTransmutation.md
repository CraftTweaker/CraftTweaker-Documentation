# Transmutation du monde

## Ajouter

Ajoute une transmutation de monde de Philosopher Stone avec une transmutation de clic sournois optionnelle.

### [IItemStack](/Vanilla/Items/IItemStack/)

```zenscript
// Si les IItemStack n'ont pas de bloc corespondant, l'air est utilisé à la place.
mods.projecte.WorldTransmutation. dd(sortie IItemStack, entrée IItemStack, @Optional IItemStack sneakOutput);

// Transforme les blocs d'or en blocs de diamant par clic droit, ou en blocs de fer par un clic droit 
mod. rojecte.WorldTransmutation.add(<minecraft:diamond_block>, <minecraft:gold_block>, <minecraft:iron_block>);
```

### [État de l'IBlock](/Vanilla/Blocks/IBlockState/)

```zenscript
mods.projecte.WorldTransmutation. dd(sortie IBlockStatet, entrée IBlockStatet, @Optional IBlockState sneakOutput);

// Transforme les blocs d'or en blocs de diamant par clic droit, ou en blocs de fer par un clic droit
mod. rojecte.WorldTransmutation.add(<blockstate:minecraft:diamond_block>, <blockstate:minecraft:gold_block>, <blockstate:minecraft:iron_block>);
```

## Enlever

Supprime les transmutations du monde Philosopher Stone qui ont la même entrée, sortie et sneakOutput.

### [IItemStack](/Vanilla/Items/IItemStack/)

```zenscript
// Si les IItemStack n'ont pas de bloc corespondant, l'air est utilisé à la place.
mods.projecte.WorldTransmutation.remove(sortie IItemStack, entrée IItemStack, @Optional IItemStack sneakOutput);

// Supprime la recette qui permet de changer la pierre de taille en mods
d'herbe. rojecte.WorldTransmutation.remove(<minecraft:stone>, <minecraft:cobblestone>, <minecraft:grass>);
```

### [État de l'IBlock](/Vanilla/Blocks/IBlockState/)

```zenscript
mods.projecte.WorldTransmutation.remove(sortie IBlockStatet, entrée IBlockStatet, @Optional IBlockState sneakOutput);

// Supprime la recette permettant de changer la pierre de taille en mod
en mod. rojecte.WorldTransmutation.remove(<blockstate:minecraft:stone>, <blockstate:minecraft:cobblestone>, <blockstate:minecraft:grass>); 
```

## Retirer tout

Supprime toutes les transmutations du monde Philosopher Stone, y compris celles ajoutées par l'utilisateur avant l'appel à cette méthode.

```zenscript
mods.projecte.PhiloStone.removeAllWorldTransmutation();
```