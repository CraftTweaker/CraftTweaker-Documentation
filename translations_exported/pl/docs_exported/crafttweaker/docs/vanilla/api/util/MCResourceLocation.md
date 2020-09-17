# MCResourceLocation

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
[PLACEHOLDER] crafttweaker.api.util.MCResourceLocation
```

## Zaimplementowane interfejsy
MCResourceLocation implementuje następujące interfejsy. Oznacza to, że każda dostępna dla nich metoda może być również stosowana w tej klasie.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Konstruktorzy
```zenscript
nowe crafttweaker.api.util.MCResourceLocation(nazwa jako String, ścieżka jako String);
```
| Parametr        | Typ         | Opis             |
| --------------- | ----------- | ---------------- |
| przestrzeń nazw | Ciąg znaków | Nie podano opisu |
| ścieżka         | Ciąg znaków | Nie podano opisu |



## Metody
### porównaj do

Typ zwrotu: int

```zenscript
myMCResourceLocation.compareTo(p_compareTo_1_ jako crafttweaker.api.util.MCResourceLocation);
```

| Parametr       | Typ                                                                                            | Opis             |
| -------------- | ---------------------------------------------------------------------------------------------- | ---------------- |
| p_Porówna_1_ | [[PLACEHOLDER] crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | Nie podano opisu |


### równa się

Typ zwrotu: logiczny

```zenscript
myMCResourceLocation.equals(inne jako obiekt);
```

| Parametr | Typ    | Opis             |
| -------- | ------ | ---------------- |
| inne     | Obiekt | Nie podano opisu |


### getNamespace

Typ zwrotu: Ciąg

```zenscript
myMCResourceLocation.getNamespace();
```

### pobierz ścieżkę

Typ zwrotu: Ciąg

```zenscript
myMCResourceLocation.getPath();
```

### hashCode

Typ zwrotu: int

```zenscript
myMCResourceLocation.hashCode();
```

### toString

Typ zwrotu: Ciąg

```zenscript
myMCResourceLocation.toString();
```


## Właściwości

| Nazwisko        | Typ         | Posiada Getter | Ma ustawienie |
| --------------- | ----------- | -------------- | ------------- |
| polecenie       | Ciąg znaków | prawda         | fałszywy      |
| przestrzeń nazw | Ciąg znaków | prawda         | fałszywy      |
| ścieżka         | Ciąg znaków | prawda         | fałszywy      |

