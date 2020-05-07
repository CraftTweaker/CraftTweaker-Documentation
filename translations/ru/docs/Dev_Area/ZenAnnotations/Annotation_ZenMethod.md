# ZenMethod

Метод ZenScript &mdash; это метод Java, которые доступен в ZenScript.

Static Methods can be accessed using the [ZenClass' Name](/Dev_Area/ZenAnnotations/Annotation_ZenClass/), nonstatics use `object.methodName(arguments,..);`.  
The ZenMethod annotation can stand alongside other [Annotations](/Dev_Area/ZenAnnotations/ZenAnnotation/), like the [ZenOperator Annotation](/Dev_Area/ZenAnnotations/Annotation_ZenOperator/).

## Какие методы могут быть аннотированы || Дополнительная информация

- Вы можете помечать все методы: и статические, и нет. 
- Помеченные методы должны иметь один дополнительный параметр, если внутри [ZenExpansion](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/). Этот параметр должен принимать экземпляр расширенного класса.
- When annotating a static Method in a [ZenExpansion](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/) (for example a factory method) you will need to use [ZenMethodStatic](/Dev_Area/ZenAnnotations/Annotation_ZenMethodStatic/) instead.

## Пример класса

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

Скрипт ZS

```zenscript
val instance = crafttweaker.tests.devWikiTest.staticMethod(10);
crafttweaker.tests.devWikiTest.staticMethod2();
crafttweaker.tests.devWikiTest.staticMethodVarArg(10);
crafttweaker.tests.devWikiTest.staticMethodVarArg(10,20,30,40);

print(instance.getValue());
instance.print();
instance.printWithVarArg(10);
instance.printWithVarArg(10,20,30,40);
```