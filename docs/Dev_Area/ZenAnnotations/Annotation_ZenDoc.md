# ZenDoc

The `@ZenDoc` annotation allows developers to provide additional information to the `/ct dumpZS` command.  
More specifically, it will look like this:

![img](assets/zenDoc.png)

## Example

[Crafttweaker Test Project ZenDoc](https://github.com/kindlich/CraftTweaker/tree/1.12/CraftTweaker2-MC1120-Tests/src/main/java/crafttweaker/tests/wiki/ZenDocWiki.java)
```
@ZenClass(value = "crafttweaker.tests.zenDoc")
@ZenRegister
public class ZenDocWiki {
	@ZenMethod
	@ZenDoc("This prints a warning")
	public static void print() {
		CraftTweakerAPI.logWarning("Print invoked!");
	}
}
```


## What methods can be annotated || Additional Info

- You can annotate all methods, static and nonstatic.
- Currently, this will only affect the generated HTML file when running [`/ct dumpzs`](/Vanilla/Commands).
- This annotation takes one String as value that is the additional information that should be printed.