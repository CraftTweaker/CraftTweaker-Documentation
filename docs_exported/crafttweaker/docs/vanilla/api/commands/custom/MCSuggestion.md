# MCSuggestion

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCSuggestion;
```


## Casters

| Result type | Is Implicit |
|-------------|-------------|
| string | true |

## Methods

:::group{name=apply}

Return Type: string

```zenscript
MCSuggestion.apply(input as string) as string
```

| Parameter | Type | Description |
|-----------|------|-------------|
| input | string | No Description Provided |


:::

:::group{name=compareTo}

Return Type: int

```zenscript
MCSuggestion.compareTo(o as MCSuggestion) as int
```

| Parameter | Type | Description |
|-----------|------|-------------|
| o | [MCSuggestion](/vanilla/api/commands/custom/MCSuggestion) | No Description Provided |


:::

:::group{name=compareToIgnoreCase}

Return Type: int

```zenscript
MCSuggestion.compareToIgnoreCase(b as MCSuggestion) as int
```

| Parameter | Type | Description |
|-----------|------|-------------|
| b | [MCSuggestion](/vanilla/api/commands/custom/MCSuggestion) | No Description Provided |


:::

:::group{name=equals}

Return Type: boolean

```zenscript
MCSuggestion.equals(o as Object) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| o | Object | No Description Provided |


:::

:::group{name=expandWith}

Return Type: [MCSuggestion](/vanilla/api/commands/custom/MCSuggestion)

```zenscript
MCSuggestion.expandWith(command as string, range as MCStringRange) as MCSuggestion
```

| Parameter | Type | Description |
|-----------|------|-------------|
| command | string | No Description Provided |
| range | [MCStringRange](/vanilla/api/commands/custom/MCStringRange) | No Description Provided |


:::

:::group{name=getRange}

Return Type: [MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
// MCSuggestion.getRange() as MCStringRange

myMCSuggestion.getRange();
```

:::

:::group{name=getText}

Return Type: string

```zenscript
// MCSuggestion.getText() as string

myMCSuggestion.getText();
```

:::

:::group{name=getTooltip}

Return Type: string

```zenscript
// MCSuggestion.getTooltip() as string

myMCSuggestion.getTooltip();
```

:::

:::group{name=hashCode}

Return Type: int

```zenscript
// MCSuggestion.hashCode() as int

myMCSuggestion.hashCode();
```

:::

:::group{name=toString}

Return Type: string

```zenscript
// MCSuggestion.toString() as string

myMCSuggestion.toString();
```

:::


## Operators

:::group{name=EQUALS}

```zenscript
myMCSuggestion == o as Object
```

:::


