# Iterable

IterableAnnotationは、クラスに適用して、ZS上でのイテレーティングを可能にすることができます。  
IterableAnnotationには3種類あります。

- `@IterableSimple` ( `Iterable` を実装する必要がある )
- `@IterableList` ( `List` を実装する必要があります)
- `@IterableMap` ( `Map` を実装する必要があります )

## 例

[CraftTweakerのIOreDict](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/oredict/IOreDict.java)

```java
@ZenClass("crafttweaker.oredict.IOreDict")
@IterableSimple("crafttweaker.oredict.IOreDictEntry")
@ZenRegister
public interface IOreDict extends Iterable<IOreDictEntry> {


    @ZenMemberGetter
    @ZenOperator(OperatorType.INDEXGET)
    @ZenMethod
    IOreDictEntry get(String name);

    @ZenGetter("entries")
    List<IOreDictEntry> getEntries();

    @ZenOperator(OperatorType.CONTAINS)
    @ZenMethod
    boolean contains(String name);
}
```

[MCOreDict (implementation)](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Main/src/main/java/crafttweaker/mc1120/oredict/MCOreDict.java)

```java
    @Override
    public Iterator<IOreDictEntry> iterator() {
        return Arrays.asList(OreDictionary.getOreNames())
                .stream()
                .map(CraftTweakerMC::getOreDict)
                .iterator();

}
```

## それはZSでどのように使えるでしょうか?

```zenscript
for oreDictEntry in oreDict {
    print(oreDictEntry.name);
}
```

## クラスに注釈を付けることができるもの || 追加情報

必要なインターフェイスを実装するすべてのクラスに注釈を付けることができます。  
Iterated [ZenScriptのクラス名](/Dev_Area/ZenAnnotations/Annotation_ZenClass/) を参照する文字列値を指定する必要があります。