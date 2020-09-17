# Método

Un ZenMethod es un método java que ha sido expuesto a ZenScript.

Se puede acceder a los métodos estáticos utilizando el [nombre de ZenClass'](/Dev_Area/ZenAnnotations/Annotation_ZenClass/), los no estáticos utilizan `object.methodName(argumentos,..);`.  
La anotación de ZenMethod puede estar junto a otras [anotaciones](/Dev_Area/ZenAnnotations/ZenAnnotation/), como la [Anunciación de ZenOperator](/Dev_Area/ZenAnnotations/Annotation_ZenOperator/).

## Qué métodos se pueden anotar || Información adicional

- Puede anotar todos los métodos, estáticos y no estáticos. 
- Los métodos anotados necesitan un parámetro adicional cuando se encuentra en un [ZenExpansion](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/). Este parámetro es la instancia de clase expandida
- Al anotar un Método estático en un [ZenExpansion](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/) (por ejemplo un método de fábrica) necesitará utilizar [ZenMethodStatic](/Dev_Area/ZenAnnotations/Annotation_ZenMethodStatic/) en su lugar.

## Ejemplo de clase

```java
@ZenClass(value = "crafttweaker.tests.devWikiTest")
@ZenRegister
public class DevWikiTest {

    //statics que será llamado usando crafttweaker.tests.devWikiTest. ethodName(argumentos);
    @ZenMethod
    public static DevWikiTest staticMethod(int arg1) {
        return new DevWikiTest(arg1);
    }

    @ZenMethod
    public static void staticMethod2() {
        CraftTweakerAPI. ogInfo("staticMethod2 llamado!");
    }

    @ZenMethod
    public static void staticMethodVarArg(int... args) {
        CraftTweakerAPI.logInfo("staticMethod3 llamado con " + args. ength + " arguments");
    }



    //nonstatics which sill be called using instance. ethodName(argumentos);
    @ZenMethod
    public int getValue() {
        return value;
    }   

    @ZenMethod
    public void print() {
        CraftTweakerAPI. ogInfo("DevWikiTest Object with value " + value);
    }

    @ZenMethod
    public void printWithVarArg(int... args) {
        CraftTweakerAPI.logInfo("Nonstatic called with " + args. ength + " arguments");
    }


    valor final privado;

    public DevWikiTest(int value) {
        esto. alue = valor;
    }
}
```

Guión ZS

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