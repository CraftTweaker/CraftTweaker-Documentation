# MCStringRange

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCStringRange;
```


## Methoden

### am

Return Type: [MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
MCStringRange.at(pos as int) as MCStringRange
```
| Parameter | Type | Beschreibung            |
| --------- | ---- | ----------------------- |
| pos       | int  | No Description Provided |

### zwischen

Return Type: [MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
MCStringRange.between(start as int, end as int) as MCStringRange
```
| Parameter | Type | Beschreibung            |
| --------- | ---- | ----------------------- |
| anfangen  | int  | No Description Provided |
| ende      | int  | No Description Provided |

### umfasste

Return Type: [MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
MCStringRange.encompassing(a as MCStringRange, b as MCStringRange) as MCStringRange
```
| Parameter | Type                                                        | Beschreibung            |
| --------- | ----------------------------------------------------------- | ----------------------- |
| a         | [MCStringRange](/vanilla/api/commands/custom/MCStringRange) | No Description Provided |
| b         | [MCStringRange](/vanilla/api/commands/custom/MCStringRange) | No Description Provided |

## Methoden

### equals

Return Type: boolean

```zenscript
MCStringRange.equals(o as Object) as boolean
```
| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| o         | Object | No Description Provided |

### getEnd

Return Type: int

```zenscript
MCStringRange.getEnd() as int
myMCStringRange.getEnd();
```
### getFrom

Return Type: string

```zenscript
MCStringRange.getFrom(reader as MCImmutableStringReader) as string
```
| Parameter | Type                                                                            | Beschreibung            |
| --------- | ------------------------------------------------------------------------------- | ----------------------- |
| reader    | [MCImmutableStringReader](/vanilla/api/commands/custom/MCImmutableStringReader) | No Description Provided |

Return Type: string

```zenscript
MCStringRange.getFrom(string as string) as string
```
| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| string    | string | No Description Provided |

### getLänge

Return Type: int

```zenscript
MCStringRange.getLength() as int
myMCStringRange.getLength();
```
### getStart

Return Type: int

```zenscript
MCStringRange.getStart() as int
myMCStringRange.getStart();
```
### hashCode

Return Type: int

```zenscript
MCStringRange.hashCode() as int
myMCStringRange.hashCode();
```
### isEmpty

Return Type: boolean

```zenscript
MCStringRange.isEmpty() as boolean
myMCStringRange.isEmpty();
```
### toString

Return Type: string

```zenscript
MCStringRange.toString() as string
myMCStringRange.toString();
```

