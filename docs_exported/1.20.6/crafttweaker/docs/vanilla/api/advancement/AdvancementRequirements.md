# AdvancementRequirements

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.advancement.AdvancementRequirements;
```


## Extending Record

AdvancementRequirements extends Record. That means all methods available in Record are also available in AdvancementRequirements

## Methods

:::group{name=count}

Return Type: int

```zenscript
AdvancementRequirements.count(test as Predicate<string>) as int
```

| Parameter |          Type           |
|-----------|-------------------------|
| test      | Predicate&lt;string&gt; |


:::

:::group{name=test}

Return Type: boolean

```zenscript
AdvancementRequirements.test(test as Predicate<string>) as boolean
```

| Parameter |          Type           |
|-----------|-------------------------|
| test      | Predicate&lt;string&gt; |


:::


## Properties

|     Name     |                     Type                     | Has Getter | Has Setter |
|--------------|----------------------------------------------|------------|------------|
| isEmpty      | boolean                                      | true       | false      |
| names        | Set&lt;string&gt;                            | true       | false      |
| requirements | stdlib.List&lt;stdlib.List&lt;string&gt;&gt; | true       | false      |
| size         | int                                          | true       | false      |

