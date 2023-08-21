# InputStream

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.utils.file.streams.InputStream;
```


## Implemented Interfaces
InputStream implements the following interfaces. That means all methods defined in these interfaces are also available in InputStream

- [Closeable](/mods/sdmcrtplus/utils/file/Closeable)

## Constructors


```zenscript
new InputStream(name as string) as InputStream
```
| Parameter |  Type  |
|-----------|--------|
| name      | string |



## Methods

:::group{name=available}

Returns an estimate of the number of bytes that can be read (or skipped over) from this input stream without blocking, which may be 0, or 0 when end of stream is detected. The read might be on the same thread or another thread. A single read or skip of this many bytes will not block, but may read or skip fewer bytes.

Return Type: int

```zenscript
// InputStream.available() as int

myInputStream.available();
```

:::

:::group{name=mark}

Marks the current position in this input stream. A subsequent call to the reset method repositions this stream at the last marked position so that subsequent reads re-read the same bytes.

```zenscript
InputStream.mark(readLimit as int)
```

| Parameter | Type |                                       Description                                       |
|-----------|------|-----------------------------------------------------------------------------------------|
| readLimit | int  | - the maximum limit of bytes that can be read before the mark position becomes invalid. |


:::

:::group{name=markSupported}

Tests if this input stream supports the mark and reset methods. Whether or not mark and reset are supported is an invariant property of a particular input stream instance. The markSupported method of InputStream returns false.

Returns: true if this stream instance supports the mark and reset methods; false otherwise.  
Return Type: boolean

```zenscript
// InputStream.markSupported() as boolean

myInputStream.markSupported();
```

:::

:::group{name=read}

Reads the next byte of data from the input stream. The value byte is returned as an int in the range 0 to 255. If no byte is available because the end of the stream has been reached, the value -1 is returned. This method blocks until input data is available, the end of the stream is detected, or an exception is thrown.

Return Type: int

```zenscript
// InputStream.read() as int

myInputStream.read();
```

:::

:::group{name=read}

Reads the next byte of data from the input stream. The value byte is returned as an int in the range 0 to 255. If no byte is available because the end of the stream has been reached, the value -1 is returned. This method blocks until input data is available, the end of the stream is detected, or an exception is thrown.

Return Type: int

```zenscript
InputStream.read(b as byte[]) as int
```

| Parameter |  Type  |
|-----------|--------|
| b         | byte[] |


:::

:::group{name=read}

Reads the next byte of data from the input stream. The value byte is returned as an int in the range 0 to 255. If no byte is available because the end of the stream has been reached, the value -1 is returned. This method blocks until input data is available, the end of the stream is detected, or an exception is thrown.

Return Type: int

```zenscript
InputStream.read(b as byte[], off as int, len as int) as int
```

| Parameter |  Type  |
|-----------|--------|
| b         | byte[] |
| off       | int    |
| len       | int    |


:::

:::group{name=readAllBytes}

Reads all remaining bytes from the input stream. This method blocks until all remaining bytes have been read and end of stream is detected, or an exception is thrown. This method does not close the input stream.

Return Type: byte[]

```zenscript
// InputStream.readAllBytes() as byte[]

myInputStream.readAllBytes();
```

:::

:::group{name=readAllBytes}

Reads up to a specified number of bytes from the input stream. This method blocks until the requested number of bytes has been read, end of stream is detected, or an exception is thrown. This method does not close the input stream.

Return Type: byte[]

```zenscript
InputStream.readAllBytes(len as int) as byte[]
```

| Parameter | Type |              Description              |
|-----------|------|---------------------------------------|
| len       | int  | - the maximum number of bytes to read |


:::

:::group{name=readNBytes}

Reads the requested number of bytes from the input stream into the given byte array. This method blocks until len bytes of input data have been read, end of stream is detected, or an exception is thrown. The number of bytes actually read, possibly zero, is returned. This method does not close the input stream.

Return Type: int

```zenscript
InputStream.readNBytes(b as byte[], off as int, len as int) as int
```

| Parameter |  Type  |                     Description                      |
|-----------|--------|------------------------------------------------------|
| b         | byte[] |                                                      |
| off       | int    | - the start offset in b at which the data is written |
| len       | int    | – the maximum number of bytes to read                |


:::

:::group{name=reset}

Repositions this stream to the position at the time the mark method was last called on this input stream.

```zenscript
// InputStream.reset()

myInputStream.reset();
```

:::

:::group{name=skip}

Skips over and discards n bytes of data from this input stream. The skip method may, for a variety of reasons, end up skipping over some smaller number of bytes, possibly 0. This may result from any of a number of conditions; reaching end of file before n bytes have been skipped is only one possibility. The actual number of bytes skipped is returned. If n is negative, the skip method for class InputStream always returns 0, and no bytes are skipped. Subclasses may handle the negative value differentl

Return Type: long

```zenscript
InputStream.skip(n as long) as long
```

| Parameter | Type |             Description              |
|-----------|------|--------------------------------------|
| n         | long | - the number of bytes to be skipped. |


:::

:::group{name=skipNBytes}

Skips over and discards exactly n bytes of data from this input stream. If n is zero, then no bytes are skipped. If n is negative, then no bytes are skipped. Subclasses may handle the negative value differently.

```zenscript
InputStream.skipNBytes(n as long)
```

| Parameter | Type |             Description              |
|-----------|------|--------------------------------------|
| n         | long | - the number of bytes to be skipped. |


:::

:::group{name=transferTo}

Reads all bytes from this input stream and writes the bytes to the given output stream in the order that they are read. On return, this input stream will be at end of stream. This method does not close either stream.

```zenscript
InputStream.transferTo(outputStream as OutputStream)
```

|  Parameter   |                               Type                               |          Description          |
|--------------|------------------------------------------------------------------|-------------------------------|
| outputStream | [OutputStream](/mods/sdmcrtplus/utils/file/streams/OutputStream) | – the output stream, non-null |


:::


