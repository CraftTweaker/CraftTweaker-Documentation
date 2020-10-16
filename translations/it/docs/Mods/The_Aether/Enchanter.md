# Enchanter

## Package

```zenscript
import mods.aether_legacy.Enchanter;
```
## Usage

```zenscript
Enchanter.registerEnchantment(IItemStack input, IItemStack output, int timeRequired); // Aggiungi una ricetta incantatore, il tempo richiesto è in ticks

Enchanter. egisterEnchantment(IItemStack repair, int timeRequired); // Aggiungi un elemento da riparare, timeRequired is in ticks

Enchanter. egisterEnchanterFuel(IItemStack input, int timeGiven); // Aggiungi un elemento come carburante per la riparazione, tempoDato è in zecche

// Nuovo in 1. .2
Enchanter.removeEnchantment(IItemStack input); // Rimuove le ricette dell'incantatore con l'ingresso dato
```
