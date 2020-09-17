# ModOnly

L'annotazione `@ModOnly` è semplice come suggerisce il nome:  
Registra una ZenClass solo se la mod fornita viene caricata.

## Esempio

[CraftTweaker Test Project ModOnly](https://github.com/jaredlll08/CraftTweaker/tree/1.12/CraftTweaker2-MC1120-Tests/src/main/java/crafttweaker/tests/wiki/ModOnlyWiki.java)

```java
@ModOnly(value = "mcp")
@ZenClass(value = "crafttweaker.tests. odOnly")
@ZenRegister
public class ModOnlyWiki {
    @ZenMethod
    public static void print() {
        CraftTweakerAPI. ogInfo("print issued");
    }
}
```

## Quali classi possono essere annotati <unk> <unk> Ulteriori informazioni

- Puoi annotare tutte le classi di Java che hanno anche l'annotazione [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/). Tecnicamente, è possibile registrare tutte le classi, ma solo lì avrà un impatto.
- L'annotazione richiede un valore Stringa che rappresenta il modName (`isModLoaded(annotation.getValue())` deve restituire vero della mod è caricato)