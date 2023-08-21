# FileReader

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.utils.file.FileReader;
```


## Extending InputStreamReader

FileReader extends [InputStreamReader](/mods/sdmcrtplus/utils/file/streams/InputStreamReader). That means all methods available in [InputStreamReader](/mods/sdmcrtplus/utils/file/streams/InputStreamReader) are also available in FileReader

## Constructors


```zenscript
new FileReader(path as string) as FileReader
```
| Parameter |  Type  |
|-----------|--------|
| path      | string |



## Methods

:::group{name=close}

```zenscript
// FileReader.close()

myFileReader.close();
```

:::

:::group{name=getEncoding}

Returns the name of the character encoding being used by this stream.

Return Type: string

```zenscript
// FileReader.getEncoding() as string

myFileReader.getEncoding();
```

:::

:::group{name=read}

Reads a single character.

Return Type: int

```zenscript
// FileReader.read() as int

myFileReader.read();
```

:::

:::group{name=read}

Reads characters into an array. This method will block until some input is available, an I/O error occurs, or the end of the stream is reached.

Return Type: int

```zenscript
FileReader.read(c as char[]) as int
```

| Parameter |  Type  |
|-----------|--------|
| c         | char[] |


:::

:::group{name=read}

Skips characters. This method will block until some characters are available, an I/O error occurs, or the end of the stream is reached. If the stream is already at its end before this method is invoked, then no characters are skipped and zero is returned

Return Type: long

```zenscript
FileReader.read(l as long) as long
```

| Parameter | Type |
|-----------|------|
| l         | long |


:::

:::group{name=read}

Reads characters into a portion of an array. This method will block until some input is available, an I/O error occurs, or the end of the stream is reached.

Return Type: int

```zenscript
FileReader.read(i as char[], off as int, len as int) as int
```

| Parameter |  Type  |
|-----------|--------|
| i         | char[] |
| off       | int    |
| len       | int    |


:::


