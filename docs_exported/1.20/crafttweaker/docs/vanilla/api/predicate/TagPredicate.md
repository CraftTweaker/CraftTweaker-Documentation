# TagPredicate

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.TagPredicate;
```


## Static Methods

:::group{name=isIn}

Return Type: [TagPredicate](/vanilla/api/predicate/TagPredicate)&lt;T&gt;

```zenscript
TagPredicate.isIn<T : Object>(tag as MCTag) as TagPredicate<T>
```

| Parameter |              Type               |
|-----------|---------------------------------|
| tag       | [MCTag](/vanilla/api/tag/MCTag) |
| T         | Object                          |


:::

:::group{name=isNotIn}

Return Type: [TagPredicate](/vanilla/api/predicate/TagPredicate)&lt;T&gt;

```zenscript
TagPredicate.isNotIn<T : Object>(tag as MCTag) as TagPredicate<T>
```

| Parameter |              Type               |
|-----------|---------------------------------|
| tag       | [MCTag](/vanilla/api/tag/MCTag) |
| T         | Object                          |


:::

