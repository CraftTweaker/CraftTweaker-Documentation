# 発熱元

*ヒートソース* パッケージは、特定のマシン/プロセスに熱源を追加または除去するために使用されます。

**注意: これらの機能は、ブロックフォームを持つアイテムに対してのみ機能します!**

## 発信中

*mods.skyresources.heatotsource* を使用して `ヒートソース` パッケージを呼び出すことができます

## 熱源の追加

```zenscript
//mods.skyresources.heatsources.add(IItemStack stack, int heat Value);
mods.skyresources.heatotsources.add(<minecraft:ice>, 3);
```

## 熱源の除去

```zenscript
//mods.skyresources.heatotsources.remove(IItemStack output);
mods.skyresources.heatotsources.remove(<minecraft:obsidian>);
```