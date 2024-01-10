# Debug Preprocessor

The debug preprocessor is an utility preprocessor used to save the generated classes your script compiles into.
In case you're confused, ZenCode scripts compile into Java code, which interacts with the game code.

In general, this is worthless to the average user, as the generated classes are a Java class you need to know Java in order to read.

This preprocessor is generally used by advanced users or by the developers of CraftTweaker to find bugs in generated code.

The generated classes appear inside `.minecraft/classes`.

## How to use

Simply append `#debug` to the top of the script.

```zenscript
#debug

println("Hello World");
```

For the curious: The above compiles to:

```java
package scripts;

import com.blamejared.crafttweaker.api.zencode.CraftTweakerGlobals;

public class debug {
    public static void run() {
        CraftTweakerGlobals.println("Hello World");
    }
}
```

