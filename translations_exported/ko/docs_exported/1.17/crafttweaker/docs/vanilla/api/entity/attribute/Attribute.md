# Attribute

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.attribute.Attribute;
```


## Methods

:::group{name=getCommandString}

Gets the attribute bracket handler syntax for this Attribute.

 E.G.
 <code>
 <attribute:minecraft:generic.max_health>
 </code>

Returns: The attribute bracket handler syntax for this Block.  
Return Type: string

```zenscript
// Attribute.getCommandString() as string

myAttribute.getCommandString();
```

:::

:::group{name=getDefaultValue}

Gets the default value for this Attribute.

Returns: The default value for this Attribute.  
Return Type: double

```zenscript
// Attribute.getDefaultValue() as double

myAttribute.getDefaultValue();
```

:::

:::group{name=isClientSyncable}

Should this attribute be synced to the client.

Returns: True if synced. False otherwise.  
Return Type: boolean

```zenscript
// Attribute.isClientSyncable() as boolean

myAttribute.isClientSyncable();
```

:::

:::group{name=sanitizeValue}

Sanitizes the given value for this Attribute.

Returns: The sanitized value.  
Return Type: double

```zenscript
// Attribute.sanitizeValue(value as double) as double

myAttribute.sanitizeValue(4);
```

| Parameter | Type   | Description                   |
| --------- | ------ | ----------------------------- |
| value     | double | The given value to sanitized. |


:::


## Properties

| 이름             | Type    | Has Getter | Has Setter | Description                                                                                                                          |
| -------------- | ------- | ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| clientSyncable | boolean | true       | false      | Should this attribute be synced to the client.                                                                                       |
| commandString  | string  | true       | false      | Gets the attribute bracket handler syntax for this Attribute. <br />  <br />  E.G. <br />  <code> <br />  <attribute:minecraft:generic.max_health> <br />  </code> |
| defaultValue   | double  | true       | false      | Gets the default value for this Attribute.                                                                                           |

