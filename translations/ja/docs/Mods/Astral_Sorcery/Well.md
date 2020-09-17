# ライト

Lightwellリクエストを追加および削除することができます

## 発信中

`mods.astalsorcery.Lightwell` を使ってWellRecipeパッケージを呼び出すことができます。

## 削除中

この関数は、与えられた [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) `出力` を与えられた [IItemStack](/Vanilla/Items/IItemStack/) `入力` を使用して返す最初のレシピを削除します。 指定された出力を返すレシピが複数ある場合は、このメソッドを複数回呼び出す必要があります。

出力を `null` に設定すると、入力スタック経由でのみ検索できます。

```zenscript
//mods.astralsorcery.Lightwell.removeLiquefaction(IItemStack input, ILiquidStack output);
mods.astalsorcery.Lightwell.removeLiquefaction(<astralsorcery:itemcraftingcomponent:0>, null);
```

## 加算

```zenscript
//mods.astalsorcery.Lightwell.addLiquefaction(IItemStack input, ILiquidStack 出力, float productionMultiplier, float shatterMultiplier, int colorhex);
mods.astalsorcery.Lightell.addLiquefaction(<minecraft:dirt>, <liquid:water>, 1, 0.2, 0);
```

| パラメータ             | パラメータタイプ                                       | 説明                                                                                         |
| ----------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------ |
| input             | [IItemStack](/Vanilla/Items/IItemStack/)       | 入力項目                                                                                       |
| 出力                | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) | 返された液体。 流体数の種類のみ、量（デフォルトの灯りのような）は昼/夜などに依存します…                                              |
| outputMultiplier  | float型                                         | 出力流体量を計算するために、集められた星光と一緒に適用される乗算器。 通常、0.3 - 1.2 (aka: ここでは 200 のように書かないでください。合理的な滞在をしたい場合) |
| shatterMultiplier | float型                                         | この倍率が高いほど、触媒アイテムが粉々になる確率が低くなります。                                                           |
| colorHEX          | int                                            | ホバリング項目の周りの粒子に使用されるカラーコード。                                                                 |