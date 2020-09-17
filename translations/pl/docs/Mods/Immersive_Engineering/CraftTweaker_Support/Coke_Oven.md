# Piec koksowy

## Wezwanie do pakietu

Możesz wywołać pakiet CokeOven używając `mods.immersiveengineering.CokeOven`.

## Dodaj przepis

| Wymagane | Typ              | Typ danych                                       |
| -------- | ---------------- | ------------------------------------------------ |
| Wymagane | Wyjście          | [IItemstack](/Vanilla/Items/IItemStack/)         |
| Wymagane | Produkcja paliwa | Liczba całkowita                                 |
| Wymagane | Input            | [Składnik](/Vanilla/Variable_Types/IIngredient/) |
| Wymagane | Czas             | Liczba całkowita                                 |

### Przykład

```zenscript
//Example:
mods.immersiveengineering.CokeOven.addRecipe(IItemStack output, int fuelOutput, IIngredient Input , int time);
mods.immersiveengineering.CokeOven.addRecipe(<minecraft:coal>, 2, <ore:logWood>, 2000);
```

## Usuń przepis

| Typ     | Typ danych                               |
| ------- | ---------------------------------------- |
| Wyjście | [IItemstack](/Vanilla/Items/IItemStack/) |

### Przykład:

```zenscript
//Example:
mods.immersiveengineering.CokeOven.removeRecipe(IItemStack output);
mods.immersiveengineering.CokeOven.removeRecipe(<minecraft:diamond>);
```