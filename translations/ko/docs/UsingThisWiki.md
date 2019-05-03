# 위키 사용하기

이 위키는 어떤 타입이 crafttweaker에 있고 그 용도가 무엇인지에 대한 개요를 제공합니다.  
특정 항목에서는 더 명확하게 하기 위해서 몇가지 예를 제공합니다.

# 용어

시작하기 전에, 여기에는 익숙해져야 할 몇가지 용어들이 있습니다.

## ZenGetter

ZenGetter는 특정 개체에서 정보를 얻는 방법입니다. 예를 들어 [IItemStack](/Vanilla/Items/IItemStack/)에는 "displayName"이라는 ZenGetter가 있는데, 다음과 같이 사용합니다.

    //object.zenGetter;
    <minecraft:iron_ingot>.displayName;
    

ZenGetter는 항상 결과를 반환합니다. 여기의 경우에는 아이템이름("Iron Ingot") 을 문자열로 반환합니다.

## ZenSetter

ZenSetter는 ZenGetter와 거의 같은 방식으로 작동하지만 ZenSetter는 값을 설정하고 ZenGetter는 값을 가져옵니다.</0> "displayName"이라는 ZenSetter를 가지고 있는 [IItemStack](/Vanilla/Items/IItemStack/)을 사용해봅시다. 딱 봐도 문자열 유형인걸 알수 있습니다.

ZenSetter는 다음과 같이 사용합니다.

    //object.zenSetter = newValue;
    <minecraft:iron_ingot>.displayName = "Unsuspecting Ingot";
    

ZenSetter는 get이 아니기 때문에 아무것도 반환을 하지 않습니다.

## 대입 연산자

만약 하나의 아이템이 ZenGetter와 ZenSetter 모두 같은 이름이라면(IItemStack의 "displayName"), `=` 이외의 대입연산자들을 사용할 수 있습니다.</p> 

유형에 따라서 다음을 사용할 수 있습니다: `&=`, `|=`, `+=`, `-=`, `*=`, `/=`, `%=`, `~=`.  
이것들이 어떻게 동작할지를 봅시다:

    //ZenGetter와 ZenSetter가 동일한 이름이기에 다음 두 결과는 동일합니다.
    //object.zenSetter += value;
    //object.zenSetter = object.zenGetter + value;
    
    <minecraft:iron_ingot>.displayName += " of Doom";
    <minecraft:iron_ingot>.displayName = <minecraft:iron_ingot>.displayName + " of Doom";