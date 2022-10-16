# Quaternion

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.math.Quaternion;
```


## Metodi

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

| Parametro | Tipo                                            |
| --------- | ----------------------------------------------- |
| other     | [Quaternion](/vanilla/api/util/math/Quaternion) |


:::

:::group{name=mul}

```zenscript
Quaternion.mul(value as float)
```

| Parametro | Tipo  |
| --------- | ----- |
| valore    | float |


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

| Parametro | Tipo  |
| --------- | ----- |
| i         | float |
| j         | float |
| k         | float |
| r         | float |


:::

:::group{name=slerp}

```zenscript
Quaternion.slerp(other as Quaternion, value as float)
```

| Parametro | Tipo                                            |
| --------- | ----------------------------------------------- |
| other     | [Quaternion](/vanilla/api/util/math/Quaternion) |
| valore    | float                                           |


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


## Proprietà

| Nome       | Tipo                                        | Ha Getter | Ha Setter |
| ---------- | ------------------------------------------- | --------- | --------- |
| i          | float                                       | sì        | no        |
| j          | float                                       | sì        | no        |
| k          | float                                       | sì        | no        |
| r          | float                                       | sì        | no        |
| xyz        | [Vector3f](/vanilla/api/util/math/Vector3f) | sì        | no        |
| xyzDegrees | [Vector3f](/vanilla/api/util/math/Vector3f) | sì        | no        |
| yxz        | [Vector3f](/vanilla/api/util/math/Vector3f) | sì        | no        |
| yxzDegrees | [Vector3f](/vanilla/api/util/math/Vector3f) | sì        | no        |

