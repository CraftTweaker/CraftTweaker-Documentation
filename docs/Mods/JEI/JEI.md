# JEI

CraftTweaker 自带 JustEnoughItems （JEI） 兼容。
你既可以在 JEI 中添加或隐藏物品和流体，也可以为它们添加一个信息页面。

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
你还可以往 JEI 中物品（[IItemStack](/Vanilla/Items/IItemStack)），但仅限于添加 JEI 物品栏中未添加的物品或添加一个带有 NBT标签的物品
```JAVA
//addItem(item);
mods.jei.JEI.addItem(<minecraft:stone>.withTag({display:{Name: "Pickle",Lore:["What once was stone", "Is stone no more"]}}));
```

## 添加信息
JEI 信息是一个在打开材料的配方或用途页面时额外显示的页面，它包含关于这个材料的信息。 
你可以为物品堆（[IItemStack](/Vanilla/Items/IItemStack)、物品堆数组（[IItemStack](/Vanilla/Items/IItemStack)[]））、流体堆（[ILiquidStack](/Vanilla/Liquids/ILiquidStack)）或者矿物词典条目（[IOreDictEntry](/Vanilla/OreDict/IOreDictEntry)）添加 JEI 信息页面

如果字符串长到不能在一行（或一个页面显示），它会自动创建一行（一个页面）.
每一条字符串参数都至少占有一行，如果太长则会自动换行。

```Java
//addDescription(IItemStack item, string... desc);
//item 物品
//desc 信息
mods.jei.JEI.addDescription(<minecraft:iron_ingot>,"TEST");


//addDescription(IItemStack[] item, string... desc);
//item 物品（数组）
//desc 信息
mods.jei.JEI.addDescription([<minecraft:music_disc>, <minecraft:music_disc>],["Never","Gonna","Give","You","Up","Never","Gonna","Let","You","Down"]);

//addDescription(IOreDictEntry dict, string... desc);
//dict 矿物词典条目
//desc 信息
mods.jei.JEI.addDescription(<ore:ingotIron>, "You can use these to create things", "", "things like Armor","","","Yes...","That as well...");

//addDescription(ILiquidStack stack, string... desc);
//stack 流体堆
//desc 信息
mods.jei.JEI.addDescription(<liquid:lava>, ["LAVA"]);
```

 `desc` 参数是一个可变参数，也就是说你既可以添加一个包含所有信息的字符串，也可以添加多个字符串。只要不要把它们弄混，你喜欢用哪种就用哪种！
