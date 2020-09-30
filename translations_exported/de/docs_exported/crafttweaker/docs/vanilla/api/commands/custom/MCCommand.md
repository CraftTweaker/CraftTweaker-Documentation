# MCCommand

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCCommand
```

## Constructors
```zenscript
neue crafttweaker.api.commands.custom.MCCommand(Spaß als Funktion.Funktion<crafttweaker.api.commands.custom.MCCommandContext, Integer>);
```
| Parameter | Type                                                                                                                                             | Beschreibung            |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| lustig    | function.Function&lt;[crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext), Integer&gt; | No description provided |



## Methoden
### equals

Return type: boolean

```zenscript
myMCCommand.equals(o als Objekt);
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |


### hashCode

Return type: int

```zenscript
myMCCommand.hashCode();
```

### laufen

Return type: int

```zenscript
myMCCommand.run(Kontext als crafttweaker.api.commands.custom.MCCommandContext);
```

| Parameter | Type                                                                                               | Beschreibung            |
| --------- | -------------------------------------------------------------------------------------------------- | ----------------------- |
| kontext   | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | No description provided |


### toString

Return type: String

```zenscript
myMCCommand.toString();
```


## Operatoren
### EQUALS

```zenscript
myMCCommand == o als Objekt
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | true        |

