::requiredMod[Initial Inventory]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/initial-inventory}

# JEITweaker

## 描述

这个模组添加了对于JEI物品管理器的支持 CraftTweaker以前是本地支持JEI的，但由于重写了1.14，JEI的支持被引入了它自己的模块中。


## 所属包名
`mods.jei.JEI`

## 隐藏物品

The following script will hide Dirt from JEI when looking at the item list.

```zenscript
// mods.jei.JEI.hideItem(IItemStack stack);

mods.jei.JEI.hideItem(<item:minecraft:dirt>);
```

## Fluid Hiding

The following script will hide Lava from JEI when looking at the item list, this is just the actual Fluid, and not the Bucket Item or other Items that have the Fluid (like a Tank)

```zenscript
// mods.jei.JEI.hideFluid(IFluidStack stack);

mods.jei.JEI.hideFluid(<fluid:minecraft:lava>);
```

## 隐藏类别

The following script will hide the Furnace category from JEI. It essentially hiding all the recipes in the category.

```zenscript
// mods.jei.JEI.hideCategory(String category);

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

The following script will add any custom information to an Item or a Fluid when looking at their usages in JEI.

### Item Info

The following script will add three lines to the JEI Information tab when looking at a Diamond.

```zenscript
// mods.jei.JEI.addInfo(IItemStack stack, String[] information);

mods.jei.JEI.addInfo(<item:minecraft:diamond>, ["This is the first line!", "This is the second!", "third"]);
```


上面的代码将会显示出如下效果![填写完的提交框](https://blamejared.com/docsImages/JEITweakerAddInfo.png)


### Fluid Info

Adding Fluid Info is very similar to adding Item Info, the only difference is that the Fluid has a size.

Using `<fluid:minecraft:water>` will show a single layer of Water in JEI. Using `<fluid:minecraft:water> * 1000` will show a full block worth of Water in JEI.

The following script will add three lines to the JEI Information tab when looking at Water and the Water will show as a full block.

```zenscript
// mods.jei.JEI.addInfo(IFluidStack stack, String[] information);

mods.jei.JEI.addInfo(<fluid:minecraft:water> * 1000, ["This is the first line!", "This is the second!", "third"]);
```



