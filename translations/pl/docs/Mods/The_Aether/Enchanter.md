# Enchanter

## Pakiet

```zenscript
import mods.aether_legacy.Enchanter;
```
## Użycie

```zenscript
Enchanter.registerEnchantment(IItemStack input, IItemStack output, int timeRequired);
// repairing tools and stuff
Enchanter.registerEnchantment(IItemStack repair, int timeRequired);
Enchanter.registerEnchanterFuel(IItemStack input, int timeGiven);
```