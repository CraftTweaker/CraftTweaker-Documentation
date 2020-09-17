# LongArrayData



Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.data.LongArrayData
```

## Zaimplementowane interfejsy
LongArrayData implementuje następujące interfejsy. Oznacza to, że każda dostępna dla nich metoda może być również stosowana w tej klasie.
- [crafttweaker.api.data.ICollectionData](/vanilla/api/data/ICollectionData)

## Konstruktorzy
```zenscript
nowy crafttweaker.api.data.LongArrayData(tak długo, []);
```
| Parametr   | Typ        | Opis             |
| ---------- | ---------- | ---------------- |
| wewnętrzna | długość [] | Nie podano opisu |



## Metody
### dodaj

```zenscript
[100000, 800000, 50000].add(wartość jako crafttweaker.api.data.IData);
[100000, 800000, 50000].add("dziś");
```

| Parametr | Typ                                                    | Opis                        |
| -------- | ------------------------------------------------------ | --------------------------- |
| wartość  | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Wartość do dodania do listy |



```zenscript
[100000, 800000, 50000].add(indeks jako int, wartość jako crafttweaker.api.data.IData);
[100000, 800000, 50000].add(1, "piękne");
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
[100000, 800000, 50000].asList();
```

### asMap

Pobiera reprezentację mapy<String, IData> tej IData, zwraca puste na cokolwiek oprócz [crafttweaker.api.data.MapData](/vanilla/api/data/MapData).

 Zwraca: `null jeśli to IData nie jest mapą.`

Zwraca [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String]

```zenscript
[100000, 800000, 50000].asMap();
```

### asString

Pobiera reprezentację ciągu danych IData

 Zwraca: `String reprezentujący ten IData (wartość i typ).`

Zwraca ciąg znaków

```zenscript
[100000, 800000, 50000].asString();
```

### wyczyść

Usuwa każdy element z listy

```zenscript
[100000, 800000, 50000].clear();
```

### zawiera

Sprawdza, czy to IData zawiera inne IData, używane głównie w podklasach [słabszego rzemieślnika. pi.data.ICollectionData](/vanilla/api/data/ICollectionData), jest taki sam jak sprawdzanie innych typów IData

Zwraca wartość logiczną

```zenscript
[100000, 800000, 50000].contains(data as crafttweaker.api.data.IData);
[100000, 800000, 50000].contains("Display");
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
[100000, 800000, 50000].kopia();
```

### pobierz

Pobiera [crafttweaker.api.data.IData](/vanilla/api/data/IData) przechowywany w danym indeksie.

Zwraca [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[100000, 800000, 50000].get(indeks jako int);
[100000, 800000, 50000].get(0);
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
[100000, 800000, 50000].getId();
```

### getString

Pobiera reprezentację ciągu znaków wewnętrznego tagu INBT

 Zwraca: `String reprezentujący wewnętrzny INBT tego IData.`

Zwraca ciąg znaków

```zenscript
[100000, 800000, 50000].getString();
```

### usuń

Usuwa [crafttweaker.api.data.IData](/vanilla/api/data/IData) przechowywany w danym indeksie.

Zwraca [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[100000, 800000, 50000].remove(indeks jak int);
[100000, 800000, 50000].remove(0);
```

| Parametr | Typ    | Opis                 |
| -------- | ------ | -------------------- |
| indeks   | odcień | Indeks (oparty na 0) |


### ustaw

Ustawia element w podanym indeksie na podaną wartość

Zwraca [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[100000, 800000, 50000].set(indeks jako int, wartość jako crafttweaker.api.data.IData);
[100000, 800000, 50000].set(0, "Bye");
```

| Parametr | Typ                                                    | Opis                                 |
| -------- | ------------------------------------------------------ | ------------------------------------ |
| indeks   | odcień                                                 | Indeks do ustawiania (w oparciu o 0) |
| wartość  | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Nowa wartość                         |



## Właściwości

| Nazwisko | Typ    | Posiada Getter | Ma ustawienie |
| -------- | ------ | -------------- | ------------- |
| rozmiar  | odcień | prawda         | fałszywy      |

