# 위키 사용하기

This wiki is meant to provide you an outline on which Types exist in crafttweaker and what their uses are.  
There also are some examples in certain entries to provide further clarity.

# 용어

시작하기 전에, 여기에는 익숙해져야 할 몇가지 용어들이 있습니다.

## ZenGetter

ZenGetter는 특정 개체에서 정보를 얻는 방법입니다. 예를 들어 [IItemStack](/Vanilla/Items/IItemStack/)에는 "displayName"이라는 ZenGetter가 있는데, 다음과 같이 사용합니다.

    //object.zenGetter;
    <minecraft:iron_ingot>.displayName;
    

ZenGetter는 항상 결과를 반환합니다. 여기의 경우에는 아이템이름("Iron Ingot") 을 문자열로 반환합니다.

## ZenSetter

ZenSetter는 ZenGetter와 거의 같은 방식으로 작동하지만 ZenSetter는 값을 설정하고 ZenGetter는 값을 가져옵니다.</0> "displayName"이라는 ZenSetter를 가지고 있는 [IItemStack](/Vanilla/Items/IItemStack/)을 사용해봅시다. We know from the entry that it is of type string.

We use the ZenSetter like this:

    //object.zenSetter = newValue;
    <minecraft:iron_ingot>.displayName = "Unsuspecting Ingot";
    

A ZenSetter will never return something, since it is meant to set, not to get.

## Assign operators

If an item has both, a ZenGetter and a ZenSetter with the same name (e.g. [IItemStack's](/Vanilla/Items/IItemStack/) "displayName"), you can use the assign operators other than `=`:

Depending on the type you can use these: `&=`, `|=`, `+=`, `-=`, `*=`, `/=`, `%=`, `~=`.  
Let's see what they do:

    //Since we have a ZenGetter and a ZenSetter with the same name, the first does the same as the second:
    //object.zenSetter += value;
    //object.zenSetter = object.zenGetter + value;
    
    <minecraft:iron_ingot>.displayName += " of Doom";
    <minecraft:iron_ingot>.displayName = <minecraft:iron_ingot>.displayName + " of Doom";