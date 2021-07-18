# MCCommand

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCCommand;
```


## Constructors

No Description Provided
```zenscript
new MCCommand(fun as Function<MCCommandContext,Integer>) as MCCommand
```

| Parameter | Type                                                                                                  | Description             |
| --------- | ----------------------------------------------------------------------------------------------------- | ----------------------- |
| fun       | Function&lt;[MCCommandContext](/vanilla/api/commands/custom/MCCommandContext),Integer&gt; | No Description Provided |



## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| string      | true        |

## Methods

### equals

Return Type: boolean

```zenscript
MCCommand.equals(o as Object) as boolean
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No Description Provided |


### hashCode

Return Type: int

```zenscript
MCCommand.hashCode() as int
myMCCommand.hashCode();
```

### run

Return Type: int

```zenscript
MCCommand.run(context as MCCommandContext) as int
```

| Parameter | Type                                                              | Description             |
| --------- | ----------------------------------------------------------------- | ----------------------- |
| context   | [MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | No Description Provided |


### toString

Return Type: string

```zenscript
MCCommand.toString() as string
myMCCommand.toString();
```


## Operators

### EQUALS

```zenscript
myMCCommand == o as Object
```




