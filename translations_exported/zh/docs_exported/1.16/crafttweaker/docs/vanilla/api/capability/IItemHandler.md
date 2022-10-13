# IItemHandler

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.capability.IItemHandler;
```


## 使用方式

:::group{name=extractItem}

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
IItemHandler.extractItem(slot as int, amount as int, simulate as boolean) as IItemStack
```

| 参数       | 类型  | 描述                      | 可选    | DefaultValue |
| -------- | --- | ----------------------- | ----- | ------------ |
| slot     | int | No Description Provided | false |              |
| amount   | int | No Description Provided | false |              |
| simulate | 布尔值 | No Description Provided | true  | false        |


:::

:::group{name=getSlotLimit}

Return Type: int

```zenscript
IItemHandler.getSlotLimit(slot as int) as int
```

| 参数   | 类型  | 描述                      |
| ---- | --- | ----------------------- |
| slot | int | No Description Provided |


:::

:::group{name=getSlots}

Return Type: int

```zenscript
// IItemHandler.getSlots() as int

myIItemHandler.getSlots();
```

:::

:::group{name=getStackInSlot}

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
IItemHandler.getStackInSlot(slot as int) as IItemStack
```

| 参数   | 类型  | 描述                      |
| ---- | --- | ----------------------- |
| slot | int | No Description Provided |


:::

:::group{name=insertItem}

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
IItemHandler.insertItem(slot as int, stack as IItemStack, simulate as boolean) as IItemStack
```

| 参数       | 类型                                          | 描述                      | 可选    | DefaultValue |
| -------- | ------------------------------------------- | ----------------------- | ----- | ------------ |
| slot     | int                                         | No Description Provided | false |              |
| 堆叠       | [IItemstack](/vanilla/api/items/IItemStack) | No Description Provided | false |              |
| simulate | 布尔值                                         | No Description Provided | true  | false        |


:::

:::group{name=isItemValid}

Return Type: boolean

```zenscript
IItemHandler.isItemValid(slot as int, stack as IItemStack) as boolean
```

| 参数   | 类型                                          | 描述                      |
| ---- | ------------------------------------------- | ----------------------- |
| slot | int                                         | No Description Provided |
| 堆叠   | [IItemstack](/vanilla/api/items/IItemStack) | No Description Provided |


:::


## 参数

| 名称    | 类型  | 可获得  | 可设置   | 描述                      |
| ----- | --- | ---- | ----- | ----------------------- |
| slots | int | true | false | No Description Provided |

