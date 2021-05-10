# MCMaterial

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.block.material.MCMaterial;
```


## Methods

:::group{name=blocksMovement}

Returns if this material is considered solid or not

Return Type: boolean

```zenscript
// MCMaterial.blocksMovement() as boolean

myMCMaterial.blocksMovement();
```

:::

:::group{name=getColor}

Retrieves the color index of the block. This is is the same color used by vanilla maps to represent this block.

Return Type: [MCMaterialColor](/vanilla/api/block/material/MCMaterialColor)

```zenscript
// MCMaterial.getColor() as MCMaterialColor

myMCMaterial.getColor();
```

:::

:::group{name=getCommandString}

Gets the bracket syntax for this Material

Return Type: string

```zenscript
// MCMaterial.getCommandString() as string

myMCMaterial.getCommandString();
```

:::

:::group{name=getPushReaction}

Gets this Material's [PushReaction](/vanilla/api/block/material/PushReaction).

Return Type: [PushReaction](/vanilla/api/block/material/PushReaction)

```zenscript
// MCMaterial.getPushReaction() as PushReaction

myMCMaterial.getPushReaction();
```

:::

:::group{name=isFlammable}

Returns if the block can burn or not.

Return Type: boolean

```zenscript
// MCMaterial.isFlammable() as boolean

myMCMaterial.isFlammable();
```

:::

:::group{name=isLiquid}

Returns if blocks of these materials are liquids.

Return Type: boolean

```zenscript
// MCMaterial.isLiquid() as boolean

myMCMaterial.isLiquid();
```

:::

:::group{name=isOpaque}

Indicate if the material is opaque

Return Type: boolean

```zenscript
// MCMaterial.isOpaque() as boolean

myMCMaterial.isOpaque();
```

:::

:::group{name=isReplaceable}

Returns whether the material can be replaced by other blocks when placed - eg snow, vines and tall grass.

Return Type: boolean

```zenscript
// MCMaterial.isReplaceable() as boolean

myMCMaterial.isReplaceable();
```

:::

:::group{name=isSolid}

Returns true if the block is a considered solid. This is true by default.

Return Type: boolean

```zenscript
// MCMaterial.isSolid() as boolean

myMCMaterial.isSolid();
```

:::


## Properties

| 名称             | Type                                                           | Has Getter | Has Setter | Description                                                                                                     |
| -------------- | -------------------------------------------------------------- | ---------- | ---------- | --------------------------------------------------------------------------------------------------------------- |
| blocksMovement | boolean型                                                       | true       | false      | Returns if this material is considered solid or not                                                             |
| color          | [MCMaterialColor](/vanilla/api/block/material/MCMaterialColor) | true       | false      | Retrieves the color index of the block. This is is the same color used by vanilla maps to represent this block. |
| commandString  | string                                                         | true       | false      | Gets the bracket syntax for this Material                                                                       |
| flammable      | boolean型                                                       | true       | false      | Returns if the block can burn or not.                                                                           |
| liquid         | boolean型                                                       | true       | false      | Returns if blocks of these materials are liquids.                                                               |
| opaque         | boolean型                                                       | true       | false      | Indicate if the material is opaque                                                                              |
| pushReaction   | [PushReaction](/vanilla/api/block/material/PushReaction)       | true       | false      | Gets this Material's [PushReaction](/vanilla/api/block/material/PushReaction).                                  |
| replaceable    | boolean型                                                       | true       | false      | Returns whether the material can be replaced by other blocks when placed - eg snow, vines and tall grass.       |
| solid          | boolean型                                                       | true       | false      | Returns true if the block is a considered solid. This is true by default.                                       |

