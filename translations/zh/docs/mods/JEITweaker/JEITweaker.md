::requiredMod[JEI]{builtIn=false modLink=https://www.curseforge.com/minecraft/mc-mods/jei requiredMod=JEITweaker requiredModLink=https://www.curseforge.com/minecraft/mc-mods/jeitweaker}

# JEITweaker

## 描述

这个模组添加了对于JEI物品管理器的支持 CraftTweaker以前是本地支持JEI的，但由于重写了1.14，JEI的支持被引入了它自己的模块中。

## 所属包名

`mods.jei.JEI`

## 隐藏物品

下面的脚本将在查看物品列表时从JEI中隐藏泥土。

```zenscript
// mods.jei.JEI.hideItem(IItemStack stack)

mods.jei.JEI.hideItem(<item:minecraft:dirt>);
```

## 隐藏流体

下面的脚本将在查看物品列表时从JEI中隐藏熔岩，这仅仅隐藏实际的流体，并非装有液体的桶或其他装有流体的物品（列如储罐）。

```zenscript
// mods.jei.JEI.hideFluid(IFluidStack stack)

mods.jei.JEI.hideFluid(<fluid:minecraft:lava>);
```

## 隐藏模组

下面的脚本将隐藏所有由“minecraft”添加的物品，除了石头。

```zenscript
// mods.jei.JEI.hideItem(string modid, crafttweaker.api.recipeFilter exclude)

mods.jei.JEI.hideMod("minecraft", (name as string) => {
    return name == "stone";
});
```

## 通过正则表达式隐藏

下面的脚本将从物品列表中隐藏所有名字中带有`stone`的物品。

```zenscript
// mods.jei.JEI.hideItem(string regex)

mods.jei.JEI.hideRegex(".*stone.*");
```

## 隐藏类别

下面的脚本将从JEI中隐藏所有熔炼类别的配方。 它本质上是隐藏了该类别中的所有配方。

```zenscript
// mods.jei.JEI.hideCategory(String category)

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

不过模组可以添加更多的类别，因此确保使用`/ct dump jeiCategories`指令来获取完整的类别列表！

# Recipe Hiding

下面的脚本将会从合成类别中隐藏橡木船的配方。 这不会移除配方，仅仅是将它隐藏了。

```zenscript
// mods.jei.JEI.hideRecipe(String category, String recipeName)

mods.jei.JEI.hideRecipe("minecraft:crafting", "minecraft:oak_boat");
```

## 添加信息

下面的脚本将在JEI中查看物品或流体的使用时为其添加自定义信息。

### 物品信息

下面的脚本将在查看钻石时向JEI信息标签中添加三行内容。

```zenscript
// mods.jei.JEI.addInfo(IItemStack stack, String[] information)

mods.jei.JEI.addInfo(<item:minecraft:diamond>, ["This is the first line!", "This is the second!", "third"]);
```

上面的代码将会显示出如下效果![填写完的提交框](https://blamejared.com/docsImages/JEITweakerAddInfo.png)

### 流体信息

添加流体信息与添加物品信息非常相似，唯一不同的是流体具有数量。

Using `<fluid:minecraft:water>` will show a single layer of Water in JEI. Using `<fluid:minecraft:water> * 1000` will show a full block worth of Water in JEI.

The following script will add three lines to the JEI Information tab when looking at Water and the Water will show as a full block.

```zenscript
// mods.jei.JEI.addInfo(IFluidStack stack, String[] information)

mods.jei.JEI.addInfo(<fluid:minecraft:water> * 1000, ["This is the first line!", "This is the second!", "third"]);
```



