# Kruszący

Pakiet Crushera może być użyty do dodawania/usuwania przepisów do/z grzbietu Inżynierii Immersyjnej.

## Wezwanie do pakietu

Możesz wywołać pakiet Crusher używając `mods.immersiveengineering.Crusher`.

## Dodaj przepis

| Wymagane    | Typ                | Typ danych                                       |
| ----------- | ------------------ | ------------------------------------------------ |
| Wymagane    | Wyjście            | [IItemStack](/Vanilla/Items/IItemStack/)         |
| Wymagane    | Input              | [Składnik](/Vanilla/Variable_Types/IIngredient/) |
| Wymagane    | Energia            | odcień                                           |
| Opcjonalnie | Drugorzędne wyniki | [IItemStack](/Vanilla/Items/IItemStack/)         |
| Opcjonalnie | Drugorzędna szansa | podwójne                                         |

### Przykład

```zenscript
//Example:
mods.immersiveengineering.Crusher.addRecipe(IItemStack output, IIngredient input, int Energy, @Optional IItemStack secondaryOutput, @Optional double secondaryChance);

mods.immersiveengineering.Crusher. ddRecipe(<minecraft:diamond>, <ore:logWood>, 2048);
mods.immersiveengineering.Crusher.addRecipe(<minecraft:diamond>, <ore:logWood>, 2048, <minecraft:dirt>);
mods. mmersiveengineering.Crusher.addRecipe(<minecraft:diamond>, <ore:logWood>, 2048, <minecraft:dirt>, 0.5);
```

## Usuń przepis przez wyjście

| Typ     | Typ danych                               |
| ------- | ---------------------------------------- |
| Wyjście | [IItemstack](/Vanilla/Items/IItemStack/) |

### Przykład

```zenscript
//Example:
mods.immersiveengineering.Crusher.removeRecipe(IItemstack output);

mods.immersiveengineering.Crusher.removeRecipe(<minecraft:diamond>);
```

## Usuń przepis przez wejście

| Typ   | Typ danych                               |
| ----- | ---------------------------------------- |
| Input | [IItemstack](/Vanilla/Items/IItemStack/) |

### Przykład

```zenscript
//Example:
mods.immersiveengineering.Crusher.removeRecipesForInput(IItemstack input);

mods.immersiveengineering.Crusher.removeRecipesForInput(<minecraft:diamond>);
```