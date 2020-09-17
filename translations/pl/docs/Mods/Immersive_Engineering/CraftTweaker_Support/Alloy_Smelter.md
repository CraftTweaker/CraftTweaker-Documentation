# Stop hutniczy

Pakiet stopu do hutnictwa może być użyty do dodawania/usuwania przepisów do/z hutnictwa stopu inżynieryjnego.

## Wezwanie do pakietu

Możesz wywołać pakiet AlloySmelter używając `mods.immersiveengineering.AlloySmelter`

## Dodaj przepis

| Wymagane | Typ     | Typ danych                                       |
| -------- | ------- | ------------------------------------------------ |
| Wymagane | Wyjście | [IItemstack](/Vanilla/Items/IItemStack/)         |
| Wymagane | Input 1 | [Składnik](/Vanilla/Variable_Types/IIngredient/) |
| Wymagane | Input 2 | [Składnik](/Vanilla/Variable_Types/IIngredient/) |
| Wymagane | Czas    | Liczba całkowita                                 |

### Przykład

```zenscript
//Example:
mods.immersiveengineering.AlloySmelter.addRecipe(IItemStack output, IIngredient firstst, IIngredient second, int time);
mods.immersiveengineering.AlloySmelter.addRecipe(<minecraft:diamond>, <ore:ingotIron>, <minecraft:dirt>, 2000);
```

## Usuń przepis

| Typ     | Typ danych                               |
| ------- | ---------------------------------------- |
| Wyjście | [IItemstack](/Vanilla/Items/IItemStack/) |

### Przykład

```zenscript
//Example:
mods.immersiveengineering.AlloySmelter.removeRecipe(IItemstack output);
mods.immersiveengineering.AlloySmelter.removeRecipe(<minecraft:diamond>);
```