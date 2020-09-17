# リサイクラー

## パッケージ

`import mods.ic2.Recycler;`

## メソッド

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) 材料** リサイクル業者からブラックリストに載せるアイテム (スクラップのソースとして)

## Add Blacklist

```zenscript
mods.ic2.Recycler.addBlacklist(IIngredient食材);

mods.ic2.Recycler.addBlacklist(<minecraft:dirt>);
```