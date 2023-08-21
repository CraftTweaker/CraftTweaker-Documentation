# FileWriter

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.utils.file.FileWriter;
```


## Extending OutputStreamWriter

FileWriter extends [OutputStreamWriter](/mods/sdmcrtplus/utils/file/streams/OutputStreamWriter). That means all methods available in [OutputStreamWriter](/mods/sdmcrtplus/utils/file/streams/OutputStreamWriter) are also available in FileWriter

## Constructors


```zenscript
new FileWriter(path as string, append as boolean) as FileWriter
```
| Parameter |  Type   |
|-----------|---------|
| path      | string  |
| append    | boolean |



## Methods

:::group{name=append}

Appends the specified character to this writer.
     An invocation of this method of the form out.append(c) behaves in exactly the same way as the invocation

```zenscript
FileWriter.append(i as char)
```

| Parameter | Type |
|-----------|------|
| i         | char |


:::

:::group{name=close}

```zenscript
// FileWriter.close()

myFileWriter.close();
```

:::

:::group{name=flush}

Flushes the stream.

```zenscript
// FileWriter.flush()

myFileWriter.flush();
```

:::

:::group{name=getEncoding}

Returns the name of the character encoding being used by this stream.

Return Type: string

```zenscript
// FileWriter.getEncoding() as string

myFileWriter.getEncoding();
```

:::

:::group{name=write}

Writes a single character.

```zenscript
FileWriter.write(i as char)
```

| Parameter | Type |
|-----------|------|
| i         | char |


:::

:::group{name=write}

Writes an array of characters.

```zenscript
FileWriter.write(i as char[])
```

| Parameter |  Type  |
|-----------|--------|
| i         | char[] |


:::

:::group{name=write}

Writes a single character.

```zenscript
FileWriter.write(i as int)
```

| Parameter | Type |
|-----------|------|
| i         | int  |


:::

:::group{name=write}

Writes a string.

```zenscript
FileWriter.write(i as string)
```

| Parameter |  Type  |
|-----------|--------|
| i         | string |


:::

:::group{name=write}

Writes a portion of an array of characters.

```zenscript
FileWriter.write(i as char[], off as int, len as int)
```

| Parameter |  Type  |
|-----------|--------|
| i         | char[] |
| off       | int    |
| len       | int    |


:::


