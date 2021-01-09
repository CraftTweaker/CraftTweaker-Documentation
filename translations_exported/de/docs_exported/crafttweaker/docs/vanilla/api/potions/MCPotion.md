# MCPotion

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.potion.MCPotion;
```


## Methoden

### getNamePrefixed

Return Type: string

```zenscript
MCPotion.getNamePrefixed(name as string) as string
```
| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| name      | string | No Description Provided |


## Properties

| Name             | Type                                                                                                 | Has Getter | Has Setter |
| ---------------- | ---------------------------------------------------------------------------------------------------- | ---------- | ---------- |
| commandString    | string                                                                                               | true       | false      |
| effects          | stdlib.List&lt;[MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)&gt; | true       | false      |
| hasInstantEffect | boolean                                                                                              | true       | false      |

