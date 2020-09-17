# 强化的Thingies

提高了Thingies的非农用机器CraftTin弱支持能力。

### Mod Info

曲线： [https://minecraft.curseforge.com/projects/poweredthingies](https://minecraft.curseforge.com/projects/powered-thingies)

Github: <https://github.com/faceofcat/Tesla-Powered-Thingies>

Website: [https://www.modcrafters.net](https://www.modcrafters.net/?mod=thingies)

### CT 集成方法

所有与CT集成的机器都支持这些方法：

```zenscript
XYZ.clear() // 将清除整个配方注册
XYZ.logKeys() // 将把该注册表中的所有键输出到 CT's 日志
XYZ。 EmoveRecipe(按键：字符串) // 将从注册表中删除该配方
XYZ.addRecipe(...) // 添加一个新配方
```

要获取每台机器的 `调弱` 类，您必须使用静态 `mods.poweredthingies。调弱` 类。