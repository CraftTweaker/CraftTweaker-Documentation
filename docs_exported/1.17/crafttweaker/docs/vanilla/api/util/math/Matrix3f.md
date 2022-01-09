# Matrix3f

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.math.Matrix3f;
```


## Methods

:::group{name=add}

Return Type: void

```zenscript
Matrix3f.add(other as Matrix3f) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| other | [Matrix3f](/vanilla/api/util/math/Matrix3f) | No Description Provided |


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

Return Type: void

```zenscript
Matrix3f.load(other as Matrix3f) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| other | [Matrix3f](/vanilla/api/util/math/Matrix3f) | No Description Provided |


:::

:::group{name=mul}

Return Type: void

```zenscript
Matrix3f.mul(other as Matrix3f) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| other | [Matrix3f](/vanilla/api/util/math/Matrix3f) | No Description Provided |


:::

:::group{name=mul}

Return Type: void

```zenscript
Matrix3f.mul(quaternion as Quaternion) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| quaternion | [Quaternion](/vanilla/api/util/math/Quaternion) | No Description Provided |


:::

:::group{name=mul}

Return Type: void

```zenscript
Matrix3f.mul(scalar as float) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| scalar | float | No Description Provided |


:::

:::group{name=setIdentity}

Return Type: void

```zenscript
// Matrix3f.setIdentity() as void

myMatrix3f.setIdentity();
```

:::

:::group{name=setValue}

Return Type: void

```zenscript
Matrix3f.setValue(row as int, col as int, value as float) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| row | int | No Description Provided |
| col | int | No Description Provided |
| value | float | No Description Provided |


:::

:::group{name=sub}

Return Type: void

```zenscript
Matrix3f.sub(other as Matrix3f) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| other | [Matrix3f](/vanilla/api/util/math/Matrix3f) | No Description Provided |


:::

:::group{name=trace}

Return Type: float

```zenscript
// Matrix3f.trace() as float

myMatrix3f.trace();
```

:::

:::group{name=transpose}

Return Type: void

```zenscript
// Matrix3f.transpose() as void

myMatrix3f.transpose();
```

:::


