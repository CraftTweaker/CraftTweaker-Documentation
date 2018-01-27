# Cross-Script Reference

All scripts that have [static variables](/Advanced_Functions/Global_Static_Variables) or [custom functions](/Advanced_Functions/Custom_Functions) are registered to the cross-script reference.  
This allows you to access these fields/functions using the dot-notation.

## Specifications

- Cross-script references start with `scripts.`
- You specify the path relative from the scripts folder (e.g. `scripts.mySubfolder.a.zs`)
- You can use the dot-notation in an [import statement](/Advanced_Functions/Import) should you choose to do so.
- ZS first checks for matching directories then for matching files or values.



## Example
Let's say we have two scripts: `a.zs` and `b.zs`.

a.zs:
```kotlin
static myVal as string = "myVal";

function makeLine() {
	print("---------------");
}
```

b.zs
```kotlin
print(scripts.a.myVal);
scripts.a.makeLine();
```