# IntArrayData



Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.data.IntArrayData
```

## Zaimplementowane interfejsy
IntArrayData implementuje następujące interfejsy. Oznacza to, że każda dostępna dla nich metoda może być również stosowana w tej klasie.
- [crafttweaker.api.data.ICollectionData](/vanilla/api/data/ICollectionData)
- [crafttweaker.api.data.IData](/vanilla/api/data/IData)

## Konstruktorzy
```zenscript
nowy crafttweaker.api.data.IntArrayData(wewnętrzny jak int[]);
```
| Parametr   | Typ   | Opis             |
| ---------- | ----- | ---------------- |
| wewnętrzna | int[] | Nie podano opisu |



## Metody
### dodaj

```zenscript
[4, 128, 256, 1024].add(wartość jako crafttweaker.api.data.IData);
[4, 128, 256, 1024].add("dziś");
```

| Parametr | Typ                                                    | Opis                        |
| -------- | ------------------------------------------------------ | --------------------------- |
| wartość  | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Wartość do dodania do listy |



```zenscript
[4, 128, 256, 1024].add(index as int, value as crafttweaker.api.data.IData);
[4, 128, 256, 1024].add(1, "piękny");
```

| Parametr | Typ                                                    | Opis                                                                          |
| -------- | ------------------------------------------------------ | ----------------------------------------------------------------------------- |
| indeks   | odcień                                                 | Indeks do dodania. Kolejne pozycje zostaną przeniesione o jeden indeks wyższy |
| wartość  | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Wartość do dodania do listy                                                   |


### asList

Pobiera listę<IData> reprezentacja tego IData, zwraca puste cokolwiek poza [crafttweaker.api.data.ListData](/vanilla/api/data/ListData).

 Zwraca: `null jeśli to IData nie jest listą.`

Typ zwracania: Lista&lt;[crafttweaker.api.data.IData](/vanilla/api/data/IData)&gt;

```zenscript
[4, 128, 256, 1024].asList();
```

### asMap

Pobiera reprezentację mapy<String, IData> tej IData, zwraca puste na cokolwiek oprócz [crafttweaker.api.data.MapData](/vanilla/api/data/MapData).

 Zwraca: `null jeśli to IData nie jest mapą.`

Typ zwracania: [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String]

```zenscript
[4, 128, 256, 1024].asMap();
```

### asString

Pobiera reprezentację ciągu danych IData

 Zwraca: `String reprezentujący ten IData (wartość i typ).`

Typ zwrotu: Ciąg

```zenscript
[4, 128, 256, 1024].asString();
```

### wyczyść

Usuwa każdy element z listy

```zenscript
[4, 128, 256, 1024].clear();
```

### zawiera

Sprawdza, czy to IData zawiera inne IData, używane głównie w podklasach [słabszego rzemieślnika. pi.data.ICollectionData](/vanilla/api/data/ICollectionData), jest taki sam jak sprawdzanie innych typów IData

 Zwraca: `true, jeśli dane IData są zawarte w tym IData`

Typ zwrotu: logiczny

```zenscript
[4, 128, 256, 1024].contains(data as crafttweaker.api.data.IData);
[4, 128, 256, 1024].contains("Display");
```

| Parametr | Typ                                                    | Opis                                |
| -------- | ------------------------------------------------------ | ----------------------------------- |
| dane     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | dane do sprawdzenia, czy są zawarte |


### kopiuj

Tworzy kopię tego IData.

 IData jest domyślnie niezmienna, użyj tego, aby utworzyć prawidłową kopię obiektu.

 Zwraca: `kopia tego IData.`

Typ zwracania: [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 128, 256, 1024].kopia();
```

### pobierz

Pobiera [crafttweaker.api.data.IData](/vanilla/api/data/IData) przechowywany w danym indeksie. Zwraca: ` [crafttweaker.api.data.IData](/vanilla/api/data/IData)`

Typ zwracania: [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 128, 256, 1024].get(index as int);
[4, 128, 256, 1024].get(0);
```

| Parametr | Typ    | Opis                 |
| -------- | ------ | -------------------- |
| indeks   | odcień | Indeks (oparty na 0) |


### getId

Pobiera ID wewnętrznego tagu NBT.

 Używane do określenia, jaki typ NBT jest przechowywany (na przykład lista)

 Zwraca: `ID tagu NBT, który reprezentuje te dane.`

Typ zwrotu: bajt

```zenscript
[4, 128, 256, 1024].getId();
```

### getString

Pobiera reprezentację ciągu znaków wewnętrznego tagu INBT

 Zwraca: `String reprezentujący wewnętrzny INBT tego IData.`

Typ zwrotu: Ciąg

```zenscript
[4, 128, 256, 1024].getString();
```

### usuń

Usuwa [crafttweaker.api.data.IData](/vanilla/api/data/IData) przechowywany w danym indeksie. Zwraca: `Usunięto [crafttweaker.api.data.IData](/vanilla/api/data/IData)`

Typ zwracania: [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 128, 256, 1024].remove(indeks jak int);
[4, 128, 256, 1024].remove(0);
```

| Parametr | Typ    | Opis                 |
| -------- | ------ | -------------------- |
| indeks   | odcień | Indeks (oparty na 0) |


### ustaw

Ustawia element w podanym indeksie na podaną wartość Zwraca: `Zastąpiona wartość`

Typ zwracania: [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 128, 256, 1024].set(index as int, value as crafttweaker.api.data.IData);
[4, 128, 256, 1024].set(0, "Bye");
```

| Parametr | Typ                                                    | Opis                                 |
| -------- | ------------------------------------------------------ | ------------------------------------ |
| indeks   | odcień                                                 | Indeks do ustawiania (w oparciu o 0) |
| wartość  | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Nowa wartość                         |



## Właściwości

| Nazwisko | Typ    | Posiada Getter | Ma ustawienie |
| -------- | ------ | -------------- | ------------- |
| rozmiar  | odcień | prawda         | fałszywy      |

