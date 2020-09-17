# ZenDoc

L'annotazione `@ZenDoc` consente agli sviluppatori di fornire ulteriori informazioni al comando `/ct dumpZS` .  
Più specificamente, sarà così:

![img](assets/zenDoc.png)

## Esempio

[CraftTweaker Test Project ZenDoc](https://github.com/jaredlll08/CraftTweaker/tree/1.12/CraftTweaker2-MC1120-Tests/src/main/java/crafttweaker/tests/wiki/ZenDocWiki.java)

```java
@ZenClass(value = "crafttweaker.tests. enDoc")
@ZenRegister
public class ZenDocWiki {
    @ZenMethod
    @ZenDoc("This prints a warning")
    public static void print() {
        CraftTweakerAPI. ogWarning("Stampa invocato!");
    }
}
```

## Quali metodi possono essere annotati <unk> <unk> Ulteriori informazioni

- È possibile annotare tutti i metodi, statici e nonstatici.
- Attualmente, questo influenzerà solo il file HTML generato quando si esegue [`/ct dumpzs`](/Vanilla/Commands/).
- Questa annotazione prende una Stringa come valore che è le informazioni aggiuntive che devono essere stampate.