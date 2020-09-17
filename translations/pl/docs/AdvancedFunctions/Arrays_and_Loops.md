# Tablice

Tablica to lista zawierająca wiele przedmiotów jednego typu.

## Tworzenie Tablic

Tworzy się ją za pomocą ```[``` i ```]```.

**Ja**: *musisz* zainicjować tablice do czegoś, nawet jeśli jest pustą tablicą.

`zmiennoprzecinkowe tablice var jako zmiennoprzecinkowe [];` nie spowoduje błędów składni, ale po przeładowaniu gry pojawi się błąd, a twój skrypt nie zadziała.

Zamiast tego, zainicjuj puste tablice takie jak ten `floatArray var jako zmiennoprzecinkowe [] = [];`

```zenscript
//Tablica zawierająca "Hello" i "World"
val stringArray = ["Hello", "World"] as string[];

//Tablica zawierająca cyfry 1-3
val intArray = [1,2,3] as int[];
```

Jeśli teraz myślisz "czekaj, nie widziałem wcześniej tych nawiasów?", masz to. Zapamiętaj ```recipes.add(out,[[],[],[]]]);```? Używa to trzech tablic z każdym z maksymalnie trzech, aby zdefiniować recepturę stołu rzemieślniczego.

## Oznaczanie Tablic

Z pewnością zauważyłeś, że wszystkie tablice mają dołączoną instrukcję `jako` .  
Dlaczego pytasz? Dzieje się tak, ponieważ ZenScript czasami nie może przewidzieć, jaki typ są elementy w tablicy. To może być przyczyna dziwnych dzienników błędów konwersji!  
Lepiej być bezpieczny niż przepraszamy i rzuć tablice na ich poprawne typy!  
Ponadto, jeśli rzucisz na nieprymitywne typy (wszystko oprócz ciągów, inty i te same) upewnij się, że [zaimportuje](/AdvancedFunctions/Import/) odpowiedni pakiet i upewnij się, że to zrobią w TOP skryptu:

```zenscript
import crafttweaker.item.IItemStack;
val IArray = [<minecraft:gold_ingot>, <minecraft:iron_ingot>] as IItemStack[];
```

## Zagnieżdżone Tablice

Możesz umieścić tablice w tablicach.

```zenscript
val stringArray1 = ["Hello","World"] as string[];
val stringArray2 = ["I","am"] as string[];
val stringArray3 = ["a","beatuful"] as string[];
val stringArrayAll = [stringArray1,stringArray2,stringArray3,["Butterfly","!"]] as string[][];
```

## Odnoszenie się do zawartości tablicy

Możesz odnieść się do elementu w tablicy, używając jego miejsca na liście. Pierwszy element w tablicy to Nie. 0, 2. nr 1 itd.

Jeśli chcesz odnieść się do przedmiotu w zagnieżdżonej tablicy, potrzebujesz dwóch lub więcej refererów, ponieważ każdy usuwa jedną warstwę listy.

```zenscript
/*
stringArray[0] to "Hello"
stringArray[1] to "World"
stringArray[2] to "I"
stringArray[3] to "am"
*/
val stringArray = ["Hello","World","I","am"] as string[];

//Drukuje "Hello"
print(stringArray[0]);


//Zagnieżdżone Tablice
val stringArray1 = ["Hello","World"] as string[];
val stringArray2 = ["I","am"] as string[];
val stringArray3 = ["a","beautiful"] as string[];
val stringArrayAll = [stringArray1,stringArray2,stringArray3,["Butterfly","!"]] as string[][];

/*
stringArrayAll[0] is ["Hello","World"]
stringArrayAll[1] is ["I","am"]
stringArrayAll[2] is ["a","beautiful"]
stringArrayAll[3] is ["Butterfly","!"]

stringArrayAll[0][0] to "Hello"
stringArrayAll[0][1] to "World"
itd.
*/

//Drukuje "World"
print(stringArrayAll[0][1]);
```

# Pętle

Pętla jest funkcją, która się powtarza. Możesz użyć pętli, aby zastosować akcję do wszystkich elementów w tablicy

## Pętla For

Głównym zastosowaniem pętli "for-loop" jest powtarzanie się przez tablicę. Iteracja oznacza wykonanie działania na wszystkich elementach tablicy.  
Możesz użyć słowa kluczowego `break` aby przedwcześnie przerwać pętlę.

```zenscript
import crafttweaker.item.IItemStack;

val IArray = [<minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>] as IItemStack[];
val JArray = [<minecraft:grass>,<minecraft:log>,<minecraft:gold_ingot>] as IItemStack[];
val KArray = [<minecraft:wooden_axe>,<minecraft:golden_shovel>,<minecraft:emerald>] as IItemStack[];


//Dla [nazwaInteger, ] nazwaElementu w IArray {code}

for item in IArray {
    //definiuje zmienną "item" jako każdy element IArray (czyli <minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>)
    //Teraz po prostu użyj tej zmiennej!
    recipes.remove(item);
}

for i, item in IArray {
    //definiuje zmienną "i" jako każdy numer elementu IArray (tj. 0,1,2,...)
    //definiuje zmienną "item" jako każdy element IArray  (tj. <minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>)
    //Teraz po prostu użyj tych zmiennych!

    //Tworzy przedmioty z IArray używając przedmiotów z JArray oraz KArray (tj. Ziema z trawą i drewnianą siekierą, deski z drewnem i złotą łopatą, diament ze sztabką złota i szmaragdem)
    recipes.addShapeless(item,[JArray[i],KArray[i]]);
}

for i in 0 to 10 {
    //definiuje zmienną "i" jako numery od 0 do 9 (tj. 0,1,2,...,8,9)
    print(i);
}

for i in 10 .. 20 {
    //definiuje zmienną "i" jako każdy numer od 10 do 19 (tj. 10,11,12,...,18,19)
    print(i);
}

for item in loadedMods["minecraft"].items {
    //definiuje zmienną "item" jako każdy przedmiot dodany przez modyfikacje z modID "minecraft" i usuwa jego receptury wytwarzania
    recipes.remove(item);
}
```

## Pętla While

Pętla while wykonuje podany kod, o ile dany warunek odpowiada `true`.  
Alternatywnie, możesz go zatrzymać używając `break` słowa kluczowego.

```zenscript
var i = 0; 

//Wydrukuje 0 - 9, ponieważ iteracje dalej i < 10 będzie fałszem, iż i będzie równe 10.
while i < 10 {
    print(i); 
    i += 1;
} 

print("After loop: " + i);


//Wydrukuje 10 - 6, ponieważ iterację dalej i == 5 przez co pętla wykona polecenie break.
while (i > 0) {
    if i == 5
        break;
    print(i);
    i -= 1;
}

print("After loop 2: " + i);


for k in 1 .. 10 {
    if (k == 5)
        break;
    print(k);
}
```

# Dodawanie zmiennych do tablic

Chociaż nie jest to zalecane, możliwe jest dodanie niektórych obiektów do tablic.  
Możesz dodać tylko pojedyncze obiekty do tablicy, nie możesz dodać dwóch tablic.  
Używasz operatora `+` do dodawania tablicy:

```zenscript
import crafttweaker.item.IItemStack;

val iron = <minecraft:iron_ingot>;
var array as IItemStack[] = [iron, iron, iron];

array += iron;
for item in array {
    print(item.displayName);
}
```