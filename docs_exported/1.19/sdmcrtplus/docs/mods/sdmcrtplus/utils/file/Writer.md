# Writer

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.utils.file.Writer;
```


## Implemented Interfaces
Writer implements the following interfaces. That means all methods defined in these interfaces are also available in Writer

- Appendable
- [Closeable](/mods/sdmcrtplus/utils/file/Closeable)
- [Flushable](/mods/sdmcrtplus/utils/file/Flushable)

## Methods

:::group{name=append}

Appends the specified character to this writer.
     An invocation of this method of the form out.append(c) behaves in exactly the same way as the invocation

Return Type: [Writer](/mods/sdmcrtplus/utils/file/Writer)

```zenscript
Writer.append(str as char) as Writer
```

| Parameter | Type |
|-----------|------|
| str       | char |


:::

:::group{name=write}

Writes a single character. The character to be written is contained in the 16 low-order bits of the given integer value; the 16 high-order bits are ignored.

```zenscript
Writer.write(str as char)
```

| Parameter | Type |
|-----------|------|
| str       | char |


:::

:::group{name=write}

Writes an array of characters.

```zenscript
Writer.write(str as char[])
```

| Parameter |  Type  |
|-----------|--------|
| str       | char[] |


:::

:::group{name=write}

Writes a single character. The character to be written is contained in the 16 low-order bits of the given integer value; the 16 high-order bits are ignored.

```zenscript
Writer.write(str as int)
```

| Parameter | Type |
|-----------|------|
| str       | int  |


:::

:::group{name=write}

Writes a string.

```zenscript
Writer.write(str as string)
```

| Parameter |  Type  |
|-----------|--------|
| str       | string |


:::

:::group{name=write}

Writes a portion of an array of characters

```zenscript
Writer.write(str as char[], off as int, len as int)
```

| Parameter |  Type  |                   Description                   |
|-----------|--------|-------------------------------------------------|
| str       | char[] |                                                 |
| off       | int    | - Offset from which to start writing characters |
| len       | int    | – Number of characters to write                 |


:::

:::group{name=write}

Writes a portion of a string.

```zenscript
Writer.write(str as string, off as int, len as int)
```

| Parameter |  Type  |                   Description                   |
|-----------|--------|-------------------------------------------------|
| str       | string | - A String                                      |
| off       | int    | - Offset from which to start writing characters |
| len       | int    | - Number of characters to write                 |


:::


