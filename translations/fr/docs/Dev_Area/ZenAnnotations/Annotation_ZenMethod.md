# Méthode Zen

Une méthode ZenMethod est une méthode java qui a été exposée à ZenScript.

Les méthodes statiques peuvent être accédées en utilisant le [Nom de la classe Zen](/Dev_Area/ZenAnnotations/Annotation_ZenClass/), les non-statiques utilisent `object.methodName(arguments,..);`.  
L'annotation ZenMethod peut se tenir aux côtés d'autres [Annotations](/Dev_Area/ZenAnnotations/ZenAnnotation/), comme la [Annotation ZenOperator](/Dev_Area/ZenAnnotations/Annotation_ZenOperator/).

## Quelles méthodes peuvent être annotées || Informations supplémentaires

- Vous pouvez annoter toutes les méthodes, statiques et non statiques. 
- Les Méthodes Annotées ont besoin d'un paramètre supplémentaire lorsque dans une [ZenExpansion](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/). Ce paramètre est l'instance de la classe étendue
- Lors de l'annotation d'une méthode statique dans une [ZenExpansion](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/) (par exemple une méthode d'usine) vous devrez utiliser [ZenMethodStatic](/Dev_Area/ZenAnnotations/Annotation_ZenMethodStatic/) à la place.

## Exemple de classe

```java
@ZenClass(value = "crafttweaker.tests.devWikiTest")
@ZenRegister
public class DevWikiTest {

    //statics qui seront appelés en utilisant crafttweaker.tests.devWikiTest. nomethod (arguments);
    @ZenMethod
    public static DevWikiTest staticMethod(int arg1) {
        return new DevWikiTest(arg1);
    }

    @ZenMethod
    public static void statique staticMethod2() {
        CraftTweakerAPI. ogInfo("staticMethod2 appelé!");
    }

    @ZenMethod
    public static void staticMethodVarArg(int... args) {
        CraftTweakerAPI.logInfo("staticMethod3 appelé avec " + args. ength + " arguments");
    }



    //non-statiques qui sill être appelé en utilisant instance. nomethod (arguments);
    @ZenMethod
    int public getValue() {
        valeur retournée;
    }   

    @ZenMethod
    public void print() {
        CraftTweakerAPI. ogInfo("DevWikiTest Object avec valeur " + valeur);
    }

    @ZenMethod
    public void printWithVarArg(int... args) {
        CraftTweakerAPI.logInfo("Nonstatic called with " + args. ength + " arguments");
    }


    valeur d'int final privée ;

    public DevWikiTest(int value) {
        ceci. alue = valeur;
    }
}
```

Script ZS

```zenscript
instance val = crafttweaker.tests.devWikiTest.staticMethod(10);
crafttweaker.tests.devWikiTest.staticMethod2();
crafttweaker.tests.devWikiTest.staticMethodVarArg(10);
crafttweaker.tests.devWikiTest.staticMethodVarArg(10,20,30,40);

print(instance.getValue());
instance.print();
instance.printWithVarArg(10);
instance.printWithVarArg(10,20,30,40);
```