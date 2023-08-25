# IDynamicStackHandler

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.curios.IDynamicStackHandler;
```


## Methods

:::group{name=extractItem}



Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
IDynamicStackHandler.extractItem(slot as int, amount as int, simulate as boolean) as ItemStack
```

| Parameter |  Type   |               Description                |
|-----------|---------|------------------------------------------|
| slot      | int     |                                          |
| amount    | int     |                                          |
| simulate  | boolean | If true, the insertion is only simulated |


:::

:::group{name=getPreviousStackInSlot}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
IDynamicStackHandler.getPreviousStackInSlot(slot as int) as ItemStack
```

| Parameter | Type |
|-----------|------|
| slot      | int  |


:::

:::group{name=getSlotLimit}

Return Type: int

```zenscript
IDynamicStackHandler.getSlotLimit(slot as int) as int
```

| Parameter | Type |
|-----------|------|
| slot      | int  |


:::

:::group{name=getSlots}

Return Type: int

```zenscript
// IDynamicStackHandler.getSlots() as int

myIDynamicStackHandler.getSlots();
```

:::

:::group{name=getStackInSlot}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
IDynamicStackHandler.getStackInSlot(slot as int) as ItemStack
```

| Parameter | Type |
|-----------|------|
| slot      | int  |


:::

:::group{name=insertItem}



Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
IDynamicStackHandler.insertItem(slot as int, stack as IItemStack, simulate as boolean) as ItemStack
```

| Parameter |                    Type                    |               Description                |
|-----------|--------------------------------------------|------------------------------------------|
| slot      | int                                        |                                          |
| stack     | [IItemStack](/vanilla/api/item/IItemStack) |                                          |
| simulate  | boolean                                    | If true, the insertion is only simulated |


:::

:::group{name=isItemValid}

Return Type: boolean

```zenscript
IDynamicStackHandler.isItemValid(slot as int, stack as IItemStack) as boolean
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| slot      | int                                        |
| stack     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=setPreviousStackInSlot}

```zenscript
IDynamicStackHandler.setPreviousStackInSlot(slot as int, stack as IItemStack)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| slot      | int                                        |
| stack     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=setStackInSlot}

```zenscript
IDynamicStackHandler.setStackInSlot(slot as int, stack as IItemStack)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| slot      | int                                        |
| stack     | [IItemStack](/vanilla/api/item/IItemStack) |


:::


## Properties

| Name  | Type | Has Getter | Has Setter |
|-------|------|------------|------------|
| slots | int  | true       | false      |

