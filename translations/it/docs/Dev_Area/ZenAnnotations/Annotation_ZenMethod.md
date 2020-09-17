# ZenMethod

Un metodo ZenMethod è un metodo java che è stato esposto a ZenScript.

È possibile accedere ai metodi statici utilizzando il nome [ZenClass'](/Dev_Area/ZenAnnotations/Annotation_ZenClass/), nonstatics use `object.methodName(arguments,..);`.  
L'annotazione ZenMethod può stare accanto ad altre [Annotazioni](/Dev_Area/ZenAnnotations/ZenAnnotation/), come la [Annotazione ZenOperator](/Dev_Area/ZenAnnotations/Annotation_ZenOperator/).

## Quali metodi possono essere annotati <unk> <unk> Ulteriori informazioni

- È possibile annotare tutti i metodi, statici e nonstatici. 
- I metodi annotati richiedono un parametro aggiuntivo quando in [ZenExpansion](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/). Questo parametro è l'istanza della classe espansa
- Quando annotiamo un metodo statico in un [ZenExpansion](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/) (per esempio un metodo di fabbrica) dovrai invece usare [ZenMethodStatic](/Dev_Area/ZenAnnotations/Annotation_ZenMethodStatic/).

## Classe Di Esempio

```java
@ZenClass(value = "crafttweaker.tests.devWikiTest")
@ZenRegister
public class DevWikiTest {

    //statics which will be called using crafttweaker.tests.devWikiTest. ethodName(argomenti);
    @ZenMethod
    public static DevWikiTest staticMethod(int arg1) {
        return new DevWikiTest(arg1);
    }

    @ZenMethod
    public static void staticMethod2() {
        CraftTweakerAPI. ogInfo("staticMethod2 chiamato!");
    }

    @ZenMethod
    public static void staticMethodVarArg(int... args) {
        CraftTweakerAPI.logInfo("staticMethod3 chiamato con " + args. ength + " arguments");
    }



    //nonstatics which sill be called using instance. ethodName(argomenti);
    @ZenMethod
    public int getValue() {
        return value;
    }   

    @ZenMethod
    public void print() {
        CraftTweakerAPI. ogInfo("DevWikiTest Object con valore " + value);
    }

    @ZenMethod
    public void printWithVarArg(int... args) {
        CraftTweakerAPI.logInfo("Nonstatico chiamato con " + args. ength + " arguments");
    }


    private final int value;

    public DevWikiTest(int value) {
        this. alue = valore;
    }
}
```

Script ZS

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