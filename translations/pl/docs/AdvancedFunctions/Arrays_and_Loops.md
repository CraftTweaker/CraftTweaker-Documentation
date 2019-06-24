# Tablice

Tablica to lista zawierająca wiele przedmiotów jednego typu.

## Tworzenie Tablic

Tworzy się ją za pomocą ```[``` i ```]```.

    //Tablica zawierająca "Hello" i "World"
    val stringArray = ["Hello", "World"] as string[];
    
    //Tablica zawierająca cyfry 1-3
    val intArray = [1,2,3] as int[];
    

Jeżeli myślisz sobie "czekaj, czy ja nie widziałem przypadkiem tych nawiasów wcześniej?", widziałeś je. Pamiętasz ```recipes.add(out,[[],[],[]]);```? Ta formuła używa trzech tablic, gdzie każda z nich zawiera do trzech wartości by zdefiniować recepturę w stole rzemieślniczym.

## Oznaczanie Tablic

Na pewno zauważyłes już, że każda tablica ma przyłączone do niej wyrażenie ` as `.   
Dlaczego jest to ważne? ZenScript czasem nie potrafi przewidzieć, jakiego typu zawartość jest w danej tablicy. Brak tego wyrażenia może spowodować dziwne logi błędów konwersji!  
Lepiej się ubezpieczyć i oznaczyć tablice poprawnymi typami!  
Pamiętaj także, aby przy używaniu nie prymitywnych typów (wszystkiego poza string, int, itp.) [zaimportować](Import/) odpowiedni pakiet i zrobić to na POCZĄTKU danego skryptu:

    import crafttweaker.item.IItemStack;
    val IArray = [<minecraft:gold_ingot>, <minecraft:iron_ingot>] as IItemStack[];
    

## Zagnieżdżone Tablice

Możesz umieszczać tablice w tablicach.

    val stringArray1 = ["Hello","World"] as string[];
    val stringArray2 = ["I","am"] as string[];
    val stringArray3 = ["a","beatuful"] as string[];
    val stringArrayAll = [stringArray1,stringArray2,stringArray3,["Butterfly","!"]] as string[][];
    

## Odnoszenie się do zawartości tablicy

Możesz odnieść się do elementu wewnątrz tablicy poprzez użycie jego miejsca na liście. Pierwsza wartość w tablicy to nr 0 druga to nr 2 itd.

Jeżeli chcesz się odnieść do wartości w zagnieżdżonej tablicy potrzebujesz 2 lub więcej odnośników, ponieważ każdy z nich usuwa jedną warstwę z list.

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
    

# Pętle

Pętla to funkcja która się sama powtarza. Pętli mozeżesz używać aby wykonać daną akcję dla wszystkich elementów tablicy

## Pętla For

Głównym zastosowaniem pętli for jest iteracja po tablicy. Iteracja oznacza wykonywanie akcji dla wszystkich elementów Tablicy.   
Używając hasła `break` możesz zatrzymać pętlę przedwcześnie.

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
    

## Pętla While

Pętla while wykonuje dany kod tak długo, jak dany warunek jest równy `true`.  
Alternatywnie, pętle można zatrzymać hasłem `break`.

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
    

# Dodawanie zmiennych do tablic

While it is not recommended to do so, it is possible to add some Objects to Arrays.  
You can only add single Objects to an array, you cannot add two arrays.  
You use the `+` operator for array Addition:

```java
import crafttweaker.item.IItemStack;

val iron = <minecraft:iron_ingot>;
var array as IItemStack[] = [iron, iron, iron];

array += iron;
for item in array {
    print(item.displayName);
}
```