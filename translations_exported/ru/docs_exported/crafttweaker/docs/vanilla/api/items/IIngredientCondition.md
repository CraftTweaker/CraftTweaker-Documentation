# IIngredientCondition&LT;T : IIngredient&GT;

## Импорт класса

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
| Параметр   | Тип | Description             |
| ---------- | --- | ----------------------- |
| ingredient | T   | No Description Provided |

### matches

Return Type: boolean

```zenscript
IIngredientCondition.matches(stack as IItemStack) as boolean
```
| Параметр | Тип                                         | Description             |
| -------- | ------------------------------------------- | ----------------------- |
| stack    | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |


