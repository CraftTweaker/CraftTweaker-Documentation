# CommandStringDisplayable

This is a helper interface for every object that is returned by a BEP!

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.bracket.CommandStringDisplayable;
```


## Methoden

:::group{name=getCommandString}

Returns the BEP to get this thingy

Return Type: string

```zenscript
// CommandStringDisplayable.getCommandString() as string

null.getCommandString();
```

:::


## Properties

| Name          | Type   | Has Getter | Has Setter | Beschreibung                       |
| ------------- | ------ | ---------- | ---------- | ---------------------------------- |
| commandString | string | true       | false      | Returns the BEP to get this thingy |

