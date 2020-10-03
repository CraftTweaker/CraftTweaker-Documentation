# MCSuggestionsBuilder

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCSuggestionsBuilder
```

## Methods
### add

Typ zwrotu: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.add(inne jak crafttweaker.api.commands.custom.MCSuggestionsBuilder);
```

| Parameter | Type                                                                                                       | Description             |
| --------- | ---------------------------------------------------------------------------------------------------------- | ----------------------- |
| other     | [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder) | No description provided |


### build

Typ zwrotu: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCSuggestionsBuilder.build();
```

### utwórz Offset

Typ zwrotu: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.createOffset(start as int);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| początek  | int  | No description provided |


### equals

Return type: boolean

```zenscript
myMCSuggestionsBuilder.equals(o jako obiekt);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |


### getInput

Return type: String

```zenscript
myMCSuggestionsBuilder.getInput();
```

### Pozostało

Return type: String

```zenscript
myMCSuggestionsBuilder.getRemaining();
```

### getStart

Return type: int

```zenscript
myMCSuggestionsBuilder.getStart();
```

### hashCode

Return type: int

```zenscript
myMCSuggestionsBuilder.hashCode();
```

### zrestartuj

Typ zwrotu: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.restart();
```

### sugeruj

Typ zwrotu: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.suggest(tekst jako String);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| tekst     | String | No description provided |



Typ zwrotu: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.suggest(wartość jak int);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| value     | int  | No description provided |



Typ zwrotu: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.suggest(tekst jako String, tooltip jako String);
```

| Parameter  | Type   | Description             |
| ---------- | ------ | ----------------------- |
| tekst      | String | No description provided |
| podpowiedź | String | No description provided |



Typ zwrotu: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.suggest(wartość jako int, tooltip jako String);
```

| Parameter  | Type   | Description             |
| ---------- | ------ | ----------------------- |
| value      | int    | No description provided |
| podpowiedź | String | No description provided |


### toString

Return type: String

```zenscript
myMCSuggestionsBuilder.toString();
```


## Operators
### EQUALS

```zenscript
myMCSuggestionsBuilder == o jako obiekt
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | true        |

