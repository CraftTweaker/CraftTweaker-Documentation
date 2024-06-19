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
<constant:minecraft:math/octahedralgroup:identity>
<constant:minecraft:math/octahedralgroup:rot_180_face_xy>
<constant:minecraft:math/octahedralgroup:rot_180_face_xz>
<constant:minecraft:math/octahedralgroup:rot_180_face_yz>
<constant:minecraft:math/octahedralgroup:rot_120_nnn>
<constant:minecraft:math/octahedralgroup:rot_120_nnp>
<constant:minecraft:math/octahedralgroup:rot_120_npn>
<constant:minecraft:math/octahedralgroup:rot_120_npp>
<constant:minecraft:math/octahedralgroup:rot_120_pnn>
<constant:minecraft:math/octahedralgroup:rot_120_pnp>
<constant:minecraft:math/octahedralgroup:rot_120_ppn>
<constant:minecraft:math/octahedralgroup:rot_120_ppp>
<constant:minecraft:math/octahedralgroup:rot_180_edge_xy_neg>
<constant:minecraft:math/octahedralgroup:rot_180_edge_xy_pos>
<constant:minecraft:math/octahedralgroup:rot_180_edge_xz_neg>
<constant:minecraft:math/octahedralgroup:rot_180_edge_xz_pos>
<constant:minecraft:math/octahedralgroup:rot_180_edge_yz_neg>
<constant:minecraft:math/octahedralgroup:rot_180_edge_yz_pos>
<constant:minecraft:math/octahedralgroup:rot_90_x_neg>
<constant:minecraft:math/octahedralgroup:rot_90_x_pos>
<constant:minecraft:math/octahedralgroup:rot_90_y_neg>
<constant:minecraft:math/octahedralgroup:rot_90_y_pos>
<constant:minecraft:math/octahedralgroup:rot_90_z_neg>
<constant:minecraft:math/octahedralgroup:rot_90_z_pos>
<constant:minecraft:math/octahedralgroup:inversion>
<constant:minecraft:math/octahedralgroup:invert_x>
<constant:minecraft:math/octahedralgroup:invert_y>
<constant:minecraft:math/octahedralgroup:invert_z>
<constant:minecraft:math/octahedralgroup:rot_60_ref_nnn>
<constant:minecraft:math/octahedralgroup:rot_60_ref_nnp>
<constant:minecraft:math/octahedralgroup:rot_60_ref_npn>
<constant:minecraft:math/octahedralgroup:rot_60_ref_npp>
<constant:minecraft:math/octahedralgroup:rot_60_ref_pnn>
<constant:minecraft:math/octahedralgroup:rot_60_ref_pnp>
<constant:minecraft:math/octahedralgroup:rot_60_ref_ppn>
<constant:minecraft:math/octahedralgroup:rot_60_ref_ppp>
<constant:minecraft:math/octahedralgroup:swap_xy>
<constant:minecraft:math/octahedralgroup:swap_yz>
<constant:minecraft:math/octahedralgroup:swap_xz>
<constant:minecraft:math/octahedralgroup:swap_neg_xy>
<constant:minecraft:math/octahedralgroup:swap_neg_yz>
<constant:minecraft:math/octahedralgroup:swap_neg_xz>
<constant:minecraft:math/octahedralgroup:rot_90_ref_x_neg>
<constant:minecraft:math/octahedralgroup:rot_90_ref_x_pos>
<constant:minecraft:math/octahedralgroup:rot_90_ref_y_neg>
<constant:minecraft:math/octahedralgroup:rot_90_ref_y_pos>
<constant:minecraft:math/octahedralgroup:rot_90_ref_z_neg>
<constant:minecraft:math/octahedralgroup:rot_90_ref_z_pos>
```
## Methods

:::group{name=compose}

Return Type: [OctahedralGroup](/vanilla/api/util/math/OctahedralGroup)

```zenscript
OctahedralGroup.compose(group as OctahedralGroup) as OctahedralGroup
```

| Parameter |                           Type                            |
|-----------|-----------------------------------------------------------|
| group     | [OctahedralGroup](/vanilla/api/util/math/OctahedralGroup) |


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

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| axis      | [Axis](/vanilla/api/util/direction/Axis) |


:::

:::group{name=rotate}

Return Type: [Direction](/vanilla/api/util/direction/Direction)

```zenscript
OctahedralGroup.rotate(direction as Direction) as Direction
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| direction | [Direction](/vanilla/api/util/direction/Direction) |


:::

:::group{name=rotate}

Return Type: [FrontAndTop](/vanilla/api/util/math/FrontAndTop)

```zenscript
OctahedralGroup.rotate(frontAndTop as FrontAndTop) as FrontAndTop
```

|  Parameter  |                       Type                        |
|-------------|---------------------------------------------------|
| frontAndTop | [FrontAndTop](/vanilla/api/util/math/FrontAndTop) |


:::

:::group{name=transformation}

Return Type: [Matrix3f](/vanilla/api/util/math/Matrix3f)

```zenscript
// OctahedralGroup.transformation() as Matrix3f

myOctahedralGroup.transformation();
```

:::


## Properties

|      Name      |                    Type                     | Has Getter | Has Setter |
|----------------|---------------------------------------------|------------|------------|
| transformation | [Matrix3f](/vanilla/api/util/math/Matrix3f) | true       | false      |

