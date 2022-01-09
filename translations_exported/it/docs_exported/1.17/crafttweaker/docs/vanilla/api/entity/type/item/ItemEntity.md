# ItemEntity

## Importare la Classe

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
| Parametro | Tipo                                     | Descrizione                 |
| --------- | ---------------------------------------- | --------------------------- |
| level     | **invalid**                              | Nessuna descrizione fornita |
| x         | double                                   | Nessuna descrizione fornita |
| y         | double                                   | Nessuna descrizione fornita |
| z         | double                                   | Nessuna descrizione fornita |
| stack     | [ItemStack](/vanilla/api/item/ItemStack) | Nessuna descrizione fornita |



## Metodi

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

| Parametro | Tipo                                       | Descrizione         |
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

| Parametro | Tipo | Descrizione             |
| --------- | ---- | ----------------------- |
| ticks     | int  | No Description Provided |


:::


## Proprietà

| Nome           | Tipo                                       | Ha Getter | Ha Setter | Descrizione                                 |
| -------------- | ------------------------------------------ | --------- | --------- | ------------------------------------------- |
| hasPickupDelay | boolean                                    | sì        | no        | No Description Provided                     |
| item           | [IItemStack](/vanilla/api/item/IItemStack) | sì        | sì        | Gets the IItemStack inside this ItemEntity. |

