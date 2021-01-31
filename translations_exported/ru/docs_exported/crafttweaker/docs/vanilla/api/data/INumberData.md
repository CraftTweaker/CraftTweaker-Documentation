# INumberData

Represents a Number in the form of an [IData](/vanilla/api/data/IData), useful for converting between types (double to int / long for example).

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.INumberData;
```


## Implemented Interfaces
INumberData implements the following interfaces. That means all methods defined in these interfaces are also available in INumberData

- [IData](/vanilla/api/data/IData)
## Утилиты

| Тип результата | Является неявным |
| -------------- | ---------------- |
| byte           | false            |
| double         | false            |
| float          | false            |
| int            | false            |
| long           | false            |
| short          | false            |

## Methods

### getByte

Gets the value of this [IData](/vanilla/api/data/IData) as a byte

Return Type: byte

```zenscript
INumberData.getByte() as byte
1.getByte();
```
### getDouble

Gets the value of this [IData](/vanilla/api/data/IData) as a double

Return Type: double

```zenscript
INumberData.getDouble() as double
1.getDouble();
```
### getFloat

Gets the value of this [IData](/vanilla/api/data/IData) as a float

Return Type: float

```zenscript
INumberData.getFloat() as float
1.getFloat();
```
### getInt

Gets the value of this [IData](/vanilla/api/data/IData) as an int

Return Type: int

```zenscript
INumberData.getInt() as int
1.getInt();
```
### getLong

Gets the value of this [IData](/vanilla/api/data/IData) as a long

Return Type: long

```zenscript
INumberData.getLong() as long
1.getLong();
```
### getShort

Gets the value of this [IData](/vanilla/api/data/IData) as a short

Return Type: short

```zenscript
INumberData.getShort() as short
1.getShort();
```

