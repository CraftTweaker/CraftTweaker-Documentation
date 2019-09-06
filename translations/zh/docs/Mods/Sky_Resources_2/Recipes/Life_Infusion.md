# 生命灌注（Life Infusion）

The *infusion* package is used for adding or removing recipes to/from the Life Infusion process.

## 导入包

导入*infusion* 包用 `mods.skyresources.infusion`这条语句。

## 添加配方

    //mods.skyresources.infusion.addRecipe(IItemStack output, IItemStack inputStack, IItemStack inputBlock, int health);
    mods.skyresources.infusion.addRecipe(<minecraft:diamond> * 8, <minecraft:nether_star>, <minecraft:dirt>, 14);
    

## Recipe Removal

    //mods.skyresources.infusion.removeRecipe(IItemStack output);
    mods.skyresources.infusion.removeRecipe(<minecraft:cactus>);