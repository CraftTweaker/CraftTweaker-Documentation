# Tylko Modyfikacja

Adnotacja `@ModOnly` jest tak prosta, jak sugerowana nazwa:  
Rejestruje tylko ZenClass jeśli podany mod jest załadowany.

## Przykład

[Modyfikacja projektu testowego CraftTweaker](https://github.com/jaredlll08/CraftTweaker/tree/1.12/CraftTweaker2-MC1120-Tests/src/main/java/crafttweaker/tests/wiki/ModOnlyWiki.java)

```java
@ModOnly(value = "mcp")
@ZenClass(wartość = "crafttweaker.tests. odOnly")
@ZenRegister
klasa publiczna ModOnlyWiki {
    @ZenMethod
    public statstatic void print() {
        CraftTweakerAPI. ogInfo("print issued");
    }
}
```

## Jakie klasy mogą być opatrzone || Dodatkowe informacje

- Możesz opatrzyć wszystkie klasy Java, które mają również adnotację [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/). Technicznie możesz zarejestrować wszystkie klasy, ale tylko tam będzie to miało wpływ.
- Adnotacja wymaga wartości ciągu, która reprezentuje modName (`isModLoaded(annotation.getValue())` musi zwracać true moda jest załadowany)