# MCItemGroup

Grupa tematów (alias: Kreatywna karta) jest grupowaniem elementów według kategorii.

Ta klasa została dodana przez moda z mod-id `contenttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
mods.contenttweaker.item.MCItemGroup
```

## Zaimplementowane interfejsy
MCItemGroup implementuje następujące interfejsy. Oznacza to, że każda dostępna dla nich metoda może być również stosowana w tej klasie.
- [crafttweaker.api.brackets.Komendy Wyświetlalne](/vanilla/api/brackets/CommandStringDisplayable)

## Metody
### pobierz ścieżkę

Pobiera ścieżkę grupy przedmiotów. Ścieżka jest tym, co używasz w wyrażeniu nawiasów za częścią `<grupy produktów:`.

Typ zwrotu: Ciąg

```zenscript
<itemgroup:misc>.getPath();
```

### Nazwa obrazka setTła

Ustawia nazwę obrazu tła, która jest używana w tej karcie w kreatywnym menu Zwraca: `Ten obiekt do łańcucha`

Typ zwrotu: [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>.setBackgroundImageName(tekstura jako string);
```

| Parametr | Typ         | Opis                             |
| -------- | ----------- | -------------------------------- |
| tekstura | Ciąg znaków | Struktura, którą należy stosować |


### setNoScrollbar

Usuwa pasek przewijania grupy przedmiotów w kreatywnym ekwipunku

 Zwraca: `Ten obiekt do łańcucha`

Typ zwrotu: [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>.setNoScrollbar();
```

### setNoTitle

Usuwa tytuł grupy przedmiotów w kreatywnym ekwipunku

 Zwraca: `Ten obiekt do łańcucha`

Typ zwrotu: [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>.setNoTitle();
```


## Właściwości

| Nazwisko  | Typ         | Posiada Getter | Ma ustawienie |
| --------- | ----------- | -------------- | ------------- |
| polecenie | Ciąg znaków | prawda         | fałszywy      |
| ścieżka   | Ciąg znaków | prawda         | fałszywy      |

