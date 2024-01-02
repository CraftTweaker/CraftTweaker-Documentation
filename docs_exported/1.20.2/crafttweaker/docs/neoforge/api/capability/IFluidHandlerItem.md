# IFluidHandlerItem

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.capability.IFluidHandlerItem;
```


## Implemented Interfaces
IFluidHandlerItem implements the following interfaces. That means all methods defined in these interfaces are also available in IFluidHandlerItem

- [IFluidHandler](/neoforge/api/capability/IFluidHandler)

## Methods

:::group{name=getContainer}

Gets the container of this handler.

Returns: The container of this handler.  
Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
// IFluidHandlerItem.getContainer() as ItemStack

myIFluidHandlerItem.getContainer();
```

:::


## Properties

|   Name    |                   Type                   | Has Getter | Has Setter |             Description             |
|-----------|------------------------------------------|------------|------------|-------------------------------------|
| container | [ItemStack](/vanilla/api/item/ItemStack) | true       | false      | Gets the container of this handler. |

