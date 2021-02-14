# MCRedirectModifier

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCRedirectModifier;
```


## Constructors

No Description Provided
```zenscript
new MCRedirectModifier(fun as Function<MCCommandContext,Collection<MCCommandSource>>) as MCRedirectModifier
```

| Parameter | Type                                                                                                                                                                                        | Description             |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| fun       | Function&lt;[MCCommandContext](/vanilla/api/commands/custom/MCCommandContext),Collection&lt;[MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;&gt; | No Description Provided |



## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| string      | true        |

## Methods

### apply

Return Type: Collection&lt;[MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
MCRedirectModifier.apply(context as MCCommandContext) as Collection<MCCommandSource>
```

| Parameter | Type                                                              | Description             |
| --------- | ----------------------------------------------------------------- | ----------------------- |
| context   | [MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | No Description Provided |


### equals

Return Type: boolean

```zenscript
MCRedirectModifier.equals(o as Object) as boolean
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No Description Provided |


### hashCode

Return Type: int

```zenscript
MCRedirectModifier.hashCode() as int
myMCRedirectModifier.hashCode();
```

### toString

Return Type: string

```zenscript
MCRedirectModifier.toString() as string
myMCRedirectModifier.toString();
```


## Operators

### EQUALS

```zenscript
myMCRedirectModifier == o as Object
```




