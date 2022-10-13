# MCItemEntity



## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.MCItemEntity;
```


## Extending MCEntity

MCItemEntity extends [MCEntity](/vanilla/api/entity/MCEntity). That means all methods available in [MCEntity](/vanilla/api/entity/MCEntity) are also available in MCItemEntity

## Constructors


```zenscript
new MCItemEntity(world as MCWorld, x as double, y as double, z as double, stack as ItemStack) as MCItemEntity
```
| Parametro | Tipo                                     | Descrizione                 |
| --------- | ---------------------------------------- | --------------------------- |
| world     | [MCWorld](/vanilla/api/world/MCWorld)    | Nessuna descrizione fornita |
| x         | double                                   | Nessuna descrizione fornita |
| y         | double                                   | Nessuna descrizione fornita |
| z         | double                                   | Nessuna descrizione fornita |
| stack     | [ItemStack](/vanilla/api/item/ItemStack) | Nessuna descrizione fornita |



## Metodi

:::group{name=getItem}

Gets the IItemStack inside this ItemEntity.

Returns: The IItemStack inside this ItemEntity.  
Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
// MCItemEntity.getItem() as IItemStack

itemEntity.getItem();
```

:::

:::group{name=setItem}

Sets the IItemStack inside this ItemEntity.

Return Type: void

```zenscript
// MCItemEntity.setItem(stack as IItemStack) as void

itemEntity.setItem(<item:minecraft:diamond>);
```

| Parametro | Tipo                                        | Descrizione         |
| --------- | ------------------------------------------- | ------------------- |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | The new IItemStack. |


:::


## Proprietà

| Nome | Tipo                                        | Ha Getter | Ha Setter | Descrizione                                 |
| ---- | ------------------------------------------- | --------- | --------- | ------------------------------------------- |
| item | [IItemStack](/vanilla/api/items/IItemStack) | sì        | sì        | Gets the IItemStack inside this ItemEntity. |

