# JsonWriter

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.utils.file.json.java.JsonWriter;
```


## Implemented Interfaces
JsonWriter implements the following interfaces. That means all methods defined in these interfaces are also available in JsonWriter

- [Closeable](/mods/sdmcrtplus/utils/file/Closeable)

## Methods

:::group{name=close}

Closes this JSON writer and frees any resources associated with the writer. This method closes the underlying output source.

```zenscript
// JsonWriter.close()

myJsonWriter.close();
```

:::

:::group{name=write}

Writes the specified JSON object or array to the output source. This method needs to be called only once for a writer instance.

```zenscript
JsonWriter.write(value as JsonStructure)
```

| Parameter |                                 Type                                 |                            Description                            |
|-----------|----------------------------------------------------------------------|-------------------------------------------------------------------|
| value     | [JsonStructure](/mods/sdmcrtplus/utils/file/json/java/JsonStructure) | - JSON array or object that is to be written to the output source |


:::

:::group{name=writeArray}

Writes the specified JSON object or array to the output source. This method needs to be called only once for a writer instance.

```zenscript
JsonWriter.writeArray(values as JsonArray)
```

| Parameter |                               Type                                |                            Description                            |
|-----------|-------------------------------------------------------------------|-------------------------------------------------------------------|
| values    | [JsonArray](/mods/sdmcrtplus/utils/file/json/java/type/JsonArray) | - JSON array or object that is to be written to the output source |


:::

:::group{name=writeObject}

Writes the specified JSON object or array to the output source. This method needs to be called only once for a writer instance.

```zenscript
JsonWriter.writeObject(value as JsonObject)
```

| Parameter |                              Type                              |                            Description                            |
|-----------|----------------------------------------------------------------|-------------------------------------------------------------------|
| value     | [JsonObject](/mods/sdmcrtplus/utils/file/json/java/JsonObject) | - JSON array or object that is to be written to the output source |


:::


