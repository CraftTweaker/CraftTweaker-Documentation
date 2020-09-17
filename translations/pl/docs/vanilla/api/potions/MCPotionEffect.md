# Efekt MCPotionEffect

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
[PLACEHOLDER] crafttweaker.api.potion.MCPotionEffect
```

## Zaimplementowane interfejsy
MCPotionEffect implementuje następujące interfejsy. Oznacza to, że każda dostępna dla nich metoda może być również stosowana w tej klasie.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Metody
### jest gotowy

Zwraca wartość logiczną

```zenscript
myMCPotionEffect.isReady(czas trwania jako int, wzmacniacz jak int);
```

| Parametr     | Typ    | Opis             |
| ------------ | ------ | ---------------- |
| czas trwania | odcień | Nie podano opisu |
| wzmacniacz   | odcień | Nie podano opisu |


### newInstance

Zwraca [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)

```zenscript
myMCPotionEffect.newInstance(czas trwania jako int, wzmacniacz jak int);
```

| Parametr     | Typ    | Opis             | Opcjonalnie | Wartość domyślna |
| ------------ | ------ | ---------------- | ----------- | ---------------- |
| czas trwania | odcień | Nie podano opisu | fałszywy    | null             |
| wzmacniacz   | odcień | Nie podano opisu | prawda      | 0                |



## Właściwości

| Nazwisko             | Typ                                                                     | Posiada Getter | Ma ustawienie |
| -------------------- | ----------------------------------------------------------------------- | -------------- | ------------- |
| polecenie            | Ciąg znaków                                                             | prawda         | fałszywy      |
| Przedmioty kuratywne | List<[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)> | prawda         | fałszywy      |
| nazwa wyświetlacza   | Ciąg znaków                                                             | prawda         | fałszywy      |
| korzystny            | boolean                                                                 | prawda         | fałszywy      |
| Błyskawiczny         | boolean                                                                 | prawda         | fałszywy      |
| Kolor cieczy         | odcień                                                                  | prawda         | fałszywy      |
| Nazwa                | Ciąg znaków                                                             | prawda         | fałszywy      |

