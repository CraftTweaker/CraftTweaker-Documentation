# Quaternion

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.math.Quaternion;
```


## Methods

:::group{name=conj}

Return Type: void

```zenscript
// Quaternion.conj() as void

myQuaternion.conj();
```

:::

:::group{name=copy}

Return Type: [Quaternion](/vanilla/api/util/math/Quaternion)

```zenscript
// Quaternion.copy() as Quaternion

myQuaternion.copy();
```

:::

:::group{name=i}

Return Type: float

```zenscript
// Quaternion.i() as float

myQuaternion.i();
```

:::

:::group{name=j}

Return Type: float

```zenscript
// Quaternion.j() as float

myQuaternion.j();
```

:::

:::group{name=k}

Return Type: float

```zenscript
// Quaternion.k() as float

myQuaternion.k();
```

:::

:::group{name=mul}

Return Type: void

```zenscript
Quaternion.mul(other as Quaternion) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| other | [Quaternion](/vanilla/api/util/math/Quaternion) | No Description Provided |


:::

:::group{name=mul}

Return Type: void

```zenscript
Quaternion.mul(value as float) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| value | float | No Description Provided |


:::

:::group{name=normalize}

Return Type: void

```zenscript
// Quaternion.normalize() as void

myQuaternion.normalize();
```

:::

:::group{name=r}

Return Type: float

```zenscript
// Quaternion.r() as float

myQuaternion.r();
```

:::

:::group{name=setValue}

Return Type: void

```zenscript
Quaternion.setValue(i as float, j as float, k as float, r as float) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| i | float | No Description Provided |
| j | float | No Description Provided |
| k | float | No Description Provided |
| r | float | No Description Provided |


:::

:::group{name=slerp}

Return Type: void

```zenscript
Quaternion.slerp(other as Quaternion, value as float) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| other | [Quaternion](/vanilla/api/util/math/Quaternion) | No Description Provided |
| value | float | No Description Provided |


:::

:::group{name=toXYZ}

Return Type: [Vector3f](/vanilla/api/util/math/Vector3f)

```zenscript
// Quaternion.toXYZ() as Vector3f

myQuaternion.toXYZ();
```

:::

:::group{name=toXYZDegrees}

Return Type: [Vector3f](/vanilla/api/util/math/Vector3f)

```zenscript
// Quaternion.toXYZDegrees() as Vector3f

myQuaternion.toXYZDegrees();
```

:::

:::group{name=toYXZ}

Return Type: [Vector3f](/vanilla/api/util/math/Vector3f)

```zenscript
// Quaternion.toYXZ() as Vector3f

myQuaternion.toYXZ();
```

:::

:::group{name=toYXZDegrees}

Return Type: [Vector3f](/vanilla/api/util/math/Vector3f)

```zenscript
// Quaternion.toYXZDegrees() as Vector3f

myQuaternion.toYXZDegrees();
```

:::


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| i | float | true | false | No Description Provided |
| j | float | true | false | No Description Provided |
| k | float | true | false | No Description Provided |
| r | float | true | false | No Description Provided |
| xyz | [Vector3f](/vanilla/api/util/math/Vector3f) | true | false | No Description Provided |
| xyzDegrees | [Vector3f](/vanilla/api/util/math/Vector3f) | true | false | No Description Provided |
| yxz | [Vector3f](/vanilla/api/util/math/Vector3f) | true | false | No Description Provided |
| yxzDegrees | [Vector3f](/vanilla/api/util/math/Vector3f) | true | false | No Description Provided |

