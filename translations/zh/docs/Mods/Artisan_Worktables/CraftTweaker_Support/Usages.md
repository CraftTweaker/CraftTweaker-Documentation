# 用法

## 方法列表

| 是否必要： | 类型：              | 名称：                                  | 实现：                            | 参数：                                                                   | 其他信息：                        |
| ----- | ---------------- | ------------------------------------ | ------------------------------ | --------------------------------------------------------------------- | ---------------------------- |
| 必要    | Recipe（配方）:      | Shaped Recipe（有序合成）:                 | .setShaped                     | [材料（IIngredient）[][]](/Vanilla/Variable_Types/IIngredient/) 材料        |                              |
| 必要    | Recipe（配方）:      | Shapeless Recipe（无序合成）:              | .setShapeless                  | [材料（IIngredient）[](/Vanilla/Variable_Types/IIngredient/) 材料           |                              |
| 可选    | Recipe（配方）:      | Mirrored（镜像配方）:                      | .setMirrored                   | 无                                                                     |                              |
| 必要    | Tool（工具）:        | Tool（工具）:                            | .addTool                       | [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/) 工具 + 整型 耐久    | 可以多次调用以添加多个（最多三个）工具          |
| 必要    | Output（输出）:      | Output（输出）:                          | .addOutput                     | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) 输出, @Optional（可选） 整型 权重 | 可以多次调用以加入多个加权输出              |
| 可选    | Output（输出）:      | Extra Outputs（额外输出）:                 | .setExtraOutput{输出1, 输出2, 输出3} | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) 输出, 单精度型 概率             |                              |
| 可选    | GameStage（游戏阶段）: | 需要的（一个或多个）游戏阶段（Require GameStage(s)） | .requireGameStages             | 字符串 匹配方式, 字符串[] 阶段                                                    | 匹配方式 = "ALL"（全部） 或 "ANY"（任一） |
| 可选    | GameStage（游戏阶段）: | 排除的（一个或多个）游戏阶段（Exclude GameStage(s)） | .excludeGameStages             | 字符串 [] 游戏阶段                                                           |                              |
| 必要    | Creation（创建）:    | 创建                                   | .create();                     | 无                                                                     |                              |

```JAVA
//来自旧版 wiki 的例子:
RecipeBuilder.get("carpenter")
    .setShaped([
        [<minecraft:planks>],
        [<minecraft:planks>],
        [<minecraft:planks>]])
    .addTool(<ore:carpenters_hammer>, 3)
    .addOutput(<minecraft:planks> * 10, 10)
    .addOutput(<minecraft:planks:1> * 20, 10)
    .addOutput(<minecraft:planks:2> * 30, 20)
    .addOutput(<minecraft:planks:3> * 50, 30)
    .setExtraOutputOne(<minecraft:dye> * 5, 0.12)
    .setExtraOutputTwo(<minecraft:dye:1> * 5, 0.24)
    .setExtraOutputThree(<minecraft:dye:2> * 5, 0.36)
    .requireGameStages("ANY", ["one"])
    .excludeGameStages(["two"])
    .create();
```

另请参见 [实例](/Mods/Artisan_Worktables/CraftTweaker_Support/To_Scale_Example/)