# 石のナイフ

## パッケージ
```zenscript
import mods.terrafirmacraft.StoneKnapping;ストーンKnapping;
```

## 追加

```zenscript
StoneKnapping.addRecipe(レジストリ名を文字列、IItemStack[] output, String[] rocks, String... pattern)
```

## 削除

```zenscript
StoneNnapping.removeRecipe(IItemStack output);
StoneNnapping.removeRecipe(String registryName);
```

## 使用例

```zenscript
// Gives a stone hoe in all rocks.
StoneKnapping.addRecipe("testrecipe", [<minecraft:stone_hoe>], ["all"], " ", "XXXX ");
// 頁岩、粘土岩、岩石、石灰岩でのみ石の鍬を与えます。
StoneKnapping.addRecipe("testrecipe2", [<minecraft:stone_hoe>], ["shale", "claystone", "rocksalt", "limestone"], "XXXX ");
// 粘土岩にくわを与え、石灰岩につるはしを与える。
StoneKnapping.addRecipe("testrecipe3", [<minecraft:stone_hoe>, <minecraft:stone_pickaxe>], ["claystone", "limestone"], "XXXX ");
// 玄武岩とチャートでのみ石の鍬を与えます。
StoneKnapping.addRecipe("testrecipe4", [<minecraft:stone_hoe>, <minecraft:stone_hoe>], ["basalt", "chert"], "XXXX ");
```