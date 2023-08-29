# BufferedReader

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.utils.file.streams.BufferedReader;
```


## Extending Reader

BufferedReader extends [Reader](/mods/sdmcrtplus/utils/file/Reader). That means all methods available in [Reader](/mods/sdmcrtplus/utils/file/Reader) are also available in BufferedReader

## Constructors


```zenscript
new BufferedReader(name as string) as BufferedReader
```
| Parameter |  Type  |
|-----------|--------|
| name      | string |



## Methods

:::group{name=lines}

Return Type: **invalid**

```zenscript
// BufferedReader.lines() as invalid

myBufferedReader.lines();
```

:::

:::group{name=readLine}

Return Type: string?

```zenscript
// BufferedReader.readLine() as string?

myBufferedReader.readLine();
```

:::


