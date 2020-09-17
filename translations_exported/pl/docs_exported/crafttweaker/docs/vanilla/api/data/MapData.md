# MapData



Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.data.MapData
```

## Zaimplementowane interfejsy
MapData implementuje następujące interfejsy. Oznacza to, że każda dostępna dla nich metoda może być również stosowana w tej klasie.
- [crafttweaker.api.data.IData](/vanilla/api/data/IData)

## Konstruktorzy
```zenscript
nowy crafttweaker.api.data.MapData();
```
```zenscript
nowy crafttweaker.api.data.MapData(mapa jako crafttweaker.api.data.IData[String]);
```
| Parametr | Typ                                                            | Opis             |
| -------- | -------------------------------------------------------------- | ---------------- |
| mapa     | [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String] | Nie podano opisu |



## Metody
### asList

Pobiera listę<IData> reprezentacja tego IData, zwraca puste cokolwiek poza [crafttweaker.api.data.ListData](/vanilla/api/data/ListData).

 Zwraca: `null jeśli to IData nie jest listą.`

Typ zwracania: Lista&lt;[crafttweaker.api.data.IData](/vanilla/api/data/IData)&gt;

```zenscript
myMapData.asList();
```

### asMap

Pobiera reprezentację mapy<String, IData> tej IData, zwraca puste na cokolwiek oprócz [crafttweaker.api.data.MapData](/vanilla/api/data/MapData).

 Zwraca: `null jeśli to IData nie jest mapą.`

Typ zwracania: [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String]

```zenscript
myMapData.asMap();
```

### asString

Pobiera reprezentację ciągu danych IData

 Zwraca: `String reprezentujący ten IData (wartość i typ).`

Typ zwrotu: Ciąg

```zenscript
myMapData.asString();
```

### zawiera

Sprawdza, czy mapa zawiera podany klucz.

 Zwroty: `Prawda jeśli mapa zawiera klucz`

Typ zwrotu: logiczny

```zenscript
myMapData.contains(key as String);
myMapData.contains("Hello");
```

| Parametr | Typ         | Opis                |
| -------- | ----------- | ------------------- |
| klucz    | Ciąg znaków | Klucz do wyszukania |



Sprawdza, czy to IData zawiera inne IData, używane głównie w podklasach [słabszego rzemieślnika. pi.data.ICollectionData](/vanilla/api/data/ICollectionData), jest taki sam jak sprawdzanie innych typów IData

 Zwraca: `true, jeśli dane IData są zawarte w tym IData`

Typ zwrotu: logiczny

```zenscript
myMapData.contains(dane jako crafttweaker.api.data.IData);
myMapData.contains("Display");
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
myMapData.copy();
```

### pobierz

Pobiera wartość skojarzoną z kluczem

 Zwraca: `Wartość jeśli jest obecna, wartość zerowa w przeciwnym razie`

Typ zwracania: [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
myMapData.get(klucz jako String);
myMapData.get("Witaj");
```

| Parametr | Typ         | Opis                |
| -------- | ----------- | ------------------- |
| klucz    | Ciąg znaków | Klucz do wyszukania |


### getId

Pobiera ID wewnętrznego tagu NBT.

 Używane do określenia, jaki typ NBT jest przechowywany (na przykład lista)

 Zwraca: `ID tagu NBT, który reprezentuje te dane.`

Typ zwrotu: bajt

```zenscript
myMapData.getId();
```

### getString

Pobiera reprezentację ciągu znaków wewnętrznego tagu INBT

 Zwraca: `String reprezentujący wewnętrzny INBT tego IData.`

Typ zwrotu: Ciąg

```zenscript
myMapData.getString();
```

### scalanie

Połącz tę mapę z drugą mapą. Jeśli wpisy z tej mapy i innej mapy współdzielone wartości są próbowane do połączenia. Jeśli to nie zadziała, użyto wartości z drugiej mapy.

 Zwraca: `Ta mapa, po scaleniu`

Typ zwracania: [crafttweaker.api.data.MapData](/vanilla/api/data/MapData)

```zenscript
myMapData.merge(inne jak crafttweaker.api.data.MapData);
myMapData.merge({Doodle: "Do});
```

| Parametr | Typ                                                        | Opis        |
| -------- | ---------------------------------------------------------- | ----------- |
| inne     | [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | Druga mapa. |


### umieść

Dodaje wartość dla danego klucza lub tworzy nowy wpis, jeśli nie istniał wcześniej.

 Zwraca: `Poprzednia wartość, jeśli jest obecna, bez innych`

Typ zwracania: [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
myMapData.put(key as String, value as crafttweaker.api.data.IData);
myMapData.put("Hello", "Goodbye");
```

| Parametr | Typ                                                    | Opis                          |
| -------- | ------------------------------------------------------ | ----------------------------- |
| klucz    | Ciąg znaków                                            | Klucz do ustawiania wartości. |
| wartość  | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Wartość do ustawiania.        |


### putAll

Dodaje wszystkie wpisy z danej mapy do tej mapy. Może nadpisywać istniejące klucze.

```zenscript
myMapData.putAll(mapa jako crafttweaker.api.data.IData[String]);
myMapData.putAll({Hello: "Goodbye", Item: "Bedrock"});
```

| Parametr | Typ                                                            | Opis                                   |
| -------- | -------------------------------------------------------------- | -------------------------------------- |
| mapa     | [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String] | Pozostałe wpisy do dodania do tej mapy |


### usuń

Usuwa wpis podanym kluczem z mapy

```zenscript
myMapData.remove(key as String);
myMapData.remove("Somewhere");
```

| Parametr | Typ         | Opis                     |
| -------- | ----------- | ------------------------ |
| klucz    | Ciąg znaków | Klucz wpisu do usunięcia |



## Właściwości

| Nazwisko | Typ                             | Posiada Getter | Ma ustawienie |
| -------- | ------------------------------- | -------------- | ------------- |
| isEmpty  | boolean                         | prawda         | fałszywy      |
| keySet   | Ustaw&lt;String&gt; | prawda         | fałszywy      |
| rozmiar  | odcień                          | prawda         | fałszywy      |

## Operatorzy
### DODAJ

Dodaje wszystkie wpisy z podanego IData do tego wpisu

```zenscript
Dane myMapData + jako crafttweaker.api.data.IData
```

| Parametr | Typ                                                    | Opis             |
| -------- | ------------------------------------------------------ | ---------------- |
| dane     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Nie podano opisu |

## Szafy na akta, szafy na kartoteki, kasety na papiery, podpórki na papiery, pojemniki na przybory do pisania, stojaki na stemple biurowe i podobne wyposażenie biurowe lub biurkowe, z metali nieszlachetnych

| Typ wyniku                                                     | Jest niedomniemany |
| -------------------------------------------------------------- | ------------------ |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String] | prawda             |

