# Piec Łukowy

Pakiet Pieca Łukowego może być użyty do dodawania/usuwania przepisów do/z Pieca Łukowego Inżynierii.

## Wezwanie do pakietu

Możesz wywołać pakiet ArcFurnace używając `mods.immersiveengineering.ArcFurnace`.

## Dodaj przepis

| Wymagane    | Typ                      | Typ danych                                                                             |
| ----------- | ------------------------ | -------------------------------------------------------------------------------------- |
| Wymagane    | Wyjście                  | [IItemStack](/Vanilla/Items/IItemStack/)                                               |
| Wymagane    | Input                    | [Składnik](/Vanilla/Variable_Types/IIngredient/)                                       |
| Wymagane    | Slag                     | [IItemStack](/Vanilla/Items/IItemStack/)                                               |
| Wymagane    | Czas                     | Liczba całkowita                                                                       |
| Wymagane    | Energia na wybór         | Liczba całkowita                                                                       |
| Opcjonalnie | Dodatki                  | [Składnik](/Vanilla/Variable_Types/IIngredient/) Array[]                               |
| Opcjonalnie | Typ przepisu specjalnego | String [specialRecipeTypes](/Mods/Immersive_Engineering/Variables/SpecialRecipeTypes/) |

### Przykład

```zenscript
//Example:
mods.immersiveengineering.ArcFurnace.addRecipe(IItemStack output, IIngredient input, IItemStack slag, int time energyPerTick, @Optional IIngredient[] additives, @Optional String specialRecipeType);

mods. mmersiveengineering.ArcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048);
mods.immersiveengineering.ArcFurnace. ddRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048, [<ore:oreIron>, <ore:oreGold>]);
mods.immersiveengineering. rcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048, [<ore:oreIron>, <ore:oreGold>], "Ores");
modów. mmersiveengineering.ArcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048, [<ore:oreIron>, <ore:oreGold>], "Stocznia");
```

## Usuń przepis

| Typ     | Typ danych                               |
| ------- | ---------------------------------------- |
| Wyjście | [IItemstack](/Vanilla/Items/IItemStack/) |

### Przykład

```zenscript
//Example:
mods.immersiveengineering.ArcFurnace.removeRecipe(IItemstack output);
mods.immersiveengineering.ArcFurnace.removeRecipe(<minecraft:diamond>);
```