# JEITweaker

## 描述

这个模组添加了对于JEI物品管理器的支持 CraftTweaker以前是本地支持JEI的，但由于重写了1.14，JEI的支持被引入了它自己的模块中。


## 所属包名
`mods.jei.JEI`

## 隐藏物品

这会将给定项目隐藏在JEI中 在给出的示例中,泥土块会在JEI列表中被隐藏

```zenscript
//mods.jei.JEI.hideItem(IItemStack stack);
mods.jei.JEI.hideItem(<item:minecraft:dirt>);
```

## 隐藏类别

这会将给定类别隐藏在JEI中 在给出的示例中,熔炉所属的类别将会在JEI列表中隐藏

```zenscript
//mods.jei.JEI.hideCategory(String category);
mods.jei.JEI.hideCategory("minecraft:furnace");
```

在原版游戏中有以下几种合成类别:
```zenscript
"minecraft:crafting"
"minecraft:furnace"
"minecraft:smoking"
"minecraft:blasting"
"minecraft:campfire"
"minecraft:fuel"
"minecraft:brewing"
"minecraft:anvil"
"jei:information"
```

模组可以添加更多的合成类别!

## 添加信息

这会将描述或者信息添加到在JEI中查看用法时将显示的项目!

在以下实例中将会为钻石添加3条描述.

```zenscript
//mods.jei.JEI.addInfo(IItemStack stack, String[] information);
mods.jei.JEI.addInfo(<item:minecraft:diamond>, ["This is the first line!", "This is the second!", "third"]);
```

上面的代码将会显示出如下效果![填写完的提交框](https://blamejared.com/docsImages/JEITweakerAddInfo.png)


