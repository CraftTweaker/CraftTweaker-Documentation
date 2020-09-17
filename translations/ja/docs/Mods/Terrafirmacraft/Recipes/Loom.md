# Loom

## パッケージ
```zenscript
import mods.terrafirmacraft.Loom;織機;
```

## 追加

```zenscript
Loom.addRecipe(String registryName, IIngredient input, IItemStack output, int steps, String loomTexture);
```
- ステップはレシピを完成させるために必要なステップ数です。 プレーヤーが織機をクリックしなければならない回数です。ループの各動きは１ステップ進みます。 TFC 内では、これはレシピに必要なアイテムの数と同じですが、そうである必要はありません。
- テクスチャはテクスチャファイルへのパス (`ResourceLocation`) であり、世界中の織機に表示されます。 例えば、"minecraft:textures/blocks/wool_colorred_white.png"は白ウールのバニラテクスチャを参照しています。 カスタムテクスチャを使用している場合は、テクスチャを正しく参照できるようにするために、何らかの形のデータ/リソース読み込み (read: a resource pack) が必要です。

## 削除

```zenscript
Loom.removeRecipe(IItemStack output);
Loom.removeRecipe(String registryName);
```

## 例
```zenscript
Loom.addRecipe("burlap_cloth", <tfc:crop/product/jute_disc>, <tfc:crop/product/burlap_cloth>, "tfc:textures/blocks/devices/loom/product/barlap.png");
```