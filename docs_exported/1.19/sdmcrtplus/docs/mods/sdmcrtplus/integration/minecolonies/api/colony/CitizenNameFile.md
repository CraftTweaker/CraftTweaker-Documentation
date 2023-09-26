# CitizenNameFile

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.CitizenNameFile;
```


## Methods

:::group{name=getFemaleFirstNames}

Return Type: stdlib.List&lt;string&gt;

```zenscript
// CitizenNameFile.getFemaleFirstNames() as stdlib.List<string>

myCitizenNameFile.getFemaleFirstNames();
```

:::

:::group{name=getMaleFirstNames}

Return Type: stdlib.List&lt;string&gt;

```zenscript
// CitizenNameFile.getMaleFirstNames() as stdlib.List<string>

myCitizenNameFile.getMaleFirstNames();
```

:::

:::group{name=getParts}

Return Type: int

```zenscript
// CitizenNameFile.getParts() as int

myCitizenNameFile.getParts();
```

:::

:::group{name=getSurnames}

Return Type: stdlib.List&lt;string&gt;

```zenscript
// CitizenNameFile.getSurnames() as stdlib.List<string>

myCitizenNameFile.getSurnames();
```

:::

:::group{name=setFemaleFirstNames}

```zenscript
CitizenNameFile.setFemaleFirstNames(list as stdlib.List<string>)
```

| Parameter |           Type            |
|-----------|---------------------------|
| list      | stdlib.List&lt;string&gt; |


:::

:::group{name=setMaleFirstNames}

```zenscript
CitizenNameFile.setMaleFirstNames(list as stdlib.List<string>)
```

| Parameter |           Type            |
|-----------|---------------------------|
| list      | stdlib.List&lt;string&gt; |


:::

:::group{name=setSurnames}

```zenscript
CitizenNameFile.setSurnames(list as stdlib.List<string>)
```

| Parameter |           Type            |
|-----------|---------------------------|
| list      | stdlib.List&lt;string&gt; |


:::


