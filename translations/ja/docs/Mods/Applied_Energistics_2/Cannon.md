# キャノン

### インポート中

```zenscript
import mods.appledenergistics2.Cannon;
```

### 追加中

マターキャノンの弾薬タイプを追加します。 重量は、材料の(大体)原子量を指します。

```zenscript
Cannon.registerAmmo(IItemStack ammo, double weight);

Cannon.registerAmmo(<minecraft:bone>, 40.07);
```