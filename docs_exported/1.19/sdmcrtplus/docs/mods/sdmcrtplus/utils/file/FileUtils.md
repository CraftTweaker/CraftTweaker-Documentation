# FileUtils

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.utils.file.FileUtils;
```


## Static Methods

:::group{name=getCraftTweakerLogFile}

Return Type: [Path](/mods/sdmcrtplus/utils/file/Path)

```zenscript
// FileUtils.getCraftTweakerLogFile() as Path

FileUtils.getCraftTweakerLogFile();
```

:::

:::group{name=getMinecraftDirectory}

Return Type: [Path](/mods/sdmcrtplus/utils/file/Path)

```zenscript
// FileUtils.getMinecraftDirectory() as Path

FileUtils.getMinecraftDirectory();
```

:::

:::group{name=getMinecraftResourcePackDirectory}

Return Type: [Path](/mods/sdmcrtplus/utils/file/Path)

```zenscript
// FileUtils.getMinecraftResourcePackDirectory() as Path

FileUtils.getMinecraftResourcePackDirectory();
```

:::

:::group{name=getPath}

Return Type: [Path](/mods/sdmcrtplus/utils/file/Path)

```zenscript
FileUtils.getPath(path as string) as Path
```

| Parameter |  Type  |
|-----------|--------|
| path      | string |


:::

:::group{name=getScriptsDirectory}

Return Type: [Path](/mods/sdmcrtplus/utils/file/Path)

```zenscript
// FileUtils.getScriptsDirectory() as Path

FileUtils.getScriptsDirectory();
```

:::

:::group{name=getScriptsDirectoryCT}

Return Type: [Path](/mods/sdmcrtplus/utils/file/Path)

```zenscript
// FileUtils.getScriptsDirectoryCT() as Path

FileUtils.getScriptsDirectoryCT();
```

:::

:::group{name=isReadable}

Tests whether a file is readable. This method checks that a file exists and that this Java virtual machine has appropriate privileges that would allow it open the file for reading. Depending on the implementation, this method may require to read file permissions, access control lists, or other file attributes in order to check the effective access to the file. Consequently, this method may not be atomic with respect to other file system operations.

Return Type: boolean

```zenscript
FileUtils.isReadable(path as Path) as boolean
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| path      | [Path](/mods/sdmcrtplus/utils/file/Path) |


:::

:::group{name=readAllBytes}

Reads all the bytes from a file. The method ensures that the file is closed when all bytes have been read or an I/O error, or other runtime exception, is thrown.

Return Type: byte[]

```zenscript
FileUtils.readAllBytes(path as Path) as byte[]
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| path      | [Path](/mods/sdmcrtplus/utils/file/Path) |


:::

:::group{name=readAllLines}

Read all lines from a file. Bytes from the file are decoded into characters using the UTF-8 charset. <br />      This method works as if invoking it were equivalent to evaluating the expression:

Return Type: stdlib.List&lt;string&gt;

```zenscript
FileUtils.readAllLines(path as Path) as stdlib.List<string>
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| path      | [Path](/mods/sdmcrtplus/utils/file/Path) |


:::

:::group{name=readString}

Reads all content from a file into a string, decoding from bytes to characters using the UTF-8 charset. The method ensures that the file is closed when all content have been read or an I/O error, or other runtime exception, is thrown.

Return Type: string

```zenscript
FileUtils.readString(path as Path) as string
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| path      | [Path](/mods/sdmcrtplus/utils/file/Path) |


:::

