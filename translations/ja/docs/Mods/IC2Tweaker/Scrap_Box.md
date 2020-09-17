# スクラップボックス

## パッケージ

`import mods.ic2.ScrapBox;`

## メソッド

- **[WeightedItemStack](/Vanilla/Items/WeightedItemStack/) weitedItem** スクラップボックスドロッププールの新しいエントリ。 重量は100で割られます。
- **float weight** この新しいエントリの重量

### ドロップを追加 (重量アイテムスタック)

```zenscript
mods.ic2.ScrapBox.addDrop(WeightedItemStack weitedItem);

mods.ic2.ScrapBox.addDrop(<minecraft:diamond_ore>.weight(0.1));
mods.ic2.ScrapBox.addDrop(<minecraft:diamond_ore> % 10);
```

### ドロップを追加 (IItemStack, float)

```zenscript
mods.ic2.ScrapBox.addDrop(IItemStack item, float weight);
mods.ic2.ScrapBox.addDrop(<minecraft:diamond_ore>, 0.1F);
```

## 削除

- IC2 Classic Tweakerがインストールされていて、Ic2 Experimentalの代わりにIc2 Classicが使用されている場合、スクラップボックスのドロップを取り除くことができます。 ドキュメントについては [](/Mods/IC2ClassicTweaker/Scrap_Box) を参照してください。
- Ic2 Experimental を使用している場合、除去はできません。