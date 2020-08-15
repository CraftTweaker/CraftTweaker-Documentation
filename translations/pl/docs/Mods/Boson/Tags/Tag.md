# `Znacznik`

`Znacznik` jest reprezentacją obiektu co jest przechowywane wewnątrz aktualnego znacznika w grze. Dostęp do tych danych można uzyskać tylko z wewnątrz [`tagów` loader](/Mods/Boson/Loaders/Tags/). Aby uzyskać więcej informacji na temat tagów i jak je uzyskać, zapoznaj się z do [tej strony](/Mods/Boson/Tags/Concept/).

## Szczegóły klasy
Klasa znajduje się w pakiecie `net.thesilkminer.mc.boson.zen.tag` , dzięki czemu `net.thesilkminer.mc.boson.zen.tag.Tag` posiada w pełni kwalifikowaną nazwę do importu.

## Tworzenie nowej instancji
Zobacz [dokumentację obsługi nawiasów](/Mods/Boson/Tags/BracketHandler/).

## Właściwości
Znacznik `` zapewnia dostęp tylko do odczytu do określonego zestawu właściwości, zgodnie z poniższą tabelą:

| Nazwa Właściwości | Typ                                       | Opis                                                               |
| ----------------- | ----------------------------------------- | ------------------------------------------------------------------ |
| `Nazwa`           | [`NazwaSpacedString`](/Mods/Boson/Names/) | Nazwa, która jednoznacznie identyfikuje ten tag                    |
| `typ`             | [`TagType`](/Mods/Boson/Tags/TagType/)    | Typ tego tagu                                                      |
| `elementy`        | `[T]` (gdzie `T` jest rodzajem)           | Lista elementów aktualnie znajdujących się w tagu tylko do odczytu |

## Metody

### Dodanie
Dodawanie elementów do znacznika może odbywać się za pomocą potrójnych metod, których podpisy znajdują się w fragmentach, które są następujące:

```zenscript
funkcja add(elementy... jako NameSpacedString) jako pusta;
funkcja addAll(elementy jak dowolne[]) jako pusta;
funkcja addFrom(inna jak Tag) jako pusta;
```

`add` jest tak zwaną metodą vararg, co oznacza, że może zaakceptować tyle argumentów, ile jest to pożądane, pod warunkiem że są one tego samego rodzaju, tj. . `NazwaSpacedString`s. Pozwala to określić nazwę rejestru elementu, który chcesz dodać do tagu , a sama implementacja tagu spróbuje przekonwertować podaną nazwę na rzeczywisty obiekt.

`addAll`, z drugiej strony, akceptuje tablicę elementów i próby dodania ich do podanego tagu. Tablica jest oznaczona jako `każdego[]` ze względu na brak ogólnej pomocy przy wprowadzaniu tej metody. Niemniej jednak próba dodania niekompatybilnych elementów do tagu (powiedz: dodawanie bloków do znacznika tylko dla przedmiotów) spowoduje przeprowadzenie operacji bez opcji.

`addFrom` dodaje całą zawartość tagu do drugiego poprzez odwołanie tagu, oznacza, że wszelkie modyfikacje wprowadzone do drugiego znacznika również zdarzają się na pierwszej. Zauważ, że ta operacja udaje się tylko wtedy, gdy typy tagów pasują do siebie, w przeciwnym razie zostanie wykonana operacja bez opcji.

Poniżej przedstawiono listę przykładów:

```zenscript
tag val = <tag-items:forge:ingots/iron>;

# dodaj elementy poprzez nazwę rejestru
tag. dd("minecraft:iron_ingot" jako NameSpacedString, "thermalfoundation:iron_ingot" jako NameSpacedString);

# dodaj elementy za pomocą tagu
ddAll([<buildcraft:iron_ingot>] jako IItemStack[]);

# dodaj kolejny tag za pomocą znacznika
tag.addFrom(<tag-items:customtag:other_iron_ingots>);
```

### Zastąpienie
Elementy znacznika można w pełni zastąpić, co oznacza, że wszystkie elementy są najpierw wyczyszczone, następnie podane elementy są dodane do zawartości tagu. Osiąga się to również za pomocą potrójnej metody, której podpisy znajdują się w fragmencie :

```zenscript
funkcja zastępująca (elementy... jako NameSpacedString) jako pusta;
funkcja zastępująca wszystkie (elementy jak dowolne[]) jako pusta;
funkcja zastępująca (inna jako Tag) jako pusta;
```

`replace` jest tak zwaną metodą vararg, co oznacza, że może zaakceptować tyle argumentów, ile jest to pożądane, pod warunkiem że są one tego samego rodzaju, tj. . `NazwaSpacedString`s. Pozwala to określić nazwę rejestru elementu, którego chcesz użyć do zastąpienia zawartości tagu, a sama implementacja taga spróbuje przekonwertować określoną nazwę na rzeczywisty obiekt .

`zastąp`, z drugiej strony, akceptuje tablicę elementów i próby zastąpienia zawartości danego tagu tablicą. Tablica jest oznaczona jako `dowolnych []` z powodu braku ogólnej pomocy przy wprowadzaniu tej metody. Niemniej jednak próba przekazania elementów niekompatybilnych do tagu (np. bloki tylko dla znacznika przedmiotu) spowodują, że operacja bez opcji zostanie wykonana.

`zastąp` zastępuje zawartość danego tagu odwołaniem do drugiego, co oznacza, że wszelkie modyfikacje przeprowadzone na drugim znaczniku również mają miejsce na pierwszym. Zauważ, że ta operacja udaje się tylko wtedy, gdy typy tagów pasują do w przeciwnym razie operacja bez opcji zostanie wykonana.

Poniżej przedstawiono listę przykładów:

```zenscript
tag val = <tag-items:forge:ingots/iron>;

# zastąp elementy za pomocą znacznika
eplace("minecraft:iron_ingot" jako NameSpacedString, "thermalfoundation:iron_ingot" jako NameSpacedString);

# zastąp elementy przez ich rzeczywiste instancje
. eplaceAll([<buildcraft:iron_ingot>] jako IItemStack[]);

# zastąp kolejny tag przez tag o numerze
tag.replaceWith(<tag-items:customtag:other_iron_ingots>);
```

### Usuwanie
Usuwanie elementów z znacznika może odbywać się za pomocą potrójnej metody, której podpisy znajdują się w fragmentu, który jest następujący:

```zenscript
funkcja remove(elementy... jako NameSpacedString) jako unieważniona;
funkcja usuń wszystkie (elementy jak dowolne[]) jako unieważniona;
funkcja removeFrom(inna jak Tag) jako unieważniona;
```

`remove` jest tak zwaną metodą vararg, co oznacza, że może zaakceptować tyle argumentów, ile jest to pożądane, pod warunkiem że są one tego samego rodzaju, tj. . `NazwaSpacedString`s. Pozwala to określić nazwę rejestru elementu, który chcesz usunąć z tagu, a sama implementacja tagu spróbuje przekonwertować określoną nazwę na rzeczywisty obiekt.

`removeAll`, z drugiej strony, akceptuje tablicę elementów i próby usunięcia ich wszystkich z podanego tagu. Tablica jest oznaczona jako `każdego[]` z powodu braku ogólnej pomocy przy wprowadzaniu tej metody. Niemniej jednak próba usunięcia niekompatybilnych elementów z tagu (np. usunięcie bloków z znacznika tylko dla przedmiotów) spowoduje przeprowadzenie operacji bez opcji .

`removeFrom` usuwa drugi tag z listy odwołań tagów pierwszego tagu. Spowoduje to usunięcie elementów, które drugi tag nosi z listy pierwszych elementów, chociaż drugi tag nie będzie wyczyszczony z jego zawartości . Zauważ, że ta operacja udaje się tylko wtedy, gdy typy tagów pasują do siebie, w przeciwnym razie operacja bez opcji zostanie wykonana.

Poniżej przedstawiono listę przykładów:

```zenscript
tag val = <tag-items:forge:ingots/iron>;

# usuń elementy za pomocą znacznika
rejestru. emove("minecraft:iron_ingot" jako NameSpacedString, "thermalfoundation:iron_ingot" jako NameSpacedString);

# usuń elementy za pomocą tagu
emoveAll([<buildcraft:iron_ingot>] jako IItemStack[]);

# usuń znacznik
tag.removeFrom(<tag-items:customtag:other_iron_ingots>);
```

### Rozliczanie
Możesz również wyczyścić zawartość tagu za pomocą jednej metody. Spowoduje to usunięcie wszystkich elementów i wszystkich odwołań do tagów w tagu i jest równoznaczne z zastąpieniem tagu pustą zawartością. Można to zrobić za pomocą metody, która ma następujący podpis:

```zenscript
funkcja jasna() jako nieważna;
```

Poniżej przedstawiono przykład:

```zenscript
<tag-items:forge:ingots>.clear();
```

## Dodatkowe wsparcie
Tagi oferują również dodatkowe wsparcie dla niektórych funkcji ZenScript.

### Zapytanie
Używając `ma` składnię, można zapytać czy tag zawiera określony obiekt, czy nie. Znacznik może być postrzegany jako zbiór elementów:

```zenscript
Zawiesina = TAG posiada ELEMENT;
```

`TAG` reprezentuje wystąpienie tagu do zapytania. `ELEMENT` reprezentuje instancję elementu, którą możesz zapytać aby sprawdzić, czy jest ona zawarta w tagu, czy nie.

Pamiętaj, że podczas gdy tagi obsługują zapytanie o coś (skutecznie akceptują `dowolnych`), użycie elementu, który nie jest typu, który jest przechowywany w znaczniku nie ma żadnego wpływu i po prostu zwarto ocenę do `false`.

### Iteracja
Tags also support iteration via an iterative for loop, using a normal `for` loop. W ten sposób wyeliminuje się konieczność zapytania elementów poprzez wywołanie do `elementów` , co skutkuje czystszym kodem.

Ponieważ znaczniki są ustawione, kolejność iteracji nie jest zachowana i może różnić się między różnymi seriami iteratora . Z tego powodu obsługiwane są tylko iteratory jednoelementowe (tj. nie możesz również żądać indeksu iteracji podczas iteracji).

Składnia do użycia:

```zenscript
dla VARNAME w TAG {
}
```

`VARNAME` reprezentuje nazwę zmiennej, która zostanie zaktualizowana przy każdej pętli. `TAG` jest instancją tagów do włączenia pętli.

## Przeciążenie operatora
Tagi zapewniają również przeciążenie normalnych operatorów ZenScript, dzięki czemu niektóre operacje mogą być wykonywane z łatwością i przy użyciu mniej znaków. Każda sekcja zawiera tabelę niektórych przeciążeń operatorów, które są dostępne, z odpowiednim znaczeniem . We wszystkich tabelach `TAG` reprezentuje instancję tagów docelowych. podczas gdy `ARGx` reprezentuje *x*-th argument, że powinien zostać dostarczony.

### Operatory bezzałogowe
Operatorzy bezpodstawni są operatorami, którzy są aplikowani na sam tag i nie przyjmują żadnych argumentów.

| Operator | Składnia | Metoda równoważna | Uwagi |
| -------- | -------- | ----------------- | ----- |
| `-`      | `-TAG`   | `wyczyść`         | \-   |

### Operatorzy binarni
Operatorzy binarni są operatorami infikacji, które są stosowane między tagiem a jednym argumentem. Operatorzy są tutaj wymienieni w kolejności priorytetowej (wyższe oznacza, że zostanie zastosowany).

**WAŻNE**: chyba że zaznaczono inaczej, wszyscy operatorzy **mutują** tag, który jest przekazywany do przeciążenia, co oznacza, że zmieniają ich zawartość. Proszę wziąć pod uwagę następujący przykład:

```zenscript
tag val = <tag-items:forge:ingots>;
tag & [<minecraft:iron_ingot>] jako IItemStack[];
```

Na końcu tego fragmentu zawartość tagu `` zostanie zmieniona zgodnie z regułami operatora. To **nie** tworzy nowy tag, ani nie zwraca oryginalnej wartości taga. Następujący fragment kodu jest w rzeczywistości nieważny:

```zenscript
tag wojenny = <tag-items:forge:ingots>;
# NIEPRZEZNACZONY: NIE MOŻE POCZYĆ BŁĄD KOMPILACJI
tag = tag & [<minecraft:iron_ingot>] jako IItemStack[];
```

| Operator | Typ argumentu                             | Składnia         | Metoda równoważna | Uwagi                                                                               |
| -------- | ----------------------------------------- | ---------------- | ----------------- | ----------------------------------------------------------------------------------- |
| `+`      | `Znacznik`                                | `TAG + ARG1`     | `dodaj`           | \-                                                                                 |
| `+`      | `dowolny[]`                               | `TAG + ARG1`     | `addAll`          | Typ tablicy musi być taki sam jak zawartość tagu                                    |
| `+`      | [`NazwaSpacedString`](/Mods/Boson/Names/) | `TAG + ARG1`     | `dodaj`           | Przeciążenie przyjmuje tylko jeden argument                                         |
| `+`      | `dowolny`                                 | `TAG + ARG1`     | `addAll`          | Skrót dla pojedynczego elementu: te same reguły co wersja tablicy mają zastosowanie |
| `~`      | `Znacznik`                                | `TAG ~ ARG1`     | `dodaj`           | \-                                                                                 |
| `~`      | `dowolny[]`                               | `TAG ~ ARG1`     | `addAll`          | Typ tablicy musi być taki sam jak zawartość tagu                                    |
| `~`      | [`NazwaSpacedString`](/Mods/Boson/Names/) | `TAG ~ ARG1`     | `dodaj`           | Przeciążenie przyjmuje tylko jeden argument                                         |
| `~`      | `dowolny`                                 | `TAG ~ ARG1`     | `addAll`          | Skrót dla pojedynczego elementu: te same reguły co wersja tablicy mają zastosowanie |
| `&`  | `Znacznik`                                | `TAG & ARG1` | `dodaj`           | \-                                                                                 |
| `&`  | `dowolny[]`                               | `TAG & ARG1` | `addAll`          | Typ tablicy musi być taki sam jak zawartość tagu                                    |
| `&`  | [`NazwaSpacedString`](/Mods/Boson/Names/) | `TAG & ARG1` | `dodaj`           | Przeciążenie przyjmuje tylko jeden argument                                         |
| `&`  | `dowolny`                                 | `TAG & ARG1` | `addAll`          | Skrót dla pojedynczego elementu: te same reguły co wersja tablicy mają zastosowanie |
| `-`      | `Znacznik`                                | `TAG - ARG1`     | `usuń z`          | \-                                                                                 |
| `-`      | `dowolny[]`                               | `TAG - ARG1`     | `usuń wszystko`   | Typ tablicy musi być taki sam jak zawartość tagu                                    |
| `-`      | [`NazwaSpacedString`](/Mods/Boson/Names/) | `TAG - ARG1`     | `usuń`            | Przeciążenie przyjmuje tylko jeden argument                                         |
| `-`      | `dowolny`                                 | `TAG - ARG1`     | `usuń wszystko`   | Skrót dla pojedynczego elementu: te same reguły co wersja tablicy mają zastosowanie |
| `==`     | `Znacznik`                                | `TAG == ARG1`    | \-               | Działa jako kontrola równości, pasuje do treści; nie mutuje `TAG`                   |
| `()`     | \-                                       | `TAG()`          | `elementy`        | \-                                                                                 |
