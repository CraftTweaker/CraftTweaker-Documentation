# ItemEntity

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.type.item.ItemEntity;
```


## Extending Entity

ItemEntity extends [Entity](/vanilla/api/entity/Entity). That means all methods available in [Entity](/vanilla/api/entity/Entity) are also available in ItemEntity

## Constructor #构造函数


```zenscript
new ItemEntity(level as Level, x as double, y as double, z as double, stack as ItemStack) as ItemEntity
```
| 参数    | 类型                                  |
| ----- | ----------------------------------- |
| level | [Level](/vanilla/api/world/Level)   |
| x     | double                              |
| y     | double                              |
| z     | double                              |
| 堆叠    | [物品应用](/vanilla/api/item/ItemStack) |



## 使用方式

:::group{name=getItem}

Gets the IItemStack inside this ItemEntity.

Returns: The IItemStack inside this ItemEntity.  
Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// ItemEntity.getItem() as IItemStack

myItemEntity.getItem();
```

:::

:::group{name=hasPickUpDelay}

Return Type: boolean

```zenscript
// ItemEntity.hasPickUpDelay() as boolean

myItemEntity.hasPickUpDelay();
```

:::

:::group{name=setDefaultPickUpDelay}

```zenscript
// ItemEntity.setDefaultPickUpDelay()

myItemEntity.setDefaultPickUpDelay();
```

:::

:::group{name=setItem}

Sets the IItemStack inside this ItemEntity.

```zenscript
// ItemEntity.setItem(stack as IItemStack)

myItemEntity.setItem(<item:minecraft:diamond>);
```

| 参数 | 类型                                         | 描述                  |
| -- | ------------------------------------------ | ------------------- |
| 堆叠 | [IItemstack](/vanilla/api/item/IItemStack) | The new IItemStack. |


:::

:::group{name=setNeverPickUp}

```zenscript
// ItemEntity.setNeverPickUp()

myItemEntity.setNeverPickUp();
```

:::

:::group{name=setNoPickUpDelay}

```zenscript
// ItemEntity.setNoPickUpDelay()

myItemEntity.setNoPickUpDelay();
```

:::

:::group{name=setPickUpDelay}

```zenscript
ItemEntity.setPickUpDelay(ticks as int)
```

| 参数    | 类型  |
| ----- | --- |
| ticks | int |


:::


## 参数

| 名称             | 类型                                         | 可获得  | 可设置   | 描述                                          |
| -------------- | ------------------------------------------ | ---- | ----- | ------------------------------------------- |
| hasPickupDelay | 布尔值                                        | true | false |                                             |
| item           | [IItemstack](/vanilla/api/item/IItemStack) | true | true  | Gets the IItemStack inside this ItemEntity. |

