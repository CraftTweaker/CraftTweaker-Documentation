# Enchanter

## Package

```zenscript
importieren mods.aether_legacy.Verzauberer;
```
## Usage

```zenscript
Enchanter.registerVerchantment(IItemStack-Eingabe, IItemStack-Ausgabe, Int Zeiterforder); // Verzaubererrezept hinzufügen, Zeitbedarf ist in Ticks

Verzauberer. egisterEnchantment(IItemStack Reparatur, Int Zeitvoraussetzung); // Element hinzufügen um repariert zu werden, Zeitbedarf in Ticks

Enchanter. egisterEnchanterFuel(IItemStack Eingang, Int timeGiven); // Element als Treibstoff zur Reparatur hinzufügen, Timegiven in Ticks

// Neu in 1. .2
Enchanter.removeEnchantment(IItemStack Eingang); // Entfernt Verzaubererrezepte mit der angegebenen Eingabe
```
