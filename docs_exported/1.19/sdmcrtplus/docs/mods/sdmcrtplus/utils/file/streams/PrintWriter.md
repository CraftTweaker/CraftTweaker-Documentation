# PrintWriter

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.utils.file.streams.PrintWriter;
```


## Extending Writer

PrintWriter extends [Writer](/mods/sdmcrtplus/utils/file/Writer). That means all methods available in [Writer](/mods/sdmcrtplus/utils/file/Writer) are also available in PrintWriter

## Constructors


```zenscript
new PrintWriter(file as File) as PrintWriter
```
| Parameter |                   Type                   |
|-----------|------------------------------------------|
| file      | [File](/mods/sdmcrtplus/utils/file/File) |



```zenscript
new PrintWriter(file as File, append as boolean) as PrintWriter
```
| Parameter |                   Type                   |
|-----------|------------------------------------------|
| file      | [File](/mods/sdmcrtplus/utils/file/File) |
| append    | boolean                                  |



## Methods

:::group{name=print}

```zenscript
PrintWriter.print(c as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| c         | boolean |


:::

:::group{name=print}

```zenscript
PrintWriter.print(c as char)
```

| Parameter | Type |
|-----------|------|
| c         | char |


:::

:::group{name=print}

```zenscript
PrintWriter.print(c as char[])
```

| Parameter |  Type  |
|-----------|--------|
| c         | char[] |


:::

:::group{name=print}

```zenscript
PrintWriter.print(c as double)
```

| Parameter |  Type  |
|-----------|--------|
| c         | double |


:::

:::group{name=print}

```zenscript
PrintWriter.print(c as float)
```

| Parameter | Type  |
|-----------|-------|
| c         | float |


:::

:::group{name=print}

```zenscript
PrintWriter.print(c as int)
```

| Parameter | Type |
|-----------|------|
| c         | int  |


:::

:::group{name=print}

```zenscript
PrintWriter.print(c as long)
```

| Parameter | Type |
|-----------|------|
| c         | long |


:::

:::group{name=print}

```zenscript
PrintWriter.print(c as string)
```

| Parameter |  Type  |
|-----------|--------|
| c         | string |


:::

:::group{name=println}

```zenscript
// PrintWriter.println()

myPrintWriter.println();
```

:::

:::group{name=println}

```zenscript
PrintWriter.println(c as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| c         | boolean |


:::

:::group{name=println}

```zenscript
PrintWriter.println(c as char)
```

| Parameter | Type |
|-----------|------|
| c         | char |


:::

:::group{name=println}

```zenscript
PrintWriter.println(c as char[])
```

| Parameter |  Type  |
|-----------|--------|
| c         | char[] |


:::

:::group{name=println}

```zenscript
PrintWriter.println(c as double)
```

| Parameter |  Type  |
|-----------|--------|
| c         | double |


:::

:::group{name=println}

```zenscript
PrintWriter.println(c as float)
```

| Parameter | Type  |
|-----------|-------|
| c         | float |


:::

:::group{name=println}

```zenscript
PrintWriter.println(c as int)
```

| Parameter | Type |
|-----------|------|
| c         | int  |


:::

:::group{name=println}

```zenscript
PrintWriter.println(c as long)
```

| Parameter | Type |
|-----------|------|
| c         | long |


:::

:::group{name=println}

```zenscript
PrintWriter.println(c as string)
```

| Parameter |  Type  |
|-----------|--------|
| c         | string |


:::


