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
    
    //Wysyła "Hello"
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
    
    //Wysyła "World"
    print(stringArrayAll[0][1]);
    

# Pętle

Pętla to funkcja która się sama powtarza. Pętli mozeżesz używać aby wykonać daną akcję dla wszystkich elementów tablicy

## Pętla For

The main use of the for-loop is iterating through an array. Iterating means doing an action to all elements of an array.  
You can use the `break` keyword to break the loop prematurely.

    import crafttweaker.item.IItemStack;
    
    val IArray = [<minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>] as IItemStack[];
    val JArray = [<minecraft:grass>,<minecraft:log>,<minecraft:gold_ingot>] as IItemStack[];
    val KArray = [<minecraft:wooden_axe>,<minecraft:golden_shovel>,<minecraft:emerald>] as IItemStack[];
    
    
    //for [IntegerName, ] elementName in IArray {code}
    
    for item in IArray {
        //defines the variable "item" with each element of IArray (i.e. <minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>)
        //Just use this variable now!
        recipes.remove(item);
    }
    
    for i, item in IArray {
        //defines the variable "i" with each element Number of IArray (i.e. 0,1,2,...)
        //defines the variable "item" with each element of IArray (i.e. <minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>)
        //Just use these variables now!
    
        //Crafts Item of IArray using item of JArray and KArray (i.e. Dirt with grass and wooden axe, planks with wood and golden shovel, diamond with gold ingot and emerald)
        recipes.addShapeless(item,[JArray[i],KArray[i]]);
    }
    
    for i in 0 to 10 {
        //defines the variable "i" with each number from 0 to 9 (i.e. 0,1,2,...,8,9)
        print(i);
    }
    
    for i in 10 .. 20 {
        //defines the variable "i" with each number from 10 to 19 (i.e. 10,11,12,...,18,19)
        print(i);
    }
    
    for item in loadedMods["minecraft"].items {
        //defines the variable "item" with each item added by the mod with the modID "minecraft" and removes its crafting recipe
        recipes.remove(item);
    }
    

## While Loop

The while loop executes the given code as long as the given condition evaluates to `true`.  
Alternatively, you can stop it using the `break` keyword.

    var i = 0; 
    
    //Will print 0 - 9, because in the iteration after that, i < 10 is false since i is 10 then.
    while i < 10 {
        print(i); 
        i += 1;
    } 
    
    print("After loop: " + i);
    
    
    //Will print 10 - 6, because in the iteration after that i == 5 and it will break.
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
    

# Adding items to an Array

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