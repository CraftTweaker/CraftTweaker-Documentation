# Schemat

Pakiet do tworzenia planów może być użyty do dodawania/usuwania przepisów do/z tworzenia planów Inżynierii Immersive Engineering Scheme.

## PSA

[Kategoria](/Mods/Immersive_Engineering/Variables/Categories/) String jest całkiem szczególna. Dla każdego wpisanego ciągu, który nie ma już ustawionej kategorii, stworzy nową kategorię, a tym samym nowy schemat. Oznacza to, że możesz dodać kategorię planu o nazwie "Banana Pancakes", która zawiera "Przepisy żywnościowe". Po odnalezieniu pierwszego wpisu, wygeneruje on wszystkie dodatkowe przepisy dla tej kategorii w wygenerowanej kategorii.

## Wezwanie do pakietu

Możesz wywołać pakiet Planu używając `mods.immersiveengineering.Schemat`.

## Dodaj przepis

| Wymagane | Typ       | Typ danych                                                            |
| -------- | --------- | --------------------------------------------------------------------- |
| Wymagane | Kategoria | String [Kategoria](/Mods/Immersive_Engineering/Variables/Categories/) |
| Wymagane | Wyjście   | [IItemstack](/Vanilla/Items/IItemStack/)                              |
| Wymagane | Inputs    | [Składnik](/Vanilla/Variable_Types/IIngredient/)                      |

### Przykład

```zenscript
//Example:
mods.immersiveengineering.Schemeprint.addRecipe(String category, IItemStack output, IIngredient[] inputs);

//Używając istniejącego String kategorii
mods.immersiveengineering.Schemat ddRecipe("komponenty", <minecraft:diamond>, [<ore:logWood>, <minecraft:dirt>]);

//Używanie nowego ciągu kategorii (generuje nowy element planu)
mody. mmersiveengineering.Schemeprint.addRecipe("Banana Pancakes", <minecraft:diamond>, [<ore:logWood>, <minecraft:dirt>]);
```

## Usuń przepis

| Typ     | Typ danych                               |
| ------- | ---------------------------------------- |
| Wyjście | [IItemstack](/Vanilla/Items/IItemStack/) |

### Przykład:

```zenscript
//Example:
mods.immersiveengineering.Blueprint.removeRecipe(IItemStack output);
mods.immersiveengineering.Schemeprint.removeRecipe(<minecraft:diamond>);
```