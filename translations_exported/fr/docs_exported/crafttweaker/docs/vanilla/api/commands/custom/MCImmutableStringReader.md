# Lecteur de chaînes de caractères MCImmutable

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCImmutableStringReader
```

## Methods
### canRead

Return type: boolean

```zenscript
myMCImmutableStringReader.canRead();
```


Return type: boolean

```zenscript
myMCImmutableStringReader.canRead(arg0 comme int);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| arg0      | int  | No description provided |


### getCursor

Return type: int

```zenscript
myMCImmutableStringReader.getCursor();
```

### getRead

Return type: String

```zenscript
myMCImmutableStringReader.getRead();
```

### Rester en cours

Return type: String

```zenscript
myMCImmutableStringReader.getRemaining();
```

### Obtenir la longueur restante

Return type: int

```zenscript
myMCImmutableStringReader.getRemainingLength();
```

### getString

Return type: String

```zenscript
myMCImmutableStringReader.getString();
```

### Durée totale de lecture

Return type: int

```zenscript
monMCImmutableStringReader.getTotalLength();
```

### coup d'œil

Type de retour: caractère

```zenscript
myMCImmutableStringReader.peek();
```


Type de retour: caractère

```zenscript
myMCImmutableStringReader.peek(arg0 comme int);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| arg0      | int  | No description provided |



