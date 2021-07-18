# MCSuggestions-Builder

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCSuggestionsBuilder;
```


## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| string      | true        |

## Methoden

:::group{name=add}

Return Type: [MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
MCSuggestionsBuilder.add(other as MCSuggestionsBuilder) as MCSuggestionsBuilder
```

| Parameter | Type                                                                       | Beschreibung            |
| --------- | -------------------------------------------------------------------------- | ----------------------- |
| other     | [MCSuggestions-Builder](/vanilla/api/commands/custom/MCSuggestionsBuilder) | No Description Provided |


:::

:::group{name=build}

Return Type: [MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
MCSuggestionsBuilder.build() as MCSuggestions
myMCSuggestionsBuilder.build();
```

:::

:::group{name=createOffset}

Return Type: [MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
MCSuggestionsBuilder.createOffset(start as int) as MCSuggestionsBuilder
```

| Parameter | Type | Beschreibung            |
| --------- | ---- | ----------------------- |
| anfangen  | int  | No Description Provided |


:::

:::group{name=equals}

Return Type: boolean

```zenscript
MCSuggestionsBuilder.equals(o as Object) as boolean
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| o         | Object | No Description Provided |


:::

:::group{name=getInput}

Return Type: string

```zenscript
MCSuggestionsBuilder.getInput() as string
myMCSuggestionsBuilder.getInput();
```

:::

:::group{name=getRemaining}

Return Type: string

```zenscript
MCSuggestionsBuilder.getRemaining() as string
myMCSuggestionsBuilder.getRemaining();
```

:::

:::group{name=getStart}

Return Type: int

```zenscript
MCSuggestionsBuilder.getStart() as int
myMCSuggestionsBuilder.getStart();
```

:::

:::group{name=hashCode}

Return Type: int

```zenscript
MCSuggestionsBuilder.hashCode() as int
myMCSuggestionsBuilder.hashCode();
```

:::

:::group{name=restart}

Return Type: [MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
MCSuggestionsBuilder.restart() as MCSuggestionsBuilder
myMCSuggestionsBuilder.restart();
```

:::

:::group{name=suggest}

Return Type: [MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
MCSuggestionsBuilder.suggest(text as string) as MCSuggestionsBuilder
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| text      | string | No Description Provided |


:::

:::group{name=suggest}

Return Type: [MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
MCSuggestionsBuilder.suggest(value as int) as MCSuggestionsBuilder
```

| Parameter | Type | Beschreibung            |
| --------- | ---- | ----------------------- |
| value     | int  | No Description Provided |


:::

:::group{name=suggest}

Return Type: [MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
MCSuggestionsBuilder.suggest(text as string, tooltip as string) as MCSuggestionsBuilder
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| text      | string | No Description Provided |
| tooltip   | string | No Description Provided |


:::

:::group{name=suggest}

Return Type: [MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
MCSuggestionsBuilder.suggest(value as int, tooltip as string) as MCSuggestionsBuilder
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| value     | int    | No Description Provided |
| tooltip   | string | No Description Provided |


:::

:::group{name=toString}

Return Type: string

```zenscript
MCSuggestionsBuilder.toString() as string
myMCSuggestionsBuilder.toString();
```

:::


## Operatoren

:::group{name=EQUALS}

```zenscript
myMCSuggestionsBuilder == o als Objekt
```

:::


