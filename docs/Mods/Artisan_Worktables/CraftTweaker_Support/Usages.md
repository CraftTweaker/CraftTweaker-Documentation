# 用法

## 方法列表

|必要性     |类型:      |名称:                |实现:                             |参数: 	    												      		|Additional Information: 										 |
|----------|-----------|---------------------|----------------------------------|---------------------------------------------------------------------------|----------------------------------------------------------------|
|需要      |Recipe:（合成）|Shaped Recipe:（有序合成）|.setShaped:     				 |[材料[][]](/Vanilla/Variable_Types/IIngredient) 材料		               |						 									     |
|需要      |Recipe:（合成）|Shapeless Recipe:（无序合成）|.setShapeless   			 |[材料[](/Vanilla/Variable_Types/IIngredient) 材料		                 |																   |
|可选      |Recipe:（合成）|Mirrored:（镜像）|.setMirrored    				 	|空																		|																 |
|需要      |Tool: （工具）|Tool: （工具）    |.setTool        				 	|[材料](/Vanilla/Variable_Types/IIngredient)工具+消耗的耐久（整数）|																 |
|需要      |Output:（输出） |Output: （输出）|.addOutput      				 	|[物品堆](/Vanilla/Items/IItemStack)输出, @Optional 可选权值（整数）|可以多次使用以添加多个有权值的物品                                            |
|可选      |Output:（输出）|Extra Outputs:（额外输出）|.setExtraOutput{One, Two, Three}	|[物品堆](/Vanilla/Items/IItemStack), 概率（单精度型）		  |																 |
|可选      |GameStage:    |Require GameStage(s) |.requireGameStages                |String require, String[] stages											|require = "ALL" or "ANY"										 |
|可选      |GameStage: |Exclude GameStage(s) |.excludeGameStages				|String[] stages												 			|																 |
|需要      |Creation:（创建）|Create（创建）   |.create();						|空																		|																 |

```JAVA
//原引自旧版的wiki
Worktable.createRecipeBuilder("carpenter")
    .setShaped([
        [<minecraft:planks>],
        [<minecraft:planks>],
        [<minecraft:planks>]])
    .setTool(<ore:carpenters_hammer>, 3)
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

另请参阅: [实例](/Mods/Artisan_Worktables/CraftTweaker_Support/To_Scale_Example)
