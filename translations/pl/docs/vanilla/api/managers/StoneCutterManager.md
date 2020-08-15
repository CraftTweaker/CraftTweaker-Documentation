# Menadżer Kamieni



Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.StoneCutterManager
```

## Zaimplementowane interfejsy
StoneCutterManager implementuje następujące interfejsy. Oznacza to, że każda dostępna dla nich metoda może być również stosowana w tej klasie.
- [crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

## Metody
### addJSONRecipe

Dodaje przepis na podstawie podanego IDaty. Dostarczone IData powinny reprezentować JSON pakietu DataPack, co pozwala na rejestrowanie przepisów dla każdego pakietu DataPack wspierającego systemy IRecipeType.

```zenscript
stoneCutter.addJSONRecipe(nazwa jako String, dane jako crafttweaker.api.data.IData);
stoneCutter.addJSONRecipe("recipe_name", {składnik:{item:<item:minecraft:gold_ore>.registryName},wynik:<item:minecraft:cooked_porkchop>.registryName,Doświadczenie:0.35 jako pływak, czas gotowania:100});
```

| Parametr | Typ                                                    | Opis                          |
| -------- | ------------------------------------------------------ | ----------------------------- |
| Nazwa    | Ciąg znaków                                            | nazwa przepisu                |
| dane     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | dane reprezentujące plik json |


### napis

Dodaje przepis do odcinka kamienia

```zenscript
[PLACEHOLDER] stoneCutter.addRecipe(recipeName as String, output as crafttweaker.api.item.IItemStack, input as crafttweaker.api.item.IIngredient);
stoneCutter.addRecipe("recipe_name", <item:minecraft:grass>, <tag:minecraft:wool>);
```

| Parametr        | Typ                                                               | Opis               |
| --------------- | ----------------------------------------------------------------- | ------------------ |
| nazwa receptury | Ciąg znaków                                                       | nazwa przepisu     |
| wyjście         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | output IItemStack  |
| input           | [crafttweaker.api.item.Składnik](/vanilla/api/items/IIngredient)  | wprowadź ISkładnik |


### usuń wszystko

Usuń wszystkie przepisy z tego rejestru

```zenscript
stoneCutter.removeAll();
```

### usuń ByModid

Usuń przepis na podstawie modyfikacji nazwy rejestru

```zenscript
stoneCutter.removeByModid(modid jako String);
stoneCutter.removeByModid("minecraft");
```

| Parametr | Typ         | Opis                         |
| -------- | ----------- | ---------------------------- |
| modid    | Ciąg znaków | modid przepisów do usunięcia |


### removeByName

Usuń przepis na podstawie nazwy rejestru

```zenscript
stoneCutter.removeByName(nazwa jako String);
stoneCutter.removeByName("minecraft:furnace");
```

| Parametr | Typ         | Opis                                 |
| -------- | ----------- | ------------------------------------ |
| Nazwa    | Ciąg znaków | nazwa rejestru przepisu do usunięcia |


### removeByRegex

Usuń przepis na podstawie regex

```zenscript
stoneCutter.removeByRegex(regex as String);
stoneCutter.removeByRegex("\\d_\\d");
```

| Parametr | Typ         | Opis                           |
| -------- | ----------- | ------------------------------ |
| regex    | Ciąg znaków | regex do dopasowania przeciwko |


### usuń Przepis

Usuń przepis na podstawie jego wyjścia.

```zenscript
[PLACEHOLDER] stoneCutter.removeRecipe(output as crafttweaker.api.item.IItemStack);
stoneCutter.removeRecipe(<item:minecraft:glass>);
```

| Parametr | Typ                                                               | Opis             |
| -------- | ----------------------------------------------------------------- | ---------------- |
| wyjście  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | wyjście przepisu |



## Właściwości

| Nazwisko  | Typ         | Posiada Getter | Ma ustawienie |
| --------- | ----------- | -------------- | ------------- |
| polecenie | Ciąg znaków | prawda         | fałszywy      |

