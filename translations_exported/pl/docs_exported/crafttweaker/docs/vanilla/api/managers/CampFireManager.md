# CampFireManager



Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.CampFireManager
```

## Zaimplementowane interfejsy
CampFireManager implementuje następujące interfejsy. Oznacza to, że każda dostępna dla nich metoda może być również stosowana w tej klasie.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.registries.ICookingRecipeManager](/vanilla/api/managers/ICookingRecipeManager)
- [crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

## Metody
### addJSONRecipe

Dodaje przepis na podstawie podanego IDaty. Dostarczone IData powinny reprezentować JSON pakietu DataPack, co pozwala na rejestrowanie przepisów dla każdego pakietu DataPack wspierającego systemy IRecipeType.

```zenscript
campfire.addJSONRecipe(nazwa jako String, data as crafttweaker.api.data.IData);
campfire.addJSONRecipe("recipe_name", {składnik:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,Doświadczenie:0.35 jako pływak, czas gotowania:100});
```

| Parametr | Typ                                                    | Opis                          |
| -------- | ------------------------------------------------------ | ----------------------------- |
| Nazwa    | Ciąg znaków                                            | nazwa przepisu                |
| dane     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | dane reprezentujące plik json |


### napis

Dodaje przepis na podstawie podanych parametrów.

```zenscript
campfire.addRecipe(nazwa jako String, wyjście jako crafttweaker.api.item.IItemStack, wejście jako crafttweaker.api.item.IIngredient, xp jako float, cookTime jak int);
campfire.addRecipe("wool2diamond", <item:diamond>, <tag:minecraft:wool>, 1.0, 0);
```

| Parametr | Typ                                                               | Opis                              |
| -------- | ----------------------------------------------------------------- | --------------------------------- |
| Nazwa    | Ciąg znaków                                                       | Nazwa nowego przepisu             |
| wyjście  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | IItemStack wyjście przepisu       |
| input    | [crafttweaker.api.item.Składnik](/vanilla/api/items/IIngredient)  | ISkładnik wprowadzany do przepisu |
| xp       | zmiennoprzecinkowe                                                | ile xp dostaje gracz              |
| cookTime | odcień                                                            | Jak długo trwa gotowanie          |


### getRecipeByName

Typ zwrotu: [crafttweaker.api.recipes.WrapperRecipe](/crafttweaker/api/recipes/WrapperRecipe)

```zenscript
campfire.getRecipeByName(nazwa jako String);
```

| Parametr | Typ         | Opis             |
| -------- | ----------- | ---------------- |
| Nazwa    | Ciąg znaków | Nie podano opisu |


### getRecipesByOutput

Typ zwracania: Lista&lt;[crafttweaker.api.recipes.WrapperRecipe](/crafttweaker/api/recipes/WrapperRecipe)&gt;

```zenscript
campfire.getRecipesByOutput(wyjście jako crafttweaker.api.item.IIngredient);
```

| Parametr | Typ                                                              | Opis             |
| -------- | ---------------------------------------------------------------- | ---------------- |
| wyjście  | [crafttweaker.api.item.Składnik](/vanilla/api/items/IIngredient) | Nie podano opisu |


### usuń wszystko

Usuń wszystkie przepisy z tego rejestru

```zenscript
campfire.removeAll();
```

### usuń ByModid

Usuń przepis na podstawie modyfikacji nazwy rejestru

```zenscript
campfire.removeByModid(modid jako String);
campfire.removeByModid("minecraft");
```

| Parametr | Typ         | Opis                         |
| -------- | ----------- | ---------------------------- |
| modid    | Ciąg znaków | modid przepisów do usunięcia |



Usuń przepis na podstawie modida nazwy rejestru z dodanym sprawdzianem wykluczenia, dzięki czemu możesz usunąć cały mod poza kilkoma określonymi.

```zenscript
campfire.removeByModid(modid jako string, wyklucz jako crafttweaker.api.recipe.RecipeFilter);
campfire.removeByModid("minecraft", (nazwa jako string) => {return name == "orange_wool";});
```

| Parametr | Typ                                                                | Opis                             |
| -------- | ------------------------------------------------------------------ | -------------------------------- |
| modid    | Ciąg znaków                                                        | modid przepisów do usunięcia     |
| wyklucz  | [crafttweaker.api.recipe.Filter](/vanilla/api/recipe/RecipeFilter) | receptury na wyjście z usuwania. |


### removeByName

Usuń przepis na podstawie nazwy rejestru

```zenscript
campfire.removeByName(nazwa jako String);
campfire.removeByName("minecraft:furnace");
```

| Parametr | Typ         | Opis                                 |
| -------- | ----------- | ------------------------------------ |
| Nazwa    | Ciąg znaków | nazwa rejestru przepisu do usunięcia |


### removeByRegex

Usuń przepis na podstawie regex

```zenscript
campfire.removeByRegex(regex as String);
campfire.removeByRegex("\\d_\\d");
```

| Parametr | Typ         | Opis                           |
| -------- | ----------- | ------------------------------ |
| regex    | Ciąg znaków | regex do dopasowania przeciwko |


### usuń Przepis

Usuń przepis na podstawie jego wyjścia.

```zenscript
campfire.removeRecipe(wyjście jako crafttweaker.api.item.IItemStack);
campfire.removeRecipe(<item:minecraft:glass>);
```

| Parametr | Typ                                                               | Opis             |
| -------- | ----------------------------------------------------------------- | ---------------- |
| wyjście  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | wyjście przepisu |



Usuwa przepis na podstawie jego wyjścia i wejścia.

```zenscript
campfire.removeRecipe(wyjście jako crafttweaker.api.item.IItemStack, wejście jako crafttweaker.api.item.IIngredient);
campfire.removeRecipe(<item:minecraft:diamond>, <tag:minecraft:wool>);
```

| Parametr | Typ                                                               | Opis                              |
| -------- | ----------------------------------------------------------------- | --------------------------------- |
| wyjście  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | IItemStack wyjście receptury.     |
| input    | [crafttweaker.api.item.Składnik](/vanilla/api/items/IIngredient)  | ISkładnik receptury do usunięcia. |



## Właściwości

| Nazwisko  | Typ         | Posiada Getter | Ma ustawienie |
| --------- | ----------- | -------------- | ------------- |
| polecenie | Ciąg znaków | prawda         | fałszywy      |

