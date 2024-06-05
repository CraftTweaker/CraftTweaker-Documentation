# ItemLore

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.component.ItemLore;
```


## Extending Record

ItemLore extends Record. That means all methods available in Record are also available in ItemLore

## Static Methods

:::group{name=of}

Return Type: [ItemLore](/vanilla/api/item/component/ItemLore)

```zenscript
ItemLore.of(lines as stdlib.List<Component>) as ItemLore
```

| Parameter |                            Type                             |
|-----------|-------------------------------------------------------------|
| lines     | stdlib.List&lt;[Component](/vanilla/api/text/Component)&gt; |


:::

:::group{name=of}

Return Type: [ItemLore](/vanilla/api/item/component/ItemLore)

```zenscript
ItemLore.of(lines as stdlib.List<Component>, styledLines as stdlib.List<Component>) as ItemLore
```

|  Parameter  |                            Type                             |
|-------------|-------------------------------------------------------------|
| lines       | stdlib.List&lt;[Component](/vanilla/api/text/Component)&gt; |
| styledLines | stdlib.List&lt;[Component](/vanilla/api/text/Component)&gt; |


:::

## Methods

:::group{name=withLineAdded}

Return Type: [ItemLore](/vanilla/api/item/component/ItemLore)

```zenscript
ItemLore.withLineAdded(line as Component) as ItemLore
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| line      | [Component](/vanilla/api/text/Component) |


:::


## Properties

|    Name     |                            Type                             | Has Getter | Has Setter |
|-------------|-------------------------------------------------------------|------------|------------|
| lines       | stdlib.List&lt;[Component](/vanilla/api/text/Component)&gt; | true       | false      |
| styledLines | stdlib.List&lt;[Component](/vanilla/api/text/Component)&gt; | true       | false      |

