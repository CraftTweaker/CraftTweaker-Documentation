# BlockBuilder

块生成器被用来……构建块 (你没有看到一个人，对... 对吧？)<br> 一旦您创建它，您就可以设置各种属性，这些属性将被单独的方法概述。 <p> 您也可以更改方块的类型来创建一个更专业化的方块形式 (e)。 。阶梯或方块可以以同样方式旋转日志)。 要告诉Cot，你需要调用 [mods.contenttweeper.block。BlockBuilder#build(String)](/mods/contenttweaker/API/block/BlockBuilder/#build) 并指定一个有效的资源位置路径。

这个类是由模组添加的，有模组id `内容较弱`。 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
mods.contenttweeper.block。BlockBuilder
```

## 已实现的接口
BlockBuilder 实现了以下接口。 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)

## Constructor #构造函数
创建一个新的BlockBuilder。 Remember that this will _not_ create a new block in the game, you need to call [mods.contenttweaker.block.BlockBuilder#build(String)](/mods/contenttweaker/API/block/BlockBuilder/#build)。
```zenscript
新建mods.contenttweeper.block。BlockBuilder(Materials as crafttweeper.api.block.material.MCMaterial)；
new mods.contenttweiner.block。BlockBuilder();
new mods.contenttweiner.block.BlockBuilder(<blockmaterial:earth>);
```
| 参数 | 返回值类型                                                                                                                                         | 描述       | 可选的  | 默认值                          |
| -- | --------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---- | ---------------------------- |
| 材料 | [crafttweaker.api.block.material.MCMaterial #导入方式为 import crafttweaker.api.block.material.MCMaterial](/vanilla/api/block/material/MCMaterial) | 此方块将有的材料 | true | `<blockmaterial:iron>` |



## 方法
### 构建中

指示CoT实际建造任何这个建筑师的建筑物。

```zenscript
myBlockBuilder.build(resourceLocation as String);
myBlockBuilder.build("my_awesome_block");
```

| 参数   | 返回值类型  | 描述        |
| ---- | ------ | --------- |
| 资源位置 | String | 给此方块的资源路径 |


### 耐心安达抗性

设置区块的硬度和抗性水平。 与另一种方法不同，这个方法只接受一个参数，并且将对两个属性使用该值。

 返回： `此生成器，用于方法链`

返回类型： [mods.contenttweeper.block。BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withhhardnessAndResistance(生长不稳定作为浮点)；
myBlockBuilder.withHardnessAndResistance(0.5f)；
```

| 参数                    | 返回值类型 | 描述          |
| --------------------- | ----- | ----------- |
| hardnessAndResistance | 浮点数   | 为硬度和抗性设置的值。 |



设置区块的硬度和抗性水平。 与另一种方法不同，这个方法允许您将每个属性设置为一个单独的值。

 返回： `此生成器，用于方法链`

返回类型： [mods.contenttweeper.block。BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHardnessAndResistance(生长为浮点型，抗药性为浮点型)；
myBlockBuilder.withHardnessAndResistance(0.5f, 0.5f)；
```

| 参数         | 返回值类型 | 描述        |
| ---------- | ----- | --------- |
| hardnessIn | 浮点数   | 为硬度设置的值   |
| 抗性         | 浮点数   | 要设置为抵抗的值。 |


### 收获级别

设置开采此方块所需的开采水平

 返回： `此生成器，用于方法链`

返回类型： [mods.contenttweeper.block。BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHarvestLevel(harvestLevel等值)；
myBlockBuilder.withHarvestLevel(3)；
```

| 参数   | 返回值类型 | 描述   |
| ---- | ----- | ---- |
| 收获级别 | 整型    | 收获水平 |


### 收获工具

设置采集此方块所需的工具

 返回： `此生成器，用于方法链`

返回类型： [mods.contenttweeper.block。BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHarvestTool(harvestTool as mods.contenttweeper.item.MCToolType);
myBlockBuilder.withHarvestTool(<tooltype:shovel>);
```

| 参数   | 返回值类型                                                                           | 描述   |
| ---- | ------------------------------------------------------------------------------- | ---- |
| 收获工具 | [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType) | 工具类型 |


### withItemGroup

设置此方块将出现的项目组

 返回： `此生成器，用于方法链`

返回类型： [mods.contenttweeper.block。BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withItemGroup(group as mods.contenttweeper.item.MCItemGroup);
myBlockBuilder.withItemGroup(<itemgroup:building_blocks>);
```

| 参数 | 返回值类型                                                                             | 描述    |
| -- | --------------------------------------------------------------------------------- | ----- |
| 群組 | [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup) | 要设置的组 |


### Light值

设置方块的光值。

 返回： `此生成器，用于方法链`

返回类型： [mods.contenttweeper.block。BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withLightValue(lightValueIn如其意图)；
myBlockBuilder.withLightValue(15)；
```

| 参数           | 返回值类型 | 描述       |
| ------------ | ----- | -------- |
| lightValueIn | 整型    | 要设置的光线级别 |


### 取消Loot来自

将指示CoT使用提供的方块之一覆盖此方块的掠夺表。 目前这仍将创建一个掠夺表条目，尽管它将被游戏忽略。

 返回： `此生成器，用于方法链`

返回类型： [mods.contenttweeper.block。BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withLootFrom(blockin as craftbiner.api.block.MCBlock);
myBlockBuilder.withLootFrom(<block:minecraft:diamond>);
```

| 参数      | 返回值类型                                                         | 描述          |
| ------- | ------------------------------------------------------------- | ----------- |
| blockIn | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | 应该应用其战利品表的块 |


### 与 MaxStackSize

设置此方块在您的背包中可以拥有的最大堆栈大小。 如果保持不变，将是64人。

 返回： `此生成器，用于链路`

返回类型： [mods.contenttweeper.block。BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withMaxStackSize(大小原来)；
myBlockBuilder.withMaxStackSize(16)；
```

| 参数 | 返回值类型 | 描述      |
| -- | ----- | ------- |
| 大小 | 整数    | 要设置的大小。 |


### 与稀有度

允许您设置此方块的稀有性。

 返回： `此生成器，用于方法链`

返回类型： [mods.contenttweeper.block。BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withRarity(rarity as String);
myBlockBuilder.withRarity("UNCOMMON");
```

| 参数  | 返回值类型       | 描述  |
| --- | ----------- | --- |
| 稀有度 | 字符串[string] | 稀有度 |


### 与翻转

设置滑块。

 返回： `此生成器，用于方法链`

返回类型： [mods.contenttweeper.block。BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withSlipperiness(浮点字)；
myBlockBuilder.withSlipperiness(0.5f)；
```

| 参数   | 返回值类型 | 描述    |
| ---- | ----- | ----- |
| 滑动输入 | 浮点数   | 要设置的值 |


### 包含类型

设置此方块的特定类型。 在这个方法被调用后，生成器的上下文将切换到更多提供的类型生成器。 这意味着这个建造者的方法将不再存在。 所以您想要设置的任何属性都应该在您调用此方法之前被设置。

 返回： `一个带有给定方块的生成器。`

返回类型：T

```zenscript
myBlockBuilder.withType<T>();
myBlockBuilder.withType<mods.contenttweiner.block.pillar.BlockBuilderPillarRotatable>();
```

| 参数名称 | 边框                                                                                            |
| ---- | --------------------------------------------------------------------------------------------- |
| T    | [mods.contenttweeper.block。BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder) |

### 未放下

将指示CoT此块不会有任何掠夺条目。 目前这仍将创建一个掠夺表条目，尽管它将被游戏忽略。

 返回： `此生成器，用于方法链`

返回类型： [mods.contenttweeper.block。BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.without Drops();
```

### 非移动屏蔽

指示CoT此方块不会阻止移动。

 返回： `此生成器，用于链路`

返回类型： [mods.contenttweeper.block。BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withououtMovementBlocking();
```


