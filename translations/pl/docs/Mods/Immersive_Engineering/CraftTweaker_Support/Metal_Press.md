# Metalowe naciśnięcie

Pakiet prasowy metalu może być użyty do dodawania/usuwania receptur do/z pras metalowych Inżynierii Immersive Engineering Metal.

## Wezwanie do pakietu

Pakiet MetalPress można wywołać za pomocą `mods.immersiveengineering.MetalPress`.

## Dodaj przepis

| Wymagane | Typ        | Typ danych                                       |
| -------- | ---------- | ------------------------------------------------ |
| Wymagane | Wyjście    | [IItemstack](/Vanilla/Items/IItemStack/)         |
| Wymagane | Input      | [Składnik](/Vanilla/Variable_Types/IIngredient/) |
| Wymagane | Młody      | [IItemstack](/Vanilla/Items/IItemStack/)         |
| Wymagane | Energia    | Liczba całkowita                                 |
| Wymagane | Input Size | Liczba całkowita                                 |

### Przykład

```zenscript
//Example:
mods.immersiveengineering.MetalPress.addRecipe(IItemStack output, IIngredient input, IItemStack mold, int Energia, @Optional int inputSize);

mods. mmersiveengineering.MetalPress.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:emerald>, 2000);
mods.immersiveengineering.MetalPress.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:emerald>, 2000, 16);
```

## Usuń przepis

| Typ     | Typ danych                               |
| ------- | ---------------------------------------- |
| Wyjście | [IItemstack](/Vanilla/Items/IItemStack/) |

### Przykład

```zenscript
//Example:
mods.immersiveengineering.MetalPress.removeRecipe(IItemstack output);

mods.immersiveengineering.MetalPress.removeRecipe(<minecraft:diamond>);
```

## Usuń przez Mold

| Typ     | Typ danych                               |
| ------- | ---------------------------------------- |
| Wyjście | [IItemstack](/Vanilla/Items/IItemStack/) |

### Przykład

```zenscript
//Example:
mods.immersiveengineering.MetalPress.removeRecipeByMold(IItemstack output);

mods.immersiveengineering.MetalPress.removeRecipeByMold(<minecraft:diamond>);
```