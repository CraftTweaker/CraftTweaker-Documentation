# Vector3f

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.math.Vector3f;
```


## 使用方式

:::group{name=add}

```zenscript
Vector3f.add(other as Vector3f)
```

| 参数    | 类型                                          |
| ----- | ------------------------------------------- |
| other | [Vector3f](/vanilla/api/util/math/Vector3f) |


:::

:::group{name=add}

```zenscript
Vector3f.add(x as float, y as float, z as float)
```

| 参数 | 类型    |
| -- | ----- |
| x  | float |
| y  | float |
| z  | float |


:::

:::group{name=clamp}

```zenscript
Vector3f.clamp(min as float, max as float)
```

| 参数  | 类型    |
| --- | ----- |
| min | float |
| max | float |


:::

:::group{name=clamp}

```zenscript
Vector3f.clamp(min as Vector3f, max as Vector3f)
```

| 参数  | 类型                                          |
| --- | ------------------------------------------- |
| min | [Vector3f](/vanilla/api/util/math/Vector3f) |
| max | [Vector3f](/vanilla/api/util/math/Vector3f) |


:::

:::group{name=copy}

Return Type: [Vector3f](/vanilla/api/util/math/Vector3f)

```zenscript
// Vector3f.copy() as Vector3f

myVector3f.copy();
```

:::

:::group{name=cross}

```zenscript
Vector3f.cross(other as Vector3f)
```

| 参数    | 类型                                          |
| ----- | ------------------------------------------- |
| other | [Vector3f](/vanilla/api/util/math/Vector3f) |


:::

:::group{name=dot}

Return Type: float

```zenscript
Vector3f.dot(other as Vector3f) as float
```

| 参数    | 类型                                          |
| ----- | ------------------------------------------- |
| other | [Vector3f](/vanilla/api/util/math/Vector3f) |


:::

:::group{name=lerp}

```zenscript
Vector3f.lerp(max as Vector3f, value as float)
```

| 参数    | 类型                                          |
| ----- | ------------------------------------------- |
| max   | [Vector3f](/vanilla/api/util/math/Vector3f) |
| value | float                                       |


:::

:::group{name=load}

```zenscript
Vector3f.load(other as Vector3f)
```

| 参数    | 类型                                          |
| ----- | ------------------------------------------- |
| other | [Vector3f](/vanilla/api/util/math/Vector3f) |


:::

:::group{name=mul}

```zenscript
Vector3f.mul(scalar as float)
```

| 参数     | 类型    |
| ------ | ----- |
| scalar | float |


:::

:::group{name=mul}

```zenscript
Vector3f.mul(x as float, y as float, z as float)
```

| 参数 | 类型    |
| -- | ----- |
| x  | float |
| y  | float |
| z  | float |


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

| 参数   | 类型    |
| ---- | ----- |
| rads | float |


:::

:::group{name=rotationDegrees}

Return Type: [Quaternion](/vanilla/api/util/math/Quaternion)

```zenscript
Vector3f.rotationDegrees(degrees as float) as Quaternion
```

| 参数      | 类型    |
| ------- | ----- |
| degrees | float |


:::

:::group{name=setValues}

```zenscript
Vector3f.setValues(x as float, y as float, z as float)
```

| 参数 | 类型    |
| -- | ----- |
| x  | float |
| y  | float |
| z  | float |


:::

:::group{name=sub}

```zenscript
Vector3f.sub(other as Vector3f)
```

| 参数    | 类型                                          |
| ----- | ------------------------------------------- |
| other | [Vector3f](/vanilla/api/util/math/Vector3f) |


:::

:::group{name=transform}

```zenscript
Vector3f.transform(matrix as Matrix3f)
```

| 参数     | 类型                                          |
| ------ | ------------------------------------------- |
| matrix | [Matrix3f](/vanilla/api/util/math/Matrix3f) |


:::

:::group{name=transform}

```zenscript
Vector3f.transform(quaternion as Quaternion)
```

| 参数         | 类型                                              |
| ---------- | ----------------------------------------------- |
| quaternion | [Quaternion](/vanilla/api/util/math/Quaternion) |


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


## 参数

| 名称 | 类型    | 可获得  | 可设置   |
| -- | ----- | ---- | ----- |
| x  | float | true | false |
| y  | float | true | false |
| z  | float | true | false |

