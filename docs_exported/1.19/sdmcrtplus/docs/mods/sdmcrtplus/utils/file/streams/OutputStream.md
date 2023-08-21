# OutputStream

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.utils.file.streams.OutputStream;
```


## Implemented Interfaces
OutputStream implements the following interfaces. That means all methods defined in these interfaces are also available in OutputStream

- [Closeable](/mods/sdmcrtplus/utils/file/Closeable)
- [Flushable](/mods/sdmcrtplus/utils/file/Flushable)

## Methods

:::group{name=write}

Writes b.length bytes from the specified byte array to this output stream. The general contract for write(b) is that it should have exactly the same effect as the call write(b, 0, b.length).

```zenscript
OutputStream.write(d as byte[])
```

| Parameter |  Type  |
|-----------|--------|
| d         | byte[] |


:::

:::group{name=write}

Writes the specified byte to this output stream. The general contract for write is that one byte is written to the output stream. The byte to be written is the eight low-order bits of the argument b. The 24 high-order bits of b are ignored.

```zenscript
OutputStream.write(d as int)
```

| Parameter | Type |
|-----------|------|
| d         | int  |


:::

:::group{name=write}

Writes len bytes from the specified byte array starting at offset off to this output stream. The general contract for write(b, off, len) is that some of the bytes in the array b are written to the output stream in order; element b[off] is the first byte written and b[off+len-1] is the last byte written by this operation.

```zenscript
OutputStream.write(d as byte[], off as int, len as int)
```

| Parameter |  Type  |          Description           |
|-----------|--------|--------------------------------|
| d         | byte[] | - the data                     |
| off       | int    | - the start offset             |
| len       | int    | - the number of bytes to write |


:::


