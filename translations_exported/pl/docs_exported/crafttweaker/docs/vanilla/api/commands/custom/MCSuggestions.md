# Sugestie MCTP

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCSuggestions
```

## Methods
### utwórz

Typ zwrotu: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
crafttweaker.api.commands.custom.MCSuggestions.create(komenda jako String, sugestie jak Kolekcja<crafttweaker.api.commands.custom.MCSuggestion>);
```

| Parameter | Type                                                                                                                   | Description             |
| --------- | ---------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| command   | String                                                                                                                 | No description provided |
| sugestie  | Kolekcja&lt;[crafttweaker.api.commands.custom.MCSuggestion](/vanilla/api/commands/custom/MCSuggestion)&gt; | No description provided |


### empty

Typ zwrotu: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
crafttweaker.api.commands.custom.MCSuggestions.empty();
```

### equals

Return type: boolean

```zenscript
myMCSuggestions.equals(o jako obiekt);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |


### pobierz listę

Typ zwrotu: Lista&lt;com.mojang.brigadier.suggestion.Suggestion&gt;

```zenscript
myMCSuggestions.getList();
```

### Zakres getRange

Typ zwrotu: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCSuggestions.getRange();
```

### hashCode

Return type: int

```zenscript
myMCSuggestions.hashCode();
```

### isEmpty

Return type: boolean

```zenscript
myMCSuggestions.isEmpty();
```

### merge

Typ zwrotu: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
crafttweaker.api.commands.custom.MCSuggestions.merge(komenda jako String, wprowadź jako Kolekcja<crafttweaker.api.commands.custom.MCSuggestions>);
```

| Parameter | Type                                                                                                                     | Description             |
| --------- | ------------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| command   | String                                                                                                                   | No description provided |
| input     | Kolekcja&lt;[crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)&gt; | No description provided |


### toString

Return type: String

```zenscript
myMCSuggestions.toString();
```


## Operators
### EQUALS

```zenscript
myMCSuggestions == o jako obiekt
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | true        |

