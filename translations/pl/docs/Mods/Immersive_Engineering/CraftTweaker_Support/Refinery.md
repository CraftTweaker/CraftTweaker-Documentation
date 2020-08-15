# Rafineria

Pakiet rafinerii może być użyty do dodawania/usuwania przepisów do/z rafinerii Inżynierii Immersive Engineering Refinery.

## Wezwanie do pakietu

Możesz wywołać pakiet Rafinerii, używając `mods.immersiveengineering.Refinery`.

## Dodaj przepis

| Wymagane | Typ     | Typ danych                                   |
| -------- | ------- | -------------------------------------------- |
| Wymagane | Wyjście | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Wymagane | Input 1 | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Wymagane | Input 2 | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Wymagane | Energia | Liczba całkowita                             |

### Przykład

```zenscript
//Example
mods.immersiveengineering.Refinery.addRecipe(ILiquidStack output, ILiquidStack input0, ILiquidStack input1, int energy);

mods.immersiveengineering.Refinery.addRecipe(<liquid:iron>, <liquid:water>, <liquid:lava>, 2048);
```

## Usuń przepis

| Typ     | Typ danych                                   |
| ------- | -------------------------------------------- |
| Wyjście | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Przykład

```zenscript
//Example
mods.immersiveengineering.Refinery.removeRecipe(ILiquidStack);

mods.immersiveengineering.Refinery.removeRecipe(<liquid:iron>);
```