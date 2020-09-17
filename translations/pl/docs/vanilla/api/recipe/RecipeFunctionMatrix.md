# RecipeFunctionMatrix

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.recipe.RecipeFunctionMatrix
```

## Interfejs funkcjonalny

Ta klasa jest funkcjonalnym interfejsem. Oznacza to, że możesz użyć notacji lambda do utworzenia instancji. Adnotacja lambda wygląda jako:
```zenscript
(zwykle, wejście) => <item:minecraft:dirt>
```
## Metody
### proces

Typ zwrotu: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myRecipeFunctionMatrix.process(usualOut jako crafttweaker.api.item.IItemStack, wejścia jako crafttweaker.api.item.IItemStack[]);
```

| Parametr | Typ                                                                   | Opis             |
| -------- | --------------------------------------------------------------------- | ---------------- |
| usualOut | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)     | Nie podano opisu |
| inputs   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[][] | Nie podano opisu |



