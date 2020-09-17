# MC标签

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.tag.MCTag
```

## 已实现的接口
MCTag实现了以下接口。 这意味着对这个接口可用的任何方法也可以在此类上使用。
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


### 添加项目

```zenscript
myMCTag.addItems(items as craftbiner.api.IItemStack[]);
```

| 参数 | 类型                                                                  | 描述                      |
| -- | ------------------------------------------------------------------- | ----------------------- |
| 项目 | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | No description provided |


### createBlockTag

返回 [craftbinstruer.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createBlockTag();
```

### createEntityTypeTag

返回 [craftbinstruer.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createEntityTypeTag();
```

### createItemTag

返回 [craftbinstruer.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createItemTag();
```

### getRemainingitem

当这种成分堆栈被制造时，网格中还会有什么东西？ 不检查堆栈是否匹配！ 用于Ctrt's net.minecraft.item.crafting.ICraftingRecipe

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCTag.getRemainingItem(stack as craftbiner.api.item.IItemStack);
myMCTag.getRemainingItem(<item:minecraft:iron_ingot>);
```

| 参数    | 类型                                                                | 描述         |
| ----- | ----------------------------------------------------------------- | ---------- |
| 堆栈... | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | 提供这种成分的堆栈。 |


### 匹配

给定的堆栈是否与原料相符？

返回为布尔值

```zenscript
myMCTag.matches(堆栈为 craftbiner.api.item.IItemStack);
myMCTag.matches(<item:minecraft:iron_ingot>);
```

| 参数    | 类型                                                                | 描述      |
| ----- | ----------------------------------------------------------------- | ------- |
| 堆栈... | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | 要检查的堆栈。 |


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


### 删除项目

```zenscript
myMCTag.removeItems(items as craftbiner.api.item.IItemStack[]);
```

| 参数 | 类型                                                                  | 描述                      |
| -- | ------------------------------------------------------------------- | ----------------------- |
| 项目 | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | No description provided |



## 参数

| 名称                   | 类型                                                                             | 可获得  | 可设置   |
| -------------------- | ------------------------------------------------------------------------------ | ---- | ----- |
| blocks               | [craftbinstruer.api.block.MCBlock](/vanilla/api/blocks/MCBlock)                | true | false |
| commandString #命令字符串 | 字符串[string]                                                                    | true | false |
| 实体类型                 | [craftbinstruer.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | true | false |
| 项目                   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[]            | true | false |

## 卡斯特尔

| 结果类型                                                        | 是否隐藏 |
| ----------------------------------------------------------- | ---- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)      | true |
| [craftminstrer.api.data.MapData](/vanilla/api/data/MapData) | true |

