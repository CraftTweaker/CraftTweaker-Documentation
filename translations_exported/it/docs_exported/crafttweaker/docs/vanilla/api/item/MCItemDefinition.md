# MCItemDefinition

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.MCItemDefinition;
```


## Caster

| Tipo Risultato                              | Implicito |
| ------------------------------------------- | --------- |
| [IItemStack](/vanilla/api/items/IItemStack) | true      |

## Methods

### getDefaultInstance

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
MCItemDefinition.getDefaultInstance() as IItemStack
myMCItemDefinition.getDefaultInstance();
```


## Properties

| Name            | Type                                        | Ha Getter | Ha Setter |
| --------------- | ------------------------------------------- | --------- | --------- |
| commandString   | string                                      | true      | false     |
| defaultInstance | [IItemStack](/vanilla/api/items/IItemStack) | true      | false     |

