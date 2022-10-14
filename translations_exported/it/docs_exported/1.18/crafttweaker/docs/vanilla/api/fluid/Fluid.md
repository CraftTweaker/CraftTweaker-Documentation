# Fluid

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.fluid.Fluid;
```


## Metodi

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
Fluid.isIn(tag as KnownTag<Fluid>) as boolean
```

| Parametro | Tipo                                                                                            |
| --------- | ----------------------------------------------------------------------------------------------- |
| tag       | [KnownTag](/vanilla/api/tag/type/KnownTag)&lt;[Fluid](/vanilla/api/fluid/Fluid)&gt; |


:::

:::group{name=isSame}

Return Type: boolean

```zenscript
Fluid.isSame(other as Fluid) as boolean
```

| Parametro | Tipo                              |
| --------- | --------------------------------- |
| other     | [Fluid](/vanilla/api/fluid/Fluid) |


:::


## Proprietà

| Nome          | Tipo                                               | Ha Getter | Ha Setter |
| ------------- | -------------------------------------------------- | --------- | --------- |
| bucket        | [ItemDefinition](/vanilla/api/item/ItemDefinition) | sì        | no        |
| commandString | string                                             | sì        | no        |

