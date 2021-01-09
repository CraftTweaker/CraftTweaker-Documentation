# IIngredientCondition&LT;T : IIngredient&GT;

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.IIngredientCondition;
```


## Methods

### getCommandString

Return Type: string

```zenscript
IIngredientCondition.getCommandString(ingredient as T) as string
```
| Parameter  | Type | Description             |
| ---------- | ---- | ----------------------- |
| ingredient | T    | No Description Provided |

### matches

Return Type: boolean

```zenscript
IIngredientCondition.matches(stack as IItemStack) as boolean
```
| Parameter | Type                                        | Description             |
| --------- | ------------------------------------------- | ----------------------- |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |


