# 위키 사용하기

This wiki is meant to provide you an outline on which Types exist in crafttweaker and what their uses are.  
There also are some examples in certain entries to provide further clarity.

# 용어
시작하기 전에, 여기에는 익숙해져야 할 몇가지 용어들이 있습니다.

## ZenGetter
ZenGetter는 특정 개체에서 정보를 얻는 방법입니다. For example [IItemStack](/Vanilla/Items/IItemStack/) has a ZenGetter called "displayName".  
We use the ZenGetter like this:
```zenscript
//object.zenGetter;
<minecraft:iron_ingot>.displayName;
```

ZenGetter는 항상 결과를 반환합니다. 여기의 경우에는 아이템이름("Iron Ingot") 을 문자열로 반환합니다.


## ZenSetter
A ZenSetter works almost the same way as a ZenGetter does, the only difference is that a ZenSetter sets, a ZenGetter gets.  
Let's stay with our [IItemStack](/Vanilla/Items/IItemStack/), since it also has a ZenSetter called "displayName". 딱 봐도 문자열 유형인걸 알수 있습니다.

ZenSetter는 다음과 같이 사용합니다.
```zenscript
//object.zenSetter = newValue;
<minecraft:iron_ingot>.displayName = "Unsuspecting Ingot";
```

ZenSetter는 get이 아니기 때문에 아무것도 반환을 하지 않습니다.


## 대입 연산자
만약 하나의 아이템이 ZenGetter와 ZenSetter 모두 같은 이름이라면(IItemStack의 "displayName"), `=` 이외의 대입연산자들을 사용할 수 있습니다.</p> 

Depending on the type you can use these: `&=`, `|=`, `+=`, `-=`, `*=`, `/=`, `%=`, `~=`.  
Let's see what they do:



```zenscript
//ZenGetter와 ZenSetter가 동일한 이름이기에 다음 두 결과는 동일합니다.
//object.zenSetter += value;
//object.zenSetter = object.zenGetter + value;

<minecraft:iron_ingot>.displayName += " of Doom";
<minecraft:iron_ingot>.displayName = <minecraft:iron_ingot>.displayName + " of Doom";
```