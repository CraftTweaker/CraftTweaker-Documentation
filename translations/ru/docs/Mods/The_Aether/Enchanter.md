# Чародей

## Пакет

```zenscript
import mods.aether_legacy.зачарование;
```
## Использование

```zenscript
Enchanter.registerEnchantment(IItemStack input, IItemStack output, int timeRequired);
// repair tools and stuff
Enchanter.registerEnchantment(IItemStack repair, int timeRequired);
Enchanter.registerEnchanterFuel(IItemStack input, int timeGiven);
```