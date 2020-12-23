# MCGame

Holds general game information.
 Can be accessed using the `game` global keyword

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
import crafttweaker.api.game.MCGame;
```


## Methods

### localize



Return Type: String

```zenscript
MCGame.localize(translationKey as String) as String
```
| Parameter | Type | Description |
|-----------|------|-------------|
| translationKey | String | No Description Provided |

## Properties

| Name | Type | Has Getter | Has Setter |
|------|------|------------|------------|
| directionAxises | Collection | true | false |
| effects | Collection | true | false |
| entityClassifications | Collection | true | false |
| entityTypes | Collection | true | false |
| fluids | Collection | true | false |
| formattings | Collection | true | false |
| items | Collection | true | false |
| potions | Collection | true | false |
| recipeTypes | Collection | true | false |

