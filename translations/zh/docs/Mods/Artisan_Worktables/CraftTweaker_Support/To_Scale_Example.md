# 实例

下面快速看一个示例：

## 例

```JAVA
import crafttweaker.item.IItemStack;

var planks = <ore:plankWood>;

var stairs = [<minecraft:oak_stairs>,
          <minecraft:birch_stairs>,
          <minecraft:spruce_stairs>,
          <minecraft:jungle_stairs>,
          <minecraft:acacia_stairs>,
          <minecraft:dark_oak_stairs>] as IItemstack[];

RecipeBuilder.get("carpenter")
  .setShaped([
        [planks, null, null],
        [planks, planks, null],
        [planks, planks, planks]
        ])
  .addTool(<ore:carpenters_hammer>, 3)

// 添加合成 10 个橡木楼梯的配方，权重占 210 中的 10
  .addOutput(stairs[0] * 10, 10)

// 添加合成 10 个桦木楼梯的配方，权重占 210 中的 20
  .addOutput(stairs[1] * 10, 20)

// 添加合成 10 个云杉木楼梯的配方，权重占 210 中的 30
  .addOutput(stairs[2] * 10, 30)

// 添加合成 10 个丛林木楼梯的配方，权重占 210 中的 40
  .addOutput(stairs[3] * 10, 40)

// 添加合成 10 个金合欢木楼梯的配方，权重占 210 中的 50
  .addOutput(stairs[4] * 10, 50)

// 添加合成 10 个深色橡木楼梯的配方，权重占 210 中的 60
  .addOutput(stairs[5] * 10, 60)

  .setExtraOutputOne(<minecraft:dye> * 5, 0.12)
  .setExtraOutputTwo(<minecraft:dye:1> * 5, 0.24)
  .setExtraOutputThree(<minecraft:dye:2> * 5, 0.36)
  .requireGameStages("ANY", ["one"])
  .excludeGameStages(["two"])
  .create();
```