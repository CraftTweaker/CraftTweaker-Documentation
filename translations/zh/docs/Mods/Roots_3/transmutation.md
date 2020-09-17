### 所属类名

```zenscript
导入mods.roots.transmutation;
```

#### 可用方法

```zenscript
无效的removeRecipe(
  字符串名称// 正在删除的配方名称
)；
```

* * *

```zenscript
无效 addBlockToBlockRecipe(
  字符串名称 // 正在添加的配方名称 (必须是唯一的)
  IBlockState1 // 被定义为块状态的方块初始状态
  IBlockState2 // 初始状态应转换为
;
```

* * *

```zenscript
无效 addBlockToItemRecipe(
  字符串名称 // 正在添加的配方名称 (必须是唯一的)
  IBlockState。 // 转换（作为区块状态）时寻找的初始状态
  IItemStack堆栈// 替换区块状态的项目堆栈
;
```

* * *

### 例子

```zenscript
导入 mods.roots.transmutation;

// 移除默认的pumpkin-overwater-tomelon 配方
Transmutation.removeRecipe("pumkin_melon");

// 添加将终结石转换为骨质块的配方
转换突变性。 ddBlockToBlockRecipe("end_stone_to_bone", <blockstate:minecraft:end_stone>, , <blockstate:minecraft:bone_block:axis=y>);

// 添加一个将默认tallgrass转换成雪球的配方
Transmutation. ddBlockToItemRecipe("tallgras_to_snowball", <blockstate:minecraft:tallgrass:type=tall_grass>, <minecraft:snowball>*3);
```

### 注意

**注：复杂的状态函数目前不可能通过CraftT弱化（即检查周围环境）。**

通过使用 F3 调试功能并针对它来找到关于方块及其变体和状态的信息是可能的。 在屏幕右侧，它将显示方块的注册表名，然后显示在下方的任何状态。

例如， `bune_block` 具有以下几项：

    轴：y

This can be converted into a blockstate by replacing the `:` with `=` like so: `axis=y`, meaning that the final blockstate (for an upwards facing bone block) would be `<blockstate:minecraft:bone_block:axis=y>`.