# 当Wikiについて

This wiki is meant to provide you an outline on which Types exist in crafttweaker and what their uses are.  
There also are some examples in certain entries to provide further clarity.

# 用語
触る前に慣れると良い用語がいくつかあります。

## ZenGetter
ZenGetterとは、指定したオブジェクトから情報を得るための手段です。 For example [IItemStack](/Vanilla/Items/IItemStack/) has a ZenGetter called "displayName".  
We use the ZenGetter like this:
```zenscript
//object.zenGetter;
<minecraft:iron_ingot>.displayName;
```

ZenGetterは常に何かの値を返します。この例では、アイテムの名前「Iron Ingot」の文字列が返ります。


## ZenSetter
A ZenSetter works almost the same way as a ZenGetter does, the only difference is that a ZenSetter sets, a ZenGetter gets.  
Let's stay with our [IItemStack](/Vanilla/Items/IItemStack/), since it also has a ZenSetter called "displayName". エントリから、これが文字列だということがわかりましたね。

ZenSetterは次のように使用します。
```zenscript
//object.zenSetter = newValue;
<minecraft:iron_ingot>.displayName = "Unsuspecting Ingot";
```

ZenSetterは値を返しません。なので、これは専ら値を設定するためのものであり、取得するものではありません。


## 代入演算子
ZenGetterとZenSetterとで同じ名前で用意されている場合(例: [IItemStack](/Vanilla/Items/IItemStack/)の"displayName")、`=`以外の代入演算子が使用可能になります。

Depending on the type you can use these: `&=`, `|=`, `+=`, `-=`, `*=`, `/=`, `%=`, `~=`.  
Let's see what they do:

```zenscript
//同じ名前のZenGetterとZenSetterが有るので、最初の例とその次の例は同じ動作をします。
//object.zenSetter += value;
//object.zenSetter = object.zenGetter + value;

<minecraft:iron_ingot>.displayName += " of Doom";
<minecraft:iron_ingot>.displayName = <minecraft:iron_ingot>.displayName + " of Doom";
```