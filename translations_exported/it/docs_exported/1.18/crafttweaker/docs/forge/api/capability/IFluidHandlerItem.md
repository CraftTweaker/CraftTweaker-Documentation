# IFluidHandlerItem

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.capability.IFluidHandlerItem;
```


## Interfacce Implementate
IFluidHandlerItem implements the following interfaces. That means all methods defined in these interfaces are also available in IFluidHandlerItem

- [IFluidHandler](/forge/api/capability/IFluidHandler)

## Metodi

:::group{name=getContainer}

Gets the container of this handler.

Returns: The container of this handler.  
Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
// IFluidHandlerItem.getContainer() as ItemStack

myIFluidHandlerItem.getContainer();
```

:::


## Proprietà

| Nome      | Tipo                                     | Ha Getter | Ha Setter | Descrizione                         |
| --------- | ---------------------------------------- | --------- | --------- | ----------------------------------- |
| container | [ItemStack](/vanilla/api/item/ItemStack) | sì        | no        | Gets the container of this handler. |

