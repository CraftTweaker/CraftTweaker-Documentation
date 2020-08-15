# IData

The IData interface is a generic Interface for handling Data like NBT.  
You can cast about all primitives (short, double, string, int, ...) as well as certain arrays to IData.  
Remember that while they offer similar features, IData and their counterparts are NOT the same, which is why they will be referred to as DataTypes (e.g. DataBool).

## Importando el paquete

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.data.IData;`

## Overview

| Binary Operators                  | `+` | `-` | `*` | `/` | `%` | `&` | `|` | `^` | `en` | `==` | `<, >, <=, >=` |
| --------------------------------- | --- | --- | --- | --- | --- | ------- | --- | --- | ---- | ---- | -------------------------- |
| DataBool                          | ✘   | ✘   | ✘   | ✘   | ✘   | ✔       | ✔   | ✔   | ✔    | ✔    | ✘                          |
| DataByte                          | ✔   | ✔   | ✔   | ✔   | ✔   | ✔       | ✔   | ✔   | ✔    | ✔    | ✔                          |
| DataByte[]                        | ✘   | ✘   | ✘   | ✘   | ✘   | ✘       | ✘   | ✘   | ✔    | ✔    | ✘                          |
| DataDouble                        | ✔   | ✔   | ✔   | ✔   | ✔   | ✘       | ✘   | ✘   | ✔    | ✔    | ✔                          |
| DataFloat                         | ✔   | ✔   | ✔   | ✔   | ✔   | ✘       | ✘   | ✘   | ✔    | ✔    | ✔                          |
| DataInt                           | ✔   | ✔   | ✔   | ✔   | ✔   | ✔       | ✔   | ✔   | ✔    | ✔    | ✔                          |
| DataInt[]                         | ✔   | ✘   | ✘   | ✘   | ✘   | ✘       | ✘   | ✘   | ✔    | ✔    | ✘                          |
| DataList                          | ✔   | ✘   | ✘   | ✘   | ✘   | ✘       | ✘   | ✘   | ✔    | ✔    | ✘                          |
| DataLong                          | ✔   | ✔   | ✔   | ✔   | ✔   | ✔       | ✔   | ✔   | ✔    | ✔    | ✔                          |
| [DataMap](/Vanilla/Data/DataMap/) | ✔   | ✔   | ✘   | ✘   | ✘   | ✘       | ✘   | ✘   | ✔    | ✔    | ✘                          |
| DataShort                         | ✔   | ✔   | ✔   | ✔   | ✔   | ✔       | ✔   | ✔   | ✔    | ✔    | ✔                          |
| DataString                        | ✔   | ✘   | ✘   | ✘   | ✘   | ✘       | ✘   | ✘   | ✔    | ✔    | ✔                          |

| Unary Oparators                   | `-` negate | `!` not |
| --------------------------------- | ---------- | ------- |
| DataBool                          | ✘          | ✔       |
| DataByte                          | ✔          | ✔       |
| DataByte[]                        | ✘          | ✘       |
| DataDouble                        | ✔          | ✘       |
| DataFloat                         | ✔          | ✘       |
| DataInt                           | ✔          | ✔       |
| DataInt[]                         | ✘          | ✘       |
| DataList                          | ✘          | ✘       |
| DataLong                          | ✔          | ✔       |
| [DataMap](/Vanilla/Data/DataMap/) | ✘          | ✘       |
| DataShort                         | ✔          | ✔       |
| DataString                        | ✘          | ✘       |

| Index and Members                 | `[i]` | `[i]=v` | `.miembro` | `.member=v` | `.length`   | `.immutable` | `.update(v)` |
| --------------------------------- | ----- | ------- | ---------- | ----------- | ----------- | ------------ | ------------ |
| DataBool                          | ✘     | ✘       | ✘          | ✘           | returns `0` | ✔            | ✔            |
| DataByte                          | ✘     | ✘       | ✘          | ✘           | returns `0` | ✔            | ✔            |
| DataByte[]                        | ✔     | ✔       | ✘          | ✘           | ✔           | ✔            | ✔            |
| DataDouble                        | ✘     | ✘       | ✘          | ✘           | returns `0` | ✔            | ✔            |
| DataFloat                         | ✘     | ✘       | ✘          | ✘           | returns `0` | ✔            | ✔            |
| DataInt                           | ✘     | ✘       | ✘          | ✘           | returns `0` | ✔            | ✔            |
| DataInt[]                         | ✔     | ✔       | ✘          | ✘           | ✔           | ✔            | ✔            |
| DataList                          | ✔     | ✔       | ✘          | ✘           | ✔           | ✔            | ✔            |
| DataLong                          | ✘     | ✘       | ✘          | ✘           | returns `0` | ✔            | ✔            |
| [DataMap](/Vanilla/Data/DataMap/) | ✘     | ✘       | ✔          | ✔           | ✔           | ✔            | ✔            |
| DataShort                         | ✘     | ✘       | ✘          | ✘           | returns `0` | ✔            | ✔            |
| DataString                        | ✔     | ✘       | ✘          | ✘           | ✔           | ✔            | ✔            |

You can cast IData to a specific type using `data.asType()` → `data.asInt();`  
You can also use the IData Interface to convert types: `("1" as IData).asInt();`

| Casts from ↓ to →                 | pluma | byte | byte[] | doble | flotante | int | int[]  | list   | largo | [Mapa](/AdvancedFunctions/Associative_Arrays/) | corto | cadena |
| --------------------------------- | ----- | ---- | ------ | ----- | -------- | --- | ------ | ------ | ----- | ---------------------------------------------- | ----- | ------ |
| DataBool                          | `≡`   | ✔    | `nulo` | ✔     | ✔        | ✔   | `nulo` | `nulo` | ✔     | `nulo`                                         | ✔     | ✔      |
| DataByte                          | ✘     | `≡`  | `nulo` | ✔     | ✔        | ✔   | `nulo` | `nulo` | ✔     | `nulo`                                         | ✔     | ✔      |
| DataByte[]                        | ✘     | ✘    | `≡`    | ✘     | ✘        | ✘   | ✔      | ✔      | ✘     | `nulo`                                         | ✘     | ✔      |
| DataDouble                        | ✘     | ✔    | `nulo` | `≡`   | ✔        | ✔   | `nulo` | `nulo` | ✔     | `nulo`                                         | ✔     | ✔      |
| DataFloat                         | ✘     | ✔    | `nulo` | ✔     | `≡`      | ✔   | `nulo` | `nulo` | ✔     | `nulo`                                         | ✔     | ✔      |
| DataInt                           | ✘     | ✔    | `nulo` | ✔     | ✔        | `≡` | `nulo` | `nulo` | ✔     | `nulo`                                         | ✔     | ✔      |
| DataInt[]                         | ✘     | ✘    | ✔      | ✘     | ✘        | ✘   | `≡`    | ✔      | ✘     | `nulo`                                         | ✘     | ✔      |
| DataList                          | ✘     | ✘    | ✔      | ✘     | ✘        | ✘   | ✔      | `≡`    | ✘     | `nulo`                                         | ✘     | ✔      |
| DataLong                          | ✘     | ✔    | `nulo` | ✔     | ✔        | ✔   | `nulo` | `nulo` | `≡`   | `nulo`                                         | ✔     | ✔      |
| [DataMap](/Vanilla/Data/DataMap/) | ✘     | ✘    | `nulo` | ✘     | ✘        | ✘   | `nulo` | `nulo` | ✘     | `≡`                                            | ✘     | ✔      |
| DataShort                         | ✘     | ✔    | `nulo` | ✔     | ✔        | ✔   | `nulo` | `nulo` | ✔     | `nulo`                                         | `≡`   | ✔      |
| DataString                        | ✘     | ✔    | `nulo` | ✔     | ✔        | ✔   | `nulo` | `nulo` | ✔     | `nulo`                                         | ✔     | `≡`    |