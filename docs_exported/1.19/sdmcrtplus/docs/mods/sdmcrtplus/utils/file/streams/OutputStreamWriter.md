# OutputStreamWriter

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.utils.file.streams.OutputStreamWriter;
```


## Extending Writer

OutputStreamWriter extends [Writer](/mods/sdmcrtplus/utils/file/Writer). That means all methods available in [Writer](/mods/sdmcrtplus/utils/file/Writer) are also available in OutputStreamWriter

## Constructors


```zenscript
new OutputStreamWriter(dir as OutputStream, charsetName as string) as OutputStreamWriter
```
|  Parameter  |                               Type                               |
|-------------|------------------------------------------------------------------|
| dir         | [OutputStream](/mods/sdmcrtplus/utils/file/streams/OutputStream) |
| charsetName | string                                                           |



## Methods

:::group{name=getEncoding}

Returns the name of the character encoding being used by this stream.
     If the encoding has an historical name then that name is returned; otherwise the encoding's canonical name is returned.

Return Type: string

```zenscript
// OutputStreamWriter.getEncoding() as string

myOutputStreamWriter.getEncoding();
```

:::


