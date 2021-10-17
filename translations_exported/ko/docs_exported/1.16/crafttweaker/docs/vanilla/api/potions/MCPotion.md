# MCPotion

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.potion.MCPotion;
```


## Methods

:::group{name=getNamePrefixed}

Return Type: string

```zenscript
MCPotion.getNamePrefixed(name as string) as string
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| name      | string | No Description Provided |


:::


## Properties

| 이름               | Type                                                                                                 | Has Getter | Has Setter | Description             |
| ---------------- | ---------------------------------------------------------------------------------------------------- | ---------- | ---------- | ----------------------- |
| commandString    | string                                                                                               | true       | false      | No Description Provided |
| effects          | stdlib.List&lt;[MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)&gt; | true       | false      | No Description Provided |
| hasInstantEffect | boolean                                                                                              | true       | false      | No Description Provided |

