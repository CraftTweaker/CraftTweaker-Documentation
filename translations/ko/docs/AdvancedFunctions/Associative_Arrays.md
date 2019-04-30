# Associative Arrays

연관 배열(지도 또는 사전이라고도 함) 은 여러 항목을 저장할 수 있다는 점에서 일반적인 [Array](Arrays_and_Loops/)과 같습니다. 그러나 [Arrays](Arrays_and_Loops/)과 달리, 색인또는 (지도에서 부르는 대로) 키를 어떤 타입으로 할지 선택할 수 있습니다!

## Declaring an Associative Array

당신은 중괄호 `{}`및 콜론 `:`을 사용하여 연관 배열을(를) 선언한다.

```JAVA
val myAssocArray = {
    dirt : <minecraft:dirt>,
    gold : <minecraft:gold_ingot>
} as IItemStack[string];
```

이걸 분해해 볼까요, 응?

- `val myAssocArray =` 표준 변수 선언
- `{` 이것은 Associative Array입니다. Sir!
- `dirt : <minecraft:dirt>` 우리 `<minecraft:dirt>` 는 문자열 아래에 매핑한다 `dirt`
- `,`기다려주세요, 앞으로 더 있을 겁니다
- `gold : <minecraft:gold_ingot>` 우리`<minecraft:gold_ingot>` 는 문자열 아래에 매핑한다 `gold`
- `}`우리는 배열의 끝에 도달했습니다, Sir!
- `as IItemStack[string];`문자열을 인덱스로, IitemStacks를 값으로 사용하는 Associative Array 입니다.

좋습니다, 그럼 이걸 사용할 때 어떻게 생각해야 합니까?

- Zenscript에서 사용할 수 있는 모든 유형을 키 또는 값으로 사용할 수 있습니다.
- 초기 선언에서 핵심 선언에 변수를 사용할 수 없음(`{}`을 사용하는 변수) 은 명확한 텍스트가 문자열로 해석됩니다.

## Refering to Items inside an Associative Array.

일반 [Array](Arrays_and_Loops/):  
에서 항목을 참조하는 것과 동일한 방법으로 Associative Array 내의 항목을 참조하는 경우 `Array[index]`  
차이점만 있다면 이번에는 반드시 정수(Integer) 를 인덱스로 사용할 필요는 없습니다, 어레이를 어떤 유형으로 선언했든 간에 말입니다!

```JAVA
<br />val dirt = &lt;minecraft:dirt&gt;;
val assocArray = {
    &lt;minecraft:dirt&gt; : "This is me"
} as string[IItemStack];

//array[index]
print(assocArray[&lt;minecraft:dirt&gt;]);

//You can also use varaibles here, as long as the variable is of the correct type
print(assocArray[dirt]);
```

한 가지 특별한 경우가 있는데, 그것은 문자열을 부속품으로 사용할 때:   
이 경우 다음과 같이 memberGetter를 사용할 수도 있습니다.

```JAVA
val assocWithStrings = {
    //you can use "" if you want
    "one" : "1",

    //but you don't have to
    two : "2"
} as string[string];

//You can either use the memberGetter
print(assocWithStrings.one);

//Or the standard index Getter
print(assocWithStrings["two"]);
```

## Manipulating items inside an Associative Array

배열에서와 마찬가지로 Associative Array 내부에서 항목을 조작 할 수 있습니다 `array[index] = newValue`.  
하나의 큰 차이점이 있습니다:  
배열은 고정 된 크기이지만 맵은 그렇지 않습니다. 즉, 이전에 설정되지 않은 색인을 설정하여 언제든지 항목을 추가 할 수 있습니다!

```JAVA
val changingArray = {
    <minecraft:dirt> : "this is me",
    <minecraft:gold_ingot> : "and I hate it"
} as string[IItemStack];

val gg = <minecraft:gold>;

//Overrides the value of gold_ingot
changingArray[gg] = "and I love it";

//adds a new entry
changingArray[<minecraft:grass>] = "Power!";
```

## Retrieving an Associative Array's Key and Entrysets

The KeySet is an array containing all the map's keys.  
The valueSet is an array containing all the map's values.  
The entrySet is an array containing all the map's entries (see below).

```JAVA
myAssocArray.keySet   //keySet
myAssocArray.keys     //keySet
myAssocArray.values   //valueSet
myAssocArray.valueSet //valueSet
myAssocArray.entrySet //entrySet
```

## Iterating over an Associative Array

There are two Iterators that allow you to iterate over an Associative Array:

- The key-Iterator: Iterates over the keys, uses one variable
- The key-value-Iterator: Iterates over the keys and values, uses two variables

Let's add an Associative Array that stores crafting recipes to be iterated over:

- Keys shall be the crafting output as [IItemStack](/Vanilla/Items/IItemStack/)
- Values shall be the crafting ingredients as [IIngredient](/Vanilla/Variable_Types/IIngredient/)
- We shall use the key-Iterator that is built like this: `for key in assocArray {doSth;}`
- We shall also use the key-value-Iterator that is built like this `for key, value in assocArray {doSth;}`

```JAVA
import crafttweaker.item.IItemStack;
import crafttweaker.item.IIngredient;

val dirt = <minecraft:dirt>;
val recipeMapShaped = {
    <minecraft:grass> : [[dirt, dirt, dirt],[dirt, dirt, dirt],[dirt, dirt, dirt]],
    <minecraft:gold_ingot> : [[dirt, dirt, dirt],[dirt, <minecraft:gold_ingot>, dirt],[dirt, dirt, dirt]]
} as IIngredient[][][IItemStack];

recipeMapShaped[dirt] = [[dirt, dirt, dirt],[dirt, null, dirt],[dirt, dirt, dirt]];

//key will be grass, goldIngot, dirt
for key in recipeMapShaped {
    recipes.addShaped(key, recipeMapShaped[key]);
}


//keys will be grass, goldIngot, dirt, values will be the recipes for them
for key, value in recipeMapShaped {
    recipes.addShaped(key, value);
}
```

# ZenType Entry

A map Entry consists of a key and a value.  
Currently the only way to get such an object is via a map's entrySet method.

You can use the getters to get `key` and `value`

```kotlin
//Replace map with a reference to an existing map/associative array
val myEntry = map.entrySet[0];


myEntry.key;    //Returns the entry's key.
myEntry.value;  //Returns the entry's value.
```