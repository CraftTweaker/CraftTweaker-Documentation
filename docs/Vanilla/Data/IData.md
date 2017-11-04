# IData

The IData interface is a generic Interface for handling Data like NBT.  
You can cast about all primitives (short, double, string, int, ...) as well as certain arrays to IData.  
Remember that while they offer similar features, IData and their counterparts are NOT the same, which is why they will be referred to as DataTypes (e.g. DataBool).  


## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops)), so better be safe than sorry and add the import.  
`import crafttweaker.data.IData;`

## Overview

| Binary Operators   | `+` | `-` | `*` | `/` | `%` | `&` | `|` | `^` | `in` | `==` | `<, >, <=, >=` |
|--------------------|-----|-----|-----|-----|-----|-----|-----|-----|------|------|----------------|
| DataBool           | ✘  | ✘  | ✘   | ✘  | ✘  | ✔   | ✔  | ✔  | ✔    | ✔   | ✘             |
| DataByte           | ✔  | ✔  | ✔   | ✔  | ✔  | ✔   | ✔  | ✔  | ✔    | ✔   | ✔             |
| DataByte[]         | ✘  | ✘  | ✘   | ✘  | ✘  | ✘   | ✘  | ✘  | ✔    | ✔   | ✘             |
| DataDouble         | ✔  | ✔  | ✔   | ✔  | ✔  | ✘   | ✘  | ✘  | ✔    | ✔   | ✔             |
| DataFloat          | ✔  | ✔  | ✔   | ✔  | ✔  | ✘   | ✘  | ✘  | ✔    | ✔   | ✔             |
| DataInt            | ✔  | ✔  | ✔   | ✔  | ✔  | ✔   | ✔  | ✔  | ✔    | ✔   | ✔             |
| DataInt[]          | ✔  | ✘  | ✘   | ✘  | ✘  | ✘   | ✘  | ✘  | ✔    | ✔   | ✘             |
| DataList           | ✔  | ✘  | ✘   | ✘  | ✘  | ✘   | ✘  | ✘  | ✔    | ✔   | ✘             |
| DataLong           | ✔  | ✔  | ✔   | ✔  | ✔  | ✔   | ✔  | ✔  | ✔    | ✔   | ✔             |
| [DataMap](DataMap) | ✔  | ✔  | ✘   | ✘  | ✘  | ✘   | ✘  | ✘  | ✔    | ✔   | ✘             |
| DataShort          | ✔  | ✔  | ✔   | ✔  | ✔  | ✔   | ✔  | ✔  | ✔    | ✔   | ✔             |
| DataString         | ✔  | ✘  | ✘   | ✘  | ✘  | ✘   | ✘  | ✘  | ✔    | ✔   | ✔             |


| Unary Oparators    | `-` negate | `!` not  |
|--------------------|------------|----------|
| DataBool           | ✘          | ✔       |
| DataByte           | ✔          | ✔       |
| DataByte[]         | ✘          | ✘       |
| DataDouble         | ✔          | ✘       |
| DataFloat          | ✔          | ✘       |
| DataInt            | ✔          | ✔       |
| DataInt[]          | ✘          | ✘       |
| DataList           | ✘          | ✘       |
| DataLong           | ✔          | ✔       |
| [DataMap](DataMap) | ✘          | ✘       |
| DataShort          | ✔          | ✔       |
| DataString         | ✘          | ✘       |


| Index and Members  | `[i]` | `[i]=v`   | `.member` | `.member=v`   | `.length`   | `.immutable` | `.update(v)` |
|--------------------|-------|-----------|-----------|---------------|-------------|--------------|--------------|
| DataBool           | ✘    | ✘         | ✘        | ✘            | returns `0` | ✔            | ✔            |
| DataByte           | ✘    | ✘         | ✘        | ✘            | returns `0` | ✔            | ✔            |
| DataByte[]         | ✔    | ✔         | ✘        | ✘            | ✔           | ✔           | ✔            |
| DataDouble         | ✘    | ✘         | ✘        | ✘            | returns `0` | ✔            | ✔            |
| DataFloat          | ✘    | ✘         | ✘        | ✘            | returns `0` | ✔            | ✔            |
| DataInt            | ✘    | ✘         | ✘        | ✘            | returns `0` | ✔            | ✔            |
| DataInt[]          | ✔    | ✔         | ✘        | ✘            | ✔           | ✔           | ✔            |
| DataList           | ✔    | ✔         | ✘        | ✘            | ✔           | ✔           | ✔            |
| DataLong           | ✘    | ✘         | ✘        | ✘            | returns `0` | ✔            | ✔            |
| [DataMap](DataMap) | ✘    | ✘         | ✔        | ✔            | ✔           | ✔           | ✔            |
| DataShort          | ✘    | ✘         | ✘        | ✘            | returns `0` | ✔            | ✔            |
| DataString         | ✔    | ✘         | ✘        | ✘            | ✔           | ✔           | ✔            |


You can cast IData to a specific type using `data.asType()` → `data.asInt();`  
You can also use the IData Interface to convert types: `("1" as IData).asInt();`

| Casts from ↓ to →      | bool | byte | byte[] | double | float | int | int[]  | list     | long | [Map](/AdvancedFunctions/Associative_Arrays)                  | short | string |
|------------------------|------|------|--------|--------|-------|-----|--------|----------|------|---------------------------------------------------------------|-------|--------|
| DataBool               | `≡`  | ✔    | `null` | ✔      | ✔   | ✔   | `null` | `null`  | ✔    | `null`                                                       | ✔     | ✔     |
| DataByte               | ✘    | `≡`  | `null` | ✔      | ✔   | ✔   | `null` | `null`  | ✔    | `null`                                                       | ✔     | ✔     |
| DataByte[]             | ✘    | ✘    | `≡`    | ✘      | ✘  | ✘   | ✔      | ✔      | ✘    | `null`                                                       | ✘     | ✔     |
| DataDouble             | ✘    | ✔    | `null` | `≡`    | ✔   | ✔   | `null` | `null`  | ✔    | `null`                                                       | ✔     | ✔     |
| DataFloat              | ✘    | ✔    | `null` | ✔      | `≡` | ✔   | `null` | `null`  | ✔    | `null`                                                       | ✔     | ✔     |
| DataInt                | ✘    | ✔    | `null` | ✔      | ✔  | `≡`  | `null` | `null`  | ✔    | `null`                                                       | ✔     | ✔     |
| DataInt[]              | ✘    | ✘    | ✔      | ✘      | ✘  | ✘   | `≡`    | ✔      | ✘    | `null`                                                       | ✘     | ✔     |
| DataList               | ✘    | ✘    | ✔      | ✘      | ✘  | ✘   | ✔      | `≡`    | ✘    | `null`                                                       | ✘     | ✔     |
| DataLong               | ✘    | ✔    | `null` | ✔      | ✔   | ✔   | `null` | `null` | `≡`   | `null`                                                       | ✔     | ✔     |
| [DataMap](DataMap)     | ✘    | ✘    | `null` | ✘      | ✘   | ✘   | `null` | `null` | ✘    | `≡`                                                          | ✘     | ✔     |
| DataShort              | ✘    | ✔    | `null` | ✔      | ✔   | ✔   | `null` | `null` | ✔    | `null`                                                       | `≡`   | ✔      |
| DataString             | ✘    | ✔    | `null` | ✔      | ✔   | ✔   | `null` | `null` | ✔    | `null`                                                       | ✔     | `≡`    |