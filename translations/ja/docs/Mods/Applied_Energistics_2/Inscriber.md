# Inscriber

### インポート中

```zenscript
import mods.appledenergistics2.Inscriber;
```

### 追加中

`inscribe` boolean が true の場合、上部と下部の入力は消費されません。

```zenscript
Inscriber.addRecipe(IItemStack output, IItemStack input, boolean inscribe, @Optional IItemStack topInput, @Optional IItemStack bottomInput);

//turns eggs into Wither Skele spawn eggs, does not consume wither skull
Inscriber.addRecipe(<minecraft:spawn_egg:5>, <minecraft:egg>, true, <minecraft:skull:1>);

//combines bread, coco beans, and sugar. すべての入力は
Inscriber.addRecipe(<minecraft:cookie>, <minecraft:minecraft:bread>, false, <minecraft:dye:3>, <minecraft:sugar>);
```

### 削除中

```zenscript
Inscriber.removeRecipe(IItemStack output);

//印刷されたシリコンレシピ 
Inscriber.removeRecipe(<appliedenergistics2:material:20>); 
```