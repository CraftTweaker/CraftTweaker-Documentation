# Enchanter

## Package

```zenscript
importuj mods.aether_legacy.Zaklęcie;
```
## Usage

```zenscript
Enchanter.registerEnchantment(IItemStack input, IItemStack output, timeRequired); // Dodaj przepis na zaklęcia, timeWymagany jest w tickach

Zaklinanie. egisterEnchantment(IItemStack repair, int timeRequired); // Dodaj przedmiot do naprawy. Czas wymagany jest w tickach

Zaklęcie. egisterEnchanterFuel(IItemStack, timeGiven); // Dodaj przedmiot jako paliwo do naprawy, timeGiven jest w tickach

// Nowy w 1. .2
Enchanter.removeEnchantment(IItemStack input); // Usuwa przepisy dotyczące zaklęć za pomocą danych wejściowych
```
