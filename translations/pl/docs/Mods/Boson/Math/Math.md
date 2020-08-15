# `Matematyka`

`Matematyka` jest klasą kontenera dla zestawu podstawowych funkcji matematycznych. Zobacz stronę [Koncepcja](/Mods/Boson/Math/Concept/) , aby uzyskać więcej informacji.

## Szczegóły klasy
Jako część projektu ZenScriptX, w pełni kwalifikowana nazwa klasy to `zenscriptx.math.Math`.

## Tworzenie nowej instancji
Ponieważ ta klasa jest tylko posiadaczem funkcji matematycznych, nie można utworzyć nowej instancji. Należy raczej powoływać się na wszystkie metody samej klasy.

## Metody
To save up on space, the methods will be presented in a single snippet, grouped according to the kind of operation they perform with a comment above outlining what the method is supposed to do and any other conditions that should be kept into consideration when using the method. Ponadto wiele metod może być pogrupowanych razem, jeśli są bliskimi przeciążeniami siebie nawzajem (tj. . robią to samo, ale mają inne argumenty lub typy zwrotu).

```zenscript
# ta metoda robi coś
metody funkcji (argument jako podwójna, argument2 jako bool) jako podwójna;
metoda funkcji (argument jako zmienna, argument2 jako bool) jako float;

# ta metoda robi coś innego i może zwrócić pustą
metodę funkcji2() jako bool?;
```

### Stałe matematyczne
Metody te zapewniają dostęp do istotnych stałych matematycznych, które mogą być stosowane we wszystkich innych operacjach, w razie potrzeby. Ich precyzja jest jak największą precyzją zgodnie z zastosowaną reprezentacją wewnątrz komputerów (i. . najbardziej dokładna liczba jest reprezentatywna z `podwójnym`).

```zenscript
# Otrzymuje wartość PI, która jest stosunkiem obwodu okręgu do jego średnicy, około 3. 4159
funkcja pi() jako podwójna;

# Uzyskuje wartość E, to jest podstawa logarytmu naturalnego, około 2. 1828
funkcja e() jako podwójna;
```

### Funkcje trygonometryczne
Funkcje trygonometryczne są funkcjami, które działają z kątami i odnoszą się do stosunku dwóch bocznych szyb trójkąta o kącie prostym, wraz ze wszystkimi ich odwrotnymi funkcjami.

```zenscript
# Oblicza sinus przesunętego kąta, w którym MUSI znajdować się w RADIANS
funkcja sin(x jako podwójna) jako dwukrotna;
funkcja sin(x jako pływak) jako pływak;

# Oblicza sinus przesunętego kąta, w którym MUSI znajdować się w funkcji BARDZIEJ
(x jako podwójne) jako dwukrotnie;
funkcja zwinięta (x jako pływak) jako pływak;

# Oblicza cosinus przeszedł kąt, w którym MUSI być w RADIANS
cos(x jako podwójny) jako dwukrotnie;
funkcje cos(x jako pływak) jako pływak;

# Oblicza cosinus przeszedł kąt, w którym MUSI znajdować się w METEES
funkcje cosd(x jako podwójne) jako dwukrotne;
funkcja cosd(x jako pływak) jako pływak;

# Oblicza tangens przesunętego kąta, w którym MUSI znajdować się w RADIANS
funkcja tan(x jako podwójne) jako dwukrotne;
funkcja tan(x jako pływak) jako pływak;

# Oblicza tangens przesunętego kąta, w którym MUSI znajdować się w METEES
funkcja tand(x jako podwójne) jako dwukrotne;
funkcja tand(x jako pływak) jako pływak;

# Oblicza siemię łuku podanej wartości, zwracając wartość pomiędzy -PI/2 i PI/2 radianami
funkcja asin(x jako podwójne) jako podwójna;
funkcja asin(x jako pływak) jako pływak;

# Oblicza sinus podanej wartości, zwracając wartość pomiędzy -90 a 90 stopni
funkcji asind(x jako podwójną) w postaci podwójnej;
funkcja asind(x jako pływak) jako pływak;

# Oblicza koszynę łuku podanej wartości, zwracając wartość pomiędzy 0 i PI radianów
funkcje acos(x jako podwójne) jako dwukrotne;
funkcja acos(x jako pływak) jako pływak;

# Oblicza kozynę łuku podanej wartości, zwracając wartość pomiędzy 0 a 180 stopni
funkcję acosd(x jako podwójną) jako podwójną;
funkcja asind(x jako pływak) jako pływak;

# Oblicza tangens łuku podanej wartości, zwracając wartość pomiędzy -PI/2 i PI/2 radianami
funkcja atan(x jako podwójna) jako podwójna;
funkcja atan(x jako pływak) jako pływak;

# Oblicza styczność łuku podanej wartości, zwracając wartość między -90 a 90 stopni
funkcja atand(x jako podwójna) jako podwójna;
funkcja atand(x jako pływak) jako pływak;

# Oblicza 'th' współrzędnych polarnych '(r, th)', które odpowiadają współrzędnym prostokątnym '(x, y)' poprzez obliczenie stycznego łuku wartości 'y/x', zwracanie wartości pomiędzy -pi i pi radianami
funkcji atan2(y jako podwójne, x jako podwójne) jako dwukrotnie;
funkcji atan2(y jako pływak, x jako pływak) jako pływak;
```

### Funkcje hiperboliczne
Funkcje hiperboliczne są analogami funkcji trygonometrycznych, definiowanymi raczej dla hiperboli, niż na okręgu.

```zenscript
# Oblicza syn hiperboliczny danej wartości
funkcji sinh(x jako podwójny);
funkcja sinh(x jako pływak) jako pływak;

# Oblicza kozynę hiperboliczną podanej wartości
krzepnięcia funkcji (x jako dwukrotnie) jako dwukrotnie;
funkcja w postaci zmiennoprzecinkowej (x jako zmiennoprzecinkowa);

# Oblicza styczność hiperboliczną podanej wartości
funkcji tanh(x jako podwójną) jako podwójną;
funkcja tanh(x jako pływak) jako pływak;

# Oblicza odwrotny sinus danej wartości
funkcji asinh(x jako podwójna);
funkcji asinh(x jako pływak) jako pływaka;

# Oblicz odwrotny cosinus hiperboliczny podanej wartości, zwracając ALWAYS wynik dodatni
funkcji acosh(x jako podwójny) jako dwukrotnie;
funkcja akosh(x jako pływak) jako pływak;

# Oblicza odwrotną styczność hiperboliczną podanej wartości
funkcji atanh(x jako podwójne) jako dwukrotnie;
funkcja atanh(x jako pływak) jako pływak;
```

### Funkcje trójkąta prawostronnego
Są to niektóre dodatkowe funkcje, które można obliczyć na trójkącie o kącie prostym, oprócz funkcji trygonometrycznych ale które nie działają na kąty trójkąta.

```zenscript
# Oblicza długość hipotezy trójkąta z teorerem Pythagoreana, upewnienie się, że podczas obliczeń
nie nastąpi przepełnienie lub zanik funkcji niedociśnienia (x jako dwukrotne, y jako dwukrotnie) dwukrotnie;
niedociśnienie funkcji (x jako pływak, y jako pływak) jako pływak;
```

### Moce i Korzenie
Funkcje te pozwalają na obliczenie mocy i pierwiastków w szybszy i skuteczniejszy sposób niż standardowa metoda mnożenia lub późniejszego odejmowania.

```zenscript
# Oblicza dodatni pierwiastek kwadratowy danej wartości
funkcję sqrt(x jako podwójną) jako podwójną;
funkcja sqrt(x jako zmienna zmienna);

# Oblicza ujemny pierwiastek kwadratowy danej wartości
funkcję nsqrt(x jako podwójną) jako dwukrotnie;
funkcja nsqrt(x jako zmienna zmienna);

# Kwadraty danej wartości
funkcja sq(x jako podwójna);
funkcja sq(x jako pływak) jako pływak;

# Podnosi podaną wartość bazową do funkcji exp
powtórzeń (podstawa jako podwójna, exp jako podwójna);
funkcja sproszkowana (podstawa w postaci podwójnej, exp w int) w postaci podwójnej;
funkcja sproszkowana (podstawa w postaci zmiennoprzecinkowej, exp w postaci zmiennoprzecinkowej);
funkcja sproszkowana (podstawa jako pływak, exp w int) jako pływak;
```

### Exponential Functions
Funkcja wykładnicza jest funkcją, która przyjmuje formę `y = a * b^x`.

```zenscript
# Oblicza liczbę Eulera (e) zwiększoną do mocy funkcji x
exp(x jako podwójne) jako podwójna;
funkcja rozwija się (x jako pływak) jako pływak;

# Oblicza funkcję 'exp(x) - 1', z lepszą dokładnością dla liczb, które są bliższe zeru
funkcji expm1(x jako podwójne) jako dwukrotne;
funkcja expm1(x jako pływak) jako pływak;
```

### Funkcje logarytmiczne
Funkcja logarytmiczna, powszechnie znana jako logarytm, jest odwrotną funkcją funkcji wykładniczej. W inny sposób niż inne funkcje, logarytm jest definiowany zgodnie z bazą, która reprezentuje liczbę, którą należy podnieść do wynikającej z tego siły, aby otrzymać argument samego logarytmu.

```zenscript
# Oblicza logarytm x dla danej funkcji bazowej
logn(x jako podwójne, bazowe jako podwójne) jako dwukrotne;
funkcja logn(x jako zmienna, baza jako zmienna zmienna);

# Oblicza logarytm naturalny podanej wartości, i. . funkcja logarytmu x do podstawy e (numer Eulera)
ln(x jako podwójna) jako dwukrotna;
funkcja ln(x jako zmienna zmienna);

# Oblicza wspólny logarytm podanej wartości, tj. logarytm x do funkcji bazowej 10
log10(x jako podwójne) jako dwukrotnie;
funkcja log10(x jako float) jako zmienna;

# Oblicza logarytm binarny podanej wartości, tj. logarytm x do funkcji bazowej 2
log2(x jako podwojony) jako podwojony;
funkcji log2(x jako pływak) jako pływak;

# Oblicza 'ln(1 + x)', z lepszą dokładnością dla liczb, które są bliżej zera
funkcji ln1p(x jako podwójne) jako podwójne;
funkcja ln1p(x jako pływak) jako pływak;
```

### Funkcje zaokrąglania
Funkcja zaokrąglająca jest funkcją, która odwzorowuje liczbę rzeczywistą na określoną liczbę całkowitą zgodnie z zestawem zasad, w zależności od funkcji.

```zenscript
# Zaokrągla podaną wartość w kierunku dodatniej nieskończoności, zwracanie najmniejszej liczby rzeczywistej, która jest większa lub równa x i jest liczbą całkowitą matematyczną
sufitem funkcji (x jako dwukrotnie) w postaci dwukrotnej;
funuj pułap (x jako pływak) jako pływak;

# zaokrągla podaną wartość w kierunku nieskończoności dodatniej, zwracanie najmniejszej liczby całkowitej, która jest większa lub równa x
ceili(x jako podwójne) jak int;
funkcja ceili(x jako pływak) jako int;

# Zaokrągla podaną wartość w kierunku dodatniego nieskończoności, zwracając najmniejszą liczbę całkowitą, która jest większa lub równa x, rozszerzony na największą reprezentatywną liczbę całkowitą
jako długość ceilla funkcji (x jako dwukrotność);
funkcja ceill(x jako pływak) tak długo;

# Zaokrągla podaną wartość w kierunku ujemnej nieskończoności, zwracanie największej liczby rzeczywistej, która jest mniejsza lub równa x i jest liczbą całkowitą matematyczną
jako podwójna funkcja (x jako podwójna);
funkcja podłogi (x jako pływak) jako pływak;

# Zaokrągla podaną wartość w kierunku ujemnej nieskończoności, zwracanie największej liczby całkowitej, która jest mniejsza lub równa poziomi funkcji x
(x jako dwukrotne) w int;
funkcja podłogi (x jako pływak) jako int;

# Zaokrągla podaną wartość w kierunku ujemnego nieskończoności, zwracając największą liczbę całkowitą, która jest mniejsza lub równa x, powiększone do największej reprezentatywnej liczby całkowitej
jako długość podłogi (x jako dwukrotnie);
funkcja podłogi (x jako pływak) tak długo;

# Zaokrągla podaną wartość w kierunku zera, skutecznie obcinając część ułamkową i zwracając liczbę całkowitą matematyczną
obcięcie funkcji (x jako podwójne) jako dwukrotne;
funkcja obcięta (x jako pływak) jako pływak;

# Zaokrągla podaną wartość względem najbliższej liczby matematycznej, z podwójnym ułamkiem funkcji
jako funkcją zaokrągloną (x jako podwójną);
funkcja zaokrąglona (x jako pływak) jako pływak;

# Zaokrągla podaną wartość w kierunku najbliższej liczby całkowitej, przy czym uprzedzenie w kierunku liczby parzystej
funkcja roundi(x jako podwójne) jest w intach;
funkcji roundi(x jako float) jako int;

# Zaokrągla podaną wartość w kierunku najbliższej liczby całkowitej, z tendencją w kierunku liczby parzystej, i rozszerzenie wyniku na największą reprezentatywną liczbę całkowitą
zaokrąglenie funkcji (x jako dwukrotne) jako długie;
funkcja roundl(x jako pływak) tak długo;
```

### Funkcje oparte na znakach
Funkcje te działają głównie lub wyłącznie na oznaki argumentu.

```zenscript
# Zwraca wartość bezwzględną podanej wartości
funkcji abs(x jako podwójne) jako dwukrotnie;
funkcja abs(x as float) jako pływak;
funkcja abs(x as int) jak int;
funkcja abs(x as long) jako długa;

# Zwraca znak podanej wartości jako liczba: -1 dla liczb ujemnych, 0 dla zera, 1 dla liczb dodatnich
znak funkcji (x jako podwójny) jako podwójny; znak funkcji
(x jako pływacz) jako pływający; znak funkcji
(x jako int) jako int; znak funkcji
(x jako długie) jako długi;
```

### Funkcje porównawcze
Funkcje te porównują różne argumenty i zwracają tylko jeden z nich zgodnie z określonym zestawem przepisów.

```zenscript
# Zwraca mniejszą z dwóch podanych wartości
funkcję min(jako podwójną, b jako podwójną) jako podwójną;
funkcja min(jako pływak, b jako pływak) jako pływak;
funkcja min(jak int, b jako int) jak int;
funkcja min(tak długo, b jako długo) jako długa;

# Zwraca większą z dwóch podanych wartości
funkcji max(jako podwójne, b jako podwójne) jako dwukrotnie;
funkcja maksimum (jako zmiennoprzecinkowe, b jako zmiennoprzecinkowe) jako zmiennoprzecinkowa;
funkcja maksimum (jak int, b jako int) jako int;
funkcja max(tak długo, b najdłużej)

# Clampy o podanej wartości x pomiędzy dwiema granicami, skutecznie zwracając min, jeśli x jest mniejszy niż min, maks, jeśli x jest większy niż maks, x w przeciwnym razie
zc funkcji (x jako podwójne, min jako podwójne, max jako podwójne) jako dwukrotnie;
lampa funkcyjna (x jako pływak, min. jako pływak, maks. jako pływak);
lampa funkcyjna (x jako int, min. jako int, max jako int) zgodnie z intami;
lampa funkcyjna (x tak długo, min. długo, maks. długość) tak długo;
```

### Pozostałe funkcje
Te funkcje obliczają pozostałą część pomiędzy dwoma argumentami zgodnie z zestawem reguł.

```zenscript
# Oblicza pozostałą część podziału między wartością i div zgodnie ze standardem IEEE 754: 'r = wartość - (zaokrąglona / div) * div)'
funkcja rem(wartość jako podwójna, podziel się dwukrotnie),
funkcja rem(wartość jako zmienna, div jako pływak) jako pływak;
```

