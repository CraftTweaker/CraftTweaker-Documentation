# はんだ屋

ソルダラーパッケージは、精製されたストレージ ソルダラーへのレシピの追加や削除に使用されます。

## 発信中

`mods.finedstorage.Solderer` を使ってソルダラーパッケージを呼び出すことができます。

## レシピの追加

Rows 配列 **** は 3 の長さでなければなりません！ 空のスタックが必要な場合は、 `null` を使用します。

```zenscript
//mods.refinedstorage.Solder.addRecipe(IItemStack 出力, int time, IItemStack[] rows);
mods.refinedstorage.Solder.addRecipe(<minecraft:gold_ingot>, 100, [<minecraft:iron_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>]);
```

## レシピの削除

```zenscript
//mods.finishedstorage.Solder.removeRecipe(IItemStack output);
mods.finishedstorage.Solder.removeRecipe(<minecraft:iron_ingot>);
```