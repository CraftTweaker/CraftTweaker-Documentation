# MCMaterial

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.block.material.MCMaterial
```

## Methods
### blocksMovement

Returns if this material is considered solid or not

Returns boolean

```zenscript
myMCMaterial.blocksMovement();
```

### getColor

Retrieves the color index of the block. This is is the same color used by vanilla maps to represent this block.

Returns [crafttweaker.api.block.material.MCMaterialColor](/vanilla/api/block/material/MCMaterialColor)

```zenscript
myMCMaterial.getColor();
```

### isFlammable

Returns if the block can burn or not.

Returns boolean

```zenscript
myMCMaterial.isFlammable();
```

### isLiquid

Returns if blocks of these materials are liquids.

Returns boolean

```zenscript
myMCMaterial.isLiquid();
```

### isOpaque

Indicate if the material is opaque

Returns boolean

```zenscript
myMCMaterial.isOpaque();
```

### isReplaceable

Returns whether the material can be replaced by other blocks when placed - eg snow, vines and tall grass.

Returns boolean

```zenscript
myMCMaterial.isReplaceable();
```

### isSolid

Returns true if the block is a considered solid. This is true by default.

Returns boolean

```zenscript
myMCMaterial.isSolid();
```

### isToolNotRequired

Returns true if the material can be harvested without a tool (or with the wrong tool)

Returns boolean

```zenscript
myMCMaterial.isToolNotRequired();
```


