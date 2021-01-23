# IIngredientWithAmount

Consists of an ingredient and an amount.

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.IIngredientWithAmount;
```


## Interfacce Implementate
IIngredientWithAmount implements the following interfaces. That means all methods defined in these interfaces are also available in IIngredientWithAmount

- [CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
## Properties

| Name       | Type                                          | Ha Getter | Ha Setter |
| ---------- | --------------------------------------------- | --------- | --------- |
| amount     | int                                           | true      | false     |
| ingredient | [IIngredient](/vanilla/api/items/IIngredient) | true      | false     |

