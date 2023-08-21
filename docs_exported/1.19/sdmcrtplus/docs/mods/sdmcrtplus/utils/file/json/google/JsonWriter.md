# JsonWriter

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.utils.file.json.google.JsonWriter;
```


## Implemented Interfaces
JsonWriter implements the following interfaces. That means all methods defined in these interfaces are also available in JsonWriter

- [Closeable](/mods/sdmcrtplus/utils/file/Closeable)
- [Flushable](/mods/sdmcrtplus/utils/file/Flushable)

## Constructors


```zenscript
new JsonWriter(OutputStream as OutputStreamWriter) as JsonWriter
```
|  Parameter   |                                     Type                                     |
|--------------|------------------------------------------------------------------------------|
| OutputStream | [OutputStreamWriter](/mods/sdmcrtplus/utils/file/streams/OutputStreamWriter) |



## Methods

:::group{name=beginArray}

Begins encoding a new array. Each call to this method must be paired with a call to endArray.

Return Type: [JsonWriter](/mods/sdmcrtplus/utils/file/json/google/JsonWriter)

```zenscript
// JsonWriter.beginArray() as JsonWriter

myJsonWriter.beginArray();
```

:::

:::group{name=beginObject}

Begins encoding a new object. Each call to this method must be paired with a call to endObject.

Return Type: [JsonWriter](/mods/sdmcrtplus/utils/file/json/google/JsonWriter)

```zenscript
// JsonWriter.beginObject() as JsonWriter

myJsonWriter.beginObject();
```

:::

:::group{name=endArray}

Ends encoding the current array.

Return Type: [JsonWriter](/mods/sdmcrtplus/utils/file/json/google/JsonWriter)

```zenscript
// JsonWriter.endArray() as JsonWriter

myJsonWriter.endArray();
```

:::

:::group{name=endObject}

Ends encoding the current object.

Return Type: [JsonWriter](/mods/sdmcrtplus/utils/file/json/google/JsonWriter)

```zenscript
// JsonWriter.endObject() as JsonWriter

myJsonWriter.endObject();
```

:::

:::group{name=getSerializeNulls}



Returns: true if object members are serialized when their value is null. This has no impact on array elements. The default is true.  
Return Type: boolean

```zenscript
// JsonWriter.getSerializeNulls() as boolean

myJsonWriter.getSerializeNulls();
```

:::

:::group{name=isHtmlSafe}



Returns: true if this writer writes JSON that's safe for inclusion in HTML and XML documents.  
Return Type: boolean

```zenscript
// JsonWriter.isHtmlSafe() as boolean

myJsonWriter.isHtmlSafe();
```

:::

:::group{name=isLenient}



Returns: true if this writer has relaxed syntax rules.  
Return Type: boolean

```zenscript
// JsonWriter.isLenient() as boolean

myJsonWriter.isLenient();
```

:::

:::group{name=jsonValue}

Writes value directly to the writer without quoting or escaping.

Return Type: [JsonWriter](/mods/sdmcrtplus/utils/file/json/google/JsonWriter)

```zenscript
JsonWriter.jsonValue(value as string) as JsonWriter
```

| Parameter |  Type  |                         Description                          |
|-----------|--------|--------------------------------------------------------------|
| value     | string | - the literal string value, or null to encode a null literal |


:::

:::group{name=name}

Encodes the property name.

Return Type: [JsonWriter](/mods/sdmcrtplus/utils/file/json/google/JsonWriter)

```zenscript
JsonWriter.name(name as string) as JsonWriter
```

| Parameter |  Type  |                      Description                      |
|-----------|--------|-------------------------------------------------------|
| name      | string | – the name of the forthcoming value. May not be null. |


:::

:::group{name=nullValue}

Encodes null.

Return Type: [JsonWriter](/mods/sdmcrtplus/utils/file/json/google/JsonWriter)

```zenscript
// JsonWriter.nullValue() as JsonWriter

myJsonWriter.nullValue();
```

:::

:::group{name=setIndent}

Sets the indentation string to be repeated for each level of indentation in the encoded document. If value.isEmpty() the encoded document will be compact. Otherwise the encoded document will be more human-readable.

```zenscript
JsonWriter.setIndent(value as string)
```

| Parameter |  Type  |              Description               |
|-----------|--------|----------------------------------------|
| value     | string | - a string containing only whitespace. |


:::

:::group{name=setLenient}

Configure this writer to relax its syntax rules. By default, this writer only emits well-formed JSON as specified by RFC 7159 . Setting the writer to lenient permits the following:
     Top-level values of any type. With strict writing, the top-level value must be an object or an array.
     Numbers may be NaNs or infinities.

```zenscript
JsonWriter.setLenient(value as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| value     | boolean |


:::

:::group{name=setSerializeNulls}

Sets whether object members are serialized when their value is null. This has no impact on array elements. The default is true.

```zenscript
JsonWriter.setSerializeNulls(value as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| value     | boolean |


:::

:::group{name=value}

Encodes value.

Return Type: [JsonWriter](/mods/sdmcrtplus/utils/file/json/google/JsonWriter)

```zenscript
JsonWriter.value(value as boolean) as JsonWriter
```

| Parameter |  Type   |                          Description                          |
|-----------|---------|---------------------------------------------------------------|
| value     | boolean | - the literal string value, or null to encode a null literal. |


:::

:::group{name=value}

Encodes value.

Return Type: [JsonWriter](/mods/sdmcrtplus/utils/file/json/google/JsonWriter)

```zenscript
JsonWriter.value(value as char) as JsonWriter
```

| Parameter | Type |                          Description                          |
|-----------|------|---------------------------------------------------------------|
| value     | char | - the literal string value, or null to encode a null literal. |


:::

:::group{name=value}

Encodes value.

Return Type: [JsonWriter](/mods/sdmcrtplus/utils/file/json/google/JsonWriter)

```zenscript
JsonWriter.value(value as double) as JsonWriter
```

| Parameter |  Type  |                          Description                          |
|-----------|--------|---------------------------------------------------------------|
| value     | double | - the literal string value, or null to encode a null literal. |


:::

:::group{name=value}

Encodes value.

Return Type: [JsonWriter](/mods/sdmcrtplus/utils/file/json/google/JsonWriter)

```zenscript
JsonWriter.value(value as float) as JsonWriter
```

| Parameter | Type  |                          Description                          |
|-----------|-------|---------------------------------------------------------------|
| value     | float | - the literal string value, or null to encode a null literal. |


:::

:::group{name=value}

Encodes value.

Return Type: [JsonWriter](/mods/sdmcrtplus/utils/file/json/google/JsonWriter)

```zenscript
JsonWriter.value(value as int) as JsonWriter
```

| Parameter | Type |                          Description                          |
|-----------|------|---------------------------------------------------------------|
| value     | int  | - the literal string value, or null to encode a null literal. |


:::

:::group{name=value}

Encodes value.

Return Type: [JsonWriter](/mods/sdmcrtplus/utils/file/json/google/JsonWriter)

```zenscript
JsonWriter.value(value as string) as JsonWriter
```

| Parameter |  Type  |                          Description                          |
|-----------|--------|---------------------------------------------------------------|
| value     | string | - the literal string value, or null to encode a null literal. |


:::


