# MCSuggestionContext

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCSuggestionContext;
```


## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| string      | true        |

## Methoden

### equals

Return Type: boolean

```zenscript
MCSuggestionContext.equals(o as Object) as boolean
```
| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| o         | Object | No Description Provided |

### getElternteil

Return Type: [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
MCSuggestionContext.getParent() as MCCommandNode
myMCSuggestionContext.getParent();
```
### getStartPos

Return Type: int

```zenscript
MCSuggestionContext.getStartPos() as int
myMCSuggestionContext.getStartPos();
```
### hashCode

Return Type: int

```zenscript
MCSuggestionContext.hashCode() as int
myMCSuggestionContext.hashCode();
```
### toString

Return Type: string

```zenscript
MCSuggestionContext.toString() as string
myMCSuggestionContext.toString();
```

## Operatoren

### EQUALS

```zenscript
myMCSuggestionContext == o als Objekt
```



