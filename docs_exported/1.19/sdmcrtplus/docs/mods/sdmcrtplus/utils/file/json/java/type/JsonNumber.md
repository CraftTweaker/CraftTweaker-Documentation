# JsonNumber

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.utils.file.json.java.type.JsonNumber;
```


## Implemented Interfaces
JsonNumber implements the following interfaces. That means all methods defined in these interfaces are also available in JsonNumber

- [JsonValue](/mods/sdmcrtplus/utils/file/json/java/type/JsonValue)

## Methods

:::group{name=doubleValue}

Returns this JSON number as a double. This is a a convenience method for bigDecimalValue().doubleValue(). Note that this conversion can lose information about the overall magnitude and precision of the number value as well as return a result with the opposite sign.

Return Type: double

```zenscript
// JsonNumber.doubleValue() as double

myJsonNumber.doubleValue();
```

:::

:::group{name=intValue}

Returns this JSON number as an int. Note that this conversion can lose information about the overall magnitude and precision of the number value as well as return a result with the opposite sign.

Return Type: int

```zenscript
// JsonNumber.intValue() as int

myJsonNumber.intValue();
```

:::

:::group{name=isIntegral}

Returns true if this JSON number is a integral number. This method semantics are defined using bigDecimalValue().scale(). If the scale is zero, then it is considered integral type. This integral type information can be used to invoke an appropriate accessor method to obtain a numeric value

Return Type: boolean

```zenscript
// JsonNumber.isIntegral() as boolean

myJsonNumber.isIntegral();
```

:::

:::group{name=longValue}

Returns this JSON number as a long. Note that this conversion can lose information about the overall magnitude and precision of the number value as well as return a result with the opposite sign.

Return Type: long

```zenscript
// JsonNumber.longValue() as long

myJsonNumber.longValue();
```

:::


