# MCSingleRedirectModifizierer

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCSingleRedirectModifier
```

## Constructors
```zenscript
neue crafttweaker.api.commands.custom.MCSingleRedirectModifier(fun as function.Function<crafttweaker.api.commands.custom.MCCommandContext, crafttweaker.api.commands.custom.MCCommandSource>);
```
| Parameter | Type                                                                                                                                                                                                                                      | Beschreibung            |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| lustig    | function.Function&lt;[crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext), [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt; | No description provided |



## Methoden
### bewerben

Rückgabetyp: [craftweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCSingleRedirectModifier.apply(Kontext als crafttweaker.api.commands.custom.MCCommandContext);
```

| Parameter | Type                                                                                               | Beschreibung            |
| --------- | -------------------------------------------------------------------------------------------------- | ----------------------- |
| kontext   | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | No description provided |


### equals

Return type: boolean

```zenscript
myMCSingleRedirectModifier.equals(o als Objekt);
```

| Parameter | Type   | Beschreibung            |
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


## Operatoren
### EQUALS

```zenscript
myMCSingleRedirectModifier == o als Objekt
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | true        |

