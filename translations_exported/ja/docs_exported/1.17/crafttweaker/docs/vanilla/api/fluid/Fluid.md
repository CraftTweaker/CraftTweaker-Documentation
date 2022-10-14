# Fluid

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.fluid.Fluid;
```


## Methods

:::group{name=getBucket}

Return Type: [ItemDefinition](/vanilla/api/item/ItemDefinition)

```zenscript
// Fluid.getBucket() as ItemDefinition

myFluid.getBucket();
```

:::

:::group{name=isIn}

Return Type: boolean

```zenscript
Fluid.isIn(tag as MCTag<Fluid>) as boolean
```

| Parameter | Type                                                                                 | Description             |
| --------- | ------------------------------------------------------------------------------------ | ----------------------- |
| tag       | [MCTag](/vanilla/api/tag/MCTag)&lt;[Fluid](/vanilla/api/fluid/Fluid)&gt; | No Description Provided |


:::

:::group{name=isSame}

Return Type: boolean

```zenscript
Fluid.isSame(other as Fluid) as boolean
```

| Parameter | Type                              | Description             |
| --------- | --------------------------------- | ----------------------- |
| other     | [Fluid](/vanilla/api/fluid/Fluid) | No Description Provided |


:::


## Properties

| 名称            | Type                                               | Has Getter | Has Setter | Description             |
| ------------- | -------------------------------------------------- | ---------- | ---------- | ----------------------- |
| bucket        | [ItemDefinition](/vanilla/api/item/ItemDefinition) | true       | false      | No Description Provided |
| commandString | string                                             | true       | false      | No Description Provided |

