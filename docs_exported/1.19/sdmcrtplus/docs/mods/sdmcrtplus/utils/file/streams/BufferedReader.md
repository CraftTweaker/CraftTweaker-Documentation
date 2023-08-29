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
new BufferedReader(reader as Reader) as BufferedReader
```
| Parameter |                     Type                     |
|-----------|----------------------------------------------|
| reader    | [Reader](/mods/sdmcrtplus/utils/file/Reader) |



## Methods

:::group{name=lines}

Return Type: stdlib.List&lt;string&gt;

```zenscript
// BufferedReader.lines() as stdlib.List<string>

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


