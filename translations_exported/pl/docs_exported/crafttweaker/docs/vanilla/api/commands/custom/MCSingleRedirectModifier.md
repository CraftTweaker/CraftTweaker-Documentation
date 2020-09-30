# MCSingleRedirectModifier

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCSingleRedirectModifier
```

## Constructors
```zenscript
nowe crafttweaker.api.commands.custom.MCSingleRedirectModifier(zabawne jako funkcja.Funkcja<crafttweaker.api.commands.custom.MCCommandContext, crafttweaker.api.commands.custom.MCCommandSource>);
```
| Parameter | Type                                                                                                                                                                                                                            | Description             |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| zabawa    | Funkcja&lt;[crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext), [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt; | No description provided |



## Methods
### zastosuj

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCSingleRedirectModifier.apply(context as crafttweaker.api.commands.custom.MCCommandContext);
```

| Parameter | Type                                                                                               | Description             |
| --------- | -------------------------------------------------------------------------------------------------- | ----------------------- |
| kontekst  | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | No description provided |


### equals

Return type: boolean

```zenscript
myMCSingleRedirectModifier.equals(o jako Obiekt);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |


### hashCode

Return type: int

```zenscript
myMCSingleRedirectModifier.hashCode();
```

### toString

Return type: String

```zenscript
myMCSingleRedirectModifier.toString();
```


## Operators
### EQUALS

```zenscript
myMCSingleRedirectModifier == o jako obiekt
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | true        |

