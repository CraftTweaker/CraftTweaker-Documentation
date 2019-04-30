# 배열

배열은 같은 종류의 여러 항목을 포함하는 목록입니다.

## 배열 선언

다음의 ```[``` 과 ```]```�하여 정의합니다.72430519을 이용하여 정의합니다.

    //배열은 "Hello" 와 "World"
    val stringArray = ["Hello", "World"] as string[];
    
    //배열은 1부터 3까지를 포함
    val intArray = [1,2,3] as int[];
    

"잠깐, 내가 전에 이 괄호들을 본 적이 없나?"라는 생각이 든다면, 여러분은 본 적이 있는겁니다. 생각해보세요. ```recipes.add(out,[[],[],[]]);```? 이것은 각각 최대 3개의 항목이 포함된 3개의 배열로 제작 테이블 레시피를 정의합니다.

## Casting Arrays

여기 있는 모든 배열에는 `as`이라는 문구가 추가되어 있는 것을 분명히 알아차렸을 것입니다.  
왜 물어보십니까? 왜냐하면 ZenScript는 배열의 항목이 어떤 유형인지 예측하지 못하는 경우가 있기 때문입니다. 이것은 이상한 변환 오류 로그의 원인이 될 수 있습니다!  
후회하는 것보다 안전한 게 낫고, 올바른 유형으로 배열를 주조하는 게 낫습니다!  
또한 비기본 유형( 문자열, ints 등을 제외한 모든 항목) 에 주조한 경우, 해당 패키지는 [불러오기](Import/)을 확실히 하고 스크립트의 정상에서 다음을 수행하십시오.

    import crafttweaker.item.IItemStack;
    val IArray = [<minecraft:gold_ingot>, <minecraft:iron_ingot>] as IItemStack[];
    

## Nested Arrays

당신은 배열을 배열에 배치할 수 있습니다.

    val stringArray1 = ["Hello","World"] as string[];
    val stringArray2 = ["I","am"] as string[];
    val stringArray3 = ["a","beatuful"] as string[];
    val stringArrayAll = [stringArray1,stringArray2,stringArray3,["Butterfly","!"]] as string[][];
    

## Reffering to items in an Array

목록에서 배치 위치를 사용하여 배열 내의 요소를 참조할 수 있습니다. 배열의 첫 번째 항목은 아니오입니다. 0, 2번 1번 등.

중첩된 배열의 항목을 참조하려면 각각 목록의 한 레이어를 제거하기 때문에 두 개 이상의 참조자가 필요합니다.

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
    

# Loops

루프는 스스로를 반복하는 기능입니다. 루프를 사용하여 배열의 모든 요소에 작업 적용할수있습니다.

## For Loop

루프의 주된 용도는 배열을 통한 반복입니다. 반복은 배열의 모든 요소에 대해 작업을 수행하는 것을 의미합니다.  
`break` 단어를 사용하여 루프를 조기에 끊을 수 있습니다.

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
    } 20 {
        //defines the variable "i" with each number from 10 to 19 (i.e. 10,11,12,...,18,19)
        print(i);
    }
    
    for item in loadedMods["minecraft"].items {
        //defines the variable "item" with each item added by the mod with the modID "minecraft" and removes its crafting recipe
        recipes.remove(item);
    }
    

## While Loop

그 동안 루프 한 주어진 조건`true`.  
로 지정된 코드를 시행하고 있습니다. 또는 당신은`break`단어를 사용하는 그것을 멈출 수 있습니다.

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

권장되지는 않지만, 어레이에 일부 개체를 추가할 수 있습니다.  
배열에 단일 개체만 추가할 수 있으며, 어레이 두 개를 추가할 수 없음  
어레이 추가에 대해 `+` 연산자를 사용하는 경우:

```java
import crafttweaker.item.IItemStack;

val iron = <minecraft:iron_ingot>;
var array as IItemStack[] = [iron, iron, iron];

array += iron;
for item in array {
    print(item.displayName);
}
```