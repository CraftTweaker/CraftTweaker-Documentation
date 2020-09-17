# MCMaterial

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.  
```zenscript
crafttweaker.api.block.material.MCMaterial
```

## Implemented Interfaces
MCMaterial implements the following interfaces. That means any method available to them can also be used on this class.  
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Methods
### blocksMovement

Returns if this material is considered solid or not

Return type: boolean

```zenscript
myMCMaterial.blocksMovement();
```

### getColor

Retrieves the color index of the block. This is is the same color used by vanilla maps to represent this block.

Return type: MCMaterialColor

```zenscript
myMCMaterial.getColor();
```

### isFlammable

Returns if the block can burn or not.

Return type: boolean

```zenscript
myMCMaterial.isFlammable();
```

### isLiquid

Returns if blocks of these materials are liquids.

Return type: boolean

```zenscript
myMCMaterial.isLiquid();
```

### isOpaque

Indicate if the material is opaque

Return type: boolean

```zenscript
myMCMaterial.isOpaque();
```

### isReplaceable

Returns whether the material can be replaced by other blocks when placed - eg snow, vines and tall grass.

Return type: boolean

```zenscript
myMCMaterial.isReplaceable();
```

### isSolid

Returns true if the block is a considered solid. This is true by default.

Return type: boolean

```zenscript
myMCMaterial.isSolid();
```


## Properties

| Name | Type | Has Getter | Has Setter |
|------|------|------------|------------|
| commandString | String | true | false |

