# ZenMethod

ZenMethod は、ZenScript に公開されている Java メソッドです。

Static Methods can be accessed using the [ZenClass' Name](/Dev_Area/ZenAnnotations/Annotation_ZenClass/), nonstatics use `object.methodName(arguments,..);`.  
The ZenMethod annotation can stand alongside other [Annotations](/Dev_Area/ZenAnnotations/ZenAnnotation/), like the [ZenOperator Annotation](/Dev_Area/ZenAnnotations/Annotation_ZenOperator/).

## どのようなメソッドに注釈を付けることができますか|| 追加情報

- 静的および非静的のすべてのメソッドに注釈を付けることができます。 
- 注釈付きメソッドは、 [ZenExpansion](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/) の中で、追加のパラメータを1つ必要があります。 そのパラメータは展開されたクラスのインスタンスです
- [ZenExpansion](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/) で静的メソッドに注釈を付ける場合（例えばファクトリメソッド）、代わりに [ZenMethodStatic](/Dev_Area/ZenAnnotations/Annotation_ZenMethodStatic/) を使用する必要があります。

## クラスの例

```java
@ZenClass(value = "crafttweaker.tests.devWikiTest")
@ZenRegister
public class DevWikiTest {

    //statics which will be called using crafttweaker.tests.devWikiTest.methodName(arguments);
    @ZenMethod
    public static DevWikiTest staticMethod(int arg1) {
        return new DevWikiTest(arg1);
    }

    @ZenMethod
    public static void staticMethod2() {
        CraftTweakerAPI.logInfo("staticMethod2 called!");
    }

    @ZenMethod
    public static void staticMethodVarArg(int... args) {
        CraftTweakerAPI.logInfo("staticMethod3 called with " + args.length + " arguments");
    }



    //nonstatics which sill be called using instance.methodName(arguments);
    @ZenMethod
    public int getValue() {
        return value;
    }   

    @ZenMethod
    public void print() {
        CraftTweakerAPI.logInfo("DevWikiTest Object with value " + value);
    }

    @ZenMethod
    public void printWithVarArg(int... args) {
        CraftTweakerAPI.logInfo("Nonstatic called with " + args.length + " arguments");
    }


    private final int value;

    public DevWikiTest(int value) {
        this.value = value;
    }
}
```

ZSスクリプト

```zenscript
val instead = crafttweaker.tests.devWikiTest.staticMethod(10);
crafttweaker.tests.devWikiTest.staticMethodVarArg(10);
crafttweaker.tests.WikiTest.staticVarArg(10,20,30,40);
crafttweaker.tests.staticMethodVarArg(10,20,30,40);

print(instance.getValue));
instance.printWithVarArg(10);
instance.printWithVarArg(10);
instance.printWithVarArg(10,20,30,40);
```