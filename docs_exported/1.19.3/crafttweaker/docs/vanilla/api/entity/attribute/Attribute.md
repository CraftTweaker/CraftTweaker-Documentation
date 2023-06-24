# Attribute

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.attribute.Attribute;
```


## Casters

| Result Type | Is Implicit |
|-------------|-------------|
| string      | false       |

## Methods

:::group{name=getCommandString}

Gets the attribute bracket handler syntax for this Attribute.

 E.G.
 `<attribute:minecraft:generic.max_health>`

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

:::group{name=getRegistryName}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// Attribute.getRegistryName() as ResourceLocation

myAttribute.getRegistryName();
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

| Parameter |  Type  |          Description          |
|-----------|--------|-------------------------------|
| value     | double | The given value to sanitized. |


:::


## Properties

|      Name      |                            Type                            | Has Getter | Has Setter |                                                              Description                                                              |
|----------------|------------------------------------------------------------|------------|------------|---------------------------------------------------------------------------------------------------------------------------------------|
| clientSyncable | boolean                                                    | true       | false      | Should this attribute be synced to the client.                                                                                        |
| commandString  | string                                                     | true       | false      | Gets the attribute bracket handler syntax for this Attribute. <br />  <br />  E.G. <br />  `<attribute:minecraft:generic.max_health>` |
| defaultValue   | double                                                     | true       | false      | Gets the default value for this Attribute.                                                                                            |
| registryName   | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | true       | false      |                                                                                                                                       |

