# WrittenBookContent

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.component.WrittenBookContent;
```


## Extending Record

WrittenBookContent extends Record. That means all methods available in Record are also available in WrittenBookContent

## Implemented Interfaces
WrittenBookContent implements the following interfaces. That means all methods defined in these interfaces are also available in WrittenBookContent

- [BookContent](/vanilla/api/item/component/BookContent)&lt;[Component](/vanilla/api/text/Component),[WrittenBookContent](/vanilla/api/item/component/WrittenBookContent)&gt;

## Methods

:::group{name=getPages}

Return Type: stdlib.List&lt;[Component](/vanilla/api/text/Component)&gt;

```zenscript
WrittenBookContent.getPages(filtered as boolean) as stdlib.List<Component>
```

| Parameter |  Type   |
|-----------|---------|
| filtered  | boolean |


:::

:::group{name=markResolved}

Return Type: [WrittenBookContent](/vanilla/api/item/component/WrittenBookContent)

```zenscript
// WrittenBookContent.markResolved() as WrittenBookContent

myWrittenBookContent.markResolved();
```

:::

:::group{name=tryCraftCopy}

Return Type: [WrittenBookContent](/vanilla/api/item/component/WrittenBookContent)?

```zenscript
// WrittenBookContent.tryCraftCopy() as WrittenBookContent?

myWrittenBookContent.tryCraftCopy();
```

:::

:::group{name=withReplacedPages}

Return Type: [WrittenBookContent](/vanilla/api/item/component/WrittenBookContent)

```zenscript
WrittenBookContent.withReplacedPages(pages as stdlib.List<Filterable<Component>>) as WrittenBookContent
```

| Parameter |                                                      Type                                                       |
|-----------|-----------------------------------------------------------------------------------------------------------------|
| pages     | stdlib.List&lt;[Filterable](/vanilla/api/server/Filterable)&lt;[Component](/vanilla/api/text/Component)&gt;&gt; |


:::


## Properties

|    Name    |                                                      Type                                                       | Has Getter | Has Setter |
|------------|-----------------------------------------------------------------------------------------------------------------|------------|------------|
| author     | string                                                                                                          | true       | false      |
| generation | int                                                                                                             | true       | false      |
| pages      | stdlib.List&lt;[Filterable](/vanilla/api/server/Filterable)&lt;[Component](/vanilla/api/text/Component)&gt;&gt; | true       | false      |
| resolved   | boolean                                                                                                         | true       | false      |
| title      | [Filterable](/vanilla/api/server/Filterable)&lt;string&gt;                                                      | true       | false      |

