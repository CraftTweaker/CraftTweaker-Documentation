# Menedżer SmokerManager



Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.SmokerManager
```

## Zaimplementowane interfejsy
SmokerManager implementuje następujące interfejsy. Oznacza to, że każda dostępna dla nich metoda może być również stosowana w tej klasie.
- [crafttweaker.api.registries.ICookingRecipeManager](/vanilla/api/managers/ICookingRecipeManager)

## Metody
### addJSONRecipe

Dodaje przepis na podstawie podanego IDaty. Dostarczone IData powinny reprezentować JSON pakietu DataPack, co pozwala na rejestrowanie przepisów dla każdego pakietu DataPack wspierającego systemy IRecipeType.

```zenscript
smoker.addJSONRecipe(nazwa jako String, dane jako crafttweaker.api.data.IData);
smoker.addJSONRecipe("recipe_name", {składnik:{item:<item:minecraft:gold_ore>.registryName},wynik:<item:minecraft:cooked_porkchop>.registryName,doświadczenie:0.35 jako float, czas gotowania:100});
```

| Parametr | Typ                                                    | Opis                          |
| -------- | ------------------------------------------------------ | ----------------------------- |
| Nazwa    | Ciąg znaków                                            | nazwa przepisu                |
| dane     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | dane reprezentujące plik json |


### napis

Dodaje przepis na podstawie podanych parametrów.

```zenscript
palenie.addRecipe(nazwa jako String, wyjście jak crafttweaker.api.item.IItemStack, wejście jako crafttweaker.api.item.IIngredient, xp jako float, cookTime jak int);
palenie.addRecipe.("wool2diamond", <item:diamond>, <tag:minecraft:wool>, 1.0, 0);
```

| Parametr | Typ                                                               | Opis                              |
| -------- | ----------------------------------------------------------------- | --------------------------------- |
| Nazwa    | Ciąg znaków                                                       | Nazwa nowego przepisu             |
| wyjście  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | IItemStack wyjście przepisu       |
| input    | [crafttweaker.api.item.Składnik](/vanilla/api/items/IIngredient)  | ISkładnik wprowadzany do przepisu |
| xp       | zmiennoprzecinkowe                                                | ile xp dostaje gracz              |
| cookTime | odcień                                                            | Jak długo trwa gotowanie          |


### usuń wszystko

Usuń wszystkie przepisy z tego rejestru

```zenscript
smoker.removeAll();
```

### usuń ByModid

Usuń przepis na podstawie modyfikacji nazwy rejestru

```zenscript
smoker.removeByModid(modid jako String);
smoker.removeByModid("minecraft");
```

| Parametr | Typ         | Opis                         |
| -------- | ----------- | ---------------------------- |
| modid    | Ciąg znaków | modid przepisów do usunięcia |


### removeByName

Usuń przepis na podstawie nazwy rejestru

```zenscript
smoker.removeByName(nazwa jako String);
smoker.removeByName("minecraft:furnace");
```

| Parametr | Typ         | Opis                                 |
| -------- | ----------- | ------------------------------------ |
| Nazwa    | Ciąg znaków | nazwa rejestru przepisu do usunięcia |


### removeByRegex

Usuń przepis na podstawie regex

```zenscript
smoker.removeByRegex(regex as String);
smoker.removeByRegex("\\d_\\d");
```

| Parametr | Typ         | Opis                           |
| -------- | ----------- | ------------------------------ |
| regex    | Ciąg znaków | regex do dopasowania przeciwko |


### usuń Przepis

Usuń przepis na podstawie jego wyjścia.

```zenscript
smoker.removeRecipe(wyjście jako wyjście crafttweaker.api.item.IItemStack);
smoker.removeRecipe(<item:minecraft:glass>);
```

| Parametr | Typ                                                               | Opis             |
| -------- | ----------------------------------------------------------------- | ---------------- |
| wyjście  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | wyjście przepisu |



Usuwa przepis na podstawie jego wyjścia i wejścia.

```zenscript
wędzenie.removeRecipe(wyjście jako wyjście ze rzemiesłom.api.item.IItemStack, wejście jako crafttweaker.api.item.IIngredient);
palacz.removeRecipe(<item:minecraft:diamond>, <tag:minecraft:wool>);
```

| Parametr | Typ                                                               | Opis                              |
| -------- | ----------------------------------------------------------------- | --------------------------------- |
| wyjście  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | IItemStack wyjście receptury.     |
| input    | [crafttweaker.api.item.Składnik](/vanilla/api/items/IIngredient)  | ISkładnik receptury do usunięcia. |



