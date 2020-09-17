# Dokumentacja klasy

`Sekwencja` to lista elementów, które mogą być obsługiwane i oceniane lazilnie. Zobacz stronę [Koncepcja](/Mods/Boson/Sequences/Concept/) , aby uzyskać więcej informacji.

## Szczegóły klasy
Będąc częścią projektu ZenScriptX, w pełni kwalifikowaną nazwą dla klasy jest `zenscriptx.sequence.Sequence`.

## Tworzenie nowej instancji
Odnosi się do strony [Uzyskanie sekwencji](/Mods/Boson/Sequences/Obtaining/).

## Metody
Różne metody dostępne w sekwencji można podzielić na cztery kategorie:

- Metody terminala
- Zmiana typu leniwych metod
- Pośrednie leniwe metody
- Metody pośrednia dla ryb

Każda kategoria ma własne zachowanie i zapytania, które są opisane w odpowiedniej kategorii.

Ponadto, w każdej metodzie podpis, litery `T` i `R` odnoszą się do ogólnych typów definiujących sekwencję. w szczególności `T` identyfikuje typ bieżącej sekwencji, mając na uwadze, że `R` identyfikuje typ nowej sekwencji, która zostaje zwrócona w przypadku zmiany typu leniwych metod.

Aby zaoszczędzić na przestrzeni, metody zostaną przedstawione w pojedynczym fragmencie w odpowiedniej kategorii z komentarzem powyżej określającym, co ma zrobić, jak pokazano w poniższym przykładzie snippet.

```zenscript
# ta metoda robi coś
metody funkcji (argument jako int, argument2 jako bool) jako dwukrotne;

# ta metoda robi coś innego i może zwrócić wartość zerową
metody funkcji 2() jako bool?;
```

Ostatnia, ale nie mniej ważna sprawdź [listę funkcjonalnych interfejsów](/Mods/Boson/Functions/List/) jeśli napotkasz nieprymitywny typ (e. . `Przewidaj<T>` lub `Funkcja<T, R>`).

### Metody terminala
Metody terminali to metody, które nie zwracają `sekwencji` , ale inne typy danych, takie jak `int`, `bool`lub nawet nic (`unieważnia`). Ponadto mogą one również potencjalnie spowodować ocenę całej zawartości `sekwencji` , chociaż nie jest to wymagane, ponieważ niektóre metody mogą również zakończyć egzekucję po spełnieniu określonych warunków . Gwarancji tej nie można jednak udzielić.

Nie można również kontynuować pracy `Sekwencja` po wywołaniu metody terminalu, chyba że sekwencja została wcześniej zapisana w zmiennej przed uruchomieniem metody końcowej.

```zenscript
# Returns whether the given 'element' is present in the target sequence
function contains(element as T) as bool;

# Gets the element that is at the given 'index' inside the sequence, if present, otherwise throws an exception
function elementAt(index as int) as T;

# Gets the element that is at the given 'index' inside the sequence, if present, otherwise invokes 'defaultValue'
function elementAtOrElse(index as int, defaultValue as IntFunction<T>) as T;

# Gets the element that is at the given 'index' inside the sequence, if present, otherwise returns null
function elementAtOrNull(index as int) as T?;

# Returns the first element that matches the given predicate, or null if none matches
function find(predicate as Predicate<T>) as T?;

# Returns the last element that matches the given predicate, or null if none matches
function findLast(predicate as Predicate<T>) as T?;

# Returns the first element of this sequence, if present, otherwise throws an exception
function first() as T;

# Returns the first element of this sequence that matches the given predicate, if present, otherwise throws an exception
function first(predicate as Predicate<T>) as T;

# Returns the first element of this sequence, if present, otherwise returns null
function firstOrNull() as T?;

# Returns the first element of this sequence that matches the given predicate, if present, otherwise returns null
function firstOrNull(predicate as Predicate<T>) as T?;

# Returns the position at which 'element' is found within the sequence, or -1 if no such element exists in the sequence
function indexOf(element as T) as int;

# Returns the position of the first element that matches the given predicate, or -1 if none match
function indexOfFirst(predicate as Predicate<T>) as int;

# Returns the position of the last element that matches the given predicate, or -1 if none match
function indexOfLast(predicate as Predicate<T>) as int;

# Returns the last element of this sequence, if present, otherwise throws an exception
function last() as T;

# Returns the last element of this sequence that matches the given predicate, if present, otherwise throws an exception
function last(predicate as Predicate<T>) as T;

# Returns the last position at which 'element' occurs in the sequence, or -1 if no such element exists in the sequence
function lastIndexOf(element as T) as int;

# Returns the last element of this sequence, if present, otherwise returns null
function lastOrNull() as T?;

# Returns the last element of this sequence that matches the given predicate, if present, otherwise returns null
function lastOrNull(predicate as Predicate<T>) as T?;

# Returns the only element in this sequence, or throws an exception if the sequence doesn't have exactly one element
function single() as T;

# Returns the only element in this sequence that matches the given predicate, or throws an exception if no elements or more than one match
function single(predicate as Predicate<T>) as T;

# Returns the only element in this sequence, or null if the sequence doesn't have exactly one element
function singleOrNull() as T?;

# Returns the only element in this sequence that matches the given predicate, or null if no elements or more than one match
function singleOrNull(predicate as Predicate<T>) as T?;

# Converts this sequence to a list (not an array)
function toList() as [T];

# Returns whether all the elements inside this sequence match the given predicate, or true for empty sequences
function all(predicate as Predicate) as bool;

# Returns whether this sequence is not empty
function any() as bool;

# Returns whether at least one of the elements of this sequence match the given predicate
function any(predicate as Predicate<T>) as bool;

# Returns the amount of items that are present in this sequence
function count() as int;

# Returns the amount of items in this sequence that match the given predicate
function count(predicate as Predicate<T>) as int;

# Accumulates values starting from 'initial' and recursively applying 'operation' over the current status of 'initial' and the next element, saving the result back into 'initial'
function fold(initial as R, operation as BiFunction<R, T, R>) as R;

# Executes the given 'action' on every element of the sequence in order
function forEach(action as Consumer<T>) as void;

# Executes the given 'action' on every element of the sequence in order, providing access to the current index
function forEachIndexed(action as ObjIntConsumer<T>) as void;

# Returns the element that has the maximum value according to the given 'comparator', or null if the sequence is empty
function maxWith(comparator as ToIntBiFunction<T, T>) as T?;

# Returns the element that has the minimum value according to the given 'comparator', or null if the sequence is empty
function minWith(comparator as ToIntBiFunction<T, T>) as T?;

# Returns whether this sequence is empty
function none() as bool;

# Returns whether none of the elements of this sequence match the given predicate
function none(predicate as Predicate<T>) as bool;

# Returns the integer sum of all the elements of this sequence according to the given 'selector'
function sumBy(selector as ToIntFunction<T>) as int;

# Returns the floating point sum of all the elements of this sequence according to the given 'selector'
function sumByDouble(selector as ToDoubleFunction<T>) as double;

# Returns a string that represents the contents of the given sequence, converted to string via 'transform', separated with the given 'separator', and with the given 'prefix' and 'suffix'
# Moreover, the amount of elements can be limited via 'limit' (if different from -1), in which case a longer list will be truncated via the text in 'truncated'
function joinToString(
    separator as string,               # optional, default value: ", "
    prefix as string,                  # optional, default value: ""
    postfix as string,                 # optional, default value: ""
    limit as int,                      # optional, default value: -1
    truncated as string,               # optional, default value: "..."
    przekształcić jako funkcję<T, String>?  # opcjonalnie, wartość domyślna: null (tj. zwykła `toString` zostanie wywołana na obiekcie docelowym)
) jako ciąg znaków;
```

### Zmiana typu leniwych metod
Zmienne leniwe metody to metody, które zwracają `Sekwencję` innego typu niż oryginalny, po wyniku operacji konwersji (e. . z `IItemStack` do `IBlockState`). Ponieważ są one leniwe, ocena zawartości sekwencji zostanie przeprowadzona tylko w późniejszym czasie, kiedy transformacja rzeczywiście musi zdarzyć się w wyniku wywołania metody końcowej lub metody pośredniej.

Ponieważ metody te są pośrednie, możliwe jest dalsze stosowanie `sekwencji` po powołaniu się na te metody.

```zenscript
# przekształca każdy element tej sekwencji w inny przy użyciu danej funkcji 'transform'
mapy funkcji (przekształć jako Funkcja<T, R>) jako sekwencja<R>;

# przekształca każdy element tej sekwencji w inny przy użyciu danej funkcji 'transform', zapewnienie dostępu do aktualnego indeksu
funkcji mapIndexed(przekształć jako BiFunction<int?, T, R>) jako sekwencja<R>;

# Przejmuje każdą parę sąsiadujących elementów wewnątrz sekwencji i wykonuje daną funkcję 'transform', zwracanie wyników w sekwencji
# Zwraca pustą sekwencję, jeśli obecna sekwencja ma mniej niż dwa elementy
funkcja zipWithNext(przekształć jako BiFunction<T, T, R>) jako sekwencja<R>;
```

### Pośrednie leniwe metody
Pośrednie leniwe metody to metody, które zwracają `Sekwencja` tego samego typu co bieżący, a ocena metody zostanie odroczona do czasu wywołania metody końcowej lub metody pośredniej, od tej pory nazwa "lazy". Z tego dokładnego powodu, usunięcie lub dodanie elementu może (i będzie) nie być odzwierciedlone w samej sekwencji w górę dopóki sekwencja nie zostanie w pełni oceniona. Z tego powodu każda zmiana argumentów przekazanych do funkcji może mieć niezamierzone efekty uboczne (szczególnie dla `minus` i `plus` wywołań).

Ponieważ metody te są pośrednie, możliwe jest dalsze stosowanie `sekwencji` po powołaniu się na te metody.

```zenscript
# Usuwa pierwsze elementy 'n' z nagłówka sekwencji, skutecznie usuwa je z funkcji
usuniętej (jako int) jako sekwencję<T>;

# Usuwa elementy z nagłówka sekwencji tak długo, jak dana predykacja zwraca 'true', skutecznie porzucając
funkcję dropWhile(predykat<T>) jako sekwencja<T>;

# Zachowuje w sekwencji tylko elementy, które pasują do podanego filtry funkcji
(predykat jako predykat<T>) jako sekwencja<T>;

# Zachowuje w sekwencji tylko te elementy, które pasują do podanego predykatu, zapewnienie dostępu do bieżącego indeksu
funkcji filterIndexed(predykat jako BiPredykate<int?, T>) jako sekwencja<T>;

# Usuwa z sekwencji wszystkie elementy, które pasują do podanej funkcji filtra
(predykat jako predykat<T>) jako sekwencja<T>;

# Zachowuje w sekwencji tylko pierwsze elementy 'n', pobrane z głowy zajętej funkcji
(n jako int) jako sekwencja<T>;

# Zachowuje elementy sekwencji z głowy tak długo, jak dany predykat zwraca 'true'
funkcja takeWhile(predykat jako predykat<T>) jako sekwencja<T>;

# Usuwa elementy, które są duplikatami wewnątrz bieżącej sekwencji, skutecznie zachowując pojedynczą "kopię" każdego elementu
funkcja odróżnia() jako sekwencja<T>;

# Usuwa elementy, które są duplikatami zgodnie z podanym 'selektor' wewnątrz sekwencji, skutecznie zachowując pojedynczą "kopię" każdego elementu
# K w tej instancji reprezentuje inny typ generyczny, który identyfikuje typ "klucz", który będzie używany do wykonania tej operacji
funkcji rozróżnienie By(selektor jako funkcja<T, K>) jako sekwencja<T>;

# Wykonuje daną 'akcję' na dowolnym elemencie sekwencji, bez zakończenia
funkcji onEach(akcja jako konsument<T>) jako sekwencja<T>;

# Usuwa dane elementy z sekwencji, jeśli są obecne
funkcji minus(elementy jako T[]) jako sekwencja<T>;

# Usuwa dany element z sekwencji ONCE, jeśli jest obecny, skutecznie zmniejszając ilość duplikatów tego elementu o 1
funkcja minusElement(element jako T) jako sekwencja<T>;

# Dodaje dane elementy na końcu sekwencji
funkcja plus(elementy jako T[]) jako sekwencję<T>;

# Dodaje dany element na końcu sekwencji
funkcji plusElement(element jako T) jako sekwencja<T>;

# Zwraca bieżącą sekwencję (tak naprawdę "nie do-nothing")
funkcja asSequence() jako sekwencja<T>;
```

### Metody pośrednia dla ryb
Metody pośrednia kolczyka to metody, które zwracają `Sekwencję` tego samego typu bieżącego, ale ocena metody nie może zostać odroczona do czasu wywołania metody końcowej. Ponadto metody okażące mogą powodować ocenę wszystkich wywołań sekwencji aż do momentu, w którym pojawią się w dowolnym momencie między ich wywołaniem a wywołaniem metody końcowej. Z tego powodu sugeruje się, aby jak najoszczędniej nazywać metody gładkie i pozwolić im działać na najmniejszej możliwej ilości danych.

Ponieważ metody te są pośrednie, możliwe jest dalsze używanie `sekwencji` po powołaniu się na te metody.

```zenscript
# Sortuje bieżącą sekwencję ze stabilnym algorytmem, w zależności od wyjścia danej funkcji „porównawczej”
funkcji sortedWith(komparator: ToIntBiFunction<T, T>) w sekwencji<T>;
```

## Przeciążenie operatora
`Sekwencja`może obsługiwać przeciążenie operatora w przyszłych wersjach języka. Zobacz tę dokumentację, aby zachować aktualność . Pamiętaj, że wsparcie może wymagać włączenia specjalnej flagi kompilatora: zapoznaj się z [Eksperymentalnymi flagami preprocesorami](/Mods/Boson/Preprocessor/Exp/) , aby uzyskać więcej informacji.

## Przykład
Poniżej znajduje się przykładowy skrypt, który pokazuje kilka przykładów, które mogą być wykonane z sekwencjami. To nigdzie lista nie jest kompletna, ale jest rozumiana bardziej jako odniesienie i jako dowód koncepcji.

```zenscript
# Wyświetla nazwę wyświetlaną danych trzech elementów
<sequence:IItemStack>(<minecraft:iron_ingot>, <minecraft:gold_ingot>, <minecraft:bedrock> * 3)
    . ilter(function (item) { return item.displayName has "Iron"; })
    .map(function (item) { return item.displayName; })
    . orEach(funkcja (displayName) { print(displayName); });

# Pokazuje sposób przechowywania sekwencji i wywoływania później
val x = <sequence:IItemStack>(<minecraft:iron_ingot>, <minecraft:gold_ingot>, <minecraft:bedrock> * 3)
            . ilter(function (item) { return element. isplayName ma "Żelaza"; })
            .map(function (item) { element zwracany. isplayName; });
x.map(function (displayName) { return displayName + displayName; })
    . orEach(funkcja (wiadomość) { print(wiadomość); });


# Pokazuje, jak konwersja może być powtarzana więcej niż raz
<sequence:IItemStack>(<minecraft:redstone> <minecraft:bedrock>)
    . ap(function (item) { return item * 10; })
    . ap(function (item) { return item.commandString; })
    . ilter(function (commandString) { return commandString has " * "; })
    . orEach(funkcja (b) { print(b); });

# Inny losowy przykład
<sequence:IItemStack>(<minecraft:redstone>, <minecraft:bedrock>)
    . apIndexed(function (index, item) { return item * (index + 1); })
    . lus(<minecraft:gold_ingot> * 5)
    . ilterNot(function (item) { return item.displayName has "Bed"; })
    .map(function (item) { return item.commandString; })
    . orEachIndexed(function (s, index) { print("" + index + ": " + s); });

# Pokazuje jak przeciążone funkcje takie jak licznik działają
print(<sequence:IItemStack>(<minecraft:redstone>). ount()); # Wyjścia 1
print(<sequence:IItemStack>(<minecraft:gold_ingot>, <minecraft:iron_ingot>).count(function (item) { returitem. isplayName ma "Żelaza"; })); # Wyjście 1

# Interoperacyjność między ZenScriptX a Bosonem
<sequence:IItemStack>(<minecraft:redstone>)
    . ap(function (it) { zwraca. efiniation; })
    .map(function (it) { return it.id; })
    . ap(function (it) { return it as NameSpacedString; })
    . nEach(function (it) { print(it.asString()); })
    .map(function (it) { return it.path; })
    . orEach(function (it) { print(it); });

# Element Przy chwytaniu elementów
walowy cel = <sequence:IItemStack>(<minecraft:redstone>).elementAt(0);
print(target.definition.id);
```
