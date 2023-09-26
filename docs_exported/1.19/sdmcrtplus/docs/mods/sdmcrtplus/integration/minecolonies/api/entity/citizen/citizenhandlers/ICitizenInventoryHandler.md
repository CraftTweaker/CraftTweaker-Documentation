# ICitizenInventoryHandler

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.entity.citizen.citizenhandlers.ICitizenInventoryHandler;
```


## Methods

:::group{name=findFirstSlotInInventoryWith}

Return Type: int

```zenscript
ICitizenInventoryHandler.findFirstSlotInInventoryWith(var1 as Block) as int
```

| Parameter |               Type                |
|-----------|-----------------------------------|
| var1      | [Block](/vanilla/api/block/Block) |


:::

:::group{name=findFirstSlotInInventoryWith}

Return Type: int

```zenscript
ICitizenInventoryHandler.findFirstSlotInInventoryWith(var1 as ItemDefinition) as int
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| var1      | [ItemDefinition](/vanilla/api/item/ItemDefinition) |


:::

:::group{name=getItemCountInInventory}

Return Type: int

```zenscript
ICitizenInventoryHandler.getItemCountInInventory(var1 as Block) as int
```

| Parameter |               Type                |
|-----------|-----------------------------------|
| var1      | [Block](/vanilla/api/block/Block) |


:::

:::group{name=getItemCountInInventory}

Return Type: int

```zenscript
ICitizenInventoryHandler.getItemCountInInventory(var1 as ItemDefinition) as int
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| var1      | [ItemDefinition](/vanilla/api/item/ItemDefinition) |


:::

:::group{name=hasItemInInventory}

Return Type: boolean

```zenscript
ICitizenInventoryHandler.hasItemInInventory(var1 as Block) as boolean
```

| Parameter |               Type                |
|-----------|-----------------------------------|
| var1      | [Block](/vanilla/api/block/Block) |


:::

:::group{name=hasItemInInventory}

Return Type: boolean

```zenscript
ICitizenInventoryHandler.hasItemInInventory(var1 as ItemDefinition) as boolean
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| var1      | [ItemDefinition](/vanilla/api/item/ItemDefinition) |


:::

:::group{name=isInventoryFull}

Return Type: boolean

```zenscript
// ICitizenInventoryHandler.isInventoryFull() as boolean

myICitizenInventoryHandler.isInventoryFull();
```

:::


