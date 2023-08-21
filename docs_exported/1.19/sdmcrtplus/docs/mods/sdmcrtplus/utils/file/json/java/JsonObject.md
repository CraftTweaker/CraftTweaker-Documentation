# JsonObject

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.utils.file.json.java.JsonObject;
```


## Implemented Interfaces
JsonObject implements the following interfaces. That means all methods defined in these interfaces are also available in JsonObject

- [JsonStructure](/mods/sdmcrtplus/utils/file/json/java/JsonStructure)
- [JsonValue](/mods/sdmcrtplus/utils/file/json/java/type/JsonValue)[string]

## Methods

:::group{name=getBoolean}

Returns the boolean value of the associated mapping for the specified name. If the associated mapping is JsonValue.TRUE, then returns true. If the associated mapping is JsonValue.FALSE, then returns false.

Return Type: boolean

```zenscript
JsonObject.getBoolean(name as string) as boolean
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getBoolean}

Returns the boolean value of the associated mapping for the specified name. If the associated mapping is JsonValue.TRUE, then returns true. If the associated mapping is JsonValue.FALSE, then returns false. Otherwise, the specified default value is returned.

Return Type: boolean

```zenscript
JsonObject.getBoolean(name as string, defaultValue as boolean) as boolean
```

|  Parameter   |  Type   |
|--------------|---------|
| name         | string  |
| defaultValue | boolean |


:::

:::group{name=getInt}

A convenience method for getJsonNumber(name).intValue()

Return Type: int

```zenscript
JsonObject.getInt(name as string) as int
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getInt}

Returns the int value of the associated JsonNumber mapping for the specified name. If JsonNumber is found, then its JsonNumber.intValue() is returned. Otherwise, the specified default value is returned.

Return Type: int

```zenscript
JsonObject.getInt(name as string, defaultValue as int) as int
```

|  Parameter   |  Type  |
|--------------|--------|
| name         | string |
| defaultValue | int    |


:::

:::group{name=getJsonArray}

Returns the array value to which the specified name is mapped. This is a convenience method for (JsonArray)get(name) to get the value.

Return Type: [JsonArray](/mods/sdmcrtplus/utils/file/json/java/type/JsonArray)

```zenscript
JsonObject.getJsonArray(name as string) as JsonArray
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getJsonNumber}

Returns the number value to which the specified name is mapped. This is a convenience method for (JsonNumber)get(name) to get the value.

Return Type: [JsonNumber](/mods/sdmcrtplus/utils/file/json/java/type/JsonNumber)

```zenscript
JsonObject.getJsonNumber(name as string) as JsonNumber
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getJsonObject}

Returns the object value to which the specified name is mapped. This is a convenience method for (JsonObject)get(name) to get the value.

Return Type: [JsonObject](/mods/sdmcrtplus/utils/file/json/java/JsonObject)

```zenscript
JsonObject.getJsonObject(name as string) as JsonObject
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getJsonString}

Returns the string value to which the specified name is mapped. This is a convenience method for (JsonString)get(name) to get the value

Return Type: [JsonString](/mods/sdmcrtplus/utils/file/json/java/type/JsonString)

```zenscript
JsonObject.getJsonString(name as string) as JsonString
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getOrDefault}

Return Type: [JsonValue](/mods/sdmcrtplus/utils/file/json/java/type/JsonValue)

```zenscript
JsonObject.getOrDefault(keu as Object, value as JsonValue) as JsonValue
```

| Parameter |                               Type                                |
|-----------|-------------------------------------------------------------------|
| keu       | Object                                                            |
| value     | [JsonValue](/mods/sdmcrtplus/utils/file/json/java/type/JsonValue) |


:::

:::group{name=getString}

A convenience method for getJsonString(name).getString()

Return Type: string

```zenscript
JsonObject.getString(name as string) as string
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getString}

Returns the string value of the associated JsonString mapping for the specified name. If JsonString is found, then its JsonString.getString() is returned. Otherwise, the specified default value is returned.

Return Type: string

```zenscript
JsonObject.getString(name as string, defaultValue as string) as string
```

|  Parameter   |  Type  |
|--------------|--------|
| name         | string |
| defaultValue | string |


:::

:::group{name=getValue}

Return Type: [JsonValue](/mods/sdmcrtplus/utils/file/json/java/type/JsonValue)

```zenscript
JsonObject.getValue(key as Object) as JsonValue
```

| Parameter |  Type  |
|-----------|--------|
| key       | Object |


:::

:::group{name=getValueType}

Returns the value type of this JSON value.

Return Type: [JsonValueType](/mods/sdmcrtplus/utils/file/json/java/type/JsonValueType)

```zenscript
// JsonObject.getValueType() as JsonValueType

myJsonObject.getValueType();
```

:::


