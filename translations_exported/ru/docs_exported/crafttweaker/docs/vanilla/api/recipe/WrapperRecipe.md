# WrapperRecipe

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipes.WrapperRecipe;
```


## Methods

:::group{name=canFit}

Return Type: boolean

```zenscript
WrapperRecipe.canFit(width as int, height as int) as boolean
```

| Параметр | Тип | Description             |
| -------- | --- | ----------------------- |
| width    | int | No Description Provided |
| height   | int | No Description Provided |


:::


## Свойства

| Название    | Тип                                                                          | Имеет Getter | Имеет Setter | Description             |
| ----------- | ---------------------------------------------------------------------------- | ------------ | ------------ | ----------------------- |
| dynamic     | boolean                                                                      | true         | false        | No Description Provided |
| group       | string                                                                       | true         | false        | No Description Provided |
| icon        | [IItemStack](/vanilla/api/items/IItemStack)                                  | true         | false        | No Description Provided |
| id          | [Расположение MCResource-ресурсов](/vanilla/api/util/MCResourceLocation)     | true         | false        | No Description Provided |
| ingredients | stdlib.List&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt; | true         | false        | No Description Provided |
| output      | [IItemStack](/vanilla/api/items/IItemStack)                                  | true         | false        | No Description Provided |

