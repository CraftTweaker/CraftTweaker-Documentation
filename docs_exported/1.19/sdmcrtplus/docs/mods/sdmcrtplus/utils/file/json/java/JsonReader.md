# JsonReader

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.file.utils.json.java.JsonReader;
```


## Implemented Interfaces
JsonReader implements the following interfaces. That means all methods defined in these interfaces are also available in JsonReader

- [Closeable](/mods/sdmcrtplus/utils/file/Closeable)

## Methods

:::group{name=close}

Closes this reader and frees any resources associated with the reader. This method closes the underlying input source.

```zenscript
// JsonReader.close()

myJsonReader.close();
```

:::

:::group{name=read}

Returns a JSON array or object that is represented in the input source. This method needs to be called only once for a reader instance.

Return Type: [JsonStructure](/mods/sdmcrtplus/utils/file/json/java/JsonStructure)

```zenscript
// JsonReader.read() as JsonStructure

myJsonReader.read();
```

:::

:::group{name=readArray}

Returns a JSON array that is represented in the input source. This method needs to be called only once for a reader instance.

Return Type: [JsonArray](/mods/sdmcrtplus/utils/file/json/java/type/JsonArray)

```zenscript
// JsonReader.readArray() as JsonArray

myJsonReader.readArray();
```

:::

:::group{name=readObject}

Returns a JSON object that is represented in the input source. This method needs to be called only once for a reader instance.

Return Type: [JsonObject](/mods/sdmcrtplus/utils/file/json/java/JsonObject)

```zenscript
// JsonReader.readObject() as JsonObject

myJsonReader.readObject();
```

:::


