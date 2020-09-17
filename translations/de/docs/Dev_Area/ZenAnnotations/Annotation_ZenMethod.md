# ZenMethode

Eine ZenMethod ist eine Java-Methode, die ZenScript ausgesetzt wurde.

Statische Methoden können mit dem [ZenClass' Name](/Dev_Area/ZenAnnotations/Annotation_ZenClass/)aufgerufen werden, Nichtstatiker verwenden `object.methodName(arguments,..);`.  
Die ZenMethod-Anmerkung kann neben anderen [Anmerkungen](/Dev_Area/ZenAnnotations/ZenAnnotation/)stehen, wie die [ZenOperator-Anmerkung](/Dev_Area/ZenAnnotations/Annotation_ZenOperator/).

## Welche Methoden können kommentiert werden || Zusätzliche Informationen

- Sie können alle Methoden, statisch und nichtstatisch, kommentieren. 
- Annotierte Methoden benötigen einen zusätzlichen Parameter, wenn sie in einer [ZenExpansion](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/) enthalten sind. Dieser Parameter ist die Instanz der erweiterten Klasse
- Wenn Sie eine statische Methode in einer [ZenExpansion](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/) (zum Beispiel eine Fabrikmethode) kommentieren, müssen Sie stattdessen [ZenMethodStatic](/Dev_Area/ZenAnnotations/Annotation_ZenMethodStatic/) verwenden.

## Beispielklasse

```java
@ZenClass(value = "crafttweaker.tests.devWikiTest")
@ZenRegister
public class DevWikiTest {

    //statics die mittels crafttweaker.tests.devWikiTest aufgerufen werden. ethodName(Argumente);
    @ZenMethod
    public static DevWikiTest staticMethod(int arg1) {
        return new DevWikiTest(arg1);
    }

    @ZenMethod
    public static void staticMethod2() {
        CraftTweakerAPI. ogInfo("staticMethod2 genannt!");
    }

    @ZenMethod
    public static void staticMethodVarArg(in... args) {
        CraftTweakerAPI.logInfo("staticMethod3 mit " + args. ength + " Argumente ");
    }



    //nonstatics which sill be called using instance. ethodName(Argumente);
    @ZenMethod
    public int getValue() {
        return value;
    }   

    @ZenMethod
    public void print() {
        CraftTweakerAPI. ogInfo("DevWikiTest Objekt mit dem Wert " + Wert);
    }

    @ZenMethod
    public void printWithVarArg(in... args) {
        CraftTweakerAPI.logInfo("Nicht statisch aufgerufen mit " + args. ength + " Argumente ");
    }


    private Endeintenwert;

    public DevWikiTest(int value) {
        dies. alue = value;
    }
}
```

ZS-Skript

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