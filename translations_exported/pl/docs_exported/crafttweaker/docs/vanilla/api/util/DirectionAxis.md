# Oś kierunku

Reprezentuje oś kierunku (X, Y, Z)

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.util.DirectionAxis
```

## Zaimplementowane interfejsy
DirectionAxis implementuje następujące interfejsy. Oznacza to, że każda dostępna dla nich metoda może być również stosowana w tej klasie.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Metody
### pobierz współrzędne

Pobiera współrzędną tej osi w oparciu o podane wartości, jeśli ta oś to "X", to zwróci wartość parametru "x"

 Zwraca: `wartość współrzędnej`

Typ zwrotu: podwójny

```zenscript
<directionaxis:x>.getCoordinate(x jako podwójne, y jako podwójne, z jako podwójne);
<directionaxis:x>.getCoordinate(1.2, 2.5, 3.87);
```

| Parametr | Typ      | Opis                   |
| -------- | -------- | ---------------------- |
| x        | podwójne | x wartość współrzędnej |
| y        | podwójne | wartość współrzędnej y |
| z        | podwójne | wartość współrzędnej z |



Pobiera współrzędną tej osi w oparciu o podane wartości, jeśli ta oś to "X", to zwróci wartość parametru "x"

 Zwraca: `wartość współrzędnej`

Typ zwrotu: int

```zenscript
<directionaxis:x>.getCoordinate(x as int, y as int, z as int);
<directionaxis:x>.getCoordinate(1, 2, 3);
```

| Parametr | Typ    | Opis                   |
| -------- | ------ | ---------------------- |
| x        | odcień | x wartość współrzędnej |
| y        | odcień | wartość współrzędnej y |
| z        | odcień | wartość współrzędnej z |



## Właściwości

| Nazwisko  | Typ         | Posiada Getter | Ma ustawienie |
| --------- | ----------- | -------------- | ------------- |
| polecenie | Ciąg znaków | prawda         | fałszywy      |
| poziomo   | boolean     | prawda         | fałszywy      |
| Nazwa     | Ciąg znaków | prawda         | fałszywy      |
| kolejność | odcień      | prawda         | fałszywy      |
| pionowy   | boolean     | prawda         | fałszywy      |

