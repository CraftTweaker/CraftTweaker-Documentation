# Oświadczenia warunkowe

Możesz włączyć kod, który będzie wykonywany tylko wtedy, gdy spełnione są określone kryteria (lub jeśli nie są spełnione). To właśnie potrzebujesz instrukcji warunkowych.

## Jeśli

Oświadczenie z inicjatywy własnej jest pierwszą częścią oświadczenia warunkowego. Oświadcza, że warunek ten musi być spełniony w odniesieniu do następującego kodu. **Bądź ostrożny, potrzebujesz DWÓCH EQUALS podczas porównywania wartości! (Dzieje się tak dlatego, że jeden równy jest do deklarowania wartości!)**

```zenscript
test val = 0;

if (test = 0) { //true
    print("Test is zero!");
}
```

## Inne

Inne oświadczenie może zostać dodane na koniec oświadczenia warunkowego w celu stwierdzenia, co zostanie wykonane, gdy stan na lodzie jest równy fałszywym.

```zenscript
test var = 0;

jeśli (test == 0) { //true
    //zostanie wykonany, gdy test jest równy 0
    wydruku ("Test to zero! );
} else {
    //zostanie wykonane, gdy test nie jest równy 0
    wydruku ("Test NIE jest zero! );
}

test = 1;
jeśli (test == 0) { //false
    //zostanie wykonany, gdy test jest równy 0
    print("Teraz, test wynosi zero! );
} else {
    //zostanie wykonane, gdy test nie jest równy 0
    print("Teraz, test NIE jest zerem! );
}

```

## Sprawdzenia

Obsługiwane obliczenia to `+`,`-`,`*`,`/`,`modd`,`concatenation(~)`

Obsługiwane Operacje to `Logical OR(||)`, `Logical AND(&&)`, `Bitwise OR(|)`, `Bitwise AND(&)`i `Bitwise XOR(^)`

```zenscript
//Możesz sprawdzić:


//Wartości liczbowe
val a = 0 jak int;
jeśli (a == 0) { print("NumVal"); }

//Obliczone wartości liczbowe
val b = 1;
val c = 5;
//Wszystkie oceny do prawdy
jeśli (b+c == 6) { print("Num1! ); }
jeśli (b*c == 5) { print("Num2!"); }
jeśli (b/c == 0. ) { print("Num3! ); }

//OR, XOR ORAZ
val d = "Cześć";
val e = "World";
val f = d~e; //f = "HelloWorld", Tilde po prostu łączy jedną rzecz z inną

//||(OR) tak długo, jak jedno z kryteriów zostanie spełnione, ocenia się je na wartość true
, jeśli (d == "Witaj" || e == "Witaj") { print("OR1! ); } //true
if (d == "Witaj" || e == "Świat") { print("OR2! ); } //true

//^(XOR) oznacza, TYLKO JEDEN może być spełniony, w przeciwnym razie oceni fałszywe
jeśli (d == "Witaj" ^ e == "Witaj") { print("XOR1! ); } //true
if (d == "Hello" ^ e == "World") { print("XOR2! ); } //false

//&&(AND) oznacza, że oba kryteria muszą zostać spełnione, w przeciwnym razie oceni fałszywe
jeśli (d == "Witaj" && e == "Witaj") { print("AND1! ); } //false
if (d == "Witaj" && e == "Świat") { print("AND2! ); } //prawda
```

## ? Operator

Z pewnością zawsze wpisywanie struktury jeśli/w przeciwnym razie może być irytujące. Szczególnie jeśli chcesz wykonać jedno lub jedno lub jedno ze stanów. Dlatego operator `?` został zaimplementowany. Jest ona zgodna z tą samą logiką, co oświadczenie jeśli/w przeciwnym razie, jest ona o wiele mniej wymagana. Syntax: `boolean ? jeśli : w przeciwnym razie`

```zenscript
przełącznik valu = fałsz;

//przełącznik stanu
wydruku ("Przełącznik jest " ~ przełącznik);

//jeśli przełącznik jest prawdziwy, vInt = 1, w przeciwnym razie vInt = 2
val vInt = przełącznik? 1 : 2;
print(vInt);

//Wydrukuje "Witaj", jeśli przełącznik jest starem, w przeciwnym razie wydruk "o"
(przełączyć? "Cześć" : "Co");

//Wydrukuje "Co" jeśli przełącznik jest prawdziwy, w przeciwnym razie wydrukuje "Witaj"
, przełącz się? print("Bye") : print("Hello");

```

## Operatorzy

Możesz użyć tych operatorów. Wszystkie przykłady podane do oceny są prawdziwe.

| Nazwisko          | token        | Wyjaśnienie                                                                                                                                                                          | Example           |
| ----------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------- |
| Nie               | `!`          | Odwraca wartość logiczną                                                                                                                                                             | !false            |
| Nierówność        | `!=`         | Sprawdza, czy wartość przed i po niej nie jest równa                                                                                                                                 | 1 != 2            |
| Równy             | `==`         | Sprawdza, czy wartość przed i po jest równa                                                                                                                                          | 1 == 1            |
| Większy niż       | `>`       | Sprawdza, czy wartość przed jest większa niż po                                                                                                                                      | 1 > 2             |
| Większa lub równa | `>=`      | Sprawdza, czy wartość przed jest większa lub równa po                                                                                                                                | 1 >= 1            |
| Mniej niż         | `<`       | Sprawdza, czy wartość przed jest mniejsza niż po                                                                                                                                     | 1 < 2             |
| Młody lub równy   | `<=`      | Sprawdza, czy wartość przed jest mniejsza lub równa po                                                                                                                               | 1 <= 1            |
| Logiczne I        | `&&` | Sprawdza, czy zarówno przed, jak i po wartości są prawdziwe, fałszywe, jeśli jeden lub oba są fałszywe                                                                               | prawda && prawda  |
| Logiczne LUB      | `\|\|`     | Sprawdza, czy wartość przed lub po jest prawdziwa, fałsz, jeśli żaden nie jest prawdziwy                                                                                             | false \|\| true |
| Bitwise XOR       | `^`          | Sprawdza, czy dokładnie jedna z wartości przed lub po nich jest prawdziwa, fałsz, jeśli oba lub żadne nie są prawdziwe                                                               | prawda ^ fałsz    |
| Bitwise I         | `&`      | Wykonuje operację bitwise I na wartościach przednich i po nich. Zobacz [to](https://stackoverflow.com/questions/4014535/differences-in-boolean-operators-vs-and-vs) po więcej        | prawda && prawda  |
| Bitwise LUB       | `\|`        | Wykonuje operację w trybie bitowym LUB na wartościach przed i po nich. Zobacz [to](https://stackoverflow.com/questions/4014535/differences-in-boolean-operators-vs-and-vs) po więcej | false \|\| true |

### Różnica między `|` i `||` (i `&` i `&&`)

Główna różnica między pojedynczą a podwójną różnicą z pominięciem semantyki, polega na tym, że podwójnie wykonuje kontrolę po każdym z warunków i przedwcześnie kończy się - jest to tzw. zwarcie. Jednakże jeden z nich przechodzi przez cały łańcuch warunków, nawet jeśli pierwszy z nich uchyliłby cały warunek. To nie tylko oszczędza zasoby, ale także pozwala na łatwiejsze skrypty, takie jak **kontrola zerowa** i warunki.

```zenscript
var a = 5;
var item = ... jako IItemStack;

/ / chociaż a to 5, nadal przechodzi przez wszystkie wymienione warunki
, jeśli (== 5 | a == 3 | a == 10 | a == -1) {
...
}

// Even though a is 5 and the condition is impossible (a variable can't be both 3 and 5), it still goes through all of the conditions listed
if (a == 3 & a < 2 & a > 8 & a == 5) {
    ... 
}

// Sprawdza, czy element nie jest pusty przed uzyskaniem dostępu do zmiennych z elementu
jeśli (!isNull(item) && item.amount == 1) {
...
}

// Sprawdza, czy element nie jest pusty podczas uzyskiwania dostępu do zmiennych z potencjalnie zerowego elementu, wyrzucenie błędu, jeśli element jest pusty
jeśli (! sNull(element) & element. mount == 1) {
...
}
```

## Wewn/ma operatora

`w` i `ma` operatora sprawdź, czy coś jest w czymś w porządku.  
Najpierw potrzebujesz listy, którą chcesz zaznaczyć, następnie `w`/`ma` a następnie wartość, którą chcesz sprawdzić. `w` i `ma` to samo słowo kluczowe dla ZS, ale w większości przypadków ludzie używają `ma` do sprawdzania, czy kolekcja zawiera przedmiot i pętle "for", ponieważ reprezentuje to angielską gramatykę.

### w/ma loadedMods

Możesz sprawdzić, czy moda jest załadowana przez sprawdzenie czy znajduje się na liście loadedMods

```zenscript
//While zawiera sprawdzania mogą użyć w
jeśli (loadedMods w "mcp") {
    print("Minecraft Coder Pack załadowane");
}

//Większość ludzi woli używać
jeśli (loadedMods ma "mcp") {
    print("Minecraft Coder Pack załadowane");
}
```

### w/ma ISkładnik

Możesz również sprawdzić, czy element pasuje do definicji poprzez porównanie dwóch składników IIngredients.  
Z tym musisz być trochę ostrożny, aby nie mylić tych dwóch wpisów:  
To prawda tylko wtedy, gdy IIngredient PO `w` może zostać znaleziony całkowicie w jednym PRZED `w`.  
W większości przypadków użyjesz `słowa kluczowego` , ponieważ jego intencja jest jaśniejsza i robi to dokładnie samo.

```zenscript
// Sprawdza, czy żelazna sztabka jest w oreDict "ingotIron"
jeśli (<ore:ingotIron> w <minecraft:iron_ingot>) {
    print("Żelazne sztabki są w prawym oreDict");
}

// Preferowane taka sama funkcja jak poprzednio
, jeśli (<ore:ingotIron> ma <minecraft:iron_ingot>) { 
    print("sztaby żelaza są w prawym rekinecie");
}
```

To prawda tylko wtedy, gdy WSZYSTKIE pasujące elementy z ISkładnika PO `ma` można również znaleźć w ISkładniku WIĘCEJ `ma`: Powiedz nam, że mamy ISkładnik zawierający wszystkie pyły (e. . czerwony kamień i pył świecący):

```zenscript
czerwony wapień = <minecraft:redstone>;
val glowstone = <minecraft:glowstone>;
val allDusts = <ore:dustAll>;
allDusts. dd(czerwony kamień, blaskowy);

//Prawda jako czerwony kamień jest częścią wszystkiego
jeśli (allDusts has redstone) {

}

//False as allDusts składa się z czerwonego kamienia i świecenia, i czerwony kamień składa się wyłącznie z czerwonego kamienia.
jeśli (czerwony kamień ma allDusts) {

}
```