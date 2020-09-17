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
- [crafttweaker.api.data.IData](/vanilla/api/data/IData)

## Konstruktorzy
```zenscript
nowy crafttweaker.api.data.ListData();
```
```zenscript
nowy crafttweaker.api.data.ListData(lista jako lista<crafttweaker.api.data.IData>);
```
| Parametr | Typ                                                                             | Opis             | Opcjonalnie | Wartość domyślna |
| -------- | ------------------------------------------------------------------------------- | ---------------- | ----------- | ---------------- |
| lista    | Lista&lt;[crafttweaker.api.data.IData](/vanilla/api/data/IData)&gt; | Nie podano opisu | prawda      | `null`           |



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


### asList

Pobiera listę<IData> reprezentacja tego IData, zwraca puste cokolwiek poza [crafttweaker.api.data.ListData](/vanilla/api/data/ListData).

 Zwraca: `null jeśli to IData nie jest listą.`

Typ zwracania: Lista&lt;[crafttweaker.api.data.IData](/vanilla/api/data/IData)&gt;

```zenscript
["Witaj", "Świat", "!"].asList();
```

### asMap

Pobiera reprezentację mapy<String, IData> tej IData, zwraca puste na cokolwiek oprócz [crafttweaker.api.data.MapData](/vanilla/api/data/MapData).

 Zwraca: `null jeśli to IData nie jest mapą.`

Typ zwracania: [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String]

```zenscript
["Witaj", "Świat", "!"].asMap();
```

### asString

Pobiera reprezentację ciągu danych IData

 Zwraca: `String reprezentujący ten IData (wartość i typ).`

Typ zwrotu: Ciąg

```zenscript
["Witaj", "Świat", "!"].asString();
```

### wyczyść

Usuwa każdy element z listy

```zenscript
["Witaj", "Świat", "!"].clear();
```

### zawiera

Sprawdza, czy to IData zawiera inne IData, używane głównie w podklasach [słabszego rzemieślnika. pi.data.ICollectionData](/vanilla/api/data/ICollectionData), jest taki sam jak sprawdzanie innych typów IData

 Zwraca: `true, jeśli dane IData są zawarte w tym IData`

Typ zwrotu: logiczny

```zenscript
["Witaj", "Świat", "!"].Pojemniki (dane jako crafttweaker.api.data.IData);
["Witaj", "Świat", "!"].Pojemniki ("Wyświetla");
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
["Witaj", "Świat", "!"].kopiuj();
```

### pobierz

Pobiera [crafttweaker.api.data.IData](/vanilla/api/data/IData) przechowywany w danym indeksie. Zwraca: ` [crafttweaker.api.data.IData](/vanilla/api/data/IData)`

Typ zwracania: [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
["Hello", "World", "!"].get(index as int);
["Hello", "World", "!"].get(0);
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
["Witaj", "Świat", "!"].getId();
```

### getString

Pobiera reprezentację ciągu znaków wewnętrznego tagu INBT

 Zwraca: `String reprezentujący wewnętrzny INBT tego IData.`

Typ zwrotu: Ciąg

```zenscript
["Witaj, "Świat", "!"].getString();
```

### usuń

Usuwa [crafttweaker.api.data.IData](/vanilla/api/data/IData) przechowywany w danym indeksie. Zwraca: `Usunięto [crafttweaker.api.data.IData](/vanilla/api/data/IData)`

Typ zwracania: [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
["Witaj", "Świat", "!"].remove(indeks jak int);
["Witaj", "Świat", "!"].usuń(0);
```

| Parametr | Typ    | Opis                 |
| -------- | ------ | -------------------- |
| indeks   | odcień | Indeks (oparty na 0) |


### ustaw

Ustawia element w podanym indeksie na podaną wartość Zwraca: `Zastąpiona wartość`

Typ zwracania: [crafttweaker.api.data.IData](/vanilla/api/data/IData)

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

| Typ wyniku                                                                      | Jest niedomniemany |
| ------------------------------------------------------------------------------- | ------------------ |
| Lista&lt;[crafttweaker.api.data.IData](/vanilla/api/data/IData)&gt; | prawda             |

