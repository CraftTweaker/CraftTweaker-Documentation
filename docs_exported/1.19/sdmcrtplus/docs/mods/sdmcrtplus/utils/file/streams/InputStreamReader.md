# InputStreamReader

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.file.utils.streams.InputStreamReader;
```


## Extending Reader

InputStreamReader extends [Reader](/mods/sdmcrtplus/utils/file/Reader). That means all methods available in [Reader](/mods/sdmcrtplus/utils/file/Reader) are also available in InputStreamReader

## Constructors


```zenscript
new InputStreamReader(in as InputStream, charsetName as string) as InputStreamReader
```
|  Parameter  |                              Type                              |
|-------------|----------------------------------------------------------------|
| in          | [InputStream](/mods/sdmcrtplus/utils/file/streams/InputStream) |
| charsetName | string                                                         |



## Methods

:::group{name=mark}

Marks the present position in the stream. Subsequent calls to reset() will attempt to reposition the stream to this point. Not all character-input streams support the mark() operation.

```zenscript
InputStreamReader.mark(readLimit as int)
```

| Parameter | Type |
|-----------|------|
| readLimit | int  |


:::

:::group{name=markSupported}

Tells whether this stream supports the mark() operation. The default implementation always returns false. Subclasses should override this method.

Return Type: boolean

```zenscript
// InputStreamReader.markSupported() as boolean

myInputStreamReader.markSupported();
```

:::

:::group{name=read}

Reads a single character.

Return Type: int

```zenscript
// InputStreamReader.read() as int

myInputStreamReader.read();
```

:::

:::group{name=read}

Reads characters into an array. This method will block until some input is available, an I/O error occurs, or the end of the stream is reached

     If the length of cbuf is zero, then no characters are read and 0 is returned; otherwise, there is an attempt to read at least one character. If no character is available because the stream is at its end, the value -1 is returned; otherwise, at least one character is read and stored into cbuf.

Return Type: int

```zenscript
InputStreamReader.read(cbuf as char[]) as int
```

| Parameter |  Type  |
|-----------|--------|
| cbuf      | char[] |


:::

:::group{name=read}

Reads characters into a portion of an array. This method will block until some input is available, an I/O error occurs, or the end of the stream is reached.
     If len is zero, then no characters are read and 0 is returned; otherwise, there is an attempt to read at least one character. If no character is available because the stream is at its end, the value -1 is returned; otherwise, at least one character is read and stored into cbuf.

Return Type: int

```zenscript
InputStreamReader.read(cbuf as char[], off as int, len as int) as int
```

| Parameter |  Type  |
|-----------|--------|
| cbuf      | char[] |
| off       | int    |
| len       | int    |


:::

:::group{name=ready}

Tells whether this stream is ready to be read. An InputStreamReader is ready if its input buffer is not empty, or if bytes are available to be read from the underlying byte stream.

Return Type: boolean

```zenscript
// InputStreamReader.ready() as boolean

myInputStreamReader.ready();
```

:::

:::group{name=reset}

Resets the stream. If the stream has been marked, then attempt to reposition it at the mark. If the stream has not been marked, then attempt to reset it in some way appropriate to the particular stream, for example by repositioning it to its starting point. Not all character-input streams support the reset() operation, and some support reset() without supporting mark().

```zenscript
// InputStreamReader.reset()

myInputStreamReader.reset();
```

:::

:::group{name=skip}

Skips characters. This method will block until some characters are available, an I/O error occurs, or the end of the stream is reached. If the stream is already at its end before this method is invoked, then no characters are skipped and zero is returned.

Return Type: long

```zenscript
InputStreamReader.skip(n as long) as long
```

| Parameter | Type |             Description              |
|-----------|------|--------------------------------------|
| n         | long | - the number of bytes to be skipped. |


:::

:::group{name=transferTo}

Reads all characters from this reader and writes the characters to the given writer in the order that they are read. On return, this reader will be at end of the stream. This method does not close either reader or writer.

```zenscript
InputStreamReader.transferTo(out as Writer)
```

| Parameter |                     Type                     |      Description       |
|-----------|----------------------------------------------|------------------------|
| out       | [Writer](/mods/sdmcrtplus/utils/file/Writer) | – the writer, non-null |


:::


