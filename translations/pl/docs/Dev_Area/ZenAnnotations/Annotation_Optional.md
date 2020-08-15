# Opcjonalnie

`@Optional` można przypisać parametr metody, aby zadeklarować go jako opcjonalny.  
Opcjonalne parametry można pominąć podczas wywoływania metody:

## Przykład

[The CraftTweaker's IFurnaceManager](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/recipes/IFurnaceManager.java):

```java
    @ZenMethod
    void remove(IIngredient output, @Optional IIngredient input);
```

[MCFurnaceManager (implementacja)](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Main/src/main/java/crafttweaker/mc1120/furnace/MCFurnaceManager.java)

```java
    @Override
    public void remove(IIngredient output @Optional IIngredient input) {
        if(output == null)
            rzuca nową IllegalArgumentException("output nie może być null");

        recipesToRemove. dd(nowa ActionFurnaceRemoveRecipe(wyjście, wejście));
}
```

Technicznie nie potrzebujesz `@Optional` w implementacji, ale możesz go dodać, jeśli chcesz być pewien. Możesz teraz zadzwonić do tej metody za pomocą jednego:

```java
piec.remove(wyjście); //Wejście zostanie ustawione na wartość zerową
piec.remove(wyjście, wejście);
```

## Jakie wartości są wstawiane dla pominiętych parametrów?

### Używanie tylko adnotacji

Wstawione jest `0`, `false` lub `null`, w zależności od oznaczonego typu:

Primitives będzie `0` (z wyjątkiem boolu, który będzie fałszywy, tak jak technicznie 0 również)  
Wszystkie obiekty będą `null`

### Korzystanie z adnotacji członków

| Członek      | Typ             | Wartość domyślna |
| ------------ | --------------- | ---------------- |
| wartość      | ciąg znaków     | `""`             |
| Klasa metody | java.lang.Class | `Optional.class` |
| Nazwa metody | ciąg znaków     | `"getValue"`     |

Opcjonalna adnotacja obsługuje również wartości domyślne.  
Jeśli chcesz podać wartość domyślną, możesz to zrobić, dając `wartość` członkowi ciągu reprezentującemu parametr.

Jeśli chcesz tylko domyślny prymitywny, to jesteś ustawiony.

```java
@ZenMethod
public static void print(@Optional("heyho") String value) {
    CraftTweakerAPI. ogError(value);
}


@ZenMethod
publiczna statyczna unieważnienie wydruku 3(@Optional("1") int value) {
    CraftTweakerAPI.logError(String.valueOf(value));
}
```

Jeśli chcesz domyślny obiekt lub domyślny prymitywny, który nie jest stałą kompilacji (wszyscy członkowie adnotacji muszą być stałymi czasami! , możesz ustawić pozostałych dwóch członków: To zastąpi parametr wywołaniem podanej (statycznej) metody `. ethodName(wartość`. Jeśli nie znaleziono takiej metody, błąd i wstaw wartość null.

```java
@ZenMethod
publicznego statycznego wydruku 2(@Optional(value = "minecraft:iron_ingot", methodClass = Optionals.class, methodName = "getFromString") IItemStack) {
    print(wartość. etDisplayName());
}


publiczny statyczny IItemStack getFromString(String value) {
    zwraca BracketHandlerItem.getItem(wartość, 0);
}
```

## Jakie parametry mogą być adnotowane?

Wszystkie parametry mogą być adnotowane, ale należy pamiętać, że parametry opatrzone adnotacją muszą znajdować się na końcu, o ile byłoby to technicznie wykonalne, połączenia metodowe nie przyniosłyby rezultatów:

```java
myMethod(@Opcjonalna nazwa ciągu, numer int)
```

Wywołanie tej metody z tylko intencją zawsze nie powiodło się!