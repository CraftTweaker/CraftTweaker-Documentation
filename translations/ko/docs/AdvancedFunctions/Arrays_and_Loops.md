# 배열

배열은 같은 종류의 여러 항목을 포함하는 목록입니다.

## 배열 선언

다음의 ```[``` 과 ```]```�하여 정의합니다.23481706을 이용하여 정의합니다.

    //배열은 "Hello" 와 "World"
    val stringArray = ["Hello", "World"] as string[];
    
    //배열은 1부터 3까지를 포함
    val intArray = [1,2,3] as int[];
    

"잠깐, 내가 전에 이 괄호들을 본 적이 없나?"라는 생각이 든다면, 여러분은 본 적이 있는겁니다. 생각해보세요. ```recipes.add(out,[[],[],[]]);```? 이것은 각각 최대 3개의 항목이 포함된 3개의 배열로 제작 테이블 레시피를 정의합니다.

## 배열의 캐스팅

여기 있는 모든 배열에는 `as`이라는 문구를 사용하고 있는 것을 알아차렸을 것입니다.  
이를 사용하는 이유는 다음과 같습니다. ZenScript는 배열의 항목이 어떤 타입인지 예측하지 못하는 경우가 있기 때문입니다. 이것은 이상한 변환 오류 로그의 원인이 될 수 있습니다!  
후회하는 것보다 안전한 게 낫고, 올바른 타입으로 배열을 캐스트 하는게 낫습니다!  
또한 기본 타입이 아닌 ( 문자열, 정수 등을 제외한 모든 항목) 타입을 캐스트하는 경우에는, 해당 패키지를 확실히 [import](Import/)하고 스크립트의 상단에 다음과 같이 작성합니다.

    import crafttweaker.item.IItemStack;
    val IArray = [<minecraft:gold_ingot>, <minecraft:iron_ingot>] as IItemStack[];
    

## 중첩 배열

배열을 배열 안에 넣을 수 있습니다.

    val stringArray1 = ["Hello","World"] as string[];
    val stringArray2 = ["I","am"] as string[];
    val stringArray3 = ["a","beatuful"] as string[];
    val stringArrayAll = [stringArray1,stringArray2,stringArray3,["Butterfly","!"]] as string[][];
    

## 배열 요소의 참조

목록 안에 위치를 사용하여 배열 내의 요소를 참조할 수 있습니다. 배열의 첫 번째 항목은 0번째 요소입니다. 그리고 두번째 항목은 1번째 요소입니다.

중첩된 배열의 항목을 참조하려면 각각 목록의 참조할 수 있도록 두 개 이상의 참조자가 필요합니다.

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

루프는 스스로를 반복하는 기능입니다. 루프를 사용하여 배열의 모든 요소에 액션을 취할 수 있습니다.

## For Loop

루프의 주된 용도는 배열을 통한 반복입니다. 반복은 배열의 모든 요소에 대해 작업을 수행하는 것을 의미합니다.  
`break` 단어를 사용하여 루프를 조기에 끊을 수 있습니다.

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
    

## While Loop

While 루프는 주어진 조건이 `true`인 동안에 해당 코드를 실행합니다.  
또는 `break` 키워드를 사용하여 루프를 빠져 나올 수 있습니다.

    var i = 0; 
    
    //i < 10 의 조건이 i가 10이 될때까지는 false이기 때문에 0 ~ 9까지를 출력
    while i &lt; 10 {
        print(i); 
        i += 1;
    } 
    
    print("루프가 끝나고 난 뒤의 i값: " + i);
    
    
    //i > 0의 조건하에 i가 5가 되는 순간 루프를 빠져나가므로 10 ~ 6까지를 출력
    while (i &gt; 0) {
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
    

# 배열에 아이템 추가하기

권장하지는 않지만, 배열에 일부 개체를 추가할 수 있습니다.  
배열에 단일 개체만 추가할 수 있으며, 어레이 두 개를 추가할 수 없습니다.  
배열 추가에 대해 `+` 연산자를 사용하는 경우:

```java
import crafttweaker.item.IItemStack;

val iron = <minecraft:iron_ingot>;
var array as IItemStack[] = [iron, iron, iron];

array += iron;
for item in array {
    print(item.displayName);
}
```