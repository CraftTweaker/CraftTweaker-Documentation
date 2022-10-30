# OctahedralGroup

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.math.OctahedralGroup;
```


## Implemented Interfaces
OctahedralGroup implements the following interfaces. That means all methods defined in these interfaces are also available in OctahedralGroup

- [StringRepresentable](/vanilla/api/util/StringRepresentable)

## Enum Constants

OctahedralGroup is an enum. It has 48 enum constants. They are accessible using the code below.

```zenscript
OctahedralGroup.IDENTITY
OctahedralGroup.ROT_180_FACE_XY
OctahedralGroup.ROT_180_FACE_XZ
OctahedralGroup.ROT_180_FACE_YZ
OctahedralGroup.ROT_120_NNN
OctahedralGroup.ROT_120_NNP
OctahedralGroup.ROT_120_NPN
OctahedralGroup.ROT_120_NPP
OctahedralGroup.ROT_120_PNN
OctahedralGroup.ROT_120_PNP
OctahedralGroup.ROT_120_PPN
OctahedralGroup.ROT_120_PPP
OctahedralGroup.ROT_180_EDGE_XY_NEG
OctahedralGroup.ROT_180_EDGE_XY_POS
OctahedralGroup.ROT_180_EDGE_XZ_NEG
OctahedralGroup.ROT_180_EDGE_XZ_POS
OctahedralGroup.ROT_180_EDGE_YZ_NEG
OctahedralGroup.ROT_180_EDGE_YZ_POS
OctahedralGroup.ROT_90_X_NEG
OctahedralGroup.ROT_90_X_POS
OctahedralGroup.ROT_90_Y_NEG
OctahedralGroup.ROT_90_Y_POS
OctahedralGroup.ROT_90_Z_NEG
OctahedralGroup.ROT_90_Z_POS
OctahedralGroup.INVERSION
OctahedralGroup.INVERT_X
OctahedralGroup.INVERT_Y
OctahedralGroup.INVERT_Z
OctahedralGroup.ROT_60_REF_NNN
OctahedralGroup.ROT_60_REF_NNP
OctahedralGroup.ROT_60_REF_NPN
OctahedralGroup.ROT_60_REF_NPP
OctahedralGroup.ROT_60_REF_PNN
OctahedralGroup.ROT_60_REF_PNP
OctahedralGroup.ROT_60_REF_PPN
OctahedralGroup.ROT_60_REF_PPP
OctahedralGroup.SWAP_XY
OctahedralGroup.SWAP_YZ
OctahedralGroup.SWAP_XZ
OctahedralGroup.SWAP_NEG_XY
OctahedralGroup.SWAP_NEG_YZ
OctahedralGroup.SWAP_NEG_XZ
OctahedralGroup.ROT_90_REF_X_NEG
OctahedralGroup.ROT_90_REF_X_POS
OctahedralGroup.ROT_90_REF_Y_NEG
OctahedralGroup.ROT_90_REF_Y_POS
OctahedralGroup.ROT_90_REF_Z_NEG
OctahedralGroup.ROT_90_REF_Z_POS
```
## Methods

:::group{name=compose}

Return Type: [OctahedralGroup](/vanilla/api/util/math/OctahedralGroup)

```zenscript
OctahedralGroup.compose(group as OctahedralGroup) as OctahedralGroup
```

| Parameter | Type | Description |
|-----------|------|-------------|
| group | [OctahedralGroup](/vanilla/api/util/math/OctahedralGroup) | No Description Provided |


:::

:::group{name=inverse}

Return Type: [OctahedralGroup](/vanilla/api/util/math/OctahedralGroup)

```zenscript
// OctahedralGroup.inverse() as OctahedralGroup

myOctahedralGroup.inverse();
```

:::

:::group{name=inverts}

Return Type: boolean

```zenscript
OctahedralGroup.inverts(axis as Axis) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| axis | [Axis](/vanilla/api/util/direction/Axis) | No Description Provided |


:::

:::group{name=rotate}

Return Type: [Direction](/vanilla/api/util/direction/Direction)

```zenscript
OctahedralGroup.rotate(direction as Direction) as Direction
```

| Parameter | Type | Description |
|-----------|------|-------------|
| direction | [Direction](/vanilla/api/util/direction/Direction) | No Description Provided |


:::

:::group{name=rotate}

Return Type: [FrontAndTop](/vanilla/api/util/math/FrontAndTop)

```zenscript
OctahedralGroup.rotate(frontAndTop as FrontAndTop) as FrontAndTop
```

| Parameter | Type | Description |
|-----------|------|-------------|
| frontAndTop | [FrontAndTop](/vanilla/api/util/math/FrontAndTop) | No Description Provided |


:::

:::group{name=transformation}

Return Type: [Matrix3f](/vanilla/api/util/math/Matrix3f)

```zenscript
// OctahedralGroup.transformation() as Matrix3f

myOctahedralGroup.transformation();
```

:::


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| transformation | [Matrix3f](/vanilla/api/util/math/Matrix3f) | true | false | No Description Provided |

