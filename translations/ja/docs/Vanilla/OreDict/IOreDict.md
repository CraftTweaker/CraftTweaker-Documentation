# IOreDict

Forge OreDictionaryは、多くの異なるエントリを備えた巨大なLexiconのようなもので、各エントリはアイテムを取り付けることで記述されています。  
鉱石辞書について話すとき、人々は主に鉱石辞書全体ではなく、 [IOreDictEntities](/Vanilla/OreDict/IOreDictEntry/) を参照する。

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.oredict.IOreDict;`

## ReDictionaryを取得する方法

[`oreDict` global キーワード](/Vanilla/Global_Functions/) を使用して、OreDictionary を取得できます。

## メソッド

オレディックで何ができるでしょう？

### [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) を取得する

OreDictEntryは、すでに存在しているかどうかに関係なく、以下の3つの方法のいずれかを使用できます。  
oreDictEntry がまだ存在しない場合、作成されます。

```zenscript
oreDict.ingotIron;
oreDict.get("ingotIron");
oreDict["ingotIron"];
```

### 登録済みのすべての [IOreDictEntities](/Vanilla/OreDict/IOreDictEntry/) を繰り返しています

```zenscript
//The entries member is for retrieving all reDictionary entries!
val allEntries = oreDict.entries;

for oreDictEntry in allEntries{
    print(oreDictEntry.name);
}

//Alternatively, you can just iterate through oreDict
for entry in oreDict {
    print(entry.name);
}

```

## 鉱石辞書が存在するかどうかを確認する方法

`の` または `の` 演算子を使用して、 [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) が既に存在するかどうかを確認できます:

```zenscript
if (oreDict in "ingotIron") {
    print("ingotIron exists!");
}

if (oreDict has "ingotIron") {
    print("ingotIron exists!");
}


//Alternatively use the contains function:
if(oreDict.contains "ingotIron") {
    print("ingotIron exists!"); 
}
```