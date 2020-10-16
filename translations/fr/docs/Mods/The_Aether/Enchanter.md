# Enchanter

## Package

```zenscript
Importer mods.aether_legacy.Enchanteur;
```
## Usage

```zenscript
Enchanter.registerEnchantment(entrée IItemStack, sortie IItemStack, int timeRequired); // Ajoute une recette d'enchanteur, le temps requis est en ticks

Enchanter. egisterEnchantment(IItemStack réparation, int timeRequired); // Ajoute un élément à réparer, le temps Requis est en ticks

Enchanter. egisterEnchanterFuel(IItemStack input, int timeGiven); // Ajoute un objet en tant que carburant à réparer, timeGiven est en ticks

// Nouveau dans 1. .2
Enchanter.removeEnchantment(IItemStack input); // Supprime les recettes d'enchanteur avec l'entrée donnée
```
