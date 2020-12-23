# MCItemDefinition

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
import crafttweaker.api.item.MCItemDefinition;
```


## Casters

| Result type | Is Implicit |
|-------------|-------------|
| [IItemStack](/vanilla/api/items/IItemStack) | true |

## Methods

### getDefaultInstance

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
MCItemDefinition.getDefaultInstance() as IItemStack
myMCItemDefinition.getDefaultInstance()
```

## Properties

| Name | Type | Has Getter | Has Setter |
|------|------|------------|------------|
| commandString | string | true | false |
| defaultInstance | [IItemStack](/vanilla/api/items/IItemStack) | true | false |

