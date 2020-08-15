# レゾネーター

ModTweakerを使用すると、追加ユーティリティ2レゾネーターレシピを追加または削除できます。

## 発信中

`mods.extrautils2.Resonator` を使用して Resonator パッケージを呼び出すことができます。

## 削除中

```zenscript
//mods.extrautils2.Resonator.remove(IItemStack outout);
mods.extrautils2.Resonator.remove(<minecraft:redstone>);
```

## 加算

```zenscript
<br /><br />//1 GP = 100 energy
//mods.extrautils2.Resonator.add(IItemStack output, IItemStack input, int energy, @Optional boolean addOwnerTag);
mods.extrautils2.Resonator.add(<minecraft:redstone_block>, <minecraft:gold_block>, 100);
mods.extrautils2.Resonator.add(<minecraft:gold_block>, <minecraft:iron_block>, 200, false);
```