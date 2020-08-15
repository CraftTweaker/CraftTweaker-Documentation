# 石制套装

## 所属包名
```zenscript
导入 mods.terrafirmacraft。3. 石化Knapping；
```

## 添加配方

```zenscript
StoneKnapping.addRecipe(String registryName, IItemStack[…]输出, String[…]岩石, 字符串... pattern)
```

## 删除配方

```zenscript
StoneKnapping.removeRecipe(IItemStack 输出);
StoneKnapping.removeRecipe(String registryname);
```

## 例子

```zenscript
// 给所有岩石上的石头钩子。
StoneKnapping.addRecipe("testrecipe", [<minecraft:stone_hoe>], ["all"], ", "XXXXXX");
// 只在shale, claystone, rocksalt, limestone里提供一个石头。
StoneKnapping.addRecipe("testrecipe2", [<minecraft:stone_hoe>], ["shale", "claystone", "crocksalt", "limestone", "XXXXX");
// 在克莱斯通中给一块石头钩, 和一个石头中的小斧。
StoneKnapping.addRecipe("testrecipe3", [<minecraft:stone_hoe>, <minecraft:stone_pickaxe>], ["claystone", "limestone", " "XXXXX");
// 只在基础和珍珠里赠送一只石钩。
StoneKnapping.addRecipe("testrecipe4", [<minecraft:stone_hoe>, <minecraft:stone_hoe>], ["basalt", "chert", ", "XXXXX");
```