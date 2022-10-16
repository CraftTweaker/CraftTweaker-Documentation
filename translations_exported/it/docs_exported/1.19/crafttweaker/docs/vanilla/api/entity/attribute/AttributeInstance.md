# AttributeInstance

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.attribute.AttributeInstance;
```


## Metodi

:::group{name=addPermanentModifier}

```zenscript
AttributeInstance.addPermanentModifier(modifier as AttributeModifier)
```

| Parametro | Tipo                                                                 |
| --------- | -------------------------------------------------------------------- |
| modifier  | [AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier) |


:::

:::group{name=addTransientModifier}

```zenscript
AttributeInstance.addTransientModifier(modifier as AttributeModifier)
```

| Parametro | Tipo                                                                 |
| --------- | -------------------------------------------------------------------- |
| modifier  | [AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier) |


:::

:::group{name=getBaseValue}

Return Type: double

```zenscript
// AttributeInstance.getBaseValue() as double

myAttributeInstance.getBaseValue();
```

:::

:::group{name=getModifier}

Return Type: [AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier)?

```zenscript
AttributeInstance.getModifier(uuid as string) as AttributeModifier?
```

| Parametro | Tipo   |
| --------- | ------ |
| uuid      | string |


:::

:::group{name=getModifiers}

Return Type: stdlib.List&lt;[AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier)&gt;

```zenscript
// AttributeInstance.getModifiers() as stdlib.List<AttributeModifier>

myAttributeInstance.getModifiers();
```

:::

:::group{name=getValue}

Return Type: double

```zenscript
// AttributeInstance.getValue() as double

myAttributeInstance.getValue();
```

:::

:::group{name=hasModifier}

Return Type: boolean

```zenscript
AttributeInstance.hasModifier(modifier as AttributeModifier) as boolean
```

| Parametro | Tipo                                                                 |
| --------- | -------------------------------------------------------------------- |
| modifier  | [AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier) |


:::

:::group{name=removeModifier}

```zenscript
AttributeInstance.removeModifier(modifier as AttributeModifier)
```

| Parametro | Tipo                                                                 |
| --------- | -------------------------------------------------------------------- |
| modifier  | [AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier) |


:::

:::group{name=removeModifier}

```zenscript
AttributeInstance.removeModifier(uuid as string)
```

| Parametro | Tipo   |
| --------- | ------ |
| uuid      | string |


:::

:::group{name=setBaseValue}

```zenscript
AttributeInstance.setBaseValue(value as double)
```

| Parametro | Tipo   |
| --------- | ------ |
| valore    | double |


:::


## Proprietà

| Nome      | Tipo                                                                                                | Ha Getter | Ha Setter |
| --------- | --------------------------------------------------------------------------------------------------- | --------- | --------- |
| baseValue | double                                                                                              | sì        | sì        |
| modifiers | stdlib.List&lt;[AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier)&gt; | sì        | no        |
| valore    | double                                                                                              | sì        | no        |

