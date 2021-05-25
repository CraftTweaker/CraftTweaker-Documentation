# MCPotionEffect

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.potion.MCPotionEffect;
```


## Methods

:::group{name=isReady}

Return Type: boolean

```zenscript
MCPotionEffect.isReady(duration as int, amplifier as int) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| duration | int | No Description Provided |
| amplifier | int | No Description Provided |


:::

:::group{name=newInstance}

Return Type: [MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)

```zenscript
MCPotionEffect.newInstance(duration as int, amplifier as int) as MCPotionEffectInstance
```

| Parameter | Type | Description | Optional | DefaultValue |
|-----------|------|-------------|----------|--------------|
| duration | int | No Description Provided | false |  |
| amplifier | int | No Description Provided | true | 0 |

:::


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| commandString | string | true | false | No Description Provided |
| curativeItems | stdlib.List&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt; | true | false | No Description Provided |
| displayName | string | true | false | No Description Provided |
| isBeneficial | boolean | true | false | No Description Provided |
| isInstant | boolean | true | false | No Description Provided |
| liquidColor | int | true | false | No Description Provided |
| name | string | true | false | No Description Provided |

