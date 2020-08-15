# ソウルバインダー

## パッケージ

`import mods.enderio.SoulBinder;`

## 方法

- **[IItemStack](/Vanilla/Items/IItemStack/) 出力** レシピの結果。
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** メイン(非ソウルバイアル)成分。
- **String[] entities** このレシピが動作するために魂バイアルに存在しなければならないエンティティを許可する。
- **int xp** このレシピのエクスペリエンスコスト
- **intenergyCost** レシピが使用するFEの量。 デフォルトは5000です。

## 加算

```zenscript
mods.enderio.SoulBinder.addRecipe(IItemStack 出力, IIngredient input, String[] entities, int xp, int energyCost);

mods.enderio.SoulBinder.addRecipe(<minecraft:nether_star>, <minecraft:bone>, ["minecraft:skeleton"], 50000);
```

## 削除

```zenscript
mods.enderio.SoulBinder.removeRecipe(IItemStack output);

mods.enderio.SoulBinder.removeRecipe(<enderio:item_material:19>);
```