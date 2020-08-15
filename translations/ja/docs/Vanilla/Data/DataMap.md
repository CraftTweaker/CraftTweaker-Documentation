# DataMap

A Map, sometimes also called an Associative Array is a data structure that allows you to store multiple items.  
Unlike an Array however, you can also give each of these item a key to call upon.  
The DataMap expands [IData](/Vanilla/Data/IData/), so each DataMap is IData, you might need this info later.

## マップの作成:

A Map is a special kind of [IData](/Vanilla/Data/IData/), so at the very last you'll need to import that interface:  
`import crafttweaker.data.IData;`

マップに変換できないタイプがあることに気づいたかもしれません (マップは文字列以外の型に変換することもできません) 別の方法があるはずだ!  
以下があります:

```zenscript
import crafttweaker.data.IData;

val myFirstMap = {key1: "value1",
                  key2: "value2",
                  key3: 3} as IData;
```

The thing to remember is:  
Maps are handled as `Map<String,IData>`!  
That means your keys should not contain characters that normal CT strings can't handle.  
It also means that while the key is a string, the value is another [IData](/Vanilla/Data/IData/) object.  
You can even nest maps inside maps (that's what a lot of NBT-Data do):

```zenscript
val nestedMap = { key1: 
                    {
                        key1: "hello"
                    }
                } as IData;
```

## メンバーを取得中

残念ながら、上記のように作成された地図は不変ですので、メンバーを変更することはできません。  
マップメンバーを取得するには、マップのキー名を知る必要があります。 次に、以下を実行できます。

```zenscript
val mySecondMap = {key1: "value1",
                   key2: "value2",
                   key3: 3} as IData;

//Retrieves the member called "key1"
var k1 = mySecondMap.key1 as IData;
print(k1.asString());

//Retrieves the member called "key2"
var k2 = mySecondMap.memberGet("key2") as IData;
print(k2.asString());
```

## 地図の変更

互いにマップを追加したり、変更された値を持つ新しいマップを取得することができます。  
これはネストされたマップでも動作します！

```zenscript
val map1 as IData = {
    key1 : "hello"
    key3 : "test"
};

val map2 as IData = {
    key2 : "bye"
    key3 : "override"
};

print((map1 + map2).asString()); //Prints {key1 : "hello", key2 : "bye", key3 : "override"}



val map3 as IData = {
    key1 : "two",
    key2 : "two",
    key3 : "three"
};

print((map3 - "key1").asString()); //Prints {key2 : "two", key3 : "three"}

val map4 as IData = {
    key3 : "anything"
};

print((map3 - map4).asString()); //Prints {key1 : "two", key2 : "two"}
```