# Vector3f

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.math.Vector3f;
```


## Metodi

:::group{name=add}

```zenscript
Vector3f.add(other as Vector3f)
```

| Parametro | Tipo                                        |
| --------- | ------------------------------------------- |
| other     | [Vector3f](/vanilla/api/util/math/Vector3f) |


:::

:::group{name=add}

```zenscript
Vector3f.add(x as float, y as float, z as float)
```

| Parametro | Tipo  |
| --------- | ----- |
| x         | float |
| y         | float |
| z         | float |


:::

:::group{name=clamp}

```zenscript
Vector3f.clamp(min as float, max as float)
```

| Parametro | Tipo  |
| --------- | ----- |
| min       | float |
| max       | float |


:::

:::group{name=clamp}

```zenscript
Vector3f.clamp(min as Vector3f, max as Vector3f)
```

| Parametro | Tipo                                        |
| --------- | ------------------------------------------- |
| min       | [Vector3f](/vanilla/api/util/math/Vector3f) |
| max       | [Vector3f](/vanilla/api/util/math/Vector3f) |


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

| Parametro | Tipo                                        |
| --------- | ------------------------------------------- |
| other     | [Vector3f](/vanilla/api/util/math/Vector3f) |


:::

:::group{name=dot}

Return Type: float

```zenscript
Vector3f.dot(other as Vector3f) as float
```

| Parametro | Tipo                                        |
| --------- | ------------------------------------------- |
| other     | [Vector3f](/vanilla/api/util/math/Vector3f) |


:::

:::group{name=lerp}

```zenscript
Vector3f.lerp(max as Vector3f, value as float)
```

| Parametro | Tipo                                        |
| --------- | ------------------------------------------- |
| max       | [Vector3f](/vanilla/api/util/math/Vector3f) |
| valore    | float                                       |


:::

:::group{name=load}

```zenscript
Vector3f.load(other as Vector3f)
```

| Parametro | Tipo                                        |
| --------- | ------------------------------------------- |
| other     | [Vector3f](/vanilla/api/util/math/Vector3f) |


:::

:::group{name=mul}

```zenscript
Vector3f.mul(scalar as float)
```

| Parametro | Tipo  |
| --------- | ----- |
| scalar    | float |


:::

:::group{name=mul}

```zenscript
Vector3f.mul(x as float, y as float, z as float)
```

| Parametro | Tipo  |
| --------- | ----- |
| x         | float |
| y         | float |
| z         | float |


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

| Parametro | Tipo  |
| --------- | ----- |
| rads      | float |


:::

:::group{name=rotationDegrees}

Return Type: [Quaternion](/vanilla/api/util/math/Quaternion)

```zenscript
Vector3f.rotationDegrees(degrees as float) as Quaternion
```

| Parametro | Tipo  |
| --------- | ----- |
| degrees   | float |


:::

:::group{name=setValues}

```zenscript
Vector3f.setValues(x as float, y as float, z as float)
```

| Parametro | Tipo  |
| --------- | ----- |
| x         | float |
| y         | float |
| z         | float |


:::

:::group{name=sub}

```zenscript
Vector3f.sub(other as Vector3f)
```

| Parametro | Tipo                                        |
| --------- | ------------------------------------------- |
| other     | [Vector3f](/vanilla/api/util/math/Vector3f) |


:::

:::group{name=transform}

```zenscript
Vector3f.transform(matrix as Matrix3f)
```

| Parametro | Tipo                                        |
| --------- | ------------------------------------------- |
| matrix    | [Matrix3f](/vanilla/api/util/math/Matrix3f) |


:::

:::group{name=transform}

```zenscript
Vector3f.transform(quaternion as Quaternion)
```

| Parametro  | Tipo                                            |
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


## Proprietà

| Nome | Tipo  | Ha Getter | Ha Setter |
| ---- | ----- | --------- | --------- |
| x    | float | sì        | no        |
| y    | float | sì        | no        |
| z    | float | sì        | no        |

