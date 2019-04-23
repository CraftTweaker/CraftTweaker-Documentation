# ZenClass

A ZenClass is a java class that has been exposed to ZenScript.

## Example

[Crafttweaker's IItemStack](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/item/IItemStack.java)

    @ZenClass("crafttweaker.item.IItemStack")
    @ZenRegister
    public interface IItemStack extends IIngredient {
        //Cut out to keep the page short
    }
    

The actual implementation does not need to be annotated.

## What classes can be annotated || Additional Info

- You can annotate all Java Classes
- You should give the annotation a String value (e.g. `crafttweaker.item.IItemStack`). This will be the ZS internal name for the class.
- After declaring a class a ZenClass, you still need to register it. It is recommended that you use [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/) for that