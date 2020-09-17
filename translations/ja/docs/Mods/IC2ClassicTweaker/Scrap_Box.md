## スクラップボックス

## パッケージ

```zenscript
import mods.ic2.ScrapBox;
```

### メソッド

- 他の方法についての情報は [ScrapBox (IC2 Tweakerから)](/Mods/IC2Tweaker/Scrap_Box/) を参照してください。
- **[ItemStack](/Vanilla/Items/IItemStack/) アイテム** スクラップボックスドロッププールから削除されているエントリ。 他のすべてのネクタイのドロップ率が再計算される原因となります。

## ドロップを削除 (IItemStack)

```zenscript
    ScrapBox.removeDrop(IItemStack item);

    ScrapBox.removeDrop(<minecraft:nether_star>);
```
