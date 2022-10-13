# IItemHandler

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.capability.IItemHandler;
```


## Metodi

:::group{name=extractItem}

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
IItemHandler.extractItem(slot as int, amount as int, simulate as boolean) as IItemStack
```

| Parametro | Tipo    | Descrizione             | Optional | DefaultValue |
| --------- | ------- | ----------------------- | -------- | ------------ |
| slot      | int     | No Description Provided | no       |              |
| amount    | int     | No Description Provided | no       |              |
| simulate  | boolean | No Description Provided | sì       | no           |


:::

:::group{name=getSlotLimit}

Return Type: int

```zenscript
IItemHandler.getSlotLimit(slot as int) as int
```

| Parametro | Tipo | Descrizione             |
| --------- | ---- | ----------------------- |
| slot      | int  | No Description Provided |


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

| Parametro | Tipo | Descrizione             |
| --------- | ---- | ----------------------- |
| slot      | int  | No Description Provided |


:::

:::group{name=insertItem}

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
IItemHandler.insertItem(slot as int, stack as IItemStack, simulate as boolean) as IItemStack
```

| Parametro | Tipo                                        | Descrizione             | Optional | DefaultValue |
| --------- | ------------------------------------------- | ----------------------- | -------- | ------------ |
| slot      | int                                         | No Description Provided | no       |              |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided | no       |              |
| simulate  | boolean                                     | No Description Provided | sì       | no           |


:::

:::group{name=isItemValid}

Return Type: boolean

```zenscript
IItemHandler.isItemValid(slot as int, stack as IItemStack) as boolean
```

| Parametro | Tipo                                        | Descrizione             |
| --------- | ------------------------------------------- | ----------------------- |
| slot      | int                                         | No Description Provided |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |


:::


## Proprietà

| Nome  | Tipo | Ha Getter | Ha Setter | Descrizione             |
| ----- | ---- | --------- | --------- | ----------------------- |
| slots | int  | sì        | no        | No Description Provided |

