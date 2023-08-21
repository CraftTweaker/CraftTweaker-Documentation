# FileChannel

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.utils.file.FileChannel;
```


## Methods

:::group{name=isOpen}

Return Type: boolean

```zenscript
// FileChannel.isOpen() as boolean

myFileChannel.isOpen();
```

:::

:::group{name=position}

This channel's file position, a non-negative integer counting the number of bytes from the beginning of the file to the current position

Return Type: long

```zenscript
// FileChannel.position() as long

myFileChannel.position();
```

:::

:::group{name=size}

Returns the current size of this channel's file.

Return Type: long

```zenscript
// FileChannel.size() as long

myFileChannel.size();
```

:::


