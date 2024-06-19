# BookContent

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.component.BookContent;
```


## Methods

:::group{name=pages}

Return Type: stdlib.List&lt;[Filterable](/vanilla/api/server/Filterable)&lt;T&gt;&gt;

```zenscript
BookContent.pages<T : Object, C : Object>() as stdlib.List<Filterable<T>>
```

| Parameter |  Type  |
|-----------|--------|
| T         | Object |
| C         | Object |


:::

:::group{name=withReplacedPages}

Return Type: C

```zenscript
BookContent.withReplacedPages<T : Object, C : Object>(list as stdlib.List<Filterable<T>>) as C
```

| Parameter |                                   Type                                   |
|-----------|--------------------------------------------------------------------------|
| list      | stdlib.List&lt;[Filterable](/vanilla/api/server/Filterable)&lt;T&gt;&gt; |
| T         | Object                                                                   |
| C         | Object                                                                   |


:::


