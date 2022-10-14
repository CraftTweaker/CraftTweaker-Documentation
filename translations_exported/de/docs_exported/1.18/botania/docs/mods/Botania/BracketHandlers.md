# BracketHandlers

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.botania.BracketHandlers;
```


## Static Methods

:::group{name=getBrew}

Gets a brew from its registry name

Returns: The Brew from the name if found.  
Return Type: [Brew](/mods/Botania/Brew)

```zenscript
// BracketHandlers.getBrew(tokens as string) as Brew

BracketHandlers.getBrew("botania:healing");
```

| Parameter | Type   | Beschreibung         |
| --------- | ------ | -------------------- |
| tokens    | string | The name of the brew |


:::

:::group{name=getBrewDump}

Gets a list of brew values.

Returns: A list of brew values.  
Return Type: Collection&lt;string&gt;

```zenscript
// BracketHandlers.getBrewDump() as Collection<string>

BracketHandlers.getBrewDump();
```

:::

