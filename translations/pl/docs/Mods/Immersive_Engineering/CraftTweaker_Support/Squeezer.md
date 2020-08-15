# Wyciszacz

Pakiet ciszarki może być użyty do dodawania/usuwania przepisów do/z Siatki Inżynierii Immersive Engineering Squeezer.

## Wezwanie do pakietu

Możesz wywołać pakiet Squeezer używając `mods.immersiveengineering.Squeezer`.

## Dodaj przepis

| Wymagane | Typ     | Typ danych                                       |
| -------- | ------- | ------------------------------------------------ |
| Wymagane | Wyjście | [IItemStack](/Vanilla/Items/IItemStack/)         |
| Wymagane | Płyn    | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)     |
| Wymagane | Input   | [Składnik](/Vanilla/Variable_Types/IIngredient/) |
| Wymagane | Energia | Liczba całkowita                                 |

### Przykład

```zenscript
//Example:
mods.immersiveengineering.Squeezer.addRecipe(IItemStack output, ILiquidStack, IIngredient Inputt, int energy);

mods.immersiveengineering.Squeezer.addRecipe(<minecraft:diamond>, <liquid:water>, <ore:logWood>, 2048);
```

## Usuń przepis na płyn

| Typ     | Typ danych                                   |
| ------- | -------------------------------------------- |
| Wyjście | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Przykład

```zenscript
//Example:
mods.immersiveengineering.Squeezer.removeFluidRecipe(ILiquidStack);

mods.immersiveengineering.Squeezer.removeFluidRecipe(<liquid:water>);
```

## Usuń przepis na element

| Typ     | Typ danych                               |
| ------- | ---------------------------------------- |
| Wyjście | [IItemstack](/Vanilla/Items/IItemStack/) |

### Przykład

```zenscript
//Example:
mods.immersiveengineering.Squeezer.removeItemRecipe(IItemStack stack);

mods.immersiveengineering.Squeezer.removeItemRecipe(<minecraft:diamond>);
```

## Usuń przez wejście

| Typ     | Typ danych                               |
| ------- | ---------------------------------------- |
| Wyjście | [IItemstack](/Vanilla/Items/IItemStack/) |

### Przykład

```zenscript
//Example:
mods.immersiveengineering.Squeezer.removeByInput(IItemStack stack);

mods.immersiveengineering.Squeezer.removeByInput(<minecraft:log>);
```