# ZenExpansion

A ZenExpansion is, like [`@ZenClass`](/Dev_Area/ZenAnnotations/Annotation_ZenClass/), used to annotate a Class that should be accessible from within ZS.  
Unlike ZenClasses however, ZenExpansions are used to expand the functionality of already existing ZenClasses.

## 例

```java
@ZenExpansion("crafttweaker.item.IItemStack")
@ZenRegister
public class Expansion {
    @ZenMethod
    public static void print(IItemStack stack) {
        CraftTweakerAPI.logInfo("STACKKKKK: " + stack.getDisplayName());
    }
}
```

これにより人々が行うことができます

```zenscript
<minecraft:iron_ingot>.print();
```

これは拡張なので、最初のパラメータはクラスのインスタンスです!  
このパラメータはZSでは使用できません。

## どのクラスに注釈を付けることができますか|| 追加情報

- すべてのメソッドは展開されたクラスのインスタンスを表すパラメータから始める必要があります。 また、展開内のすべてのメソッドは静的でなければなりません (... (および公開)
- すべてのJavaクラスに注釈を付けることができます。
- 注釈に文字列の値を付ける必要があります(例: `crafttweaker.item.IItemStack`)。 この文字列の値は既存の ZenClassの名前を表す必要があります。
- クラスを宣言した後で、ZenExpansionを登録する必要があります。 [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/) を使用することをお勧めします。