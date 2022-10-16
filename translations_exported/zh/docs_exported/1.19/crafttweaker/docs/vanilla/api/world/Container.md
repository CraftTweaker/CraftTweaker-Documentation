# Container

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.Container;
```


## 已实现的接口
Container implements the following interfaces. That means all methods defined in these interfaces are also available in Container

- [Clearable](/vanilla/api/world/Clearable)

## 使用方式

:::group{name=canPlaceItem}

Return Type: boolean

```zenscript
Container.canPlaceItem(index as int, stack as ItemStack) as boolean
```

| 参数    | 类型                                  |
| ----- | ----------------------------------- |
| index | int                                 |
| 堆叠    | [物品应用](/vanilla/api/item/ItemStack) |


:::

:::group{name=countItem}

Return Type: int

```zenscript
Container.countItem(item as ItemDefinition) as int
```

| 参数   | 类型                                                 |
| ---- | -------------------------------------------------- |
| item | [ItemDefinition](/vanilla/api/item/ItemDefinition) |


:::

:::group{name=countStack}

Return Type: int

```zenscript
Container.countStack(item as IItemStack) as int
```

| 参数   | 类型                                         |
| ---- | ------------------------------------------ |
| item | [IItemstack](/vanilla/api/item/IItemStack) |


:::

:::group{name=getContainerSize}

Gets the size (how many slots) of this Container

Returns: The amount of slots this Container has.  
Return Type: int

```zenscript
// Container.getContainerSize() as int

myContainer.getContainerSize();
```

:::

:::group{name=getItem}

Gets the ItemStack in the given slot.

Returns: the ItemStack in the given slot.  
Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
Container.getItem(index as int) as ItemStack
```

| 参数    | 类型  | 描述                     |
| ----- | --- | ---------------------- |
| index | int | The slot index to get. |


:::

:::group{name=getMaxStackSize}

Return Type: int

```zenscript
// Container.getMaxStackSize() as int

myContainer.getMaxStackSize();
```

:::

:::group{name=hasAnyOf}

Return Type: boolean

```zenscript
Container.hasAnyOf(items as Set<ItemDefinition>) as boolean
```

| 参数    | 类型                                                                        |
| ----- | ------------------------------------------------------------------------- |
| items | Set&lt;[ItemDefinition](/vanilla/api/item/ItemDefinition)&gt; |


:::

:::group{name=isEmpty}

Checks if this Container is empty.

Returns: True if empty. False otherwise.  
Return Type: boolean

```zenscript
// Container.isEmpty() as boolean

myContainer.isEmpty();
```

:::

:::group{name=removeItem}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
Container.removeItem(var1 as int, var2 as int) as ItemStack
```

| 参数   | 类型  |
| ---- | --- |
| var1 | int |
| var2 | int |


:::

:::group{name=removeItemNoUpdate}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
Container.removeItemNoUpdate(index as int) as ItemStack
```

| 参数    | 类型  |
| ----- | --- |
| index | int |


:::

:::group{name=setChanged}

```zenscript
// Container.setChanged()

myContainer.setChanged();
```

:::

:::group{name=setItem}

```zenscript
Container.setItem(index as int, stack as ItemStack)
```

| 参数    | 类型                                  |
| ----- | ----------------------------------- |
| index | int                                 |
| 堆叠    | [物品应用](/vanilla/api/item/ItemStack) |


:::

:::group{name=startOpen}

```zenscript
Container.startOpen(player as Player)
```

| 参数     | 类型                                               |
| ------ | ------------------------------------------------ |
| player | [Player](/vanilla/api/entity/type/player/Player) |


:::

:::group{name=stillValid}

Return Type: boolean

```zenscript
Container.stillValid(player as Player) as boolean
```

| 参数     | 类型                                               |
| ------ | ------------------------------------------------ |
| player | [Player](/vanilla/api/entity/type/player/Player) |


:::

:::group{name=stopOpen}

```zenscript
Container.stopOpen(player as Player)
```

| 参数     | 类型                                               |
| ------ | ------------------------------------------------ |
| player | [Player](/vanilla/api/entity/type/player/Player) |


:::


## 参数

| 名称            | 类型   | 可获得  | 可设置   | 描述                                               |
| ------------- | ---- | ---- | ----- | ------------------------------------------------ |
| changed       | void | true | false |                                                  |
| containerSize | int  | true | false | Gets the size (how many slots) of this Container |
| isEmpty #是否为空 | 布尔值  | true | false | Checks if this Container is empty.               |
| maxStackSize  | int  | true | false |                                                  |

