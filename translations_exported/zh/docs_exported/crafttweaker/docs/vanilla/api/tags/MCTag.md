# MC标签

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.tag.MCTag
```

## 已实现的接口
MCTag实现了以下接口。 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [制造商.api.item.IIngredient](/vanilla/api/items/IIngredient)

## 方法
### 添加块

```zenscript
myMCTag.addBlocks(块作为craftminstrer.api.block.MCBlock[]);
```

| 参数     | 类型                                                              | 描述                      |
| ------ | --------------------------------------------------------------- | ----------------------- |
| blocks | [craftbinstruer.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | No description provided |


### 添加属性类型

```zenscript
myMCTag.addEntityTypes(实体为 craftweeper.api.entity.MCEntityType[]);
```

| 参数 | 类型                                                                             | 描述                      |
| -- | ------------------------------------------------------------------------------ | ----------------------- |
| 实体 | [craftbinstruer.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | No description provided |


### addFluids

```zenscript
myMCTag.addFluids(液体为craftweeper.api.fluid.MCFluid[])；
```

| 参数 | 类型                                                             | 描述                      |
| -- | -------------------------------------------------------------- | ----------------------- |
| 流体 | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)[] | No description provided |


### 添加项目

将项目添加到这个标签，如果这不是一个可以持有项目的标签，将会失败

```zenscript
myMCTag.addItems(items as craftbiner.api.item.IItemStack[]);
myMCTag.addItems(<item:minecraft:dirt>);
```

| 参数 | 类型                                                                  | 描述        |
| -- | ------------------------------------------------------------------- | --------- |
| 项目 | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | 要添加到标签的项目 |


### 任何伤害

返回类型： [craftbiner.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[craftbiner.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
空.任何损害();
```

### createBlockTag

返回类型： [craftmiliter.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createBlockTag();
```

### createEntityTypeTag

返回类型： [craftmiliter.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createEntityTypeTag();
```

### createFluidTag

返回类型： [craftmiliter.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createFluidTag();
```

### createItemTag

返回类型： [craftmiliter.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createItemTag();
```

### getRemainingitem

当这种成分堆栈被制造时，网格中还会有什么东西？ 不检查堆栈是否匹配！ 用于Ctrt's net.minecraft.item.crafting.ICraftingRecipe

返回类型： [craftbiner.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
null.getRemainingItem(stack as craftbiner.api.item.IItemStack);
null.getRemainingItem(<item:minecraft:iron_ingot>);
```

| 参数    | 类型                                                                | 描述         |
| ----- | ----------------------------------------------------------------- | ---------- |
| 堆栈... | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | 提供这种成分的堆栈。 |


### 匹配

给定的堆栈是否与原料相符？

返回类型：布尔值

```zenscript
null.matches(堆栈为 craftbiner.api.item.IItemStack)；
null.matches(<item:minecraft:iron_ingot>)；
```

| 参数    | 类型                                                                | 描述      |
| ----- | ----------------------------------------------------------------- | ------- |
| 堆栈... | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | 要检查的堆栈。 |



给定的堆栈是否与原料相符？

返回类型：布尔值

```zenscript
null.matches(堆栈为 craftminstrer.api.item.IItemStack, 忽略损害为 boolean);
```

| 参数    | 类型                                                                | 描述      |
| ----- | ----------------------------------------------------------------- | ------- |
| 堆栈... | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | 要检查的堆栈。 |
| 忽略伤害  | boolean                                                           | 是否检查损坏？ |


### 仅已损坏

返回类型： [craftbiner.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[craftbiner.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
null.onlyDamaged();
```

### onlyIf

返回类型： [craftbiner.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[craftbiner.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
null.onlyIf(uid as String, function as function.Predicate<crafttweaker.api.item.IItemStack>);
```

| 参数  | 类型                                                                                       | 描述                      | 可选的   | 默认值  |
| --- | ---------------------------------------------------------------------------------------- | ----------------------- | ----- | ---- |
| uid | 字符串[string]                                                                              | No description provided | false | `空的` |
| 函数  | 预测&lt;[craftminstrer.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt; | No description provided | true  | `空的` |


### 移除块

```zenscript
myMCTag.removeBlocks(块作为craftbiner.api.block.MCBlock[]);
```

| 参数     | 类型                                                              | 描述                      |
| ------ | --------------------------------------------------------------- | ----------------------- |
| blocks | [craftbinstruer.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | No description provided |


### 移除实体类型

```zenscript
myMCTag.removeEntityTypes(实体为 craftweeper.api.entity.MCEntityType[]);
```

| 参数 | 类型                                                                             | 描述                      |
| -- | ------------------------------------------------------------------------------ | ----------------------- |
| 实体 | [craftbinstruer.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | No description provided |


### 移除流体

```zenscript
myMCTag.removeFluids(液体为craftweeper.api.fluid.MCFluid[])；
```

| 参数 | 类型                                                             | 描述                      |
| -- | -------------------------------------------------------------- | ----------------------- |
| 流体 | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)[] | No description provided |


### 删除项目

从这个标签中删除项目，如果这不是一个可以持有项目的标签，将会失败

```zenscript
myMCTag.removeItems(items as craftbiner.api.item.IItemStack[]);
myMCTag.removeItems(<item:minecraft:dirt>);
```

| 参数 | 类型                                                                  | 描述         |
| -- | ------------------------------------------------------------------- | ---------- |
| 项目 | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | 要从标签中删除的项目 |



## 参数

| 名称                   | 类型                                                                                | 可获得  | 可设置   |
| -------------------- | --------------------------------------------------------------------------------- | ---- | ----- |
| blocks               | [craftbinstruer.api.block.MCBlock](/vanilla/api/blocks/MCBlock)                   | true | false |
| commandString #命令字符串 | 字符串[string]                                                                       | true | false |
| 实体类型                 | [craftbinstruer.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[]    | true | false |
| 第一个块                 | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)                     | true | false |
| 第一个实体类型              | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)        | true | false |
| 第一流体                 | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)                      | true | false |
| 第一个项目                | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                 | true | false |
| 流体                   | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)[]                    | true | false |
| id                   | [craftminstrer.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | true | false |
| isBlockTag           | boolean                                                                           | true | false |
| isEntityTypeTag      | boolean                                                                           | true | false |
| isFluidTag           | boolean                                                                           | true | false |
| isItemTag            | boolean                                                                           | true | false |
| 项目                   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[]               | true | false |

## 运算符
### 或

```zenscript
<tag:ingotIron> | 其他为 craftbiner.api.item.IIngredient
```

| 参数    | 类型                                                         | 描述                      |
| ----- | ---------------------------------------------------------- | ----------------------- |
| other | [制造商.api.item.IIngredient](/vanilla/api/items/IIngredient) | No description provided |

## 卡斯特尔

| 结果类型                                                        | 是否隐藏 |
| ----------------------------------------------------------- | ---- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)      | true |
| [craftminstrer.api.data.MapData](/vanilla/api/data/MapData) | true |

