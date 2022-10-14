# ItemEntity

## Importing the class

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
| Parameter | Type                                     | Description             |
| --------- | ---------------------------------------- | ----------------------- |
| level     | **invalid**                              | No description provided |
| x         | double                                   | No description provided |
| y         | double                                   | No description provided |
| z         | double                                   | No description provided |
| stack     | [ItemStack](/vanilla/api/item/ItemStack) | No description provided |



## Methods

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

| Parameter | Type                                       | Description         |
| --------- | ------------------------------------------ | ------------------- |
| stack     | [IItemStack](/vanilla/api/item/IItemStack) | The new IItemStack. |


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

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| ticks     | int  | No Description Provided |


:::


## Properties

| 名称             | Type                                       | Has Getter | Has Setter | Description                                 |
| -------------- | ------------------------------------------ | ---------- | ---------- | ------------------------------------------- |
| hasPickupDelay | boolean型                                   | true       | false      | No Description Provided                     |
| item           | [IItemStack](/vanilla/api/item/IItemStack) | true       | true       | Gets the IItemStack inside this ItemEntity. |

