# handler

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import tfc.api.bracket.handler;
```


## Static Methods

:::group{name=getMetal}

Gets a [metal](/mods/TFCTweaker/Api/Expansion/Metal) instance. Throws an Exception if not found

Returns: The found [metal](/mods/TFCTweaker/Api/Expansion/Metal)  
Return Type: [metal](/mods/TFCTweaker/Api/Expansion/Metal)

```zenscript
<metal:tfc:copper>

// handler.getMetal(tokens as string) as metal

handler.getMetal("tfc:copper");
```

| Parameter |  Type  |              Description              |
|-----------|--------|---------------------------------------|
| tokens    | string | What you would write in the BEP call. |


:::

