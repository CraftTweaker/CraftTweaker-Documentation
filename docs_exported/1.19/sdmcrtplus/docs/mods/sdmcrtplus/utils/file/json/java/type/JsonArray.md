# JsonArray

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.utils.file.json.java.type.JsonArray;
```


## Implemented Interfaces
JsonArray implements the following interfaces. That means all methods defined in these interfaces are also available in JsonArray

- [JsonStructure](/mods/sdmcrtplus/utils/file/json/java/JsonStructure)
- stdlib.List&lt;[JsonValue](/mods/sdmcrtplus/utils/file/json/java/type/JsonValue)&gt;

## Methods

:::group{name=add}

```zenscript
JsonArray.add(index as JsonValue)
```

| Parameter |                               Type                                |
|-----------|-------------------------------------------------------------------|
| index     | [JsonValue](/mods/sdmcrtplus/utils/file/json/java/type/JsonValue) |


:::

:::group{name=add}

```zenscript
JsonArray.add(jsonValue as Collection)
```

| Parameter |    Type    |
|-----------|------------|
| jsonValue | Collection |


:::

:::group{name=add}

```zenscript
JsonArray.add(value as stdlib.List)
```

| Parameter |    Type     |
|-----------|-------------|
| value     | stdlib.List |


:::

:::group{name=add}

```zenscript
JsonArray.add(index as int, jsonValue as Collection)
```

| Parameter |    Type    |
|-----------|------------|
| index     | int        |
| jsonValue | Collection |


:::

:::group{name=add}

```zenscript
JsonArray.add(index as int, jsonValue as JsonValue)
```

| Parameter |                               Type                                |
|-----------|-------------------------------------------------------------------|
| index     | int                                                               |
| jsonValue | [JsonValue](/mods/sdmcrtplus/utils/file/json/java/type/JsonValue) |


:::

:::group{name=add}

```zenscript
JsonArray.add(index as int, value as stdlib.List)
```

| Parameter |    Type     |
|-----------|-------------|
| index     | int         |
| value     | stdlib.List |


:::

:::group{name=getBoolean}

Returns the boolean value at the specified position. If the value at the specified position is JsonValue.TRUE this method returns true. If the value at the specified position is JsonValue.FALSE this method returns false.

Return Type: boolean

```zenscript
JsonArray.getBoolean(index as int) as boolean
```

| Parameter | Type |           Description           |
|-----------|------|---------------------------------|
| index     | int  | - index of the JsonString value |


:::

:::group{name=getBoolean}

Returns the boolean value at the specified position. If the value at the specified position is JsonValue.TRUE this method returns true. If the value at the specified position is JsonValue.FALSE this method returns false. Otherwise this method returns the specified default value.

Return Type: boolean

```zenscript
JsonArray.getBoolean(index as int, defaultValue as boolean) as boolean
```

|  Parameter   |  Type   |           Description            |
|--------------|---------|----------------------------------|
| index        | int     | -  index of the JsonString value |
| defaultValue | boolean |                                  |


:::

:::group{name=getInt}

A convenience method for getJsonNumber(index).intValue().

Return Type: int

```zenscript
JsonArray.getInt(index as int) as int
```

| Parameter | Type |           Description           |
|-----------|------|---------------------------------|
| index     | int  | - index of the JsonNumber value |


:::

:::group{name=getInt}

Returns the int value of the JsonNumber at the specified position. If the value at that position is a JsonNumber, this method returns JsonNumber.intValue(). Otherwise this method returns the specified default value.

Return Type: int

```zenscript
JsonArray.getInt(index as int, defaultValue as int) as int
```

|  Parameter   | Type |           Description           |
|--------------|------|---------------------------------|
| index        | int  | – index of the JsonNumber value |
| defaultValue | int  |                                 |


:::

:::group{name=getJsonArray}

Returns the array value at the specified position in this array. This is a convenience method for JsonArray.getValue(index)

Return Type: [JsonArray](/mods/sdmcrtplus/utils/file/json/java/type/JsonArray)

```zenscript
JsonArray.getJsonArray(index as int) as JsonArray
```

| Parameter | Type |             Description             |
|-----------|------|-------------------------------------|
| index     | int  | - index of the value to be returned |


:::

:::group{name=getJsonNumber}

Returns the number value at the specified position in this array. This is a convenience method for JsonArray.getValue(index).

Return Type: [JsonNumber](/mods/sdmcrtplus/utils/file/json/java/type/JsonNumber)

```zenscript
JsonArray.getJsonNumber(index as int) as JsonNumber
```

| Parameter | Type |            Description             |
|-----------|------|------------------------------------|
| index     | int  | -index of the value to be returned |


:::

:::group{name=getJsonString}

Returns the String value at the specified position in this array. This is a convenience method for JsonArray.getValue(index).

Return Type: [JsonString](/mods/sdmcrtplus/utils/file/json/java/type/JsonString)

```zenscript
JsonArray.getJsonString(index as int) as JsonString
```

| Parameter | Type |             Description             |
|-----------|------|-------------------------------------|
| index     | int  | - index of the value to be returned |


:::

:::group{name=getString}

A convenience method for getJsonString(index).getString().

Return Type: string

```zenscript
JsonArray.getString(index as int) as string
```

| Parameter | Type |          Description           |
|-----------|------|--------------------------------|
| index     | int  | -index of the JsonString value |


:::

:::group{name=getString}

Returns the String value of JsonString at the specified position in this JSON array values. If JsonString is found, its JsonString.getString() is returned. Otherwise, the specified default value is returned.

Return Type: string

```zenscript
JsonArray.getString(index as int, defaultValue as string) as string
```

|  Parameter   |  Type  |           Description           |
|--------------|--------|---------------------------------|
| index        | int    | - index of the JsonString value |
| defaultValue | string |                                 |


:::

:::group{name=getValue}

Returns the element at the specified position in this list.

Return Type: [JsonValue](/mods/sdmcrtplus/utils/file/json/java/type/JsonValue)

```zenscript
JsonArray.getValue(index as int) as JsonValue
```

| Parameter | Type |           Description            |
|-----------|------|----------------------------------|
| index     | int  | - index of the element to return |


:::

:::group{name=isNull}

Returns true if the value at the specified location in this array is JsonValue.NULL.

```zenscript
JsonArray.isNull(index as int)
```

| Parameter | Type |          Description           |
|-----------|------|--------------------------------|
| index     | int  | – index of the JSON null value |


:::

:::group{name=remove}

```zenscript
JsonArray.remove(index as int)
```

| Parameter | Type |
|-----------|------|
| index     | int  |


:::

:::group{name=remove}

```zenscript
JsonArray.remove(object as Object)
```

| Parameter |  Type  |
|-----------|--------|
| object    | Object |


:::

:::group{name=setValue}

Replaces the element at the specified position in this list with the specified element (optional operation).

```zenscript
JsonArray.setValue(index as int, value as JsonValue)
```

| Parameter |                               Type                                |                   Description                    |
|-----------|-------------------------------------------------------------------|--------------------------------------------------|
| index     | int                                                               | - index of the element to replace                |
| value     | [JsonValue](/mods/sdmcrtplus/utils/file/json/java/type/JsonValue) | - element to be stored at the specified position |


:::


