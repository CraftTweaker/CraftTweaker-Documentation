# IItemHandler

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.capability.IItemHandler;
```


## Methods

:::group{name=extractItem}

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
IItemHandler.extractItem(slot as int, amount as int, simulate as boolean) as IItemStack
```

| Parameter | Type    | Description             | Optional | DefaultValue |
| --------- | ------- | ----------------------- | -------- | ------------ |
| slot      | int     | No Description Provided | false    |              |
| amount    | int     | No Description Provided | false    |              |
| simulate  | boolean | No Description Provided | true     | false        |


:::

:::group{name=getSlotLimit}

Return Type: int

```zenscript
IItemHandler.getSlotLimit(slot as int) as int
```

| Parameter | Type | Description             |
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

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| slot      | int  | No Description Provided |


:::

:::group{name=insertItem}

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
IItemHandler.insertItem(slot as int, stack as IItemStack, simulate as boolean) as IItemStack
```

| Parameter | Type                                        | Description             | Optional | DefaultValue |
| --------- | ------------------------------------------- | ----------------------- | -------- | ------------ |
| slot      | int                                         | No Description Provided | false    |              |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided | false    |              |
| simulate  | boolean                                     | No Description Provided | true     | false        |


:::

:::group{name=isItemValid}

Return Type: boolean

```zenscript
IItemHandler.isItemValid(slot as int, stack as IItemStack) as boolean
```

| Parameter | Type                                        | Description             |
| --------- | ------------------------------------------- | ----------------------- |
| slot      | int                                         | No Description Provided |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |


:::


## Properties

| Nombre | Type | Has Getter | Has Setter | Description             |
| ------ | ---- | ---------- | ---------- | ----------------------- |
| slots  | int  | true       | false      | No Description Provided |

