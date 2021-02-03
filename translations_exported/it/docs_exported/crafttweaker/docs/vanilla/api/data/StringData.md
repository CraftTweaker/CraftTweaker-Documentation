# StringData



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.StringData;
```


## Interfacce Implementate
StringData implements the following interfaces. That means all methods defined in these interfaces are also available in StringData

- [IData](/vanilla/api/data/IData)
## Constructors

No Description Provided
```zenscript
new StringData(internal as string) as StringData
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| internal  | string | No Description Provided |



## Operators

### ADD

Concatenates the two string Datas and returns the result.

```zenscript
myStringData + data as StringData
new StringData("Hello") + new StringData("World")
```




