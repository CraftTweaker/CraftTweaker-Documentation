# Tuple&LT;A : Object, B : Object&GT;

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.utils.core.Tuple;
```


## Methods

:::group{name=getA}

Return Type: Object

```zenscript
Tuple.getA<A : Object, B : Object>() as Object
```

| Parameter |  Type  |
|-----------|--------|
| A         | Object |
| B         | Object |


:::

:::group{name=getB}

Return Type: Object

```zenscript
Tuple.getB<A : Object, B : Object>() as Object
```

| Parameter |  Type  |
|-----------|--------|
| A         | Object |
| B         | Object |


:::

:::group{name=setA}

```zenscript
Tuple.setA<A : Object, B : Object>(A as A)
```

| Parameter |  Type  |
|-----------|--------|
| A         | A      |
| A         | Object |
| B         | Object |


:::

:::group{name=setB}

```zenscript
Tuple.setB<A : Object, B : Object>(B as B)
```

| Parameter |  Type  |
|-----------|--------|
| B         | B      |
| A         | Object |
| B         | Object |


:::


## Properties

| Name |  Type  | Has Getter | Has Setter |
|------|--------|------------|------------|
| a    | Object | true       | true       |
| b    | Object | true       | true       |

