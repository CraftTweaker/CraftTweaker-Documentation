# ModOnly

The `@ModOnly` annotation is as simple as the name suggests:  
It only registers a ZenClass if the provided mod is loaded.

## Example

[Crafttweaker Test Project ModOnly](https://github.com/kindlich/CraftTweaker/tree/1.12/CraftTweaker2-MC1120-Tests/src/main/java/crafttweaker/tests/wiki/ModOnlyWiki.java)
```
@ModOnly(value = "mcp")
@ZenClass(value = "crafttweaker.tests.modOnly")
@ZenRegister
public class ModOnlyWiki {
	@ZenMethod
	public static void print() {
		CraftTweakerAPI.logInfo("print issued");
	}
}
```


## What classes can be annotated || Additional Info

- You can annotate all Java Classes that also have the [`@ZenRegister` Annotation](Annotation_ZenRegister). Technically, you can register all classes, but only there it will have an impact.
- The Annotation requires a String value that represents the modName (`isModLoaded(annotation.getValue())` has to return true of the mod is loaded)