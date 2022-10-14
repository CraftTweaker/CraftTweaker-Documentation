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
new ItemEntity(level as Level, x as double, y as double, z as double, stack as ItemStack) as ItemEntity
```
| Parametro | Tipo                                     |
| --------- | ---------------------------------------- |
| level     | [Level](/vanilla/api/world/Level)        |
| x         | double                                   |
| y         | double                                   |
| z         | double                                   |
| stack     | [ItemStack](/vanilla/api/item/ItemStack) |



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

| Parametro | Tipo                                       | Descrizione         |
| --------- | ------------------------------------------ | ------------------- |
| stack     | [IItemStack](/vanilla/api/item/IItemStack) | The new IItemStack. |


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

| Parametro | Tipo |
| --------- | ---- |
| ticks     | int  |


:::


## Proprietà

| Nome           | Tipo                                       | Ha Getter | Ha Setter | Descrizione                                 |
| -------------- | ------------------------------------------ | --------- | --------- | ------------------------------------------- |
| hasPickupDelay | boolean                                    | sì        | no        |                                             |
| item           | [IItemStack](/vanilla/api/item/IItemStack) | sì        | sì        | Gets the IItemStack inside this ItemEntity. |

