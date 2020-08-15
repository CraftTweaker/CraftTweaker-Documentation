# Lista danych



Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.data.ListData
```

## Zaimplementowane interfejsy
Lista danych implementuje następujące interfejsy. Oznacza to, że każda dostępna dla nich metoda może być również stosowana w tej klasie.
- [crafttweaker.api.data.ICollectionData](/vanilla/api/data/ICollectionData)

## Konstruktorzy
```zenscript
nowy crafttweaker.api.data.ListData();
```
```zenscript
nowy crafttweaker.api.data.ListData(lista jako lista<crafttweaker.api.data.IData>);
```
| Parametr | Typ                                                          | Opis             | Opcjonalnie | Wartość domyślna |
| -------- | ------------------------------------------------------------ | ---------------- | ----------- | ---------------- |
| lista    | List<[crafttweaker.api.data.IData](/vanilla/api/data/IData)> | Nie podano opisu | prawda      | null             |



## Metody
### dodaj

```zenscript
["Witaj, "Świat", "!"].dodaj (wartość jako crafttweaker.api.data.IData);
["Witaj", "Świat", "!"].dodaj ("dziś");
```

| Parametr | Typ                                                    | Opis                        |
| -------- | ------------------------------------------------------ | --------------------------- |
| wartość  | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Wartość do dodania do listy |



```zenscript
["Witaj", "Świat", "!"].dodaj (indeks jako int, wartość jako crafttweaker.api.data.IData);
["Witaj", "Świat", "!"].add(1, "piękny");
```

| Parametr | Typ                                                    | Opis                                                                          |
| -------- | ------------------------------------------------------ | ----------------------------------------------------------------------------- |
| indeks   | odcień                                                 | Indeks do dodania. Kolejne pozycje zostaną przeniesione o jeden indeks wyższy |
| wartość  | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Wartość do dodania do listy                                                   |


### wyczyść

Usuwa każdy element z listy

```zenscript
["Witaj", "Świat", "!"].clear();
```

### pobierz

Pobiera [crafttweaker.api.data.IData](/vanilla/api/data/IData) przechowywany w danym indeksie.

Zwraca [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
["Hello", "World", "!"].get(index as int);
["Hello", "World", "!"].get(0);
```

| Parametr | Typ    | Opis                 |
| -------- | ------ | -------------------- |
| indeks   | odcień | Indeks (oparty na 0) |


### usuń

Usuwa [crafttweaker.api.data.IData](/vanilla/api/data/IData) przechowywany w danym indeksie.

Zwraca [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
["Witaj", "Świat", "!"].remove(indeks jak int);
["Witaj", "Świat", "!"].usuń(0);
```

| Parametr | Typ    | Opis                 |
| -------- | ------ | -------------------- |
| indeks   | odcień | Indeks (oparty na 0) |


### ustaw

Ustawia element w podanym indeksie na podaną wartość

Zwraca [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
["Witaj", "Świat", "!"].set(indeks jako int, wartość jako crafttweaker.api.data.IData);
["Witaj", "Świat", "!"].set(0, "Bye");
```

| Parametr | Typ                                                    | Opis                                 |
| -------- | ------------------------------------------------------ | ------------------------------------ |
| indeks   | odcień                                                 | Indeks do ustawiania (w oparciu o 0) |
| wartość  | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Nowa wartość                         |



## Właściwości

| Nazwisko | Typ    | Posiada Getter | Ma ustawienie |
| -------- | ------ | -------------- | ------------- |
| rozmiar  | odcień | prawda         | fałszywy      |

## Szafy na akta, szafy na kartoteki, kasety na papiery, podpórki na papiery, pojemniki na przybory do pisania, stojaki na stemple biurowe i podobne wyposażenie biurowe lub biurkowe, z metali nieszlachetnych

| Typ wyniku                                                   | Jest niedomniemany |
| ------------------------------------------------------------ | ------------------ |
| List<[crafttweaker.api.data.IData](/vanilla/api/data/IData)> | prawda             |

