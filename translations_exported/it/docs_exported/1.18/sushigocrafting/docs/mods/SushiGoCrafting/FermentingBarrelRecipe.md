# FermentingBarrelRecipe

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sushigocrafting.FermentingBarrelRecipe;
```


## Metodi

:::group{name=getFluid}

Return Type: [IFluidStack](/forge/api/fluid/IFluidStack)

```zenscript
// FermentingBarrelRecipe.getFluid() as IFluidStack

myFermentingBarrelRecipe.getFluid();
```

:::

:::group{name=getInput}

Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
// FermentingBarrelRecipe.getInput() as IIngredient

myFermentingBarrelRecipe.getInput();
```

:::

:::group{name=getOutput}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// FermentingBarrelRecipe.getOutput() as IItemStack

myFermentingBarrelRecipe.getOutput();
```

:::


## Proprietà

| Nome   | Tipo                                               | Ha Getter | Ha Setter | Descrizione             |
| ------ | -------------------------------------------------- | --------- | --------- | ----------------------- |
| fluid  | [IFluidStack](/forge/api/fluid/IFluidStack)        | sì        | no        | No Description Provided |
| input  | [IIngredient](/vanilla/api/ingredient/IIngredient) | sì        | no        | No Description Provided |
| output | [IItemStack](/vanilla/api/item/IItemStack)         | sì        | no        | No Description Provided |

