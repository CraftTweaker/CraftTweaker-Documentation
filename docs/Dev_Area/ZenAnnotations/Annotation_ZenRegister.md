# ZenRegister

The ZenRegister Annotation is used to register a class that also has either the [`@ZenClass`](Annotation_ZenClass) or the [`@ZenExpansion`](Annotation_ZenExpansion) annotation.  
This is the preferred way of registering Classes in ZenScript.

## Example 

[Crafttweaker's IIngredient](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/item/IIngredient.java)

```
@ZenClass("crafttweaker.item.IIngredient")
@ZenRegister
public interface IIngredient {
	...
}
```