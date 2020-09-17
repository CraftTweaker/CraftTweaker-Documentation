# ZenDoc

The `@ZenDoc` annotation allows developers to provide additional information to the `/ct dumpZS` command.  
More specifically, it will look like this:

![img](assets/zenDoc.png)

## 例

[CraftTweaker Test Project ZenDoc](https://github.com/jaredlll08/CraftTweaker/tree/1.12/CraftTweaker2-MC1120-Tests/src/main/java/crafttweaker/tests/wiki/ZenDocWiki.java)

```java
@ZenClass(value = "crafttweaker.tests.zenDoc")
@ZenRegister
public class ZenDocWiki {
    @ZenMethod
    @ZenDoc("This prints a warning")
    public static void print() {
        CraftTweakerAPI.logWarning("Print invoked!");
    }
}
```

## どのようなメソッドに注釈を付けることができますか|| 追加情報

- 静的および非静的のすべてのメソッドに注釈を付けることができます。
- 現在のところ、 [`/ct dumpzs`](/Vanilla/Commands/) を実行すると、生成された HTML ファイルにのみ影響します。
- このアノテーションは、出力されるべき付加的な情報である値として 1 つの String を取ります。