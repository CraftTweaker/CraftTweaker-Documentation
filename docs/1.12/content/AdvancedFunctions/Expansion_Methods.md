# Expansion Methods

You can add more methods to an already existing class. It is pretty much like a custom function and can replace a pre-existing method in some cases.

## Basic Syntax
Generally, you declare a static using:

```zenscript
$expand ClassName$MethodName(arguments as ArgType) as ReturnType {
	// Statements
	return VALUE;
}
```

Call `this` variable to get the class to expand instance in statements.

## Example
```zenscript
import crafttweaker.item.IItemStack;

$expand IItemStack$show() as void {
    print(this.commandString);
}

$expand string$wrap(prefix as string = "(", suffix as string = ")") as string {
    return prefix ~ this ~ suffix;
}

<minecraft:apple>.show();
print("test".wrap());
print("test".wrap("[", "]"));
```