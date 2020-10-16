# Freezer

## Package

```zenscript
Importer mods.aether_legacy.Congélateur;
```
## Usage

```zenscript
Freezer.registerFreezable(entrée IItemStack, sortie IItemStack, int timeRequired); // Ajoute une recette de congélateur, timeRequired est en ticks

Freezer. egisterFreezerFuel(IItemStack input, int timeGiven); // Ajoute un élément en tant que combustible congélateur, timeGiven est en ticks

// Nouveau dans 1. .2
Freezer.removeFreezable(IItemStack input); // Supprime les recettes du congélateur avec l'entrée donnée
```
