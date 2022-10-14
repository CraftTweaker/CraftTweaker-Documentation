# IIngredientWithAmount

Consists of an ingredient and an amount.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.ingredient.IIngredientWithAmount;
```


## Interfacce Implementate
IIngredientWithAmount implements the following interfaces. That means all methods defined in these interfaces are also available in IIngredientWithAmount

- [CommandStringDisplayable](/vanilla/api/bracket/CommandStringDisplayable)

## Proprietà

| Nome          | Tipo                                               | Ha Getter | Ha Setter | Descrizione                               |
| ------------- | -------------------------------------------------- | --------- | --------- | ----------------------------------------- |
| amount        | int                                                | sì        | no        | Gets the amount of Items in the ItemStack |
| commandString | string                                             | sì        | no        | Returns the BEP to get this thingy        |
| ingredient    | [IIngredient](/vanilla/api/ingredient/IIngredient) | sì        | no        | The backing ingredient                    |

