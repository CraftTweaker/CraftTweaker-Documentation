# ZenExpansion

A ZenExpansion is, like [`@ZenClass`](Annotation_ZenClass), used to annotate a Class that should be accessible from within ZS.  
Unlike ZenClasses however, ZenExpansions are used to expand the functionality of already existing ZenClasses.

## Example

```
@ZenExpansion("crafttweaker.item.IItemStack")
@ZenRegister
public class Expansion {
    @ZenMethod
    public static void print(IItemStack stack) {
        CraftTweakerAPI.logInfo("STACKKKKK: " + stack.getDisplayName());
    }
}
```

This would allow people to do
```
<minecraft:iron_ingot>.print();
```

Since this is an expansion the first parameter is the class' instance!  
This parameter will not be available in ZS.

## What classes can be annotated || Additional Info

- All Methods need to begin with a parameter that represents the expanded class' instance. Also, you should keep them static (... and public).
- You can annotate all Java Classes
- You must give the annotation a String value (e.g. `crafttweaker.item.IItemStack`). This String value must represent an already existing ZenClass' name.
- After declaring a class a ZenExpansion, you still need to register it. It is recommended that you use [`@ZenRegister`](Annotation_ZenRegister) for that.