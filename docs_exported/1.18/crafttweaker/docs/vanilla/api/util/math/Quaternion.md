# Quaternion

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.math.Quaternion;
```


## Methods

:::group{name=conj}

```zenscript
// Quaternion.conj()

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

```zenscript
Quaternion.mul(other as Quaternion)
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| other     | [Quaternion](/vanilla/api/util/math/Quaternion) |


:::

:::group{name=mul}

```zenscript
Quaternion.mul(value as float)
```

| Parameter | Type  |
|-----------|-------|
| value     | float |


:::

:::group{name=normalize}

```zenscript
// Quaternion.normalize()

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

```zenscript
Quaternion.setValue(i as float, j as float, k as float, r as float)
```

| Parameter | Type  |
|-----------|-------|
| i         | float |
| j         | float |
| k         | float |
| r         | float |


:::

:::group{name=slerp}

```zenscript
Quaternion.slerp(other as Quaternion, value as float)
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| other     | [Quaternion](/vanilla/api/util/math/Quaternion) |
| value     | float                                           |


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

|    Name    |                    Type                     | Has Getter | Has Setter |
|------------|---------------------------------------------|------------|------------|
| i          | float                                       | true       | false      |
| j          | float                                       | true       | false      |
| k          | float                                       | true       | false      |
| r          | float                                       | true       | false      |
| xyz        | [Vector3f](/vanilla/api/util/math/Vector3f) | true       | false      |
| xyzDegrees | [Vector3f](/vanilla/api/util/math/Vector3f) | true       | false      |
| yxz        | [Vector3f](/vanilla/api/util/math/Vector3f) | true       | false      |
| yxzDegrees | [Vector3f](/vanilla/api/util/math/Vector3f) | true       | false      |

