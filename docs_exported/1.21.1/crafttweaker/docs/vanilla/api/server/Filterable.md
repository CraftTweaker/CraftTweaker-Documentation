# Filterable

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.server.Filterable;
```


## Extending Record

Filterable extends Record. That means all methods available in Record are also available in Filterable

## Static Methods

:::group{name=of}

Return Type: [Filterable](/vanilla/api/server/Filterable)&lt;T&gt;

```zenscript
Filterable.of<T : Object>(raw as T, filtered as @org.openzen.zencode.java.ZenCodeType.Nullable T) as Filterable<T>
```

| Parameter |                       Type                       | Optional |
|-----------|--------------------------------------------------|----------|
| raw       | T                                                | false    |
| filtered  | @org.openzen.zencode.java.ZenCodeType.Nullable T | true     |
| T         | Object                                           |          |


:::

## Methods

:::group{name=filtered}

Return Type: @org.openzen.zencode.java.ZenCodeType.Nullable T

```zenscript
Filterable.filtered<T : Object>() as @org.openzen.zencode.java.ZenCodeType.Nullable T
```

| Parameter |  Type  |
|-----------|--------|
| T         | Object |


:::

:::group{name=getFiltered}

Return Type: T

```zenscript
Filterable.getFiltered<T : Object>(filtered as boolean) as T
```

| Parameter |  Type   |
|-----------|---------|
| filtered  | boolean |
| T         | Object  |


:::

:::group{name=map}

Return Type: [Filterable](/vanilla/api/server/Filterable)&lt;U&gt;

```zenscript
Filterable.map<T : Object, U : Object>(mapper as Function<T,U>) as Filterable<U>
```

| Parameter |        Type         |
|-----------|---------------------|
| mapper    | Function&lt;T,U&gt; |
| T         | Object              |
| U         | Object              |


:::

:::group{name=raw}

Return Type: T

```zenscript
Filterable.raw<T : Object>() as T
```

| Parameter |  Type  |
|-----------|--------|
| T         | Object |


:::

:::group{name=resolve}

Return Type: **invalid**

```zenscript
Filterable.resolve<T : Object, U : Object>(resolver as Function) as invalid
```

| Parameter |   Type   |
|-----------|----------|
| resolver  | Function |
| T         | Object   |
| U         | Object   |


:::


