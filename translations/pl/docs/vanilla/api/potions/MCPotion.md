# Mikstura

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
[PLACEHOLDER] crafttweaker.api.potion.MCPotion
```

## Zaimplementowane interfejsy
MCMiksttion implementuje następujące interfejsy. Oznacza to, że każda dostępna dla nich metoda może być również stosowana w tej klasie.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Metody
### getNamePrefixed

Zwraca ciąg znaków

```zenscript
myMCPotion.getNamePrefixed(nazwa jako String);
```

| Parametr | Typ         | Opis             |
| -------- | ----------- | ---------------- |
| Nazwa    | Ciąg znaków | Nie podano opisu |



## Właściwości

| Nazwisko         | Typ                                                                                                 | Posiada Getter | Ma ustawienie |
| ---------------- | --------------------------------------------------------------------------------------------------- | -------------- | ------------- |
| polecenie        | Ciąg znaków                                                                                         | prawda         | fałszywy      |
| efekty           | List<[crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)> | prawda         | fałszywy      |
| hasInstantEffect | boolean                                                                                             | prawda         | fałszywy      |

