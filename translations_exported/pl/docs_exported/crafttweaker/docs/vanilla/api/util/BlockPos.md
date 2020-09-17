# BlockPos

Reprezentuje pozycję bloku na świecie

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.util.BlockPos
```

## Konstruktorzy
```zenscript
nowy crafttweaker.api.util.BlockPos(x jak int, y int, z jak int);
```
| Parametr | Typ    | Opis             |
| -------- | ------ | ---------------- |
| x        | odcień | Nie podano opisu |
| y        | odcień | Nie podano opisu |
| z        | odcień | Nie podano opisu |



## Metody
### dodaj

Dodaje dwie pozycje razem i zwraca wynik.

 Zwraca: `new [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) z dodanymi wartościami.`

Typ zwrotu: [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
nowy BlockPos(0, 1, 2).add(pos as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).add(new BlockPos(3, 2, 1));
```

| Parametr | Typ                                                          | Opis                    |
| -------- | ------------------------------------------------------------ | ----------------------- |
| poz.     | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | inna pozycja do dodania |



Dodaje podane wartości do tej pozycji i zwraca nową pozycję z nowymi wartościami.

 Zwraca: `nowa pozycja oparta na wartościach podanych wartości i tej pozycji`

Typ zwrotu: [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
nowy BlockPos(0, 1, 2).add(x jako podwójny, y jako podwójny, z jako podwójny);
new BlockPos(0, 1, 2).add(50.21, -20.8, -25.2);
```

| Parametr | Typ      | Opis                 |
| -------- | -------- | -------------------- |
| x        | podwójne | wartość x do dodania |
| y        | podwójne | wartość y do dodania |
| z        | podwójne | z wartość do dodania |



Dodaje podane wartości do tej pozycji i zwraca nową pozycję z nowymi wartościami.

 Zwraca: `nowa pozycja oparta na wartościach podanych wartości i tej pozycji`

Typ zwrotu: [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
nowy BlockPos(0, 1, 2).add(x jako int, y as int, z as int);
new BlockPos(0, 1, 2).add(50, -20, -25);
```

| Parametr | Typ    | Opis                 |
| -------- | ------ | -------------------- |
| x        | odcień | wartość x do dodania |
| y        | odcień | wartość y do dodania |
| z        | odcień | z wartość do dodania |


### produkt krzyżowy

Tworzy nowe BlockPos na podstawie produktu krzyżowego tej pozycji i podanej pozycji

 Zwraca: `nowe BlockPos oparte na produkcie krzyżowym tego BlockPos i danego BlockPos`

Typ zwrotu: [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
nowy BlockPos(0, 1, 2).crossProduct(pos as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).crossProduct(new BlockPos(5, 8, 2););
```

| Parametr | Typ                                                          | Opis                               |
| -------- | ------------------------------------------------------------ | ---------------------------------- |
| poz.     | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | BlockPos do przekroczenia produktu |


### Odległość Sq

Pobiera kwadratową odległość w tej pozycji do określonej pozycji BlockPosa, używając środka BlockPos

 Zwraca: `odległość kwadratowa dla tej bieżącej pozycji i danej pozycji bloku.`

Typ zwrotu: podwójny

```zenscript
nowy BlockPos(0, 1, 2).odległośćSq(do jako crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).distanceSq(new BlockPos(256, 128, 10););
```

| Parametr | Typ                                                          | Opis                    |
| -------- | ------------------------------------------------------------ | ----------------------- |
| do       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | BlockPos do sprawdzenia |



Pobiera kwadratową odległość w tej pozycji do określonego BlockPos

 Zwraca: `odległość kwadratowa dla tej bieżącej pozycji i danej pozycji bloku.`

Typ zwrotu: podwójny

```zenscript
nowy BlockPos(0, 1, 2).odległośćSq(do jako crafttweaker.api.util.BlockPos, useCenter jako boolean);
new BlockPos(0, 1, 2).distanceSq(new BlockPos(256, 128, 10);, true);
```

| Parametr   | Typ                                                          | Opis                                                                       |
| ---------- | ------------------------------------------------------------ | -------------------------------------------------------------------------- |
| do         | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | BlockPos do sprawdzenia                                                    |
| uzytkownik | boolean                                                      | czy należy zastosować środek współrzędnej? (dodaje 0,5 do każdej wartości) |



Pobiera kwadratową odległość w tej pozycji do określonych współrzędnych

 Zwraca: `odległości kwadratowej dla bieżącej pozycji i podanych współrzędnych.`

Typ zwrotu: podwójny

```zenscript
nowy BlockPos(0, 1, 2).distanceSq(x jako podwójne, y jako podwójne, z jako podwójne, useCenter as boolean);
new BlockPos(0, 1, 2).distanceSq(500.25, 250.75, 100.20, false);
```

| Parametr   | Typ      | Opis                                                                       |
| ---------- | -------- | -------------------------------------------------------------------------- |
| x          | podwójne | x pozycja do sprawdzenia                                                   |
| y          | podwójne | pozycja y do sprawdzenia przeciwko                                         |
| z          | podwójne | z pozycji do sprawdzenia                                                   |
| uzytkownik | boolean  | czy należy zastosować środek współrzędnej? (dodaje 0,5 do każdej wartości) |


### w dół

Tworzy nowe BlockPos bazujące na tym BlockPos, który jest o jeden blok mniejszy niż ten BlockPos

 Zwraca: `nowy BlockPos jest o jeden blok mniejszy niż ten BlockPos`

Typ zwrotu: net.minecraft.util.math.BlockPos

```zenscript
nowy BlockPos(0, 1, 2).down();
```

### wschodni

Tworzy nowy BlockPos oparty na tym BlockPos, który jest jednym z bloków na wschód od tego BlockPos

 Zwraca: `nowy BlockPos jest jednym z bloków na wschód od tego BlockPos`

Typ zwrotu: net.minecraft.util.math.BlockPos

```zenscript
nowy BlockPos(0, 1, 2).wschód();
```


Tworzy nowy BlockPos bazujący na tym BlockPos, który jest n BlockPos na wschód od tego BlockPos

 Zwraca: `nowy BlockPos, który jest n BlockPos na wschód od tego BlockPos`

Typ zwrotu: net.minecraft.util.math.BlockPos

```zenscript
nowy BlockPos(0, 1, 2).east(n jak int);
new BlockPos(0, 1, 2).east(2);
```

| Parametr | Typ    | Opis             |
| -------- | ------ | ---------------- |
| n        | odcień | Nie podano opisu |


### Odległość manhattanska

Pobiera Manhattan Odległość od tej pozycji w porównaniu do innej pozycji

 Zwraca: `Odległość manhattana od pozycji`

Typ zwrotu: int

```zenscript
nowy BlockPos(0, 1, 2).manhattanDistance(inny jak crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).manhattanDistance(new BlockPos(4, 5, 6));
```

| Parametr | Typ                                                          | Opis                                    |
| -------- | ------------------------------------------------------------ | --------------------------------------- |
| inne     | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | inna pozycja do uzyskania odległości do |


### Północ

Tworzy nowy BlockPos bazujący na tym BlockPos, który jest blokiem na północ od tego BlockPos

 Zwraca: `nowy BlockPos, który jest blokiem na północ od tego BlockPos`

Typ zwrotu: net.minecraft.util.math.BlockPos

```zenscript
nowy BlockPos(0, 1, 2).north();
```


Tworzy nowe BlockPos bazujące na tym BlockPos, który jest nBlockPos na północ od tego BlockPos

 Zwraca: `nowy BlockPos, który jest blokiem na północ od tego BlockPos`

Typ zwrotu: net.minecraft.util.math.BlockPos

```zenscript
nowy BlockPos(0, 1, 2).north(n jak int);
new BlockPos(0, 1, 2).north(10);
```

| Parametr | Typ    | Opis             |
| -------- | ------ | ---------------- |
| n        | odcień | Nie podano opisu |


### przesunięcie

Tworzy nowy BlockPos bazujący na tym BlockPos, który jest jednym przesunięciem bloku tego BlockPos na podstawie podanego [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

 Zwraca: `nowy BlockPos to 1 przesunięcie bloku tego BlockPos`

Typ zwrotu: [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
nowy BlockPos(0, 1, 2).offset(kierunek jak crafttweaker.api.util.Direction);
new BlockPos(0, 1, 2).offset(<direction:east>);
```

| Parametr | Typ                                                                     | Opis             |
| -------- | ----------------------------------------------------------------------- | ---------------- |
| kierunek | [Kierunek crafttweaker.api.util.Direction](/vanilla/api/util/Direction) | Nie podano opisu |



Tworzy nowe BlockPos bazujące na tym BlockPos, które jest przesunięciem bloków tego BlockPos na podstawie podanego [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

 Zwraca: `nowe BlockPos, które jest przesunięciem bloku (bloków) tego BlockPos`

Typ zwrotu: [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
nowy BlockPos(0, 1, 2).offset(kierunek jak crafttweaker.api.util.Direction, n int);
new BlockPos(0, 1, 2).offset(<direction:south>, 3);
```

| Parametr | Typ                                                                     | Opis             |
| -------- | ----------------------------------------------------------------------- | ---------------- |
| kierunek | [Kierunek crafttweaker.api.util.Direction](/vanilla/api/util/Direction) | Nie podano opisu |
| n        | odcień                                                                  | Nie podano opisu |


### na południe

Tworzy nowy BlockPos oparty na tym BlockPos, który jest blokiem na południe od tego BlockPos

 Zwraca: `nowy BlockPos jest jednym z bloków na południe od tego BlockPos`

Typ zwrotu: net.minecraft.util.math.BlockPos

```zenscript
nowy BlockPos(0, 1, 2).South();
```


Tworzy nowy BlockPos bazujący na tym BlockPos, który jest n BlockPos na południe od tego BlockPos

 Zwraca: `nowy BlockPos, który jest n blokiem na południe od tego BlockPos`

Typ zwrotu: net.minecraft.util.math.BlockPos

```zenscript
nowy BlockPos(0, 1, 2).South(n jak int);
new BlockPos(0, 1, 2).South(12);
```

| Parametr | Typ    | Opis             |
| -------- | ------ | ---------------- |
| n        | odcień | Nie podano opisu |


### odjąć

Oddzieli dwie pozycje razem i zwraca wynik.

 Zwraca: `new [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) z usuniętymi wartościami.`

Typ zwrotu: [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
nowy BlockPos(0, 1, 2).odejmowanie (poz. jako crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).odejmowanie (new BlockPos(2, 1, 3));
```

| Parametr | Typ                                                          | Opis                      |
| -------- | ------------------------------------------------------------ | ------------------------- |
| poz.     | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | inna pozycja do usunięcia |


### w górę

Tworzy nowy BlockPos oparty na tym BlockPos który jest o jeden blok wyższy niż ten BlockPos

 Zwraca: `nowy BlockPos jest o jeden blok wyższy niż ten BlockPos`

Typ zwrotu: net.minecraft.util.math.BlockPos

```zenscript
nowy BlockPos(0, 1, 2).up();
```


Tworzy nowe BlockPos bazujące na tym BlockPos, które jest nBlockPos wyższe niż ten BlockPos

 Zwraca: `nowy BlockPos, który jest (są) blokiem wyższym niż ten BlockPos`

Typ zwrotu: net.minecraft.util.math.BlockPos

```zenscript
nowy BlockPos(0, 1, 2).up(n jak int);
new BlockPos(0, 1, 2).up(45);
```

| Parametr | Typ    | Opis             |
| -------- | ------ | ---------------- |
| n        | odcień | Nie podano opisu |


### na zachód

Tworzy nowy BlockPos oparty na tym BlockPos, który jest jednym z bloków na zachód od tego BlockPos

 Zwraca: `nowy BlockPos jest jednym blokiem na zachód od tego BlockPos`

Typ zwrotu: net.minecraft.util.math.BlockPos

```zenscript
nowy BlockPos(0, 1, 2).west();
```


Tworzy nowy BlockPos bazujący na tym BlockPos, który jest n block(s) na zachód od tego BlockPos

 Zwraca: `nowy BlockPos, który jest n block(s) na zachód od tego BlockPos`

Typ zwrotu: net.minecraft.util.math.BlockPos

```zenscript
nowy BlockPos(0, 1, 2).west(n jak int);
new BlockPos(0, 1, 2).west(120);
```

| Parametr | Typ    | Opis             |
| -------- | ------ | ---------------- |
| n        | odcień | Nie podano opisu |


### w odległości

Sprawdza, czy dany BlockPos znajduje się w określonej odległości od tego BlockPos (używa środka BlockPosa)

 Zwraca: `true, jeśli dany BlockPos znajduje się w określonej odległości od tego BlockPos`

Typ zwrotu: logiczny

```zenscript
nowy BlockPos(0, 1, 2).withinDistance(poz. crafttweaker.api.util.BlockPos, dystans jako podwójny);
new BlockPos(0, 1, 2).withinDistance(new BlockPos(80, 75, 54);, 10);
```

| Parametr  | Typ                                                          | Opis                                                   |
| --------- | ------------------------------------------------------------ | ------------------------------------------------------ |
| poz.      | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | BlockPos do sprawdzenia, czy znajduje się w odległości |
| odległość | podwójne                                                     | odległość do sprawdzenia w granicach                   |



## Właściwości

| Nazwisko | Typ    | Posiada Getter | Ma ustawienie |
| -------- | ------ | -------------- | ------------- |
| x        | odcień | prawda         | fałszywy      |
| y        | odcień | prawda         | fałszywy      |
| z        | odcień | prawda         | fałszywy      |

## Operatorzy
### DODAJ

Dodaje dwie pozycje razem i zwraca wynik.

 Zwraca: `new [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) z dodanymi wartościami.`

```zenscript
nowy BlockPos(0, 1, 2) + pos jako crafttweaker.api.util.BlockPos
new BlockPos(0, 1, 2) + new BlockPos(3, 2, 1)
```

| Parametr | Typ                                                          | Opis                    |
| -------- | ------------------------------------------------------------ | ----------------------- |
| poz.     | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | inna pozycja do dodania |
### SUB

Oddzieli dwie pozycje razem i zwraca wynik.

 Zwraca: `new [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) z usuniętymi wartościami.`

```zenscript
nowy BlockPos(0, 1, 2) - poty jako crafttweaker.api.util.BlockPos
new BlockPos(0, 1, 2) - new BlockPos(2, 1, 3)
```

| Parametr | Typ                                                          | Opis                      |
| -------- | ------------------------------------------------------------ | ------------------------- |
| poz.     | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | inna pozycja do usunięcia |

## Szafy na akta, szafy na kartoteki, kasety na papiery, podpórki na papiery, pojemniki na przybory do pisania, stojaki na stemple biurowe i podobne wyposażenie biurowe lub biurkowe, z metali nieszlachetnych

| Typ wyniku | Jest niedomniemany |
| ---------- | ------------------ |
| długie     | fałszywy           |

