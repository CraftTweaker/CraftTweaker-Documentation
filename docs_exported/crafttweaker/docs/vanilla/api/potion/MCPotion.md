# MCPotion

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
import crafttweaker.api.potion.MCPotion;
```


## Methods

### getNamePrefixed

Return Type: String

```zenscript
MCPotion.getNamePrefixed(name as String) as String
```
| Parameter | Type | Description |
|-----------|------|-------------|
| name | String | No Description Provided |

## Properties

| Name | Type | Has Getter | Has Setter |
|------|------|------------|------------|
| commandString | String | true | false |
| effects | stdlib.List | true | false |
| hasInstantEffect | boolean | true | false |

