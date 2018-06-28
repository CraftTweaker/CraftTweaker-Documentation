# JEI

CraftTweaker 自带 JustEnoughItems （JEI） 兼容。
你既可以在 JEI 中添加或隐藏物品和流体，也可以它们添加一个描述页面。

## 移除
你既可以将物品从 JEI 页面中移除，也可以移除此物品和有关于此物品的所有工作台配方。

```
//hide(IItemStack item);
//隐藏物品
//item 需要隐藏的物品
mods.jei.JEI.hide(<minecraft:diamond>);

//hide(ILiquidStack item);
//隐藏流体
//item 需要隐藏的流体
mods.jei.JEI.hide(<liquid:water>);
mods.jei.JEI.hide(<fluid:lava>);


//removeAndHide(IIngredient output, @optional boolean NBT-Match)
//隐藏且移除物品
//output 需要隐藏的物品
//NBT-Match 是否匹配 NBT 数据
mods.jei.JEI.removeAndHide(<minecraft:iron_leggings>);
mods.jei.JEI.removeAndHide(<ore:planks>, false);
```

## 添加物品
You can also add an [IItemStack](/Vanilla/Items/IItemStack) to JEI to add Items that weren't added or to add an item with NBT-Tag to JEI
```JAVA
//addItem(item);
mods.jei.JEI.addItem(<minecraft:stone>.withTag({display:{Name: "Pickle",Lore:["What once was stone", "Is stone no more"]}}));
```

## Add Description
A JEI Description is an extra page shown when looking up an ingredient's recipe/usages in JEI which contains information on that ingredient.  
You can add a JEI Description to an [IItemStack](/Vanilla/Items/IItemStack), an [IItemStack](/Vanilla/Items/IItemStack)[], an [ILiquidStack](/Vanilla/Liquids/ILiquidStack) or an [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry). 

If your strings are too long to be written to one line (or page) it will automatically create line/page breaks.  
Each string parameter will have at least one line and wrap around the end of the window if too long.  

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

The `desc` parameter is a varArg, which means you can either give one string[] containing all description strings or many single strings, whatever you prefer. Just don't mix them!
