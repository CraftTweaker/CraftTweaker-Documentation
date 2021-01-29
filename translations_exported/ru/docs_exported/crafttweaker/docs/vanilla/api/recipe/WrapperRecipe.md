# WrapperRecipe

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipes.WrapperRecipe;
```


## Methods

### canFit

Return Type: boolean

```zenscript
WrapperRecipe.canFit(width as int, height as int) as boolean
```
| Параметр | Тип | Description             |
| -------- | --- | ----------------------- |
| width    | int | No Description Provided |
| height   | int | No Description Provided |


## Свойства

| Название    | Тип                                                                          | Имеет Getter | Имеет Setter |
| ----------- | ---------------------------------------------------------------------------- | ------------ | ------------ |
| dynamic     | boolean                                                                      | true         | false        |
| group       | string                                                                       | true         | false        |
| icon        | [IItemStack](/vanilla/api/items/IItemStack)                                  | true         | false        |
| id          | [Расположение MCResource-ресурсов](/vanilla/api/util/MCResourceLocation)     | true         | false        |
| ingredients | stdlib.List&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt; | true         | false        |
| output      | [IItemStack](/vanilla/api/items/IItemStack)                                  | true         | false        |

