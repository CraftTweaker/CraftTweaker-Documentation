# MCRedirectModifizierer

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCRedirectModifier;
```


## Constructors

No Description Provided
```zenscript
new MCRedirectModifier(fun as Function<MCCommandContext,Collection<MCCommandSource>>) as MCRedirectModifier
```
| Parameter | Type                                                                                                                                                                                        | Beschreibung            |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| lustig    | Function&lt;[MCCommandContext](/vanilla/api/commands/custom/MCCommandContext),Collection&lt;[MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;&gt; | No Description Provided |


## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| string      | true        |

## Methoden

### bewerben

Return Type: Collection&lt;[MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
MCRedirectModifier.apply(context as MCCommandContext) as Collection<MCCommandSource>
```
| Parameter | Type                                                              | Beschreibung            |
| --------- | ----------------------------------------------------------------- | ----------------------- |
| kontext   | [MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | No Description Provided |

### equals

Return Type: boolean

```zenscript
MCRedirectModifier.equals(o as Object) as boolean
```
| Parameter | Type   | Beschreibung            |
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

## Operatoren

### EQUALS

```zenscript
myMCRedirectModifier == o als Objekt
```



