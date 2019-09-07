# 当Wikiについて

当WikiはCraftTweakerが用意した「型」やそれらの用途に付いての情報の提供を意図しています。  
より詳細な情報は、それぞれのページに例を交えて説明してあります。

# 用語

触る前に慣れると良い用語がいくつかあります。

## ZenGetter

ZenGetterとは、指定したオブジェクトから情報を得るための手段です。 例えば、[IItemStack](/Vanilla/Items/IItemStack/)は"displayName"というZenGetterを持っています。  
ZenGetterは次のように使用します。

```zenscript
//object.zenGetter;
<minecraft:iron_ingot>.displayName;
```

ZenGetterは常に何かの値を返します。この例では、アイテムの名前「Iron Ingot」の文字列が返ります。

## ZenSetter

ZenSetterはZenGetterと似た挙動をとります。但し唯一の違いとして、ZenGetterは値の取得、ZenSetterは値の設定を担当します。  
[IItemStack](/Vanilla/Items/IItemStack/)には同名の"displayName"というZenSetterも用意されているので、例はそのままにしましょう。 エントリから、これが文字列だということがわかりましたね。

ZenSetterは次のように使用します。

```zenscript
//object.zenSetter = newValue;
<minecraft:iron_ingot>.displayName = "Unsuspecting Ingot";
```

ZenSetterは値を返しません。なので、これは専ら値を設定するためのものであり、取得するものではありません。

## 代入演算子

ZenGetterとZenSetterとで同じ名前で用意されている場合(例: [IItemStack](/Vanilla/Items/IItemStack/)の"displayName")、`=`以外の代入演算子が使用可能になります。

対象の変数型によって次の代入演算子が使用できます: `&=`, `|=`, `+=`, `-=`, `*=`, `/=`, `%=`, `~=`.  
では、これらの使われ方を見てみましょう。

```zenscript
//同じ名前のZenGetterとZenSetterが有るので、最初の例とその次の例は同じ動作をします。
//object.zenSetter += value;
//object.zenSetter = object.zenGetter + value;

<minecraft:iron_ingot>.displayName += " of Doom";
<minecraft:iron_ingot>.displayName = <minecraft:iron_ingot>.displayName + " of Doom";
```