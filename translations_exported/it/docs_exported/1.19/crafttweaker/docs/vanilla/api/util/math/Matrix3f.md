# Matrix3f

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.math.Matrix3f;
```


## Metodi

:::group{name=add}

```zenscript
Matrix3f.add(other as Matrix3f)
```

| Parametro | Tipo                                        |
| --------- | ------------------------------------------- |
| other     | [Matrix3f](/vanilla/api/util/math/Matrix3f) |


:::

:::group{name=adjugateAndDet}

Return Type: float

```zenscript
// Matrix3f.adjugateAndDet() as float

myMatrix3f.adjugateAndDet();
```

:::

:::group{name=copy}

Return Type: [Matrix3f](/vanilla/api/util/math/Matrix3f)

```zenscript
// Matrix3f.copy() as Matrix3f

myMatrix3f.copy();
```

:::

:::group{name=determinant}

Return Type: float

```zenscript
// Matrix3f.determinant() as float

myMatrix3f.determinant();
```

:::

:::group{name=invert}

Return Type: boolean

```zenscript
// Matrix3f.invert() as boolean

myMatrix3f.invert();
```

:::

:::group{name=load}

```zenscript
Matrix3f.load(other as Matrix3f)
```

| Parametro | Tipo                                        |
| --------- | ------------------------------------------- |
| other     | [Matrix3f](/vanilla/api/util/math/Matrix3f) |


:::

:::group{name=mul}

```zenscript
Matrix3f.mul(other as Matrix3f)
```

| Parametro | Tipo                                        |
| --------- | ------------------------------------------- |
| other     | [Matrix3f](/vanilla/api/util/math/Matrix3f) |


:::

:::group{name=mul}

```zenscript
Matrix3f.mul(quaternion as Quaternion)
```

| Parametro  | Tipo                                            |
| ---------- | ----------------------------------------------- |
| quaternion | [Quaternion](/vanilla/api/util/math/Quaternion) |


:::

:::group{name=mul}

```zenscript
Matrix3f.mul(scalar as float)
```

| Parametro | Tipo  |
| --------- | ----- |
| scalar    | float |


:::

:::group{name=setIdentity}

```zenscript
// Matrix3f.setIdentity()

myMatrix3f.setIdentity();
```

:::

:::group{name=setValue}

```zenscript
Matrix3f.setValue(row as int, col as int, value as float)
```

| Parametro | Tipo  |
| --------- | ----- |
| row       | int   |
| col       | int   |
| valore    | float |


:::

:::group{name=sub}

```zenscript
Matrix3f.sub(other as Matrix3f)
```

| Parametro | Tipo                                        |
| --------- | ------------------------------------------- |
| other     | [Matrix3f](/vanilla/api/util/math/Matrix3f) |


:::

:::group{name=trace}

Return Type: float

```zenscript
// Matrix3f.trace() as float

myMatrix3f.trace();
```

:::

:::group{name=transpose}

```zenscript
// Matrix3f.transpose()

myMatrix3f.transpose();
```

:::


