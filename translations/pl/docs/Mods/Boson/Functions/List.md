# Dostępne interfejsy

Wszystkie interfejsy są częścią `zenscriptx. un` paczka, co oznacza, że w pełni kwalifikowana nazwa klasy `X` to `zenscriptx. un.X`, co jest przydatne do importu.

W poniższym wykazie funkcje są podzielone na kategorie, które reprezentują ich ogólne zastosowanie. Także we wszystkich definicjach funkcji litery `T`, `U`i `R` definiują typy ogólne, i. . typy, które mogą być określone przez programistę .

## Konsumenci
BiConsumer akceptuje dwa elementy, które mogą być różnego rodzaju i je konsumuje, co oznacza, że używa ich do wewnętrznego przetwarzania i nic nie zwraca

| Nazwa klasy         | Podpis funkcji                                                                     | Uwagi |
| ------------------- | ---------------------------------------------------------------------------------- | ----- |
| `Bikonsument`       | `funkcja akceptowana (t jako T, u jako U) w próżniu;`                              | \-   |
| `ObjDoubleConsumer` | `funkcja akceptowana (t jako T, wartość jako podwójna) w stanie nieprzetworzonym;` | \-   |
| `ObjIntConsumer`    | `funkcja akceptowana (t jako T, wartość jako int) jako unieważniona;`              | \-   |
| `ObjLongKonsument`  | `funkcja akceptowana (t jako T, wartość jako długa) jako nieważna;`                | \-   |

## BiFunkcje
BiFunkcja stosuje funkcję do dwóch elementów, które mogą być różnego rodzaju, zwracanie pojedynczego elementu, który może być również innego typu. Może być obrazowany matematycznie jako `r = f(s, t)`, gdzie `f` jest funkcją dwufunkcyjną.

| Nazwa klasy          | Podpis funkcji                                              | Uwagi |
| -------------------- | ----------------------------------------------------------- | ----- |
| `BiFunkcja`          | `zastosowana funkcja (t jako T, u jako U) jako R;`          | \-   |
| `Podwójna BiFunkcja` | `zastosowana funkcja (t jako T, u jako U) jako dwukrotnie;` | \-   |
| `ToIntBiFunction`    | `zastosowana funkcja (t jako T, u jako U), jak int;`        | \-   |
| `ToLongBiFunction`   | `zastosowana funkcja (t jako T, u jako U);`                 | \-   |

## Operatorzy binarni
Operator binarny stosuje funkcję do dwóch elementów **tego samego typu**, zwracanie innego elementu, który ma **ten sam typ** co dane wejściowe. Może być to zdjęcie matematyczne jako `r = s op t`, gdzie `op` jest operatorem binarnym.

| Nazwa klasy               | Podpis funkcji                                                              | Uwagi                                   |
| ------------------------- | --------------------------------------------------------------------------- | --------------------------------------- |
| `BinaryOperator`          | `Stosuje się funkcję (t as T, u as T) jako T;`                              | `BinaryOperator` rozszerza `BiFunction` |
| `Podwójny BinaryOperator` | `funkcja 'AsDouble(lewy jako podwójny, prawy jako podwójny) jako podwójny;` | \-                                     |
| `IntBinaryOperator`       | `funkcjaAsInt(lewe jako int, w prawo jako int) zgodnie z intami;`           | \-                                     |
| `LongBinaryOperator`      | `zastosowana funkcjaAsLong(długość z lewej strony, z prawej) długo;`        | \-                                     |

## Bipredykaty
BiPredykat bada dwa dane wejściowe, które mogą być różnego rodzaju, i zwraca wartość logiczną, reprezentującą, czy przeszedł test czy nie.

| Nazwa klasy   | Podpis funkcji                             | Uwagi |
| ------------- | ------------------------------------------ | ----- |
| `BiPredicate` | `test funkcji (t as T, u as U) jako bool;` | \-   |

## Konsumenci
Konsument akceptuje jeden element i go konsumuje, co oznacza, że używa go do wewnętrznego przetwarzania i nie zwraca niczego.

| Nazwa klasy      | Podpis funkcji                                                   | Uwagi |
| ---------------- | ---------------------------------------------------------------- | ----- |
| `Konsument`      | `funkcja akceptowana (t jako T) jako nieważna;`                  | \-   |
| `DoubleConsumer` | `funkcja akceptowana (wartość jako podwójna) jako unieważniona;` | \-   |
| `IntKonsument`   | `funkcja akceptowana (wartość jako int) jako nieważna;`          | \-   |
| `LongConsumer`   | `funkcja akceptowana (wartość najdłuższa) jako nieważna;`        | \-   |

## Funkcje
Funkcja stosuje funkcję do pojedynczego elementu, zwracając inny element, który może być innym typem niż wejść. Może być obrazowany matematycznie jako `r = f(t)`, gdzie `f` jest funkcją.

| Nazwa klasy               | Podpis funkcji                                             | Uwagi |
| ------------------------- | ---------------------------------------------------------- | ----- |
| `Funkcja`                 | `Stosuje się funkcję (t as T) jako R;`                     | \-   |
| `Podwójna Funkcja`        | `zastosowana funkcja (wartość jako podwójna) jako R;`      | \-   |
| `DoubleToIntFunction`     | `funkcjaAsInt(wartość jako podwójna) jako int;`            | \-   |
| `PodwójnaDługie Funkcje`  | `funkcjaAsLong(wartość jako podwojona) jako długa;`        | \-   |
| `IntFunction`             | `zastosowana funkcja (wartość według int) jako R;`         | \-   |
| `IntToDoubleFunction`     | `funkcja »AsDouble(wartość jako int) w postaci podwójnej;` | \-   |
| `IntToLongFunction`       | `funkcjaAsLong(wartość int) jako długa;`                   | \-   |
| `Długie Funkcje`          | `zastosowana funkcja (długość wartości) jako R;`           | \-   |
| `Długie Podwójne Funkcje` | `funkcjaAsDouble(wartość jako długa) jako dwukrotna;`      | \-   |
| `Długość do Funkcji`      | `funkcjaAsInt(wartość jako długa) jak int;`                | \-   |
| `Podwójna Funkcja`        | `zastosowana funkcja (wartość T) jako dwukrotna;`          | \-   |
| `ToIntFunction`           | `zastosowana funkcja (wartość T) jako int;`                | \-   |
| `ToLongFunction`          | `zastosowana funkcja (wartość jako T) jako długa;`         | \-   |

## Przewidywane
Przewidywane badanie danych wejściowych i zwrócone wartości logiczne, które pokazują, czy przeszły badanie, czy nie.

| Nazwa klasy              | Podpis funkcji                                 | Uwagi |
| ------------------------ | ---------------------------------------------- | ----- |
| `Predicate`              | `test funkcji (t as T) jako bool;`             | \-   |
| `Podwójne Przewidywanie` | `test funkcji (wartość podwójna) jako bool;`   | \-   |
| `IntPredicate`           | `test funkcji (wartość int) jako bool;`        | \-   |
| `LongPredicate`          | `test funkcji (wartość najdłuższa) jako bool;` | \-   |

## Dostawcy
Dostawca wyśle instancję danego typu, niezależnie od tego, czy została utworzona na locie czy cached.

| Nazwa klasy         | Podpis funkcji                          | Uwagi |
| ------------------- | --------------------------------------- | ----- |
| `Dostawca`          | `funkcja get() jako T;`                 | \-   |
| `Dostawca logiczny` | `funkcja getAsBoolean() jako bool;`     | \-   |
| `Podwójny Dostawca` | `funkcja getAsDouble() jako dwukrotna;` | \-   |
| `IntSupplier`       | `funkcja getAsInt() w int;`             | \-   |
| `Długi dostawca`    | `funkcja getAsLong() jako długa;`       | \-   |

## Operatorzy bezpodstawni
Operator bezpodstawny stosuje funkcję do elementu danego typu, zwracając inny element, który musi być **tego samego typu** co dane wejściowe. Może być obrazowany matematycznie jako `r = op t`, gdzie `op` jest operatorem bezpodstawnym.

| Nazwa klasy           | Podpis funkcji                                               | Uwagi                               |
| --------------------- | ------------------------------------------------------------ | ----------------------------------- |
| `UnaryOperator`       | `zastosowana funkcja (t as T) jako T;`                       | `UnaryOperator` rozszerza `Funkcję` |
| `DoubleUnaryOperator` | `funkcja zastosowana jako podwójna (operand jako podwójna);` | \-                                 |
| `IntUnaryOperator`    | `funkcjaAsInt(operand w int) w intach;`                      | \-                                 |
| `LongUnaryOperator`   | `zastosowana funkcjaAsLong(operand długo) tak długo;`        | \-                                 |
