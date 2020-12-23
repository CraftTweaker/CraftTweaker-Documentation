# MCPotionEffect

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
import crafttweaker.api.potion.MCPotionEffect;
```


## Methods

### isReady

Return Type: boolean

```zenscript
MCPotionEffect.isReady(duration as int, amplifier as int) as boolean
```
| Parameter | Type | Description |
|-----------|------|-------------|
| duration | int | No Description Provided |
| amplifier | int | No Description Provided |
### newInstance

Return Type: [MCPotionEffectInstance](/vanilla/api/potion/MCPotionEffectInstance)

```zenscript
MCPotionEffect.newInstance(duration as int, amplifier as int) as MCPotionEffectInstance
```
| Parameter | Type | Description | Optional | DefaultValue |
|-----------|------|-------------|----------|--------------|
| duration | int | No Description Provided | false |  |
| amplifier | int | No Description Provided | true | 0 |
## Properties

| Name | Type | Has Getter | Has Setter |
|------|------|------------|------------|
| commandString | string | true | false |
| curativeItems | stdlib.List&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt; | true | false |
| displayName | string | true | false |
| isBeneficial | boolean | true | false |
| isInstant | boolean | true | false |
| liquidColor | int | true | false |
| name | string | true | false |

