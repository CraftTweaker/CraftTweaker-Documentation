# ZenCaster

A ZenCaster denotes a method that can be called using the `as` token.  
ZenCasters can be used to convert one type into another (e.g. [Strings to IData](https://github.com/jaredlll08/CraftTweaker/blob/30793645d58adeed12dfff50f31206a63a50d8de/CraftTweaker2-API/src/main/java/crafttweaker/zenscript/expand/ExpandString.java#L30-L33)).

## 例

```java
@ZenExpansion("crafttweaker.item.IItemStack")
@ZenRegister
public class Expansion {
    @ZenMethod
    public static void print(IItemStack stack) {
        CraftTweakerAPI.logInfo("STACKKKKK: " + stack.getDisplayName());
    }

    @ZenCaster
    public static IOreDictEntry asOreDict(IItemStack stack) {
        return stack.getOres().get(0);
    }
}
```

誰かがこれを呼び出すと、以下のようになります。

```zenscript
val oreDict = <minecraft:iron_ingot> as IOreDictEntry;
```

## どのようなメソッドに注釈を付けることができますか|| 追加情報

- すべての非静的メソッドに注釈を付けることができます (ZenExpansionでは静的なメソッドのみで構成されている場合を除きます)
- 注釈付きメソッドは、 [ZenExpansion](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/)内にある場合は、 [ZenClass](/Dev_Area/ZenAnnotations/Annotation_ZenClass/) 内にある場合は、1 つのパラメータを必要とします。
- [ZenClasses](/Dev_Area/ZenAnnotations/Annotation_ZenClass/)では、ZenCasters に依存しないでください。 [ZenExpansions](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/) でのみ確実に動作します。