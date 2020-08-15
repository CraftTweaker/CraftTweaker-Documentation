# ZenCaster

Uno ZenCaster denota un metodo che può essere chiamato usando il token `come` .  
ZenCasters può essere utilizzato per convertire un tipo in un altro (ad es. [Stringhe in IData](https://github.com/jaredlll08/CraftTweaker/blob/30793645d58adeed12dfff50f31206a63a50d8de/CraftTweaker2-API/src/main/java/crafttweaker/zenscript/expand/ExpandString.java#L30-L33)).

## Esempio

```java
@ZenExpansion("crafttweaker.item. ItemStack")
@ZenRegister
public class Expansion {
    @ZenMethod
    public static void print(IItemStack stack) {
        CraftTweakerAPI. ogInfo("STACKKKKK: " + stack. etDisplayName());
    }

    @ZenCaster
    public static IOreDictEntry asOreDict(IItemStack stack) {
        return stack. etOres().get(0);
    }
}
```

Se qualcuno ora chiamasse questo, otterrebbe un oreDictEntry:

```zenscript
val oreDict = <minecraft:iron_ingot> come IOreDictEntry;
```

## Quali metodi possono essere annotati <unk> <unk> Ulteriori informazioni

- È possibile annotare tutti i metodi non statici (a meno che in una ZenExpansion, in quanto consistono solo di statica)
- I metodi annotati hanno bisogno di un parametro quando in una [ZenExpansion](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/), nessuno se sono in una [ZenClass](/Dev_Area/ZenAnnotations/Annotation_ZenClass/).
- Non fare affidamento su ZenCasters in [ZenClasses](/Dev_Area/ZenAnnotations/Annotation_ZenClass/), funzionano solo in modo affidabile in [ZenExpansions](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/).