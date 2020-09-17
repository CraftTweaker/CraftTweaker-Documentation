# ZenCaster

A ZenCaster denotes a method that can be called using the `as` token.  
ZenCasters can be used to convert one type into another (e.g. [Strings to IData](https://github.com/jaredlll08/CraftTweaker/blob/30793645d58adeed12dfff50f31206a63a50d8de/CraftTweaker2-API/src/main/java/crafttweaker/zenscript/expand/ExpandString.java#L30-L33)).

## Beispiel

```java
@ZenExpansion("crafttweaker.item. ItemStack")
@ZenRegister
public class Expansion {
    @ZenMethod
    public static void print(IItemStack stack) {
        CraftTweakerAPI. ogInfo("STACKKKK: " + Stack. etDisplayName());
    }

    @ZenCaster
    public static IOreDictEntry asOreDict(IItemStack stack) {
        return stack. etOres().get(0);
    }
}
```

Wenn jemand dies jetzt nennen würde, würde er einen OreDictEintrag bekommen:

```zenscript
val oreDict = <minecraft:iron_ingot> als IOreDictEntry;
```

## Welche Methoden können kommentiert werden || Zusätzliche Informationen

- Sie können alle nichtstatischen Methoden kommentieren (außer in einer ZenExpansion, da sie nur aus Statik bestehen)
- Annotierte Methoden benötigen einen Parameter, wenn sie in einer [ZenExpansion](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/)sind, keine, wenn sie sich in einer [ZenClass](/Dev_Area/ZenAnnotations/Annotation_ZenClass/) befinden.
- Verlassen Sie sich nicht auf ZenCaster in [ZenClasses](/Dev_Area/ZenAnnotations/Annotation_ZenClass/), sie funktionieren nur zuverlässig in [ZenErweiterungen](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/).