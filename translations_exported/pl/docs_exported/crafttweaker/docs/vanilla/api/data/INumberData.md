# INumberData

Reprezentuje liczbę w formie [crafttweaker.api.data.IData](/vanilla/api/data/IData), przydatną do konwersji między typami (np. podwójna do int / długa).

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.data.INumberData
```

## Zaimplementowane interfejsy
INumberData wdraża następujące interfejsy. Oznacza to, że każda dostępna dla nich metoda może być również stosowana w tej klasie.
- [crafttweaker.api.data.IData](/vanilla/api/data/IData)

## Metody
### asList

Pobiera listę<IData> reprezentacja tego IData, zwraca puste cokolwiek poza [crafttweaker.api.data.ListData](/vanilla/api/data/ListData).

 Zwraca: `null jeśli to IData nie jest listą.`

Typ zwracania: Lista&lt;[crafttweaker.api.data.IData](/vanilla/api/data/IData)&gt;

```zenscript
1.asList();
```

### asMap

Pobiera reprezentację mapy<String, IData> tej IData, zwraca puste na cokolwiek oprócz [crafttweaker.api.data.MapData](/vanilla/api/data/MapData).

 Zwraca: `null jeśli to IData nie jest mapą.`

Typ zwracania: [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String]

```zenscript
1.asMap();
```

### asString

Pobiera reprezentację ciągu danych IData

 Zwraca: `String reprezentujący ten IData (wartość i typ).`

Typ zwrotu: Ciąg

```zenscript
1.asString();
```

### zawiera

Sprawdza, czy to IData zawiera inne IData, używane głównie w podklasach [słabszego rzemieślnika. pi.data.ICollectionData](/vanilla/api/data/ICollectionData), jest taki sam jak sprawdzanie innych typów IData

 Zwraca: `true, jeśli dane IData są zawarte w tym IData`

Typ zwrotu: logiczny

```zenscript
1.contains(data as crafttweaker.api.data.IData);
1.contains("Display");
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
1.kopia();
```

### getId

Pobiera ID wewnętrznego tagu NBT.

 Używane do określenia, jaki typ NBT jest przechowywany (na przykład lista)

 Zwraca: `ID tagu NBT, który reprezentuje te dane.`

Typ zwrotu: bajt

```zenscript
1.getId();
```

### getString

Pobiera reprezentację ciągu znaków wewnętrznego tagu INBT

 Zwraca: `String reprezentujący wewnętrzny INBT tego IData.`

Typ zwrotu: Ciąg

```zenscript
1.getString();
```


