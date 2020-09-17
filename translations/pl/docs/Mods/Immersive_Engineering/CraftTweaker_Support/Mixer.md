# Mieszacz

Pakiet Mixer może być użyty do dodawania/usuwania przepisów do/z Miksera Inżynierii Immersive Engineering Mixer.

## Wezwanie do pakietu

Możesz wywołać pakiet Mixer używając `mods.immersiveengineering.Mixer`.

## Dodaj przepis

| Wymagane | Typ           | Typ danych                                                    |
| -------- | ------------- | ------------------------------------------------------------- |
| Wymagane | Wydanie płynu | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)                  |
| Wymagane | Fluid Input   | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)                  |
| Wymagane | Item Inputs   | [Składnik](/Vanilla/Variable_Types/IIngredient/) jako tablica |
| Wymagane | Energia       | Liczba całkowita                                              |

### Przykład

```zenscript
//Example:
mods.immersiveengineering.Mixer.addRecipe(ILiquidStack output, ILiquidStack fluidInput, IIngredient[] itemInputs, int energy);

mods.immersiveengineering.Mixer.addRecipe(<liquid:lava>, <liquid:water>, [<ore:logWood>, <minecraft:dirt>], 2048);
```

## Usuń przepis

| Typ     | Typ danych                                   |
| ------- | -------------------------------------------- |
| Wyjście | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Przykład

```zenscript
//Example:
mods.immersiveengineering.Mixer.removeRecipe(ILiquidStack output);

mods.immersiveengineering.Mixer.removeRecipe(<liquid:lava>);
```