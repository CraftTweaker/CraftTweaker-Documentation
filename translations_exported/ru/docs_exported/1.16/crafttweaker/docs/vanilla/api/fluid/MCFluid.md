# MCFluid

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.fluid.MCFluid;
```


## Методы

:::group{name=makeStack}

Creates a new [IFluidStack](/vanilla/api/fluid/IFluidStack) with the given amount of fluid.

Returns: a new (immutable) [IFluidStack](/vanilla/api/fluid/IFluidStack)  
Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
// MCFluid.makeStack(amount as int) as IFluidStack

myMCFluid.makeStack(1000);
```

| Параметр | Тип | Описание                |
| -------- | --- | ----------------------- |
| amount   | int | No Description Provided |


:::


## Свойства

| Название      | Тип    | Имеет Getter | Имеет Setter | Описание                |
| ------------- | ------ | ------------ | ------------ | ----------------------- |
| commandString | string | true         | false        | No Description Provided |

