# ByteArrayData



Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.data.ByteArrayData
```

## Zaimplementowane interfejsy
ByteArrayData implementuje następujące interfejsy. Oznacza to, że każda dostępna dla nich metoda może być również stosowana w tej klasie.
- [crafttweaker.api.data.ICollectionData](/vanilla/api/data/ICollectionData)

## Konstruktorzy
```zenscript
nowy crafttweaker.api.data.ByteArrayData(wewnętrzny jako bajt[]);
```
| Parametr   | Typ    | Opis             |
| ---------- | ------ | ---------------- |
| wewnętrzna | bajt[] | Nie podano opisu |



## Metody
### dodaj

```zenscript
[4, 1, 2].add(wartość jako crafttweaker.api.data.IData);
[4, 1, 2].add("dziś");
```

| Parametr | Typ                                                    | Opis                        |
| -------- | ------------------------------------------------------ | --------------------------- |
| wartość  | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Wartość do dodania do listy |



```zenscript
[4, 1, 2].add(index as int, value as crafttweaker.api.data.IData);
[4, 1, 2].add(1, "piękny");
```

| Parametr | Typ                                                    | Opis                                                                          |
| -------- | ------------------------------------------------------ | ----------------------------------------------------------------------------- |
| indeks   | odcień                                                 | Indeks do dodania. Kolejne pozycje zostaną przeniesione o jeden indeks wyższy |
| wartość  | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Wartość do dodania do listy                                                   |


### wyczyść

Usuwa każdy element z listy

```zenscript
[4, 1, 2].clear();
```

### pobierz

Pobiera [crafttweaker.api.data.IData](/vanilla/api/data/IData) przechowywany w danym indeksie.

Zwraca [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 1, 2].get(index as int);
[4, 1, 2].get(0);
```

| Parametr | Typ    | Opis                 |
| -------- | ------ | -------------------- |
| indeks   | odcień | Indeks (oparty na 0) |


### usuń

Usuwa [crafttweaker.api.data.IData](/vanilla/api/data/IData) przechowywany w danym indeksie.

Zwraca [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 1, 2].remove(indeks jak int);
[4, 1, 2].remove(0);
```

| Parametr | Typ    | Opis                 |
| -------- | ------ | -------------------- |
| indeks   | odcień | Indeks (oparty na 0) |


### ustaw

Ustawia element w podanym indeksie na podaną wartość

Zwraca [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 1, 2].set(index as int, value as crafttweaker.api.data.IData);
[4, 1, 2].set(0, "Bye");
```

| Parametr | Typ                                                    | Opis                                 |
| -------- | ------------------------------------------------------ | ------------------------------------ |
| indeks   | odcień                                                 | Indeks do ustawiania (w oparciu o 0) |
| wartość  | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Nowa wartość                         |



## Właściwości

| Nazwisko | Typ    | Posiada Getter | Ma ustawienie |
| -------- | ------ | -------------- | ------------- |
| rozmiar  | odcień | prawda         | fałszywy      |

