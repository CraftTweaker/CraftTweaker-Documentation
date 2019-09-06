# 生命灌注（Life Infusion）

*infusion* 包可用于添加或者移除生命灌注的配方

## 导入包

导入*infusion* 包用 `mods.skyresources.infusion`这条语句。

## 添加配方

    //mods.skyresources.infusion.addRecipe(<产物>, <原料>, 灌注的方块, 消耗生命数);
    mods.skyresources.infusion.addRecipe(&lt;minecraft:diamond&gt; * 8, &lt;minecraft:nether_star&gt;, &lt;minecraft:dirt&gt;, 14);
    

## 删除配方

    //mods.skyresources.infusion.removeRecipe(<产物>);
    mods.skyresources.infusion.removeRecipe(&lt;minecraft:cactus&gt;);