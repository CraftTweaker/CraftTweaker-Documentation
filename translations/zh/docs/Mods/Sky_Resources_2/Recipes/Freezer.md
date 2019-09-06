# 冰箱(Freezer)

*freezer*包用于添加或移除冰箱内的物品配方。

## 导入包

导入*freezer*包用`import mods.skyresources.freezer`语句

## 配方添加

    //mods.skyresources.freezer.addRecipe(<产物>, <原料>,tick数);
    mods.skyresources.freezer.addRecipe(&lt;minecraft:ice&gt;, &lt;minecraft:dirt&gt;, 900);
    

## 删除配方

    //mods.skyresources.freezer.removeRecipe(<产物>);
    mods.skyresources.freezer.removeRecipe(&lt;minecraft:ice&gt;);