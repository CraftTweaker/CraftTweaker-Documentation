# FileOutputStream

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.utils.file.streams.FileOutputStream;
```


## Extending OutputStream

FileOutputStream extends [OutputStream](/mods/sdmcrtplus/utils/file/streams/OutputStream). That means all methods available in [OutputStream](/mods/sdmcrtplus/utils/file/streams/OutputStream) are also available in FileOutputStream

## Constructors


```zenscript
new FileOutputStream(name as string) as FileOutputStream
```
| Parameter |  Type  |
|-----------|--------|
| name      | string |



## Methods

:::group{name=getChannel}

The initial position of the returned channel will be equal to the number of bytes read from the file so far. Reading bytes from this stream will increment the channel's position. Changing the channel's position, either explicitly or by reading, will change this stream's file position.

Return Type: [FileChannel](/mods/sdmcrtplus/utils/file/FileChannel)

```zenscript
// FileOutputStream.getChannel() as FileChannel

myFileOutputStream.getChannel();
```

:::

:::group{name=getFD}

Returns the FileDescriptor object that represents the connection to the actual file in the file system being used by this FileInputStream.

Return Type: [FileDescriptor](/mods/sdmcrtplus/utils/file/FileDescriptor)

```zenscript
// FileOutputStream.getFD() as FileDescriptor

myFileOutputStream.getFD();
```

:::


