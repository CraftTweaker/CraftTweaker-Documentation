# MCStringRange

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCStringRange;
```


## Static Methods

:::group{name=at}

Return Type: [MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
MCStringRange.at(pos as int) as MCStringRange
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| pos       | int  | No Description Provided |


:::

:::group{name=between}

Return Type: [MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
MCStringRange.between(start as int, end as int) as MCStringRange
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| inizio    | int  | No Description Provided |
| fine      | int  | No Description Provided |


:::

:::group{name=encompassing}

Return Type: [MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
MCStringRange.encompassing(a as MCStringRange, b as MCStringRange) as MCStringRange
```

| Parameter | Type                                                        | Description             |
| --------- | ----------------------------------------------------------- | ----------------------- |
| a         | [MCStringRange](/vanilla/api/commands/custom/MCStringRange) | No Description Provided |
| b         | [MCStringRange](/vanilla/api/commands/custom/MCStringRange) | No Description Provided |


:::

## Methods

:::group{name=equals}

Return Type: boolean

```zenscript
MCStringRange.equals(o as Object) as boolean
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No Description Provided |


:::

:::group{name=getEnd}

Return Type: int

```zenscript
// MCStringRange.getEnd() as int

myMCStringRange.getEnd();
```

:::

:::group{name=getFrom}

Return Type: string

```zenscript
MCStringRange.getFrom(reader as MCImmutableStringReader) as string
```

| Parameter | Type                                                                            | Description             |
| --------- | ------------------------------------------------------------------------------- | ----------------------- |
| reader    | [MCImmutableStringReader](/vanilla/api/commands/custom/MCImmutableStringReader) | No Description Provided |


:::

:::group{name=getFrom}

Return Type: string

```zenscript
MCStringRange.getFrom(string as string) as string
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| string    | string | No Description Provided |


:::

:::group{name=getLength}

Return Type: int

```zenscript
// MCStringRange.getLength() as int

myMCStringRange.getLength();
```

:::

:::group{name=getStart}

Return Type: int

```zenscript
// MCStringRange.getStart() as int

myMCStringRange.getStart();
```

:::

:::group{name=hashCode}

Return Type: int

```zenscript
// MCStringRange.hashCode() as int

myMCStringRange.hashCode();
```

:::

:::group{name=isEmpty}

Return Type: boolean

```zenscript
// MCStringRange.isEmpty() as boolean

myMCStringRange.isEmpty();
```

:::

:::group{name=toString}

Return Type: string

```zenscript
// MCStringRange.toString() as string

myMCStringRange.toString();
```

:::


