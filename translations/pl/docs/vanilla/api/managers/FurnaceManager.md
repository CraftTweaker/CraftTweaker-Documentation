# Menadżer Pieców



Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.FurnaceManager
```

## Zaimplementowane interfejsy
FurnaceManager implementuje następujące interfejsy. Oznacza to, że każda dostępna dla nich metoda może być również stosowana w tej klasie.
- [crafttweaker.api.registries.ICookingRecipeManager](/vanilla/api/managers/ICookingRecipeManager)

## Metody
### napis

Dodaje przepis na podstawie podanych parametrów.

```zenscript
piec.addRecipe(nazwa jako String, wyjście jak crafttweaker.api.item.IItemStack, wejście jako crafttweaker.api.item.IIngredient, xp jako float, cookTime jak int);
piec.addRecipe.Recipe. <item:diamond>, <tag:minecraft:wool>, , 1.0, 0);
```

| Parametr | Typ                                                               | Opis                              |
| -------- | ----------------------------------------------------------------- | --------------------------------- |
| Nazwa    | Ciąg znaków                                                       | Nazwa nowego przepisu             |
| wyjście  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | IItemStack wyjście przepisu       |
| input    | [crafttweaker.api.item.Składnik](/vanilla/api/items/IIngredient)  | ISkładnik wprowadzany do przepisu |
| xp       | zmiennoprzecinkowe                                                | ile xp dostaje gracz              |
| cookTime | odcień                                                            | Jak długo trwa gotowanie          |


### usuń Przepis

Usuwa przepis na podstawie jego wyjścia i wejścia.

```zenscript
piec.removeRecipe(wyjście jako wyjście ze rzemieślnik.api.item.IItemStack, wejście jako crafttweaker.api.item.IIngredient);
piec.removeRecipe(<item:minecraft:diamond>, <tag:minecraft:wool>);
```

| Parametr | Typ                                                               | Opis                              |
| -------- | ----------------------------------------------------------------- | --------------------------------- |
| wyjście  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | IItemStack wyjście receptury.     |
| input    | [crafttweaker.api.item.Składnik](/vanilla/api/items/IIngredient)  | ISkładnik receptury do usunięcia. |



