# JsonReader

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.utils.file.json.google.JsonReader;
```


## Implemented Interfaces
JsonReader implements the following interfaces. That means all methods defined in these interfaces are also available in JsonReader

- [Closeable](/mods/sdmcrtplus/utils/file/Closeable)

## Constructors


```zenscript
new JsonReader(InputStream as Reader) as JsonReader
```
|  Parameter  |                     Type                     |
|-------------|----------------------------------------------|
| InputStream | [Reader](/mods/sdmcrtplus/utils/file/Reader) |



## Methods

:::group{name=beginArray}

Consumes the next token from the JSON stream and asserts that it is the beginning of a new array.

```zenscript
// JsonReader.beginArray()

myJsonReader.beginArray();
```

:::

:::group{name=beginObject}

Consumes the next token from the JSON stream and asserts that it is the beginning of a new object.

```zenscript
// JsonReader.beginObject()

myJsonReader.beginObject();
```

:::

:::group{name=endArray}

Consumes the next token from the JSON stream and asserts that it is the end of the current array.

```zenscript
// JsonReader.endArray()

myJsonReader.endArray();
```

:::

:::group{name=endObject}

Consumes the next token from the JSON stream and asserts that it is the end of the current object.

```zenscript
// JsonReader.endObject()

myJsonReader.endObject();
```

:::

:::group{name=equal}

Indicates whether some other object is "equal to" this one.

Return Type: boolean

```zenscript
JsonReader.equal(object as Object) as boolean
```

| Parameter |  Type  |
|-----------|--------|
| object    | Object |


:::

:::group{name=getPath}

Returns a JsonPath  to the current location in the JSON value.

Return Type: string

```zenscript
JsonReader.getPath(set as boolean) as string
```

| Parameter |  Type   |
|-----------|---------|
| set       | boolean |


:::

:::group{name=hasNext}

Returns true if the current array or object has another element.

Return Type: boolean

```zenscript
// JsonReader.hasNext() as boolean

myJsonReader.hasNext();
```

:::

:::group{name=isLenient}

Returns true if this parser is liberal in what it accepts.

Return Type: boolean

```zenscript
// JsonReader.isLenient() as boolean

myJsonReader.isLenient();
```

:::

:::group{name=nextBoolean}

Returns the boolean value of the next token, consuming it

Return Type: boolean

```zenscript
// JsonReader.nextBoolean() as boolean

myJsonReader.nextBoolean();
```

:::

:::group{name=nextDouble}

Returns the double value of the next token, consuming it. If the next token is a string, this method will attempt to parse it as a double;

Return Type: double

```zenscript
// JsonReader.nextDouble() as double

myJsonReader.nextDouble();
```

:::

:::group{name=nextInt}

Returns the int value of the next token, consuming it. If the next token is a string, this method will attempt to parse it as an int. If the next token's numeric value cannot be exactly represented by a Java int, this method throws.

Return Type: int

```zenscript
// JsonReader.nextInt() as int

myJsonReader.nextInt();
```

:::

:::group{name=nextLong}

Returns the long value of the next token, consuming it. If the next token is a string, this method will attempt to parse it as a long. If the next token's numeric value cannot be exactly represented by a Java long, this method throws.

Return Type: long

```zenscript
// JsonReader.nextLong() as long

myJsonReader.nextLong();
```

:::

:::group{name=nextName}

Returns the next token, a property name, and consumes it.

Return Type: string

```zenscript
// JsonReader.nextName() as string

myJsonReader.nextName();
```

:::

:::group{name=nextNull}

Consumes the next token from the JSON stream and asserts that it is a literal null.

```zenscript
// JsonReader.nextNull()

myJsonReader.nextNull();
```

:::

:::group{name=nextString}

Returns the string value of the next token, consuming it. If the next token is a number, this method will return its string form.

Return Type: string

```zenscript
// JsonReader.nextString() as string

myJsonReader.nextString();
```

:::

:::group{name=peek}

Returns the type of the next token without consuming it.

Return Type: [JsonToken](/mods/sdmcrtplus/utils/file/json/google/JsonToken)

```zenscript
JsonReader.peek(set as boolean) as JsonToken
```

| Parameter |  Type   |
|-----------|---------|
| set       | boolean |


:::

:::group{name=setLenient}

```zenscript
JsonReader.setLenient(set as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| set       | boolean |


:::

:::group{name=skipValue}

Skips the next value recursively. If it is an object or array, all nested elements are skipped. This method is intended for use when the JSON token stream contains unrecognized or unhandled values.

```zenscript
// JsonReader.skipValue()

myJsonReader.skipValue();
```

:::

:::group{name=toString}

Return Type: string

```zenscript
// JsonReader.toString() as string

myJsonReader.toString();
```

:::


