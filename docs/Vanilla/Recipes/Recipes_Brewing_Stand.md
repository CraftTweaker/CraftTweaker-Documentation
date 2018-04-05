# 酿造配方处理器

## 获取酿造配方处理器
你可以使用[关键字段](/Vanilla/Global_Functions)`brewing`获取酿造配方处理器。

## 合成方法

酿造配方由三部分组成:

1. 输入 (放在三个"瓶子槽"的东西)
2. 一个或更多可能的材料(能放在上面那个可以放地狱疣的槽的东西）
3. 输出 (配方返回的东西)

### 添加酿造配方

```
//brewing.addBrew(IIngredient input, IIngredient ingredient, IItemStack output, @Optional boolean hidden);
//input 输入
//ingredient 材料
//output 输出
//hidden 是否隐藏
brewing.addBrew(<ore:blockGlass>, <ore:logWood>, <minecraft:beacon>);
brewing.addBrew(<ore:ingotGold>, <minecraft:obsidian>, <minecraft:wool:3>, true);


//brewing.addBrew(IIngredient input, IIngredient[] ingredients, IItemStack output, @Optional boolean hidden);
//input 输入
//ingredient 材料
//output 输出
//hidden 是否隐藏
brewing.addBrew(<minecraft:bedrock>, [<minecraft:lapis_ore>], <minecraft:sponge:1>);
brewing.addBrew(<minecraft:gold_block>, [<minecraft:iron_block>, <minecraft:lapis_block>], <minecraft:sponge:1>, true);
```


### 移除酿造配方

仍不兼容JEI！！

```
//brewing.removeRecipe(IItemStack input, IItemStack ingredient);
//input 输入
//ingredient 输出
brewing.removeRecipe(<minecraft:potion>.withTag({Potion: "minecraft:water"}), <minecraft:gunpowder>);
```
