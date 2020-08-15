# Enchanter

## パッケージ

```zenscript
import mods.aether_legacy.Enchanter;Enchanter;
```
## 使用法

```zenscript
Enchanter.registerEnchantment(IItemStack input, IItemStack output, int timeRequired);
// repairing tools and stuff
Enchanter.registerEnchantment(IItemStack repair, int timeRequired);
Enchanter.registerEnchanterFuel(IItemStack input, int timeGiven);
```