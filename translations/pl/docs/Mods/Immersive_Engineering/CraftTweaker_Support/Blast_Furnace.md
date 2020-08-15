# Piec wielkopiecowy

Pakiet pieca wielkopiecowego może być użyty do dodawania/usuwania przepisów/paliw do/z wielkich pieców inżynieryjnych.

## Wezwanie do pakietu

Możesz wywołać pakiet BlastFurnace używając `mods.immersiveengineering.BlastFurnace`.

## Dodaj przepis:

| Wymagane    | Typ     | Typ danych                                       |
| ----------- | ------- | ------------------------------------------------ |
| Wymagane    | Wyjście | [IItemstack](/Vanilla/Items/IItemStack/)         |
| Wymagane    | Input   | [Składnik](/Vanilla/Variable_Types/IIngredient/) |
| Wymagane    | Czas    | Liczba całkowita                                 |
| Opcjonalnie | Slag    | [IItemstack](/Vanilla/Items/IItemStack/)         |

### Przykład

```zenscript
//Example:
mods.immersiveengineering.BlastFurnace.addRecipe(IItemStack output, IIngredient input, czas int, @Optional IItemStack slag);
mods.immersiveengineering. lastFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, 2000);
mods.immersiveengineering.BlastFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, 2000, <minecraft:dirt>);
```

## Usuń przepis

| Typ     | Typ danych                               |
| ------- | ---------------------------------------- |
| Wyjście | [IItemstack](/Vanilla/Items/IItemStack/) |

### Przykład:

```zenscript
//Example:
mods.immersiveengineering.BlastFurnace.removeRecipe(IItemStack);
mods.immersiveengineering.BlastFurnace.removeRecipe(<minecraft:diamond>;
```

## Dodaj paliwo

| Wymagane | Typ   | Typ danych                                       |
| -------- | ----- | ------------------------------------------------ |
| Wymagane | Input | [Składnik](/Vanilla/Variable_Types/IIngredient/) |
| Wymagane | Czas  | Liczba całkowita                                 |

### Przykład

```zenscript
//Example:
mods.immersiveengineering.BlastFurnace.addFuel(IIngredient input, int time);
mods.immersiveengineering.BlastFurnace.addFuel(<ore:plankWood>, 2000);
```

## Usuń paliwo

| Wymagane | Typ     | Typ danych                               |
| -------- | ------- | ---------------------------------------- |
| Wymagane | Wyjście | [IItemstack](/Vanilla/Items/IItemStack/) |

### Przykład

```zenscript
//Example:
mods.immersiveengineering.BlastFurnace.removeFuel(IItemStack output);
mods.immersiveengineering.BlastFurnace.removeFuel(<minecraft:planks>);
```