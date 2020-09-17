# クラッシャー

ModTweakerを使用すると、2つのクラッシャーレシピを追加または削除できます。

## 発信中

`mods.extrautils2.Crusher` を使ってクラッシャーパッケージを呼び出すことができます。

## 削除中

```zenscript
//mods.extraautils2.Crusher.remove(IItemStack outout);
mods.extraautils2.Crusher.remove(<minecraft:redstone>);
```

## 加算

```zenscript
//mods.extrautils2.Crusher.add(IItemStack output, IItemStack input, @Optional IItemStack secondaryOutput, @Optional float secondaryChance);
mods.extrautils2.Crusher.add(<minecraft:gold_ingot> * 9, <minecraft:gold_block>, <minecraft:iron_ingot>, 0.1f);
mods.extrautils2.Crusher.add(<minecraft:iron_ingot> * 9, <minecraft:iron_block>);
```