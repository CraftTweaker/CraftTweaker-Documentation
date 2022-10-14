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
Fluid.isIn(tag as MCTag<Fluid>) as boolean
```

| Parametro | Tipo                                                                                 | Descrizione             |
| --------- | ------------------------------------------------------------------------------------ | ----------------------- |
| tag       | [MCTag](/vanilla/api/tag/MCTag)&lt;[Fluid](/vanilla/api/fluid/Fluid)&gt; | No Description Provided |


:::

:::group{name=isSame}

Return Type: boolean

```zenscript
Fluid.isSame(other as Fluid) as boolean
```

| Parametro | Tipo                              | Descrizione             |
| --------- | --------------------------------- | ----------------------- |
| other     | [Fluid](/vanilla/api/fluid/Fluid) | No Description Provided |


:::


## Proprietà

| Nome          | Tipo                                               | Ha Getter | Ha Setter | Descrizione             |
| ------------- | -------------------------------------------------- | --------- | --------- | ----------------------- |
| bucket        | [ItemDefinition](/vanilla/api/item/ItemDefinition) | sì        | no        | No Description Provided |
| commandString | string                                             | sì        | no        | No Description Provided |

