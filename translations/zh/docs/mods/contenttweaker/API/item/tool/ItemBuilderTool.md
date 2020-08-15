# 项目生成器工具

一个特殊的生成器，允许您创建可以用作工具的项目。 您应该在更改为此生成器之前设置项目的最大伤害。 <p> 有特殊的方法允许您设置几种工具类型的开采级别以及攻击伤害。

这个类是由模组添加的，有模组id `内容较弱`。 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
mods.contenttweaker.item.tool.项目生成器工具
```

## 已实现的接口
ItemBuilderTool 实现以下接口。 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.item.ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder)

## 方法
### 构建中

指示CoT实际建造任何这个建筑师的建筑物。

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().build(resourceLocation as String);
new ItemBuilder().withMaxDamage(150).with类型<ItemBuilderTool>().build("my_awesome_block");
```

| 参数   | 返回值类型       | 描述        |
| ---- | ----------- | --------- |
| 资源位置 | 字符串[string] | 给此方块的资源路径 |


### 遭到攻击伤害

允许您设置持有此物品时获得的攻击伤害加成

 返回： `此生成器，用于方法链`

返回类型： [mods.contenttweeper.item.tool.项目生成器工具](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackDamage(attackDamage as float);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackDamage(2.0f);
```

| 参数   | 返回值类型 | 描述     |
| ---- | ----- | ------ |
| 攻击伤害 | 浮点数   | 额外攻击伤害 |


### 未知攻击速度

允许您设置持有此物品时获得的攻击速度加成

 返回： `此生成器，用于方法链。`

返回类型： [mods.contenttweeper.item.tool.项目生成器工具](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackSpeed(攻击速度为双倍) ;
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackSpeed(2.0d);
```

| 参数   | 返回值类型 | 描述   |
| ---- | ----- | ---- |
| 攻击速度 | 双精度   | 攻击速度 |


### 耐久性消耗攻击

允许你设置击中敌人时该物品将受到的伤害。 默认情况下是 `0`

 返回： `此生成器，用于方法链`

返回类型： [mods.contenttweeper.item.tool.项目生成器工具](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostAttack(durabilityCostAttack as int);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostAttack(5);
```

| 参数      | 返回值类型 | 描述         |
| ------- | ----- | ---------- |
| 耐久性消耗攻击 | 整型    | 该物品将收到的伤害点 |


### 耐久性开采成本

允许您设置该物品在挖掘方块时将受到的伤害。 默认情况下是 `0`

 返回： `此生成器，用于方法链`

返回类型： [mods.contenttweeper.item.tool.项目生成器工具](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostMining(durabilityCostMining as int);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostMining(1)；
```

| 参数      | 返回值类型 | 描述         |
| ------- | ----- | ---------- |
| 耐久性开采成本 | 整型    | 该物品将收到的伤害点 |


### 隐藏工具类型

允许您添加工具类型到此工具。 当这种类型也被击中时，您可以指定类型、采矿级别和可选的采矿速度。

 返回： `此生成器，用于方法链`

返回类型： [mods.contenttweeper.item.tool.项目生成器工具](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withToolType(toolType as mods.contenttweiner.item.MCToolType, miningLevel as int, miningSpeed as float);
new ItemBuilder(). ithMaxDamage(150).withType<ItemBuilderTool>().withToolType(<tooltype:shovel>, 3);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withToolType(<tooltype:shovel>, 3, 2.0f);
```

| 参数   | 返回值类型                                                                           | 描述                  | 可选的   | 默认值   |
| ---- | ------------------------------------------------------------------------------- | ------------------- | ----- | ----- |
| 工具类型 | [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType) | 工具类型                | false | `空的`  |
| 采矿级别 | 整数                                                                              | 此工具类型的挖掘级别          | false | `空的`  |
| 采矿速度 | 浮点数                                                                             | 这个工具能够在给定类型中输入方块的速度 | true  | `1.0` |



