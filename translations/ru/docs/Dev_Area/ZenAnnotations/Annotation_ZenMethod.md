# ZenMethod

Метод ZenScript &mdash; это метод Java, которые доступен в ZenScript.

Static Methods can be accessed using the [ZenClass' Name](/Dev_Area/ZenAnnotations/Annotation_ZenClass/), nonstatics use `object.methodName(arguments,..);`.  
The ZenMethod annotation can stand alongside other [Annotations](/Dev_Area/ZenAnnotations/ZenAnnotation/), like the [ZenOperator Annotation](/Dev_Area/ZenAnnotations/Annotation_ZenOperator/).

## Какие методы могут быть аннотированы || Дополнительная информация

- Вы можете помечать все методы: и статические, и нет. 
- Помеченные методы должны иметь один дополнительный параметр, если внутри [ZenExpansion](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/). Этот параметр должен принимать экземпляр расширенного класса.
- При аннотации статического метода в [ZenExpansion](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/) (например, заводской метод), вместо этого потребуется использовать [ZenMethodStatic](/Dev_Area/ZenAnnotations/Annotation_ZenMethodStatic/).

## Пример класса

```java
@ZenClass(value = "crafttweaker.tests.devWikiTest")
@ZenRegister
публичный класс DevWikiTest {

    //statics, который будет называться с помощью crafttweaker.tests.devWikiTest. ethodName(аргументы);
    @ZenMethod
    публичный статический DevWikiTest staticMethod(int arg1) {
        return new DevWikiTest(arg1);
    }

    @ZenMethod
    public static void staticMethod2() {
        CraftTweakerAPI. ogInfo("staticMethod2 называется!");
    }

    @ZenMethod
    публичная статическая пустая staticMethodVarArg(int... args) {
        CraftTweakerAPI.logInfo("staticMethod3 called with " + args. ength + " arguments");
    }



    //nonstatics, которые вызываются с помощью экземпляра. ethodName(аргументы);
    @ZenMethod
    public int getValue() {
        return value;
    }   

    @ZenMethod
    public void print() {
        CraftTweakerAPI. ogInfo("Объект DevWikiTest со значением " + значение);
    }

    @ZenMethod
    public void printWithVarArg(int... args) {
        CraftTweakerAPI.logInfo("Nonstatic called with " + args. ength + " arguments");
    }


    private final int value;

    public DevWikiTest(int value) {
        this. alue = значение;
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