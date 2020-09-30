# MCStringRange

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCStringRange
```

## Methods
### w

Typ zwrotu: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
crafttweaker.api.commands.custom.MCStringRange.at(pos as int);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| pos       | int  | No description provided |


### między

Typ zwrotu: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
crafttweaker.api.commands.custom.MCStringRange.between(start as int, end as int);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| początek  | int  | No description provided |
| koniec    | int  | No description provided |


### uwzględnianie

Typ zwrotu: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
crafttweaker.api.commands.custom.MCStringRange.Incluassing(jako crafttweaker.api.commands.custom.MCStringRange, b jako crafttweaker.api.commands.custom.MCStringRange);
```

| Parameter | Type                                                                                         | Description             |
| --------- | -------------------------------------------------------------------------------------------- | ----------------------- |
| ob z      | [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange) | No description provided |
| b         | [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange) | No description provided |


### equals

Return type: boolean

```zenscript
myMCStringRange.equals(o jako obiekt);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |


### get

Return type: String

```zenscript
myMCStringRange.get(ciąg jako String);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| string    | String | No description provided |



Return type: String

```zenscript
myMCStringRange.get(czytnik jako crafttweaker.api.commands.custom.MCImmutableStringReader);
```

| Parameter | Type                                                                                                             | Description             |
| --------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------- |
| czytnik   | [crafttweaker.api.commands.custom.MCImmutableStringReader](/vanilla/api/commands/custom/MCImmutableStringReader) | No description provided |


### getEnd

Return type: int

```zenscript
myMCStringRange.getEnd();
```

### długość getLlength

Return type: int

```zenscript
myMCStringRange.getLength();
```

### getStart

Return type: int

```zenscript
myMCStringRange.getStart();
```

### hashCode

Return type: int

```zenscript
myMCStringRange.hashCode();
```

### isEmpty

Return type: boolean

```zenscript
myMCStringRange.isEmpty();
```

### toString

Return type: String

```zenscript
myMCStringRange.toString();
```


