# ChargedProjectiles

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.component.ChargedProjectiles;
```


## Static Methods

:::group{name=of}

Return Type: [ChargedProjectiles](/vanilla/api/item/component/ChargedProjectiles)

```zenscript
ChargedProjectiles.of(stack as IItemStack) as ChargedProjectiles
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| stack     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=of}

Return Type: [ChargedProjectiles](/vanilla/api/item/component/ChargedProjectiles)

```zenscript
ChargedProjectiles.of(stacks as stdlib.List<IItemStack>) as ChargedProjectiles
```

| Parameter |                             Type                              |
|-----------|---------------------------------------------------------------|
| stacks    | stdlib.List&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; |


:::

## Methods

:::group{name=contains}

Return Type: boolean

```zenscript
ChargedProjectiles.contains(item as ItemDefinition) as boolean
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| item      | [ItemDefinition](/vanilla/api/item/ItemDefinition) |


:::


## Properties

| Name  |                             Type                              | Has Getter | Has Setter |
|-------|---------------------------------------------------------------|------------|------------|
| empty | boolean                                                       | true       | false      |
| items | stdlib.List&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; | true       | false      |

