# ZenCaster

A ZenCaster denotes a method that can be called using the `as` token.  
ZenCasters can be used to convert one type into another (e.g. [Strings to IData](https://github.com/jaredlll08/CraftTweaker/blob/30793645d58adeed12dfff50f31206a63a50d8de/CraftTweaker2-API/src/main/java/crafttweaker/zenscript/expand/ExpandString.java#L30-L33)).

## Example

```
@ZenExpansion("crafttweaker.item.IItemStack")
@ZenRegister
public class Expansion {
    @ZenMethod
    public static void print(IItemStack stack) {
        CraftTweakerAPI.logInfo("STACKKKKK: " + stack.getDisplayName());
    }
    
    @ZenCaster
    public static IOreDictEntry asOreDict(IItemStack stack) {
    	return stack.getOres().get(0);
    }
}
```

If someone now would call this, they would get an oreDictEntry:
```
val oreDict = <minecraft:iron_ingot> as IOreDictEntry;
```


## What methods can be annotated || Additional Info

- You can annotate all nonstatic methods (unless in a ZenExpansion, as they only consist of statics)
- Annotated Methods need one parameter when in a [ZenExpansion](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/), none if they are in a [ZenClass](/Dev_Area/ZenAnnotations/Annotation_ZenClass/).
- Don't rely on ZenCasters in [ZenClasses](/Dev_Area/ZenAnnotations/Annotation_ZenClass/), they only work reliably in [ZenExpansions](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/).