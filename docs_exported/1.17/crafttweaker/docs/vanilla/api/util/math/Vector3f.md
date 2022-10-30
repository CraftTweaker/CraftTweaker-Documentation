# Vector3f

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.math.Vector3f;
```


## Methods

:::group{name=add}

Return Type: void

```zenscript
Vector3f.add(other as Vector3f) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| other | [Vector3f](/vanilla/api/util/math/Vector3f) | No Description Provided |


:::

:::group{name=add}

Return Type: void

```zenscript
Vector3f.add(x as float, y as float, z as float) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| x | float | No Description Provided |
| y | float | No Description Provided |
| z | float | No Description Provided |


:::

:::group{name=clamp}

Return Type: void

```zenscript
Vector3f.clamp(min as float, max as float) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| min | float | No Description Provided |
| max | float | No Description Provided |


:::

:::group{name=clamp}

Return Type: void

```zenscript
Vector3f.clamp(min as Vector3f, max as Vector3f) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| min | [Vector3f](/vanilla/api/util/math/Vector3f) | No Description Provided |
| max | [Vector3f](/vanilla/api/util/math/Vector3f) | No Description Provided |


:::

:::group{name=copy}

Return Type: [Vector3f](/vanilla/api/util/math/Vector3f)

```zenscript
// Vector3f.copy() as Vector3f

myVector3f.copy();
```

:::

:::group{name=cross}

Return Type: void

```zenscript
Vector3f.cross(other as Vector3f) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| other | [Vector3f](/vanilla/api/util/math/Vector3f) | No Description Provided |


:::

:::group{name=dot}

Return Type: float

```zenscript
Vector3f.dot(other as Vector3f) as float
```

| Parameter | Type | Description |
|-----------|------|-------------|
| other | [Vector3f](/vanilla/api/util/math/Vector3f) | No Description Provided |


:::

:::group{name=lerp}

Return Type: void

```zenscript
Vector3f.lerp(max as Vector3f, value as float) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| max | [Vector3f](/vanilla/api/util/math/Vector3f) | No Description Provided |
| value | float | No Description Provided |


:::

:::group{name=load}

Return Type: void

```zenscript
Vector3f.load(other as Vector3f) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| other | [Vector3f](/vanilla/api/util/math/Vector3f) | No Description Provided |


:::

:::group{name=mul}

Return Type: void

```zenscript
Vector3f.mul(scalar as float) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| scalar | float | No Description Provided |


:::

:::group{name=mul}

Return Type: void

```zenscript
Vector3f.mul(x as float, y as float, z as float) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| x | float | No Description Provided |
| y | float | No Description Provided |
| z | float | No Description Provided |


:::

:::group{name=normalize}

Return Type: boolean

```zenscript
// Vector3f.normalize() as boolean

myVector3f.normalize();
```

:::

:::group{name=rotation}

Return Type: [Quaternion](/vanilla/api/util/math/Quaternion)

```zenscript
Vector3f.rotation(rads as float) as Quaternion
```

| Parameter | Type | Description |
|-----------|------|-------------|
| rads | float | No Description Provided |


:::

:::group{name=rotationDegrees}

Return Type: [Quaternion](/vanilla/api/util/math/Quaternion)

```zenscript
Vector3f.rotationDegrees(degrees as float) as Quaternion
```

| Parameter | Type | Description |
|-----------|------|-------------|
| degrees | float | No Description Provided |


:::

:::group{name=setValues}

Return Type: void

```zenscript
Vector3f.setValues(x as float, y as float, z as float) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| x | float | No Description Provided |
| y | float | No Description Provided |
| z | float | No Description Provided |


:::

:::group{name=sub}

Return Type: void

```zenscript
Vector3f.sub(other as Vector3f) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| other | [Vector3f](/vanilla/api/util/math/Vector3f) | No Description Provided |


:::

:::group{name=transform}

Return Type: void

```zenscript
Vector3f.transform(matrix as Matrix3f) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| matrix | [Matrix3f](/vanilla/api/util/math/Matrix3f) | No Description Provided |


:::

:::group{name=transform}

Return Type: void

```zenscript
Vector3f.transform(quaternion as Quaternion) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| quaternion | [Quaternion](/vanilla/api/util/math/Quaternion) | No Description Provided |


:::

:::group{name=x}

Return Type: float

```zenscript
// Vector3f.x() as float

myVector3f.x();
```

:::

:::group{name=y}

Return Type: float

```zenscript
// Vector3f.y() as float

myVector3f.y();
```

:::

:::group{name=z}

Return Type: float

```zenscript
// Vector3f.z() as float

myVector3f.z();
```

:::


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| x | float | true | false | No Description Provided |
| y | float | true | false | No Description Provided |
| z | float | true | false | No Description Provided |

