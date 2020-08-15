# Oświadczenia warunkowe

Możesz włączyć kod, który będzie wykonywany tylko wtedy, gdy spełnione są określone kryteria (lub jeśli nie są spełnione). To właśnie potrzebujesz instrukcji warunkowych.

## Jeśli

Oświadczenie z inicjatywy własnej jest pierwszą częścią oświadczenia warunkowego. Oświadcza, że warunek ten musi być spełniony w odniesieniu do następującego kodu. Bądź ostrożny, potrzebujesz DWÓJ EQUALS podczas porównywania wartości (ponieważ jedno równe jest dla deklarowania wartości!)

```zenscript
test owalny = 0;

if(test == 0){ //true
    print("Test to zero!");
}
```

## Inne

Inne oświadczenie może zostać dodane na koniec oświadczenia warunkowego w celu stwierdzenia, co zostanie wykonane, gdy stan na lodzie jest równy fałszywym.

```zenscript
test var = 0;

if(test == 0){//true
    //zostanie wykonany, gdy test jest równy 0
    wydruku ("Test to zero! );
} else {
    //zostanie wykonane, gdy test nie jest równy 0
    wydruku ("Test NIE jest zero! );
}

test = 1
if(test = = 0){//false
    //zostanie wykonany, gdy test jest równy 0
    print("Teraz, test wynosi zero! );
} else {
    //zostanie wykonane, gdy test nie jest równy 0
    print("Teraz, test NIE jest zerem! );
}

```

## Sprawdzenia

Obsługiwane obliczenia to `+`,`-`,`*`,`/`,`modd`,`concatenation(~)`

Obsługiwane Operacje to `OR(|)`, `AND(&)`, `XOR(^)`

```zenscript
//Możesz sprawdzić:


//Wartości liczbowe
val a = 0 jak int;
if(a==0){print("NumVal");

//Obliczone wartości liczbowe
val b = 1;
val c = 5;
//Wszystkie oceny zgodne z prawdą
if(b+c==6){print("Num1! );}
if(b*c==5){print("Num2!");}
if(b/c=0. ){print("Num3! );}

//OR, XOR, AND
val d = "Cześć";
val e = "World";
val f = d~e; //f = "HelloWorld", Tilde po prostu łączy jedną rzecz z inną

//|(OR) tak długo, jak jedno z tych kryteriów jest spełnione, ocenia się je zgodnie z prawdą
if(d=="Witaj" | e == "Witaj"){print("OR1! );} //true
if(d=="Witaj" | e == "Świat"){print("OR2! );} //true

//^(XOR) oznacza, TYLKO JEDEN kryteria mogą zostać spełnione, w przeciwnym razie ocenia się na fałszywe
if(d=="Witaj" ^ e == "Witaj"){print("XOR1! );} //true
if(d=="Witaj" ^ e == "Świat"){print("XOR2! );} //false

//&(AND) oznacza, że oba kryteria muszą zostać spełnione, w przeciwnym razie ocenia się na fałszywe
if(d=="Witaj" & e == "Witaj"){print("AND1! );} //false
if(d=="Witaj" & e == "Świat"){print("AND2!");} //true
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

| Nazwisko          | token    | Wyjaśnienie                                                                                              | Przykład          |
| ----------------- | -------- | -------------------------------------------------------------------------------------------------------- | ----------------- |
| Nie               | `!`      | Odwraca wartość logiczną                                                                                 | !false            |
| Nierówność        | `!=`     | Sprawdza, czy wartość przed i po niej nie jest równa                                                     | 1 != 2            |
| Równy             | `==`     | Sprawdza, czy wartość przed i po jest równa                                                              | 1 == 1            |
| Większy niż       | `>`   | Sprawdza, czy wartość przed jest większa niż po                                                          | 1 > 2             |
| Większa lub równa | `>=`  | Sprawdza, czy wartość przed jest większa lub równa po                                                    | 1 >= 1            |
| Mniej niż         | `<`   | Sprawdza, czy wartość przed jest mniejsza niż po                                                         | 1 < 2             |
| Młody lub równy   | `<=`  | Sprawdza, czy wartość przed jest mniejsza lub równa po                                                   | 1 <= 1            |
| ORAZ              | `&`  | Sprawdza, czy obie wartości, wartości przed i po są prawdziwe, fałszywe, jeśli jeden lub oba są fałszywe | prawda & prawda   |
| LUB               | `&#124;` | Sprawdza, czy wartość przed lub po jest prawdą. Prawda, oba są prawdziwe                                 | prawda \| prawda |
| XOR               | `^`      | Sprawdza, czy wartość przed lub po jest prawdziwa, fałsz, jeśli oba lub żaden nie jest prawdziwy         | prawda ^ fałsz    |

## Wewn/ma operatora

`w` i `ma` operatora sprawdź, czy coś jest w czymś w porządku.  
Najpierw potrzebujesz listy, którą chcesz zaznaczyć, następnie `w`/`ma` a następnie wartość, którą chcesz sprawdzić. `w` i `ma` to samo słowo kluczowe dla ZS, ale w większości przypadków ludzie używają `ma` do sprawdzania, czy kolekcja zawiera przedmiot i pętle "for", ponieważ reprezentuje to angielską gramatykę.

### w/ma loadedMods

Możesz sprawdzić, czy moda jest załadowana przez sprawdzenie czy znajduje się na liście loadedMods

```zenscript
//While zawiera sprawdzania mogą być użyte w
if(loadedMods w "mcp"){
    print("Minecraft Coder Pack załadowane");
}

//Większość ludzi woli używać
if(loadedMods ma "mcp"){
    print("Minecraft Coder Pack załadowane");
}
```

### w/ma ISkładnik

Możesz również sprawdzić, czy element pasuje do definicji poprzez porównanie dwóch składników IIngredients.  
Z tym musisz być trochę ostrożny, aby nie mylić tych dwóch wpisów:  
To prawda tylko wtedy, gdy IIngredeint PO `w` można również znaleźć całkowicie w jednym PRZED `w`.  
W większości przypadków użyjesz `słowa kluczowego` , ponieważ jego intencja jest jaśniejsza i robi to dokładnie samo.

```zenscript
if(<ore:ingotIron> w <minecraft:iron_ingot>){
    print("Sztabki żelaza są w prawym oreDic");
}

if(<ore:ingotIron> has <minecraft:iron_ingot>){
    print("Sztabki żelaza są w prawym oreDic");
}
```

To tylko wtedy prawda, gdy WSZYSTKIE pasujące elementy z ISkładnika PO `ma` można również znaleźć w ISkładniku WIĘCEJ `ma`: Say we we we mali IIngredient zawierający wszystkie pyły (e. . czerwony kamień i pył świecący):

```zenscript
czerwony wapień = <minecraft:redstone>;
val blask = <minecraft:glowstone>
val allDusts = <ore:dustAll>;
allDusts. dd(czerwony kamień, blaskowy);

//True as redstone is part of alldusts
if(allDusts has redstone) {

}

//False as allDusts składa się z czerwonego kamienia i blasku, i czerwony kamień składa się wyłącznie z czerwonego kamienia.
if(redstone ma allDusts) {

}
```