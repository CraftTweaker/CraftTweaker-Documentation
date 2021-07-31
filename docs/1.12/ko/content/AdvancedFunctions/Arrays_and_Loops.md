# 배열

배열은 같은 종류의 여러 항목을 포함하는 목록입니다.

## 배열 선언

다음의 ```[``` 과 ```]```을 이용하여 정의합니다.

**Imortant**: you *must* initialize arrays to something, even if it's an empty array.

`var floatArray as float [];` won't give syntax errors, but upon reloading your game, you will get an error and your script won't work.

Instead, initialize empty arrays like this `var floatArray as float [] = [];`

```zenscript
//배열은 "Hello" 와 "World"
val stringArray = ["Hello", "World"] as string[];

//배열은 1부터 3까지를 포함
val intArray = [1,2,3] as int[];
```

If you now think "wait, haven't I seen these brackets before?", you have. Remember ```recipes.add(out,[[],[],[]]);```? This uses three arrays with each containing up to three entries to define a crafting table recipe.

## 배열의 캐스팅

You surely have noticed that all arrays here have the `as` statement appended.  
Why you ask? This is because ZenScript sometimes cannot predict what type the items in the array are. This can be the cause of strange conversion error logs!  
Better be safe than sorry and cast the Arrays to their correct types!  
Also, if you cast to non-primitive types (everything except strings, ints and the same) be sure to [import](/AdvancedFunctions/Import/) the corresponding package and be sure to do so at the TOP of the script:

```zenscript
import crafttweaker.item.IItemStack;
val IArray = [<minecraft:gold_ingot>, <minecraft:iron_ingot>] as IItemStack[];
```

## 중첩 배열

You can place Arrays in Arrays.

```zenscript
val stringArray1 = ["Hello","World"] as string[];
val stringArray2 = ["I","am"] as string[];
val stringArray3 = ["a","beatuful"] as string[];
val stringArrayAll = [stringArray1,stringArray2,stringArray3,["Butterfly","!"]] as string[][];
```

## 배열 요소의 참조

You can refer to an element within an array by using it's place in the list. The first item in an Array is No. 0, the 2nd No.1 and so on.

If you want to refer to an item in a nested Array, you need two or more referers, as each removes one layer of the lists.

```zenscript
/*
stringArray[0] is "Hello"
stringArray[1] is "World"
stringArray[2] is "I"
stringArray[3] is "am"
*/
val stringArray = ["Hello","World","I","am"] as string[];

//prints "Hello"
print(stringArray[0]);


//Nested Arrays
val stringArray1 = ["Hello","World"] as string[];
val stringArray2 = ["I","am"] as string[];
val stringArray3 = ["a","beautiful"] as string[];
val stringArrayAll = [stringArray1,stringArray2,stringArray3,["Butterfly","!"]] as string[][];

/*
stringArrayAll[0] is ["Hello","World"]
stringArrayAll[1] is ["I","am"]
stringArrayAll[2] is ["a","beautiful"]
stringArrayAll[3] is ["Butterfly","!"]

stringArrayAll[0][0] is "Hello"
stringArrayAll[0][1] is "World"
etc.
*/

//prints "World"
print(stringArrayAll[0][1]);
```

# Loops

A loop is a function that repeats itself. You can use loops to apply an action to all elements in an Array

## For Loop

The main use of the for-loop is iterating through an array. Iterating means doing an action to all elements of an array.  
You can use the `break` keyword to break the loop prematurely.

```zenscript
import crafttweaker.item.IItemStack;

val IArray = [<minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>] as IItemStack[];
val JArray = [<minecraft:grass>,<minecraft:log>,<minecraft:gold_ingot>] as IItemStack[];
val KArray = [<minecraft:wooden_axe>,<minecraft:golden_shovel>,<minecraft:emerald>] as IItemStack[];


//for [IntegerName, ] elementName in IArray {code}

for item in IArray {
    //IArray의 각각의 요소를 "item" 변수로 정의 (i.e. <minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>)
    //그리고 이 변수를 사용!
    recipes.remove(item);
}

for i, item in IArray {
    //IArray의 각 요소넘버로 변수 "i"를 정의 (i.e. 0,1,2,...)
    //IArray의 각 요소를 변수 "item"을 정의 (i.e. <minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>)
    //그리고 이 번수들을 사용!

    //JArray와 KArray의 아이템으로 IArray의 아이템을 제조  (i.e. 흙을 잔디와 나무 도끼로, 판자를 나무와 금삽으로, 다이아몬드를 금괴와 에메랄드로)
    recipes.addShapeless(item,[JArray[i],KArray[i]]);
}

for i in 0 to 10 {
    //0 ~ 9 까지의 숫자를 변수 "i"로 지정 (i.e. 0,1,2,...,8,9)
    print(i);
} 20 {
    //10 ~ 19까지의 숫자를 변수 "i"로 지정 (i.e. 10,11,12,...,18,19)
    print(i);
}

for item in loadedMods["minecraft"].items {
    //"minecraft"라는 modID를 가진 모드에 의해 추가된 각 아이템을 변수 "item"으로 지정하고 그 아이템의 제작법을 제거
    recipes.remove(item);
}
```

## While Loop

The while loop executes the given code as long as the given condition evaluates to `true`.  
Alternatively, you can stop it using the `break` keyword.

```zenscript
var i = 0; 

//i < 10 의 조건이 i가 10이 될때까지는 false이기 때문에 0 ~ 9까지를 출력
while i < 10 {
    print(i); 
    i += 1;
} 

print("루프가 끝나고 난 뒤의 i값: " + i);


//i > 0의 조건하에 i가 5가 되는 순간 루프를 빠져나가므로 10 ~ 6까지를 출력
while (i > 0) {
    if i == 5
        break;
    print(i);
    i -= 1;
}

print("루프가 끝나고 난 뒤의 i값: " + i);


for k in 1 .. 10 {
    if (k == 5)
        break;
    print(k);
}
```

# 배열에 아이템 추가하기

While it is not recommended to do so, it is possible to add some Objects to Arrays.  
You can only add single Objects to an array, you cannot add two arrays.  
You use the `+` operator for array Addition:

```zenscript
import crafttweaker.item.IItemStack;

val iron = <minecraft:iron_ingot>;
var array as IItemStack[] = [iron, iron, iron];

array += iron;
for item in array {
    print(item.displayName);
}
```