# Maszyny do butelek

## Wezwanie do pakietu

Pakiet BottlingMachine można wywołać używając `mods.immersiveengineering.BottlingMachine`.

## Dodaj przepis

| Wymagane | Typ     | Typ danych                                       |
| -------- | ------- | ------------------------------------------------ |
| Wymagane | Wyjście | [IItemstack](/Vanilla/Items/IItemStack/)         |
| Wymagane | Input   | [Składnik](/Vanilla/Variable_Types/IIngredient/) |
| Wymagane | Płyn    | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)     |

### Przykład

```zenscript
//Example:
mods.immersiveengineering.BottlingMachine.addRecipe(IItemStack output, IIngredient input, ILiquidStack fluid);
mods.immersiveengineering.BottlingMachine.addRecipe(<minecraft:diamond>, <ore:logWood>, <liquid:water>);
```

## Usuń przepis

| Typ     | Typ danych                               |
| ------- | ---------------------------------------- |
| Wyjście | [IItemstack](/Vanilla/Items/IItemStack/) |

### Przykład

```zenscript
//Example:
mods.immersiveengineering.BottlingMachine.removeRecipe(IItemStack output);
mods.immersiveengineering.BottlingMachine.removeRecipe(<minecraft:diamond>);
```