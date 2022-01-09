# AttributeInstance

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.attribute.AttributeInstance;
```


## Metodi

:::group{name=addPermanentModifier}

Return Type: void

```zenscript
AttributeInstance.addPermanentModifier(modifier as AttributeModifier) as void
```

| Parametro | Tipo                                                                 | Descrizione             |
| --------- | -------------------------------------------------------------------- | ----------------------- |
| modifier  | [AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier) | No Description Provided |


:::

:::group{name=addTransientModifier}

Return Type: void

```zenscript
AttributeInstance.addTransientModifier(modifier as AttributeModifier) as void
```

| Parametro | Tipo                                                                 | Descrizione             |
| --------- | -------------------------------------------------------------------- | ----------------------- |
| modifier  | [AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier) | No Description Provided |


:::

:::group{name=getModifier}

Return Type: [AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier)

```zenscript
AttributeInstance.getModifier(uuid as string) as AttributeModifier
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| uuid      | string | No Description Provided |


:::

:::group{name=hasModifier}

Return Type: boolean

```zenscript
AttributeInstance.hasModifier(modifier as AttributeModifier) as boolean
```

| Parametro | Tipo                                                                 | Descrizione             |
| --------- | -------------------------------------------------------------------- | ----------------------- |
| modifier  | [AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier) | No Description Provided |


:::

:::group{name=removeModifier}

Return Type: void

```zenscript
AttributeInstance.removeModifier(modifier as AttributeModifier) as void
```

| Parametro | Tipo                                                                 | Descrizione             |
| --------- | -------------------------------------------------------------------- | ----------------------- |
| modifier  | [AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier) | No Description Provided |


:::

:::group{name=removeModifier}

Return Type: void

```zenscript
AttributeInstance.removeModifier(uuid as string) as void
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| uuid      | string | No Description Provided |


:::


## Proprietà

| Nome      | Tipo                                                                                                | Ha Getter | Ha Setter | Descrizione             |
| --------- | --------------------------------------------------------------------------------------------------- | --------- | --------- | ----------------------- |
| baseValue | double                                                                                              | sì        | sì        | No Description Provided |
| modifiers | stdlib.List&lt;[AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier)&gt; | sì        | no        | No Description Provided |
| valore    | double                                                                                              | sì        | no        | No Description Provided |

