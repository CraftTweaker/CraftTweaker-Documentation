# AttributeInstance

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.attribute.AttributeInstance;
```


## Methoden

:::group{name=addPermanentModifier}

```zenscript
AttributeInstance.addPermanentModifier(modifier as AttributeModifier)
```

| Parameter | Type                                                                 |
| --------- | -------------------------------------------------------------------- |
| modifier  | [AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier) |


:::

:::group{name=addTransientModifier}

```zenscript
AttributeInstance.addTransientModifier(modifier as AttributeModifier)
```

| Parameter | Type                                                                 |
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

| Parameter | Type   |
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

| Parameter | Type                                                                 |
| --------- | -------------------------------------------------------------------- |
| modifier  | [AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier) |


:::

:::group{name=removeModifier}

```zenscript
AttributeInstance.removeModifier(modifier as AttributeModifier)
```

| Parameter | Type                                                                 |
| --------- | -------------------------------------------------------------------- |
| modifier  | [AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier) |


:::

:::group{name=removeModifier}

```zenscript
AttributeInstance.removeModifier(uuid as string)
```

| Parameter | Type   |
| --------- | ------ |
| uuid      | string |


:::

:::group{name=setBaseValue}

```zenscript
AttributeInstance.setBaseValue(value as double)
```

| Parameter | Type   |
| --------- | ------ |
| value     | double |


:::


## Properties

| Name      | Type                                                                                                | Has Getter | Has Setter |
| --------- | --------------------------------------------------------------------------------------------------- | ---------- | ---------- |
| baseValue | double                                                                                              | true       | true       |
| modifiers | stdlib.List&lt;[AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier)&gt; | true       | false      |
| value     | double                                                                                              | true       | false      |

