# BoolData

Careful with BoolData: While it works for specifying boolean attributes in JSON syntax, using it in Tags will instead use a [ByteData](/vanilla/api/data/ByteData) object. Reason for this is that Minecraft does not have Boolean NBT values.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.BoolData;
```


## Implemented Interfaces
BoolData implements the following interfaces. That means all methods defined in these interfaces are also available in BoolData

- [IData](/vanilla/api/data/IData)
## Constructors

No Description Provided
```zenscript
new BoolData(internal as boolean) as BoolData
```
| Параметр | Тип     | Description             |
| -------- | ------- | ----------------------- |
| internal | boolean | No Description Provided |


## Утилиты

| Тип результата                         | Является неявным |
| -------------------------------------- | ---------------- |
| [ByteData](/vanilla/api/data/ByteData) | false            |

## Methods

### getByteData

Converts this BoolData to a [ByteData](/vanilla/api/data/ByteData) object. This will be used when this Data is converted to NBT

Return Type: [ByteData](/vanilla/api/data/ByteData)

```zenscript
BoolData.getByteData() as ByteData
true.getByteData();
```

