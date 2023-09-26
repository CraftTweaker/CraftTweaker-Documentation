# File

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.utils.file.File;
```


## Implemented Interfaces
File implements the following interfaces. That means all methods defined in these interfaces are also available in File

- [Serializable](/mods/sdmcrtplus/utils/core/Serializable)
- Comparable&lt;[File](/mods/sdmcrtplus/utils/file/File)&gt;

## Constructors


```zenscript
new File(path as string) as File
```
| Parameter |  Type  |
|-----------|--------|
| path      | string |



## Methods

:::group{name=getAbsoluteFile}

Returns the absolute form of this abstract pathname. Equivalent to new File(this.getAbsolutePath).

Return Type: [File](/mods/sdmcrtplus/utils/file/File)

```zenscript
// File.getAbsoluteFile() as File

myFile.getAbsoluteFile();
```

:::

:::group{name=getAbsolutePath}

Returns the absolute pathname string of this abstract pathname.

Return Type: string

```zenscript
// File.getAbsolutePath() as string

myFile.getAbsolutePath();
```

:::

:::group{name=getCanonicalFile}

Returns the canonical form of this abstract pathname. Equivalent to new File(this.getCanonicalPath).

Return Type: [File](/mods/sdmcrtplus/utils/file/File)

```zenscript
// File.getCanonicalFile() as File

myFile.getCanonicalFile();
```

:::

:::group{name=getCanonicalPath}

Returns the canonical pathname string of this abstract pathname.

Return Type: string

```zenscript
// File.getCanonicalPath() as string

myFile.getCanonicalPath();
```

:::

:::group{name=getFreeSpace}

Returns the number of unallocated bytes in the partition named by this abstract path name. If the number of unallocated bytes in the partition is greater than Long.MAX_VALUE, then Long.MAX_VALUE will be returned.

Return Type: long

```zenscript
// File.getFreeSpace() as long

myFile.getFreeSpace();
```

:::

:::group{name=getName}

Returns the name of the file or directory denoted by this abstract pathname. This is just the last name in the pathname's name sequence. If the pathname's name sequence is empty, then the empty string is returned.

Return Type: string

```zenscript
// File.getName() as string

myFile.getName();
```

:::

:::group{name=getParent}

Returns the pathname string of this abstract pathname's parent, or null if this pathname does not name a parent directory.

Return Type: string

```zenscript
// File.getParent() as string

myFile.getParent();
```

:::

:::group{name=getParentFile}

Returns the abstract pathname of this abstract pathname's parent, or null if this pathname does not name a parent directory.

Return Type: [File](/mods/sdmcrtplus/utils/file/File)

```zenscript
// File.getParentFile() as File

myFile.getParentFile();
```

:::

:::group{name=getPath}

Converts this abstract pathname into a pathname string. The resulting string uses the default name-separator character to separate the names in the name sequence.

Return Type: string

```zenscript
// File.getPath() as string

myFile.getPath();
```

:::

:::group{name=getTotalSpace}

Returns the size of the partition named by this abstract pathname. If the total number of bytes in the partition is greater than Long.MAX_VALUE, then Long.MAX_VALUE will be returned.

Return Type: long

```zenscript
// File.getTotalSpace() as long

myFile.getTotalSpace();
```

:::

:::group{name=getUsableSpace}

Returns the number of bytes available to this virtual machine on the partition named by this abstract pathname. If the number of available bytes in the partition is greater than Long.MAX_VALUE, then Long.MAX_VALUE will be returned. When possible, this method checks for write permissions and other operating system restrictions and will therefore usually provide a more accurate estimate of how much new data can actually be written than getFreeSpace.

Return Type: long

```zenscript
// File.getUsableSpace() as long

myFile.getUsableSpace();
```

:::

:::group{name=setWritable}

A convenience method to set the owner's write permission for this abstract pathname. On some platforms it may be possible to start the Java virtual machine with special privileges that allow it to modify files that disallow write operations.

Return Type: boolean

```zenscript
File.setWritable(parameter as boolean) as boolean
```

| Parameter |  Type   |
|-----------|---------|
| parameter | boolean |


:::


