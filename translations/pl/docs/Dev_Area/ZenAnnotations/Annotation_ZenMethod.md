# Metoda ZenMethod

Metoda ZenMethod jest metodą java, która była narażona na ZenScript.

Dostęp do metod statycznych można uzyskać za pomocą [ZenClass' Name](/Dev_Area/ZenAnnotations/Annotation_ZenClass/), niestatycznie użyj `object.methodName(arguments,..);`.  
Adnotacja ZenMethod może pozostać obok innych [Adnotacji](/Dev_Area/ZenAnnotations/ZenAnnotation/), jak [Adnotacja ZenOperator](/Dev_Area/ZenAnnotations/Annotation_ZenOperator/).

## Jakie metody mogą być opatrzone || Dodatkowe informacje

- Możesz opatrzyć wszystkie metody, statyczne i niestatyczne. 
- Annotated Methods need one additional parameter when in a [ZenExpansion](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/). Ten parametr jest instancją rozszerzonej klasy
- Kiedy adnotuje się metodę statyczną w [ZenExpansion](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/) (na przykład metoda fabryczna) musisz zamiast tego użyć [ZenMethodStatic](/Dev_Area/ZenAnnotations/Annotation_ZenMethodStatic/).

## Przykładowa klasa

```java
@ZenClass(value = "crafttweaker.tests.devWikiTest")
@ZenRegister
klasa publiczna DevWikiTest {

    //statics które będą nazywane za pomocą crafttweaker.tests.devWikiTest. ethodName(argumenty);
    @ZenMethod
    publiczny statyczny DevWikiTest staticMethod(int arg1) {
        return new DevWikiTest(arg1);
    }

    @ZenMethod
    publiczny statyczny staticMethod2() {
        CraftTweakerAPI. ogInfo("staticMethod2 zwalił!");
    }

    @ZenMethod
    public statid staticMethodVarArg(int... args) {
        CraftTweakerAPI.logInfo("staticMethod3 wywołane z " + args. ength + " arguments");
    }



    //nonstatics które mają być wywołane za pomocą instancji. ethodName(argumenty);
    @ZenMethod
    public int getValue() {
        zwraca wartość;
    }   

    @ZenMethod
    public void print() {
        CraftTweakerAPI. ogInfo("Obiekt DevWikiTest z wartością " + wartość);
    }

    @ZenMethod
    publiczna unieważnienie printWithVarArg(int... args) {
        CraftTweakerAPI.logInfo("Nonstatic wywołany z " + args. ength + " arguments");
    }


    ostateczna wartość intint;

    publiczna devWikiTest(wartość int) {
        to. alue = wartość;
    }
}
```

Skrypt ZS

```zenscript
instancja walna = crafttweaker.tests.devWikiTest.staticMethod(10);
crafttweaker.tests.devWikiTest.staticMethod2();
crafttweaker.tests.devWikiTest.staticMethodVarArg(10);
crafttweaker.tests.devWikiTest.staticMethodVarArg(10,20,30,40);

print(instance.getValue());
instance.print();
instance.printWithVarArg(10);
instance.printWithVarArg(10,20,30,40);
```