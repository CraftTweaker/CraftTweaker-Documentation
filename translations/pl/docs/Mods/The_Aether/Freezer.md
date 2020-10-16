# Freezer

## Package

```zenscript
importuj mods.aether_legacy.Zamrażarka;
```
## Usage

```zenscript
Freezer.registerFreezable(IItemStack inputt, IItemStack output, int timeRequired); // Dodaj przepis zamrażarki, wymagany czas jest w tickach

Freezer. egisterFreezerFuel(IItemStack inputt, int timeGiven); // Dodaj element jako paliwo zamrażalne, timeGiven jest w tickach

// Nowy w 1. .2
Freezer.removeFreezable(IItemStack input); // Usuwa przepisy zamrażarki z podanym wkładem
```
