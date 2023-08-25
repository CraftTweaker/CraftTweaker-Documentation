# Data

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.utils.Data;
```


## Implemented Interfaces
Data implements the following interfaces. That means all methods defined in these interfaces are also available in Data

- Cloneable
- Comparable&lt;[Data](/mods/sdmcrtplus/utils/Data)&gt;

## Constructors


```zenscript
new Data() as Data
new Data();
```

## Methods

:::group{name=getDay}

Returns the day of the week represented by this date. The returned value (0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday) represents the day of the week that contains or begins with the instant in time represented by this Date object, as interpreted in the local time zone.

Return Type: int

```zenscript
// Data.getDay() as int

myData.getDay();
```

:::

:::group{name=getHours}

Returns the hour represented by this Date object. The returned value is a number (0 through 23) representing the hour within the day that contains or begins with the instant in time represented by this Date object, as interpreted in the local time zone.

Return Type: int

```zenscript
// Data.getHours() as int

myData.getHours();
```

:::

:::group{name=getMinutes}

Returns the number of minutes past the hour represented by this date, as interpreted in the local time zone. The value returned is between 0 and 59.

Return Type: int

```zenscript
// Data.getMinutes() as int

myData.getMinutes();
```

:::

:::group{name=getMonth}

Returns a number representing the month that contains or begins with the instant in time represented by this Date object. The value returned is between 0 and 11, with the value 0 representing January.

Return Type: int

```zenscript
// Data.getMonth() as int

myData.getMonth();
```

:::

:::group{name=getSeconds}

Returns the number of seconds past the minute represented by this date. The value returned is between 0 and 59;

Return Type: int

```zenscript
// Data.getSeconds() as int

myData.getSeconds();
```

:::

:::group{name=getTime}

Return Type: long

```zenscript
// Data.getTime() as long

myData.getTime();
```

:::

:::group{name=getYear}

Return Type: int

```zenscript
// Data.getYear() as int

myData.getYear();
```

:::


## Properties

|  Name   | Type | Has Getter | Has Setter |                                                                                                                                                          Description                                                                                                                                                          |
|---------|------|------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| day     | int  | true       | false      | Returns the day of the week represented by this date. The returned value (0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday) represents the day of the week that contains or begins with the instant in time represented by this Date object, as interpreted in the local time zone. |
| hours   | int  | true       | false      | Returns the hour represented by this Date object. The returned value is a number (0 through 23) representing the hour within the day that contains or begins with the instant in time represented by this Date object, as interpreted in the local time zone.                                                                 |
| minutes | int  | true       | false      | Returns the number of minutes past the hour represented by this date, as interpreted in the local time zone. The value returned is between 0 and 59.                                                                                                                                                                          |
| month   | int  | true       | false      | Returns a number representing the month that contains or begins with the instant in time represented by this Date object. The value returned is between 0 and 11, with the value 0 representing January.                                                                                                                      |
| time    | long | true       | false      |                                                                                                                                                                                                                                                                                                                               |
| year    | int  | true       | false      |                                                                                                                                                                                                                                                                                                                               |

