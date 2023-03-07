# Handler

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import tfc.api.bracket.Handler;
```


## Static Methods

:::group{name=getMetal}

Gets a [Metal](/mods/TFCTweaker/Api/Expansion/Metal) instance. Throws an Exception if not found

Returns: The found [Metal](/mods/TFCTweaker/Api/Expansion/Metal)  
Return Type: [Metal](/mods/TFCTweaker/Api/Expansion/Metal)

```zenscript
<metal:tfc:copper>

// Handler.getMetal(tokens as string) as Metal

Handler.getMetal("tfc:copper");
```

| Parameter |  Type  |              Description              |
|-----------|--------|---------------------------------------|
| tokens    | string | What you would write in the BEP call. |


:::

