# Fermentator

Pakiet Fermentera może być użyty do dodawania/usuwania przepisów do/z Fermentera Inżynierii Immersive Engineering Fermenter.

## Wezwanie do pakietu

Możesz wywołać pakiet Fermentera używając `mods.immersiveengineering.Fermenter`.

## Dodaj przepis

| Wymagane | Typ     | Typ danych                                       |
| -------- | ------- | ------------------------------------------------ |
| Wymagane | Wyjście | [IItemStack](/Vanilla/Items/IItemStack/)         |
| Wymagane | Płyn    | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)     |
| Wymagane | Input   | [Składnik](/Vanilla/Variable_Types/IIngredient/) |
| Wymagane | Energia | Liczba całkowita                                 |

### Przykład

```zenscript
mods.immersiveengineering.Fermenter.addRecipe(IItemStack output, ILiquidStack fluid, IIngredient input, int energy);
mods.immersiveengineering.Fermenter.addRecipe(<minecraft:diamond>, <liquid:water>, <ore:logWood>, 2048);
```

## Usuń przepis na płyn

| Typ     | Typ danych                                   |
| ------- | -------------------------------------------- |
| Wyjście | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Przykład

```zenscript
mods.immersiveengineering.Fermenter.removeFluidRecipe(ILiquidStack);
mods.immersiveengineering.Fermenter.removeFluidRecipe(<liquid:water>);
```

## Usuń przepis na element

| Typ     | Typ danych                               |
| ------- | ---------------------------------------- |
| Wyjście | [IItemstack](/Vanilla/Items/IItemStack/) |

### Przykład

```zenscript
mods.immersiveengineering.Fermenter.removeItemRecipe(IItemstack output);
mods.immersiveengineering.Fermenter.removeItemRecipe(<minecraft:diamond>);
```

## Usuń przez wejście

| Typ     | Typ danych                               |
| ------- | ---------------------------------------- |
| Wyjście | [IItemstack](/Vanilla/Items/IItemStack/) |

### Przykład

```zenscript
mods.immersiveengineering.Fermenter.removeByInput(IItemstack input);
mods.immersiveengineering.Fermenter.removeByInput(<minecraft:diamond>);
```