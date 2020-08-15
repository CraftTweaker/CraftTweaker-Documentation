# ZenDoc

Die `@ZenDoc` Anmerkung erlaubt Entwicklern zusätzliche Informationen für den `/ct dumpZS` Befehl bereitzustellen.  
Genauer gesagt, sieht es so aus:

![img](assets/zenDoc.png)

## Beispiel

[CraftTweaker Testprojekt ZenDoc](https://github.com/jaredlll08/CraftTweaker/tree/1.12/CraftTweaker2-MC1120-Tests/src/main/java/crafttweaker/tests/wiki/ZenDocWiki.java)

```java
@ZenClass(value = "crafttweaker.tests. enDoc")
@ZenRegister
public class ZenDocWiki {
    @ZenMethod
    @ZenDoc("Dies gibt eine Warnung aus")
    public static void print() {
        CraftTweakerAPI. ogWarning("Drucken aufgerufen!");
    }
}
```

## Welche Methoden können kommentiert werden || Zusätzliche Informationen

- Sie können alle Methoden, statisch und nichtstatisch, kommentieren.
- Derzeit wirkt sich dies nur auf die generierte HTML-Datei aus, wenn [`/ct dumpzs`](/Vanilla/Commands/) ausgeführt wird.
- Diese Anmerkung nimmt einen String als Wert, der die zusätzlichen Informationen ist, die gedruckt werden sollen.