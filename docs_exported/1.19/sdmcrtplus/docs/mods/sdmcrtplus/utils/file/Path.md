# Path

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.utils.file.Path;
```


## Implemented Interfaces
Path implements the following interfaces. That means all methods defined in these interfaces are also available in Path

- Comparable&lt;[Path](/mods/sdmcrtplus/utils/file/Path)&gt;
- stdlib.Iterable&lt;[Path](/mods/sdmcrtplus/utils/file/Path)&gt;

## Methods

:::group{name=endsWith}

If the given path has N elements, and no root component, and this path has N or more elements, then this path ends with the given path if the last N elements of each path, starting at the element farthest from the root, are equal.

Return Type: boolean

```zenscript
Path.endsWith(other as Path) as boolean
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| other     | [Path](/mods/sdmcrtplus/utils/file/Path) |


:::

:::group{name=endsWith}

Tests if this path ends with a Path, constructed by converting the given path string, in exactly the manner specified by the endsWith(Path) method. On UNIX for example, the path "foo/bar" ends with "foo/bar" and "bar". It does not end with "r" or "/bar". Note that trailing separators are not taken into account, and so invoking this method on the Path"foo/bar" with the String "bar/" returns true.

Return Type: boolean

```zenscript
Path.endsWith(other as string) as boolean
```

| Parameter |  Type  |
|-----------|--------|
| other     | string |


:::

:::group{name=getFileName}

Returns the name of the file or directory denoted by this path as a Path object. The file name is the farthest element from the root in the directory hierarchy.

Return Type: [Path](/mods/sdmcrtplus/utils/file/Path)

```zenscript
// Path.getFileName() as Path

myPath.getFileName();
```

:::

:::group{name=getNameCount}

Returns the number of name elements in the path.
     Returns: the number of elements in the path, or 0 if this path only represents a root component

Return Type: int

```zenscript
// Path.getNameCount() as int

myPath.getNameCount();
```

:::

:::group{name=getParent}

Returns the parent path, or null if this path does not have a parent.

Return Type: [Path](/mods/sdmcrtplus/utils/file/Path)

```zenscript
// Path.getParent() as Path

myPath.getParent();
```

:::

:::group{name=getRoot}

Returns the root component of this path as a Path object, or null if this path does not have a root component.

Return Type: [Path](/mods/sdmcrtplus/utils/file/Path)

```zenscript
// Path.getRoot() as Path

myPath.getRoot();
```

:::

:::group{name=startsWith}

This path starts with the given path if this path's root component starts with the root component of the given path, and this path starts with the same name elements as the given path. If the given path has more name elements than this path then false is returned.

Return Type: boolean

```zenscript
Path.startsWith(other as Path) as boolean
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| other     | [Path](/mods/sdmcrtplus/utils/file/Path) |


:::

:::group{name=startsWith}

Tests if this path starts with a Path, constructed by converting the given path string, in exactly the manner specified by the startsWith(Path) method. On UNIX for example, the path "foo/bar" starts with "foo" and "foo/bar". It does not start with "f" or "fo".

Return Type: boolean

```zenscript
Path.startsWith(other as string) as boolean
```

| Parameter |  Type  |
|-----------|--------|
| other     | string |


:::

:::group{name=toFile}

Returns a File object representing this path. Where this Path is associated with the default provider, then this method is equivalent to returning a File object constructed with the String representation of this path.

Return Type: [File](/mods/sdmcrtplus/utils/file/File)

```zenscript
// Path.toFile() as File

myPath.toFile();
```

:::

:::group{name=toString}

Returns the string representation of this path.

Return Type: string

```zenscript
// Path.toString() as string

myPath.toString();
```

:::


