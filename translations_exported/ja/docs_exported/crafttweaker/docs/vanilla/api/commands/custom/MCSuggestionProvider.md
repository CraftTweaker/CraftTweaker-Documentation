# MCSuggestionProvider

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCSuggestionProvider
```

## Constructors
```zenscript
new crafttweaker.api.commands.custom.MCSuggestionProvider(function.BiFunction<crafttweaker.api.commands.custom.MCCommandContext, crafttweaker.api.commands.custom.MCSuggestionsBuilder, crafttweaker.api.commands.custom.MCSuggestions>);
```
| Parameter | Type                                                                                                                                                                                                                                                                                                                                                | Description             |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| 楽しい       | function.BiFunction&lt;[crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext), [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder), [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)&gt; | No description provided |



## Methods
### equals

Return type: boolean

```zenscript
myMCSuggestionProvider.equals(o as Object);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |


### getSuggestions

戻り値の型: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCSuggestionProvider.getSuggestions(context as crafttweaker.api.commands.custom.MCCommandContext, builder as crafttweaker.api.commands.custom.MCSuggestionsBuilder);
```

| Parameter | Type                                                                                                       | Description             |
| --------- | ---------------------------------------------------------------------------------------------------------- | ----------------------- |
| context   | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)         | No description provided |
| ビルダー:     | [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder) | No description provided |


### hashCode

Return type: int

```zenscript
myMCSuggestionProvider.hashCode();
```

### toString

Return type: String

```zenscript
myMCSuggestionProvider.toString();
```


## 演算子
### EQUALS

```zenscript
myMCSuggestionProvider == o as Object
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | true        |

