# Transformator IIngrediententora

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.item.IIngredientTransformer
```

## Metody
### getCommandString

Typ zwrotu: Ciąg

```zenscript
myIIngredientTransformer.getCommandString(transformedIngredient as T);
```

| Parametr               | Typ | Opis             |
| ---------------------- | --- | ---------------- |
| składnik transformacji | T   | Nie podano opisu |


### przekształć

Typ zwrotu: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myIIngredientTransformer.transform(stack jako crafttweaker.api.item.IItemStack);
```

| Parametr | Typ                                                               | Opis             |
| -------- | ----------------------------------------------------------------- | ---------------- |
| stos     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Nie podano opisu |



