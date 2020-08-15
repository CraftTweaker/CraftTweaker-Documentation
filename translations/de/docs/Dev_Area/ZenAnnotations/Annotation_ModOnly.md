# Nur Modular

Die `@ModOnly` Anmerkung ist so einfach, wie der Name vermuten lässt:  
Es registriert nur eine ZenClass wenn die angegebene Mod geladen ist.

## Beispiel

[CraftTweaker Test-Projekt nur](https://github.com/jaredlll08/CraftTweaker/tree/1.12/CraftTweaker2-MC1120-Tests/src/main/java/crafttweaker/tests/wiki/ModOnlyWiki.java)

```java
@ModOnly(value = "mcp")
@ZenClass(value = "crafttweaker.tests. odOnly")
@ZenRegister
public class ModOnlyWiki {
    @ZenMethod
    public static void print() {
        CraftTweakerAPI. ogInfo("Ausgabe drucken");
    }
}
```

## Welche Klassen können kommentiert werden || Zusätzliche Informationen

- Sie können alle Java Klassen kommentieren, die auch die [`@ZenRegister` Anmerkung](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/) haben. Technisch gesehen können Sie alle Klassen registrieren, aber nur dort wird es Auswirkungen haben.
- Die Annotation erfordert einen String-Wert, der den modName repräsentiert (`isModLoaded(annotation.getValue())` muss true des Mods zurückgeben)