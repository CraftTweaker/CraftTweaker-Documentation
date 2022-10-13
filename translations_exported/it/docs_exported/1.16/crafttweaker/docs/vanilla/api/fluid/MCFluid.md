# MCFluid

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.fluid.MCFluid;
```


## Metodi

:::group{name=makeStack}

Creates a new [IFluidStack](/vanilla/api/fluid/IFluidStack) with the given amount of fluid.

Returns: a new (immutable) [IFluidStack](/vanilla/api/fluid/IFluidStack)  
Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
// MCFluid.makeStack(amount as int) as IFluidStack

myMCFluid.makeStack(1000);
```

| Parametro | Tipo | Descrizione             |
| --------- | ---- | ----------------------- |
| amount    | int  | No Description Provided |


:::


## Proprietà

| Nome          | Tipo   | Ha Getter | Ha Setter | Descrizione             |
| ------------- | ------ | --------- | --------- | ----------------------- |
| commandString | string | sì        | no        | No Description Provided |

