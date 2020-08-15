# 奥术附魔器 (a.k.a 附魔器)

## 所属包名

`thermalext.Enchanger`

## 添加配方

```zenscript
mods.thermalext.Enchanter.addRecipe(IItemStack 输出, IItemStack 输入, IItemStack 秒输入, int energy, int experience, booly empowered);

mods. hermalext.Enchanter.addRecipe(<minecraft:enchanted_book>.withTag({StoredEnchants: [{id: 35}]}), <minecraft:book>, <minecraft:diamond>, 1, 2000, 3000, false);
```

## 删除配方

```zenscript
mods.thermallipl.Enchanter.removeRecipe(IItemStack input, IItemStack secondInput);

mods.thermalext.Enchanter.removeRecipe(<minecraft:book>, <minecraft:diamond>);
```