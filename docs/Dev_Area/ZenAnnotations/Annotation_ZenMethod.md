# ZenMethod

A ZenMethod is a java method that has been exposed to ZenScript.  

Static Methods can be accessed using the [ZenClass' Name](Annotation_ZenClass), nonstatics use `object.methodName(arguments,..);`.  
The ZenMethod annotation can stand alongside other [Annotations](ZenAnnotation), like the [ZenOperator Annotation](Annotation_ZenOperator).



## What methods can be annotated || Additional Info

- You can annotate all methods, static and nonstatic. 
- Annotated Methods need one additional parameter when in a [ZenExpansion](Annotation_ZenExpansion). That parameter is the expanded class' instance
- When annotating a static Method in a [ZenExpansion](Annotation_ZenExpansion) (for example a factory method) you will need to use [ZenMethodStatic](ZenMethodStatic) instead.

## Example Class

```
@ZenClass(value = "crafttweaker.tests.devWikiTest")
@ZenRegister
public class DevWikiTest {
	
	//statics which will be called using crafttweaker.tests.devWikiTest.methodName(arguments);
	@ZenMethod
	public static DevWikiTest staticMethod(int arg1) {
		return new DevWikiTest(arg1);
	}
	
	@ZenMethod
	public static void staticMethod2() {
		CraftTweakerAPI.logInfo("staticMethod2 called!");
	}
	
	@ZenMethod
	public static void staticMethodVarArg(int... args) {
		CraftTweakerAPI.logInfo("staticMethod3 called with " + args.length + " arguments");
	}
	
	
	
	//nonstatics which sill be called using instance.methodName(arguments);
	@ZenMethod
	public int getValue() {
		return value;
	}	
	
	@ZenMethod
	public void print() {
		CraftTweakerAPI.logInfo("DevWikiTest Object with value " + value);
	}
	
	@ZenMethod
	public void printWithVarArg(int... args) {
		CraftTweakerAPI.logInfo("Nonstatic called with " + args.length + " arguments");
	}
	
	
	private final int value;
	
	public DevWikiTest(int value) {
		this.value = value;
	}
}
```

ZS Script
```
val instance = crafttweaker.tests.devWikiTest.staticMethod(10);
crafttweaker.tests.devWikiTest.staticMethod2();
crafttweaker.tests.devWikiTest.staticMethodVarArg(10);
crafttweaker.tests.devWikiTest.staticMethodVarArg(10,20,30,40);

print(instance.getValue());
instance.print();
instance.printWithVarArg(10);
instance.printWithVarArg(10,20,30,40);
```