# JEI

CraftTweaker 支持 JustEnoughItems (JEI)。 你可以在 JEI 中添加或隐藏物品/流体，或者为其添加描述页。

## 移除
你可以从JEI中移除物品，也可以移除所有它参与的合成表。

```zenscript
//hide(IItemStack item);
mods.jei.JEI.hide(<minecraft:diamond>);

//hide(ILiquidStack item);
mods.jei.JEI.hide(<liquid:water>);
mods.jei.JEI.hide(<fluid:lava>);


//removeAndHide(IIngredient output, @optional boolean NBT-Match)
mods.jei.JEI.removeAndHide(<minecraft:iron_leggings>);
mods.jei.JEI.removeAndHide(<ore:planks>, false);
```


## 隐藏分类
You can use this to hide entire JEI Categories (e.g. crafting recipes, furnace recipes, machine X recipes, ...).  
It accepts the category as string, you can get all registered categories by running `/ct jeiCategories` ingame.
```zenscript
//hideCategory(category)
mods.jei.JEI.hideCategory("minecraft.smelting");
```

## 添加物品
你也可以添加一个 [IItemStack](/Vanilla/Items/IItemStack/) 到 JEI 来添加一个未添加的物品，或者添加一个带有 NBT-Tag 的物品到 JEI
```zenscript
//addItem(item);
mods.jei.JEI.addItem(<minecraft:stone>.withTag({display:{Name: "Pickle",Lore:["What once was stone", "Is stone no more"]}}));
```

## 添加描述
A JEI Description is an extra page shown when looking up an ingredient's recipe/usages in JEI which contains information on that ingredient.  
You can add a JEI Description to an [IItemStack](/Vanilla/Items/IItemStack/), an [IItemStack](/Vanilla/Items/IItemStack/)[], an [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) or an [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/).

If your strings are too long to be written to one line (or page) it will automatically create line/page breaks.  
Each string parameter will have at least one line and wrap around the end of the window if too long.

```zenscript
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