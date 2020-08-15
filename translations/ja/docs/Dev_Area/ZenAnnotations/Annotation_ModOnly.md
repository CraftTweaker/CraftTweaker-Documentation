# ModOnly

`@ModOnly` 注釈は名前の通りシンプルです:  
指定されたModがロードされた場合にのみZenClassを登録します。

## 例

[CraftTweaker Test Project ModOnly](https://github.com/jaredlll08/CraftTweaker/tree/1.12/CraftTweaker2-MC1120-Tests/src/main/java/crafttweaker/tests/wiki/ModOnlyWiki.java)

```java
@ModOnly(value = "mcp")
@ZenClass(value = "crafttweaker.tests.modOnly")
@ZenRegister
public class ModOnlyWiki {
    @ZenMethod
    public static void print() {
        CraftTweakerAPI.logInfo("print issued");
    }
}
```

## どのクラスに注釈を付けることができますか|| 追加情報

- [`@ZenRegister` Annotation](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/) を持つすべての Java クラスに注釈を付けることができます。 技術的には、すべてのクラスを登録することができますが、そこにのみ影響があります。
- 注釈にはmodName を表す文字列の値が必要です (`isModLoaded(annotation.getValue())` は読み込まれた mod の true を返す必要があります)