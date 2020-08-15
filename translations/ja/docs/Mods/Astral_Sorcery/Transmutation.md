# スターライト変換

Starlight Transmutationsの追加と削除ができます。

## 発信中

`mods.astalsorcery.LightTransmutions` を使って LightTransmutations パッケージを呼び出すことができます。

## 削除中

This function removes the first recipe it finds that returns provided [IItemStack](/Vanilla/Items/IItemStack/) `output` and uses `matchStack` to determine whether it should also match Metadata.  
If there are multiple recipes that return the provided output, you need to call this method multiple times!

```zenscript
//mods.astalsorcery.LightTransmutation.removeTransmutation(IItemStack stackToRemove, boolean matchMeta);
mods.astalsorcery.LightTransmutation.removeTransmutation(<minecraft:end_stone>, false);
```

## 加算

```zenscript
//mods.astalsorcery.LightTransmutation.addTransmutation(IItemStack stackIn, IItemStack stackOut, double cost);
mods.astralsorcery.LightTransmutation.addTransmutation(<minecraft:grass>, <minecraft:gold_ore>, 10);
```