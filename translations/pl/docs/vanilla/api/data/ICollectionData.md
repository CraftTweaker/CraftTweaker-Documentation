# ICollectionData

Dane ICollection są wykorzystywane do reprezentowania kolekcji [crafttweaker.api.data.IData](/vanilla/api/data/IData) , jak lista<IData>

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.data.ICollectionData
```

## Zaimplementowane interfejsy
ICollectionData implementuje następujące interfejsy. Oznacza to, że każda dostępna dla nich metoda może być również stosowana w tej klasie.
- [crafttweaker.api.data.IData](/vanilla/api/data/IData)

## Metody
### dodaj

```zenscript
nowe ListData(["Witaj", "Świat"]).add(wartość jako crafttweaker.api.data.IData);
new ListData(["Witaj", "Świat"]).add("dziś");
```

| Parametr | Typ                                                    | Opis                        |
| -------- | ------------------------------------------------------ | --------------------------- |
| wartość  | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Wartość do dodania do listy |



```zenscript
nowe ListData(["Witaj", "Świat"]).add(indeks jako int, wartość jako crafttweaker.api.data.IData);
new ListData(["Hello", "World"]).add(1, "piękne");
```

| Parametr | Typ                                                    | Opis                                                                          |
| -------- | ------------------------------------------------------ | ----------------------------------------------------------------------------- |
| indeks   | odcień                                                 | Indeks do dodania. Kolejne pozycje zostaną przeniesione o jeden indeks wyższy |
| wartość  | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Wartość do dodania do listy                                                   |


### asList

Pobiera listę<IData> reprezentacja tego IData, zwraca puste cokolwiek poza [crafttweaker.api.data.ListData](/vanilla/api/data/ListData).

 Zwraca: `null jeśli to IData nie jest listą.`

Lista zwrotów <[crafttweaker.api.data.IData](/vanilla/api/data/IData)>

```zenscript
nowa listData(["Witaj", "Świat"]).asList();
```

### asMap

Pobiera reprezentację mapy<String, IData> tej IData, zwraca puste na cokolwiek oprócz [crafttweaker.api.data.MapData](/vanilla/api/data/MapData).

 Zwraca: `null jeśli to IData nie jest mapą.`

Zwraca [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String]

```zenscript
nowa listData(["Witaj", "Świat"]).asMap();
```

### asString

Pobiera reprezentację ciągu danych IData

 Zwraca: `String reprezentujący ten IData (wartość i typ).`

Zwraca ciąg znaków

```zenscript
nowa listData(["Witaj", "Świat"]).asString();
```

### wyczyść

Usuwa każdy element z listy

```zenscript
nowa listData(["Witaj", "Świat"]).clear();
```

### zawiera

Sprawdza, czy to IData zawiera inne IData, używane głównie w podklasach [słabszego rzemieślnika. pi.data.ICollectionData](/vanilla/api/data/ICollectionData), jest taki sam jak sprawdzanie innych typów IData

Zwraca wartość logiczną

```zenscript
nowe ListData(["Witaj", "Świat"]).contains(data jako crafttweaker.api.data.IData);
new ListData(["Witaj", "Świat"]).contains("Wyświetlanie");
```

| Parametr | Typ                                                    | Opis                                |
| -------- | ------------------------------------------------------ | ----------------------------------- |
| dane     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | dane do sprawdzenia, czy są zawarte |


### kopiuj

Tworzy kopię tego IData.

 IData jest domyślnie niezmienna, użyj tego, aby utworzyć prawidłową kopię obiektu.

 Zwraca: `kopia tego IData.`

Zwraca [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
nowa listData(["Witaj", "Świat"]).kopiuj();
```

### pobierz

Pobiera [crafttweaker.api.data.IData](/vanilla/api/data/IData) przechowywany w danym indeksie.

Zwraca [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
nowe ListData(["Witaj", "Świat"]).get(index as int);
new ListData(["Hello", "World"]).get(0);
```

| Parametr | Typ    | Opis                 |
| -------- | ------ | -------------------- |
| indeks   | odcień | Indeks (oparty na 0) |


### getId

Pobiera ID wewnętrznego tagu NBT.

 Używane do określenia, jaki typ NBT jest przechowywany (na przykład lista)

 Zwraca: `ID tagu NBT, który reprezentuje te dane.`

Zwraca bajt

```zenscript
nowe ListData(["Witaj", "Świat"]).getId();
```

### getString

Pobiera reprezentację ciągu znaków wewnętrznego tagu INBT

 Zwraca: `String reprezentujący wewnętrzny INBT tego IData.`

Zwraca ciąg znaków

```zenscript
nowe ListData(["Witaj", "Świat"]).getString();
```

### usuń

Usuwa [crafttweaker.api.data.IData](/vanilla/api/data/IData) przechowywany w danym indeksie.

Zwraca [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
nowe ListData(["Witaj", "Świat"]).remove(indeks jako int);
new ListData(["Hello", "World"]).remove(0);
```

| Parametr | Typ    | Opis                 |
| -------- | ------ | -------------------- |
| indeks   | odcień | Indeks (oparty na 0) |


### ustaw

Ustawia element w podanym indeksie na podaną wartość

Zwraca [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
nowe ListData(["Witaj", "Świat"]).set(indeks jako int, wartość jako crafttweaker.api.data.IData);
new ListData(["Hello", "World"]).set(0, "Bye");
```

| Parametr | Typ                                                    | Opis                                 |
| -------- | ------------------------------------------------------ | ------------------------------------ |
| indeks   | odcień                                                 | Indeks do ustawiania (w oparciu o 0) |
| wartość  | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Nowa wartość                         |



## Właściwości

| Nazwisko | Typ    | Posiada Getter | Ma ustawienie |
| -------- | ------ | -------------- | ------------- |
| rozmiar  | odcień | prawda         | fałszywy      |

