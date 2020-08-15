# ブレンダー

ブレンダーはアイテムを組み合わせることで、食料と飽和状態を回復させることができます。

## バニラドリンク

- フルーツクラッシュ(アップル2倍、メロン4倍)4食品用。
- 野菜ジュース (4 x ニンジン, 1x ジャガイモ, 2x パンプキンパイ) 6 食品.
- クッキーとクリームミルクシェイク(2xクッキー、1xミルクバケット)4食品用。
- エネルギードリンク(8xレッドストーン、1xファイアチャージ、16xシュガー)8食品。

## 飲み物を削除する

## 一致するブレンドドリンクを削除します。

```zenscript
mods.cfm.Blender.remove(@Optional final String name, @Optional final IItemStack[] ingredients, @Optional final Integer food, @Optional final int[] colour);

// Remove drink named "Fruit Crush"
mods.cfm.Blender.remove("Fruit Crush");
// Remove drinks that require one carrot, one potato and one pumpkin pie to create
mods.cfm.Blender.remove(null, [<minecraft:carrot>,<minecraft:potato>,<minecraft:pumpkin_pie>]);
// Remove all drinks
mods.cfm.Blender.remove();
```

## 飲み物を追加する

ブレンドドリンクを追加します。

## 現在、飽和値と食品値は個別に設定できません。

```zenscript
mods.cfm.Blender.addDrink(@Nonnull final String name, @Nonnull final IItemStack[] ingredients, final int food, @Nonnull final int[] colour);

// Add a drink named "Watermelon Snow" that is coloured pink and restores 20 food and 20 saturation requiring 8 melon slices and 4 snowballs to craft
mods.cfm.Blender.addDrink("Watermelon Snow", [<minecraft:melon>.withAmount(8),<minecraft:snowball>.withAmount(4)], 20, [255,182,193]);
```