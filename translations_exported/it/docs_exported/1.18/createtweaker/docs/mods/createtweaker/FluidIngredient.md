# FluidIngredient

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.createtweaker.FluidIngredient;
```


## Interfacce Implementate
FluidIngredient implements the following interfaces. That means all methods defined in these interfaces are also available in FluidIngredient

- Predicate

## Metodi

:::group{name=getMatchingFluidStacks}

Return Type: stdlib.List&lt;[IFluidStack](/forge/api/fluid/IFluidStack)&gt;

```zenscript
// FluidIngredient.getMatchingFluidStacks() as stdlib.List<IFluidStack>

myFluidIngredient.getMatchingFluidStacks();
```

:::

:::group{name=getRequiredAmount}

Return Type: int

```zenscript
// FluidIngredient.getRequiredAmount() as int

myFluidIngredient.getRequiredAmount();
```

:::

:::group{name=test}

Return Type: boolean

```zenscript
FluidIngredient.test(t as IFluidStack) as boolean
```

| Parametro | Tipo                                        | Descrizione             |
| --------- | ------------------------------------------- | ----------------------- |
| t         | [IFluidStack](/forge/api/fluid/IFluidStack) | No Description Provided |


:::


## Proprietà

| Nome                | Tipo                                                                       | Ha Getter | Ha Setter | Descrizione             |
| ------------------- | -------------------------------------------------------------------------- | --------- | --------- | ----------------------- |
| matchingFluidStacks | stdlib.List&lt;[IFluidStack](/forge/api/fluid/IFluidStack)&gt; | sì        | no        | No Description Provided |
| requiredAmount      | int                                                                        | sì        | no        | No Description Provided |

