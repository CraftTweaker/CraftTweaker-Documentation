# MCRedirectModifier

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCRedirectModifier
```

## Constructors
```zenscript
new crafttweaker.api.commands.custom.MCRedirectModifier(fun as function.Function<crafttweaker.api.commands.custom.MCCommandContext, Collection<crafttweaker.api.commands.custom.MCCommandSource>>);
```
| Parameter | Type                                                                                                                                                                                                                                                                    | Description             |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| fun       | function.Function&lt;[crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext), Collection&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;&gt; | No description provided |



## Methods
### apply

Return type: Collection&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
myMCRedirectModifier.apply(context as crafttweaker.api.commands.custom.MCCommandContext);
```

| Parameter | Type                                                                                               | Description             |
| --------- | -------------------------------------------------------------------------------------------------- | ----------------------- |
| context   | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | No description provided |


### equals

Return type: boolean

```zenscript
myMCRedirectModifier.equals(o as Object);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |


### hashCode

Return type: int

```zenscript
myMCRedirectModifier.hashCode();
```

### toString

Return type: String

```zenscript
myMCRedirectModifier.toString();
```


## 연산자
### EQUALS

```zenscript
myMCRedirectModifier == o as Object
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | true        |

