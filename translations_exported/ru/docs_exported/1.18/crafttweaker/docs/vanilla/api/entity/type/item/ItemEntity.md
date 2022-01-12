# ItemEntity

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.type.item.ItemEntity;
```


## Extending Entity

ItemEntity extends [Entity](/vanilla/api/entity/Entity). That means all methods available in [Entity](/vanilla/api/entity/Entity) are also available in ItemEntity

## Constructors


```zenscript
new ItemEntity(level as invalid, x as double, y as double, z as double, stack as ItemStack) as ItemEntity
```
| Параметр | Тип                                      | Описание             |
| -------- | ---------------------------------------- | -------------------- |
| level    | **invalid**                              | Описание отсутствует |
| x        | double                                   | Описание отсутствует |
| y        | double                                   | Описание отсутствует |
| z        | double                                   | Описание отсутствует |
| stack    | [ItemStack](/vanilla/api/item/ItemStack) | Описание отсутствует |



## Методы

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

Return Type: void

```zenscript
// ItemEntity.setDefaultPickUpDelay() as void

myItemEntity.setDefaultPickUpDelay();
```

:::

:::group{name=setItem}

Sets the IItemStack inside this ItemEntity.

Return Type: void

```zenscript
// ItemEntity.setItem(stack as IItemStack) as void

myItemEntity.setItem(<item:minecraft:diamond>);
```

| Параметр | Тип                                        | Описание            |
| -------- | ------------------------------------------ | ------------------- |
| stack    | [IItemStack](/vanilla/api/item/IItemStack) | The new IItemStack. |


:::

:::group{name=setNeverPickUp}

Return Type: void

```zenscript
// ItemEntity.setNeverPickUp() as void

myItemEntity.setNeverPickUp();
```

:::

:::group{name=setNoPickUpDelay}

Return Type: void

```zenscript
// ItemEntity.setNoPickUpDelay() as void

myItemEntity.setNoPickUpDelay();
```

:::

:::group{name=setPickUpDelay}

Return Type: void

```zenscript
ItemEntity.setPickUpDelay(ticks as int) as void
```

| Параметр | Тип | Описание                |
| -------- | --- | ----------------------- |
| ticks    | int | No Description Provided |


:::


## Свойства

| Название       | Тип                                        | Имеет Getter | Имеет Setter | Описание                                    |
| -------------- | ------------------------------------------ | ------------ | ------------ | ------------------------------------------- |
| hasPickupDelay | boolean                                    | true         | false        | No Description Provided                     |
| item           | [IItemStack](/vanilla/api/item/IItemStack) | true         | true         | Gets the IItemStack inside this ItemEntity. |

