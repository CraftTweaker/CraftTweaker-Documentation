# MCPotion

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.potion.MCPotion
```

## Implemented Interfaces
MCPotion implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Methods
### getNamePrefixed

Returns String

```zenscript
myMCPotion.getNamePrefixed(name as String);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| name      | String | No description provided |



## Properties

| Name             | Type                                                                                                | Has Getter | Has Setter |
| ---------------- | --------------------------------------------------------------------------------------------------- | ---------- | ---------- |
| commandString    | String                                                                                              | true       | false      |
| effects          | List<[crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)> | true       | false      |
| hasInstantEffect | boolean                                                                                             | true       | false      |

