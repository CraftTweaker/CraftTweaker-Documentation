# MCPotionEffect

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.potion.MCPotionEffect
```

## Implemented Interfaces
MCPotionEffect implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Methods
### isReady

Returns boolean

```zenscript
myMCPotionEffect.isReady(duration as int, amplifier as int);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| duration  | int  | No description provided |
| amplifier | int  | No description provided |


### newInstance

Returns [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)

```zenscript
myMCPotionEffect.newInstance(duration as int, amplifier as int);
```

| Parameter | Type | Description             | IsOptional | Default Value |
| --------- | ---- | ----------------------- | ---------- | ------------- |
| duration  | int  | No description provided | false      | null          |
| amplifier | int  | No description provided | true       | 0             |



## Properties

| Name          | Type                                                                    | Has Getter | Has Setter |
| ------------- | ----------------------------------------------------------------------- | ---------- | ---------- |
| commandString | String                                                                  | true       | false      |
| curativeItems | List<[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)> | true       | false      |
| displayName   | String                                                                  | true       | false      |
| isBeneficial  | boolean                                                                 | true       | false      |
| isInstant     | boolean                                                                 | true       | false      |
| liquidColor   | int                                                                     | true       | false      |
| name          | String                                                                  | true       | false      |

