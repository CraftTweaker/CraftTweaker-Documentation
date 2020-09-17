# 酿造配方处理器

## 访问酿造用手

您可以使用 `酿造` [全局关键字](/Vanilla/Global_Functions/) 访问酿造处理器。

## 配方方法

酿造配方由三个部分组成：

1. 输入(在3个“底插槽”中的东西)
2. 一个或多个可能的成分(能够进入上层的地狱去的地方)
3. 输出(配方返回的内容)

### 添加酿造配方

```zenscript
//brewing.addBrew(Ingredient input, IIngredient component, IItemStack output, @opulian hidden);
酿造。 ddBrew(<ore:blockGlass>, <ore:logWood>, <minecraft:beacon>);
brewing.addBrew(<ore:ingotGold>, <minecraft:obsidian>, <minecraft:wool:3>, true);


/brewing. ddBrew(Ingredient input, IIngredient[……]component, IItemStack output, @opulian hidden)；
酿造。 ddBrew(<minecraft:bedrock>, [<minecraft:lapis_ore>], <minecraft:sponge:1>);
brewing.addBrew(<minecraft:gold_block>, [<minecraft:iron_block>, <minecraft:lapis_block>], <minecraft:sponge:1>, true);
```

### 移除酿造配方

仅适用于 JEI 4.15.0.275或更高版本。

```zenscript
//brewing.removeRecipe(IItemStack input, IItemStack component);
brewing.removeRecipe(<minecraft:potion>.withTag({Po: "minecraft:water"}), <minecraft:gunpowder>;
```