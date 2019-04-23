# JEI

CraftTweaker 支持 JustEnoughItems (JEI)。 你可以在 JEI 中添加或隐藏物品/流体，或者为其添加描述页。

## 移除

你可以从JEI中移除物品，也可以移除所有它参与的合成表。

    //hide(IItemStack item);
    mods.jei.JEI.hide(<minecraft:diamond>);
    
    //hide(ILiquidStack item);
    mods.jei.JEI.hide(<liquid:water>);
    mods.jei.JEI.hide(<fluid:lava>);
    
    
    //removeAndHide(IIngredient output, @optional boolean NBT-Match)
    mods.jei.JEI.removeAndHide(<minecraft:iron_leggings>);
    mods.jei.JEI.removeAndHide(<ore:planks>, false);
    

## 隐藏分类

你可以用它来隐藏全部 JEI 分类（例如：建造合成表，熔炉合成表，某个机器的合成表等等）。  
分类以字符串类型传入，你可以在游戏中使用 `/ct jeiCategories` 命令获取所有已注册的分类。

```Java
//hideCategory(category)
mods.jei.JEI.hideCategory("minecraft.smelting");
```

## 添加物品

你也可以添加一个 [IItemStack](/Vanilla/Items/IItemStack/) 到 JEI 来添加一个未添加的物品，或者添加一个带有 NBT-Tag 的物品到 JEI

```JAVA
//addItem(item);
mods.jei.JEI.addItem(<minecraft:stone>.withTag({display:{Name: "Pickle",Lore:["What once was stone", "Is stone no more"]}}));
```

## 添加描述

JEI 描述指查看材料的配方/用途的额外页面， JEI 需包含关于此材料的信息。  
你可以向 [IItemStack](/Vanilla/Items/IItemStack/)， [IItemStack](/Vanilla/Items/IItemStack/)[]，[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) 或 [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) 添加描述。

如果你的字符串太长, 无法写入一行 (或一页), 它将自动创建行/页面中断。  
每个字符串参数将至少有一行, 并且如果太长将在窗口的末尾换行。

```Java
//addDescription(IItemStack item, string... desc);
mods.jei.JEI.addDescription(<minecraft:iron_ingot>,"TEST");


//addDescription(IItemStack[] item, string... desc);
mods.jei.JEI.addDescription([<minecraft:music_disc>, <minecraft:music_disc>],["Never","Gonna","Give","You","Up","Never","Gonna","Let","You","Down"]);

//addDescription(IOreDictEntry dict, string... desc);
mods.jei.JEI.addDescription(<ore:ingotIron>, "You can use these to create things", "", "things like Armor","","","Yes...","That as well...");

//addDescription(ILiquidStack stack, string... desc);
mods.jei.JEI.addDescription(<liquid:lava>, ["LAVA"]);
```

`desc` 属性是一个变长参数，也就是说你既可以用一个字符串数组中传递所有描述，又可以用多个字符串来传递，随你喜欢。 只是别把它们弄混了！