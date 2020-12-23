# MCSingleRedirectModifier

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
import crafttweaker.api.commands.custom.MCSingleRedirectModifier;
```


## Constructors

No Description Provided
```zenscript
new MCSingleRedirectModifier(fun as Function<MCCommandContext,MCCommandSource>) as MCSingleRedirectModifier
```
| Parameter | Type | Description |
|-----------|------|-------------|
| fun | Function&lt;[MCCommandContext](/vanilla/api/commands/custom/MCCommandContext),[MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt; | No Description Provided |

## Casters

| Result type | Is Implicit |
|-------------|-------------|
| String | true |

## Methods

### apply

Return Type: [MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
MCSingleRedirectModifier.apply(context as MCCommandContext) as MCCommandSource
```
| Parameter | Type | Description |
|-----------|------|-------------|
| context | [MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | No Description Provided |
### equals

Return Type: boolean

```zenscript
MCSingleRedirectModifier.equals(o as Object) as boolean
```
| Parameter | Type | Description |
|-----------|------|-------------|
| o | Object | No Description Provided |
### hashCode

Return Type: int

```zenscript
MCSingleRedirectModifier.hashCode() as int
myMCSingleRedirectModifier.hashCode()
```
### toString

Return Type: String

```zenscript
MCSingleRedirectModifier.toString() as String
myMCSingleRedirectModifier.toString()
```

## Operators

### EQUALS

```zenscript
myMCSingleRedirectModifier == o as Object
```



