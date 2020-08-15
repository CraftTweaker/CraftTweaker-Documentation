# ZenDoc

Adnotacja `@ZenDoc` pozwala programistom na dostarczenie dodatkowych informacji do komendy `/ct dumpZS` .  
Bardziej szczegółowo, będzie wyglądać tak:

![img](assets/zenDoc.png)

## Przykład

[[PLACEHOLDER] CraftTweaker Test Project ZenDoc](https://github.com/jaredlll08/CraftTweaker/tree/1.12/CraftTweaker2-MC1120-Tests/src/main/java/crafttweaker/tests/wiki/ZenDocWiki.java)

```java
@ZenClass(wartość = "crafttweaker.tests. enDoc")
@ZenRegister
Publiczna klasa ZenDocWiki {
    @ZenMethod
    @ZenDoc("Drukuje ostrzeżenie")
    publiczny statyczny wydruk () {
        CraftTweakerAPI. ogWarning("Wydrukuj wywołane!");
    }
}
```

## Jakie metody mogą być opatrzone || Dodatkowe informacje

- Możesz opatrzyć wszystkie metody, statyczne i niestatyczne.
- Obecnie będzie to miało wpływ na wygenerowany plik HTML tylko podczas uruchamiania [`/ct dumpzs`](/Vanilla/Commands/).
- Ta adnotacja przyjmuje jeden ciąg jako wartość, która jest dodatkowymi informacjami, które należy wydrukować.