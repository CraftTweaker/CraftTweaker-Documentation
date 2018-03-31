# 实例
这里有一个简单的实例:

## 例子
```JAVA
var planks = <ore:plankWood>;

var stairs = [<minecraft:oak_stairs>,
			  <minecraft:birch_stairs>,
			  <minecraft:spruce_stairs>,
			  <minecraft:jungle_stairs>,
			  <minecraft:acacia_stairs>,
			  <minecraft:dark_oak_stairs>] as IItemstack[];

var StairsRecipe = Worktable.createRecipeBuilder("carpenter");

StairsRecipe.setShaped([
        [planks, null, null],
        [planks, planks, null],
        [planks, planks, planks]
        ]);

StairsRecipe.setTool(<ore:carpenters_hammer>, 3);

// 添加了输出10个橡木楼梯且其权值为10（总权值为210）的合成
StairsRecipe.addOutput(stairs[0] * 10, 10);

// 添加了输出10个桦木楼梯且其权值为20（总权值为210）的合成
StairsRecipe.addOutput(stairs[1] * 10, 20);

// 添加了输出10个云杉木楼梯且其权值为30（总权值为210）的合成
StairsRecipe.addOutput(stairs[2] * 10, 30);

// 添加了输出10个丛林木楼梯且其权值为40（总权值为210）的合成
StairsRecipe.addOutput(stairs[3] * 10, 40);

// 添加了输出10个金合欢木楼梯且其权值为50（总权值为210）的合成
StairsRecipe.addOutput(stairs[4] * 10, 50);

// 添加了输出10个深色橡木楼梯且其权值为60（总权值为210）的合成
StairsRecipe.addOutput(stairs[5] * 10, 60);

StairsRecipe.setExtraOutputOne(<minecraft:dye> * 5, 0.12);
StairsRecipe.setExtraOutputTwo(<minecraft:dye:1> * 5, 0.24);
StairsRecipe.setExtraOutputThree(<minecraft:dye:2> * 5, 0.36);
StairsRecipe.requireGameStages("ANY", ["one"]);
StairsRecipe.excludeGameStages(["two"]);
StairsRecipe.create();
```
