# Incantatore

## Pacchetto

```zenscript
import mods.aether_legacy.Enchanter;
```
## Utilizzo

```zenscript
Enchanter.registerEnchantment(IItemStack input, IItemStack output, int timeRequired);
// riparazione di strumenti e roba
Enchanter.registerEnchantment(IItemStack repair, int timeRequired);
Enchanter.registerEnchanterFuel(IItemStack input, int timeGiven);
```