# Closeable

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.utils.file.Closeable;
```


## Implemented Interfaces
Closeable implements the following interfaces. That means all methods defined in these interfaces are also available in Closeable

- AutoCloseable

## Methods

:::group{name=close}

Closes this stream and releases any system resources associated with it. If the stream is already closed then invoking this method has no effect.

```zenscript
// Closeable.close()

myCloseable.close();
```

:::


