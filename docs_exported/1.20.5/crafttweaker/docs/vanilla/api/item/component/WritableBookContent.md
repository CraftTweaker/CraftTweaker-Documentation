# WritableBookContent

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.component.WritableBookContent;
```


## Extending Record

WritableBookContent extends Record. That means all methods available in Record are also available in WritableBookContent

## Implemented Interfaces
WritableBookContent implements the following interfaces. That means all methods defined in these interfaces are also available in WritableBookContent

- [BookContent](/vanilla/api/item/component/BookContent)&lt;string,[WritableBookContent](/vanilla/api/item/component/WritableBookContent)&gt;

## Static Methods

:::group{name=of}

Return Type: [WritableBookContent](/vanilla/api/item/component/WritableBookContent)

```zenscript
WritableBookContent.of(pages as stdlib.List<Filterable<string>>) as WritableBookContent
```

| Parameter |                                     Type                                      |
|-----------|-------------------------------------------------------------------------------|
| pages     | stdlib.List&lt;[Filterable](/vanilla/api/server/Filterable)&lt;string&gt;&gt; |


:::

## Methods

:::group{name=getPages}

Return Type: stdlib.List&lt;string&gt;

```zenscript
WritableBookContent.getPages(filtered as boolean) as stdlib.List<string>
```

| Parameter |  Type   |
|-----------|---------|
| filtered  | boolean |


:::

:::group{name=withReplacedPages}

Return Type: [WritableBookContent](/vanilla/api/item/component/WritableBookContent)

```zenscript
WritableBookContent.withReplacedPages(pages as stdlib.List<Filterable<string>>) as WritableBookContent
```

| Parameter |                                     Type                                      |
|-----------|-------------------------------------------------------------------------------|
| pages     | stdlib.List&lt;[Filterable](/vanilla/api/server/Filterable)&lt;string&gt;&gt; |


:::


## Properties

| Name  |                                     Type                                      | Has Getter | Has Setter |
|-------|-------------------------------------------------------------------------------|------------|------------|
| pages | stdlib.List&lt;[Filterable](/vanilla/api/server/Filterable)&lt;string&gt;&gt; | true       | false      |

