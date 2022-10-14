# IItemHandler

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.capability.IItemHandler;
```


## 使用方式

:::group{name=extractItem}

Extract from the given slot.

Returns: The stack extracted from the slot.  
Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// IItemHandler.extractItem(slot as int, amount as int, simulate as boolean) as IItemStack

myIItemHandler.extractItem(0, 5, false);
```

| 参数       | 类型  | 描述                                                                          |
| -------- | --- | --------------------------------------------------------------------------- |
| slot     | int | The slot to extract from.                                                   |
| amount   | int | How much to extract from the slot.                                          |
| simulate | 布尔值 | If the extraction should actually happen, if true, no changes will be made. |


:::

:::group{name=getSlotLimit}

Gets how much of a stack can fit into the given slot.

Returns: The max stack size of the given stack.  
Return Type: int

```zenscript
// IItemHandler.getSlotLimit(slot as int) as int

myIItemHandler.getSlotLimit(1);
```

| 参数   | 类型  | 描述                 |
| ---- | --- | ------------------ |
| slot | int | The slot to check. |


:::

:::group{name=getSlots}

Gets the amount of slots in the handler.

Returns: The amount of slots in the handler.  
Return Type: int

```zenscript
// IItemHandler.getSlots() as int

myIItemHandler.getSlots();
```

:::

:::group{name=getStackInSlot}

Gets the stack in the given slot.

Returns: The stack in the slot.  
Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// IItemHandler.getStackInSlot(slot as int) as IItemStack

myIItemHandler.getStackInSlot(1);
```

| 参数   | 类型  | 描述                            |
| ---- | --- | ----------------------------- |
| slot | int | The slot to get the stack of. |


:::

:::group{name=insertItem}

Inserts the stack into the given slot and returns the remainder.

 The remainder returned is how much was not inserted.


 For example if slot `0` had `63` dirt, and you tried to insert `5` dirt, you will get a remainder of `4` dirt.

Returns: The remaining stack that was not inserted.  
Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// IItemHandler.insertItem(slot as int, stack as IItemStack, simulate as boolean) as IItemStack

myIItemHandler.insertItem(1, <item:minecraft:dirt>, true);
```

| 参数       | 类型                                         | 描述                                                           |
| -------- | ------------------------------------------ | ------------------------------------------------------------ |
| slot     | int                                        | The slot to insert into.                                     |
| 堆叠       | [IItemstack](/vanilla/api/item/IItemStack) | The stack to insert.                                         |
| simulate | 布尔值                                        | If the insert should actually happen, if true, will be made. |


:::

:::group{name=isItemValid}

Checks if the given stack is valid for the given slot.

Returns: true if the stack is valid, false otherwise.  
Return Type: boolean

```zenscript
IItemHandler.isItemValid(slot as int, stack as IItemStack) as boolean
```

| 参数   | 类型                                         | 描述                  |
| ---- | ------------------------------------------ | ------------------- |
| slot | int                                        | The slot to check.  |
| 堆叠   | [IItemstack](/vanilla/api/item/IItemStack) | The stack to check. |


:::


## 参数

| 名称    | 类型  | 可获得  | 可设置   | 描述                                       |
| ----- | --- | ---- | ----- | ---------------------------------------- |
| slots | int | true | false | Gets the amount of slots in the handler. |

