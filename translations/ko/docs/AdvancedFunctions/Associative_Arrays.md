# 연관 배열

An Associative Array (sometimes also called a Map or a Dictionary) is like a normal [Array](/AdvancedFunctions/Arrays_and_Loops/) in the way that it is able to store multiple entries. Unlike [Arrays](/AdvancedFunctions/Arrays_and_Loops/) however, you can choose what type you want the index, or (as we call it in maps) key, to be!

## 연관 배열의 선언

중괄호 `{}`와 콜론 `:`을 사용하여 연관 배열을 선언합니다.

```zenscript
val myAssocArray = {
    dirt : <minecraft:dirt>,
    gold : <minecraft:gold_ingot>
} as IItemStack[string];
```

이걸 분석해봅시다.

- `val myAssocArray =` 변수 선언
- `{` 이것은 연관 배열입니다.
- `dirt : <minecraft:dirt>` `dirt` 를 `<minecraft:dirt>`로 매핑.
- `,`잠시만요, 더 있어요.
- `gold : <minecraft:gold_ingot>` `gold` 를 `<minecraft:gold_ingot>`로 매핑.
- `}` 배열의 끝입니다.
- `as IItemStack[string];` 문자열을 인덱스로, IitemStacks를 값으로 사용하는 연관 배열입니다.

그럼 이걸 사용할 때 어떤 점을 유의해야 할까요?

- Zenscript에서 사용할 수 있는 모든 타입을 키 또는 값으로 사용할 수 있습니다.
- 초기 선언의 키 설정부분에는 변수를 사용할 수 없습니다(`{}`를 사용한 곳) 해당 택스트는 문자열로 인식되기 때문입니다.

## 연관 배열에서의 요소 참조

You refer to items inside an Associative Array the same way you refer to items inside a normal [Array](/AdvancedFunctions/Arrays_and_Loops/):  
`Array[index]`  
Only difference is this time, you don't necessarily need to use an Integer as index, but whatever type you declared your Array to be!

```zenscript
<br />val dirt = <minecraft:dirt>;
val assocArray = {
    <minecraft:dirt> : "This is me"
} as string[IItemStack];

//array[index]
print(assocArray[<minecraft:dirt>]);

//동일한 타입의 변수 사용 가능. 
print(assocArray[dirt]);
```

한 가지 특별한 경우가 있는데, 그것은 문자열을 부속품으로 사용할 때:   
이 경우 다음과 같이 memberGetter를 사용할 수도 있습니다.

```zenscript
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

```zenscript
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

KeySet은 지도의 모든 키를 포함하는 배열입니다.  
valueSet은 지도의 값을 모두 포함하는 배열입니다.  
entrySet은 지도의 모든 항목을 포함하는 배열입니다(아래 참조).

```zenscript
myAssocArray.keySet   //keySet
myAssocArray.keys     //keySet
myAssocArray.values   //valueSet
myAssocArray.valueSet //valueSet
myAssocArray.entrySet //entrySet
```

## Iterating over an Associative Array

Associative Array를 통해 반복할 수 있는 두 개의 반복자가 있습니다.

- Ker-lterator: 키 위에 반복, 하나의 변수 사용합니다
- Key-value-Iterator: 키와 값을 반복하고, 두 개의 변수를 사용합니다.

반복 될 제작 레시피를 저장하는 Associative Array를 추가해 보겠습니다.

- 키는 [IitemStack ](/Vanilla/Items/IItemStack/)과 같은 조합 출력물이어야 한다.
- 값은 조합 재료는 [IIngredient](/Vanilla/Variable_Types/IIngredient/)이어야 한다.
- 다음과 같이 구축 된 키 반복자를 사용합니다. `for key in assocArray {doSth;}`
- 우리는 또한 이와 같이 구축 된 키 - 값 - 반복자를 사용할 것입니다. `for key, value in assocArray {doSth;}`

```zenscript
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
```

# ZenType Entry

맵 엔트리는 키와 값으로 구성됩니다.  
현재 이러한 개체를 얻을 수 있는 유일한 방법은 지도 엔트리 셋 메서드를 통해서입니다.

`키`과 `값`을 얻기 위해 게터를 사용할 수 있다.

```zenscript
//Replace map with a reference to an existing map/associative array
val myEntry = map.entrySet[0];


myEntry.key;    //Returns the entry's key.
myEntry.value;  //Returns the entry's value.
```