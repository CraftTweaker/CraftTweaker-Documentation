# AttributeInstance

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.attribute.AttributeInstance;
```


## Methods

:::group{name=addPermanentModifier}

Return Type: void

```zenscript
AttributeInstance.addPermanentModifier(modifier as AttributeModifier) as void
```

| Parameter | Type                                                                 | Description             |
| --------- | -------------------------------------------------------------------- | ----------------------- |
| modifier  | [AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier) | No Description Provided |


:::

:::group{name=addTransientModifier}

Return Type: void

```zenscript
AttributeInstance.addTransientModifier(modifier as AttributeModifier) as void
```

| Parameter | Type                                                                 | Description             |
| --------- | -------------------------------------------------------------------- | ----------------------- |
| modifier  | [AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier) | No Description Provided |


:::

:::group{name=getModifier}

Return Type: [AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier)

```zenscript
AttributeInstance.getModifier(uuid as string) as AttributeModifier
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| uuid      | string | No Description Provided |


:::

:::group{name=hasModifier}

Return Type: boolean

```zenscript
AttributeInstance.hasModifier(modifier as AttributeModifier) as boolean
```

| Parameter | Type                                                                 | Description             |
| --------- | -------------------------------------------------------------------- | ----------------------- |
| modifier  | [AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier) | No Description Provided |


:::

:::group{name=removeModifier}

Return Type: void

```zenscript
AttributeInstance.removeModifier(modifier as AttributeModifier) as void
```

| Parameter | Type                                                                 | Description             |
| --------- | -------------------------------------------------------------------- | ----------------------- |
| modifier  | [AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier) | No Description Provided |


:::

:::group{name=removeModifier}

Return Type: void

```zenscript
AttributeInstance.removeModifier(uuid as string) as void
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| uuid      | string | No Description Provided |


:::


## Properties

| Name      | Type                                                                                                | Has Getter | Has Setter | Description             |
| --------- | --------------------------------------------------------------------------------------------------- | ---------- | ---------- | ----------------------- |
| baseValue | double                                                                                              | true       | true       | No Description Provided |
| modifiers | stdlib.List&lt;[AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier)&gt; | true       | false      | No Description Provided |
| value     | double                                                                                              | true       | false      | No Description Provided |

