# MCIngredientTransformed&LT;T : IIngredient&GT;

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.MCIngredientTransformed;
```


## Implemented Interfaces
MCIngredientTransformed implements the following interfaces. That means all methods defined in these interfaces are also available in MCIngredientTransformed

- [IIngredient](/vanilla/api/items/IIngredient)
## Утилиты

| Тип результата                       | Является неявным |
| ------------------------------------ | ---------------- |
| [IData](/vanilla/api/data/IData)     | true             |
| [MapData](/vanilla/api/data/MapData) | true             |

## Methods

### matches

Return Type: boolean

```zenscript
MCIngredientTransformed.matches(stack as IItemStack, ignoreDamage as boolean) as boolean
```

| Параметр      | Тип                                         | Description             |
| ------------- | ------------------------------------------- | ----------------------- |
| stack         | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |
| Игнорирование | boolean                                     | No Description Provided |



## Свойства

| Название       | Тип                                                                                      | Имеет Getter | Имеет Setter |
| -------------- | ---------------------------------------------------------------------------------------- | ------------ | ------------ |
| baseIngredient | T                                                                                        | true         | false        |
| items          | [IItemStack](/vanilla/api/items/IItemStack)[]                                            | true         | false        |
| трансформатор  | [IIngredientTransformer](/vanilla/api/items/IIngredientTransformer)&lt;T&gt; | true         | false        |

