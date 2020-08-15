# Grindstone

Vous pouvez utiliser CrT pour ajouter ou retirer des recettes de la meule AS.

## Appel en cours

Vous pouvez appeler le package InfusionRecipe en utilisant `mods.astralsorcery.Grindstone`.

## Enlèvement

Cela supprimera la première recette de broyage qu'elle trouve qui crée la sortie [IItemStack](/Vanilla/Items/IItemStack/) ``fournie.  
S'il y a plusieurs recettes qui retournent la sortie fournie, vous devez appeler cette méthode plusieurs fois !

```zenscript
//mods.astralsorcery.Grindstone.removeRecipe(IItemStack output);
mods.astralsorcery.Grindstone.removeRecipe(<minecraft:redstone>);
```

## Ajouter

```zenscript
//mods.astralsorcery.Grindstone.addRecipe(IItemStack input, IItemStack output);
mods.astralsorcery.Grindstone.addRecipe(<minecraft:stone>, <minecraft:gravel>);

//mods.astralsorcery.Grindstone.addRecipe(IItemStack input, IItemStack output, float doubleChance);
mods.astralsorcery.Grindstone.addRecipe(<minecraft:cobblestone>, <minecraft:gravel>, 0.5f);
```