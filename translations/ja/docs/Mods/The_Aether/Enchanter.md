# エンチャンター

## パッケージ

```zenscript
import mods.aether_legacy.Enchanter;エンチャンター;
```
## 使用法

```zenscript
Enchanter.registerEnchantment(IItemStack input, IItemStack output, int timeRequired);
// ツールとものの修復
Enchanter.registerEnchantment(IItemStack repair, int timeRequired);
EnchanterFuel(IItemStack input, int timeGiven);
```