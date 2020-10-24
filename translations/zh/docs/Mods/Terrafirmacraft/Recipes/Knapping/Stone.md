# Stone Knapping

## 所属包名
```zenscript
import mods.terrafirmacraft.StoneKnapping;
```

## 添加配方

```zenscript
StoneKnapping.addRecipe(String registryName, IItemStack[] output, String[] rocks, String... pattern)
```

## 删除配方

```zenscript
StoneKnapping.removeRecipe(IItemStack output);
StoneKnapping.removeRecipe(String registryName);
```

## 例子

```zenscript
// Gives a stone hoe in all rocks.
StoneKnapping.addRecipe("testrecipe", [<minecraft:stone_hoe>], ["all"], "     ", "XXXX ");
// Gives a stone hoe only in shale, claystone, rocksalt, limestone.
StoneKnapping.addRecipe("testrecipe2", [<minecraft:stone_hoe>], ["shale", "claystone", "rocksalt", "limestone"], "     ", "XXXX ");
// Gives a stone hoe in claystone, and a pickaxe in limestone.
StoneKnapping.addRecipe("testrecipe3", [<minecraft:stone_hoe>, <minecraft:stone_pickaxe>], ["claystone", "limestone"], "     ", "XXXX ");
// Gives a stone hoe only in basalt and chert.
StoneKnapping.addRecipe("testrecipe4", [<minecraft:stone_hoe>, <minecraft:stone_hoe>], ["basalt", "chert"], "     ", "XXXX ");
```