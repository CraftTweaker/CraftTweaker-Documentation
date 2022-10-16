# FermentingBarrelRecipe

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sushigocrafting.FermentingBarrelRecipe;
```


## Методы

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


## Свойства

| Название | Тип                                                | Имеет Getter | Имеет Setter | Описание                |
| -------- | -------------------------------------------------- | ------------ | ------------ | ----------------------- |
| fluid    | [IFluidStack](/forge/api/fluid/IFluidStack)        | true         | false        | No Description Provided |
| input    | [IIngredient](/vanilla/api/ingredient/IIngredient) | true         | false        | No Description Provided |
| output   | [IItemStack](/vanilla/api/item/IItemStack)         | true         | false        | No Description Provided |

