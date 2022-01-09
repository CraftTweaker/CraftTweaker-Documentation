# MCTag

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.tag.MCTag
```

## 已实现的接口
MCTag implements the following interfaces. 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

## 使用方式
### addBlocks

```zenscript
myMCTag.addBlocks(blocks as crafttweaker.api.block.MCBlock[]);
```

| 参数     | 类型                                                              | 描述                      |
| ------ | --------------------------------------------------------------- | ----------------------- |
| blocks | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[] | No description provided |


### addEntityTypes

```zenscript
myMCTag.addEntityTypes(entities as crafttweaker.api.entity.MCEntityType[]);
```

| 参数       | 类型                                                                           | 描述                      |
| -------- | ---------------------------------------------------------------------------- | ----------------------- |
| entities | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | No description provided |


### addItems

```zenscript
myMCTag.addItems(items as crafttweaker.api.item.IItemStack[]);
```

| 参数    | 类型                                                                  | 描述                      |
| ----- | ------------------------------------------------------------------- | ----------------------- |
| items | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | No description provided |


### createBlockTag

Returns [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createBlockTag();
```

### createEntityTypeTag

Returns [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createEntityTypeTag();
```

### createItemTag

Returns [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createItemTag();
```

### getRemainingItem

When this ingredient stack is crafted, what will remain in the grid? Does not check if the stack matches though! Used e.g. in CrT's net.minecraft.item.crafting.ICraftingRecipe

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCTag.getRemainingItem(stack as crafttweaker.api.item.IItemStack);
myMCTag.getRemainingItem(<item:minecraft:iron_ingot>);
```

| 参数 | 类型                                                                | 描述                                        |
| -- | ----------------------------------------------------------------- | ----------------------------------------- |
| 堆叠 | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


### matches

Does the given stack match the ingredient?

返回为布尔值

```zenscript
myMCTag.matches(stack as crafttweaker.api.item.IItemStack);
myMCTag.matches(<item:minecraft:iron_ingot>);
```

| 参数 | 类型                                                                | 描述                 |
| -- | ----------------------------------------------------------------- | ------------------ |
| 堆叠 | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check |


### removeBlocks

```zenscript
myMCTag.removeBlocks(blocks as crafttweaker.api.block.MCBlock[]);
```

| 参数     | 类型                                                              | 描述                      |
| ------ | --------------------------------------------------------------- | ----------------------- |
| blocks | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[] | No description provided |


### removeEntityTypes

```zenscript
myMCTag.removeEntityTypes(entities as crafttweaker.api.entity.MCEntityType[]);
```

| 参数       | 类型                                                                           | 描述                      |
| -------- | ---------------------------------------------------------------------------- | ----------------------- |
| entities | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | No description provided |


### removeItems

```zenscript
myMCTag.removeItems(items as crafttweaker.api.item.IItemStack[]);
```

| 参数    | 类型                                                                  | 描述                      |
| ----- | ------------------------------------------------------------------- | ----------------------- |
| items | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | No description provided |



## 参数

| 名称                   | 类型                                                                           | 可获得  | 可设置   |
| -------------------- | ---------------------------------------------------------------------------- | ---- | ----- |
| blocks               | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[]              | true | false |
| commandString #命令字符串 | 字符串[string]                                                                  | true | false |
| entityTypes          | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | true | false |
| items                | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[]          | true | false |

## Casters

| 结果类型                                                        | 是否隐藏 |
| ----------------------------------------------------------- | ---- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)      | true |
| [craftminstrer.api.data.MapData](/vanilla/api/data/MapData) | true |

