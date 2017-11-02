# IData

The IData interface is a generic Interface for handling Data like NBT.

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops)), so better be safe than sorry and add the import.  
`import crafttweaker.data.IData;`

## Overview

| Binary Operators | `+` | `-` | `*` | `/` | `%` | `&` | `|` | `^` | `in` | `==` | `<, >, <=, >=` |
|------------------|-----|-----|-----|-----|-----|-----|-----|-----|------|------|----------------|
| bool             | ✘  | ✘  | ✘   | ✘  | ✘  | ✔   | ✔  | ✔  | ✔    | ✔   | ✘             |
| byte             | ✔  | ✔  | ✔   | ✔  | ✔  | ✔   | ✔  | ✔  | ✔    | ✔   | ✔             |
| byte[]           | ✘  | ✘  | ✘   | ✘  | ✘  | ✘   | ✘  | ✘  | ✔    | ✔   | ✘             |
| double           | ✔  | ✔  | ✔   | ✔  | ✔  | ✘   | ✘  | ✘  | ✔    | ✔   | ✔             |
| float            | ✔  | ✔  | ✔   | ✔  | ✔  | ✘   | ✘  | ✘  | ✔    | ✔   | ✔             |
| int              | ✔  | ✔  | ✔   | ✔  | ✔  | ✔   | ✔  | ✔  | ✔    | ✔   | ✔             |
| int[]            | ✔  | ✘  | ✘   | ✘  | ✘  | ✘   | ✘  | ✘  | ✔    | ✔   | ✘             |
| list             | ✔  | ✘  | ✘   | ✘  | ✘  | ✘   | ✘  | ✘  | ✔    | ✔   | ✘             |
| long             | ✔  | ✔  | ✔   | ✔  | ✔  | ✔   | ✔  | ✔  | ✔    | ✔   | ✔             |
| map              | ✔  | ✔  | ✘   | ✘  | ✘  | ✘   | ✘  | ✘  | ✔    | ✔   | ✘             |
| short            | ✔  | ✔  | ✔   | ✔  | ✔  | ✔   | ✔  | ✔  | ✔    | ✔   | ✔             |
| string           | ✔  | ✘  | ✘   | ✘  | ✘  | ✘   | ✘  | ✘  | ✔    | ✔   | ✔             |


| Unary Oparators | `-` negate | `!` not |
|-----------------|------------|---------|
| bool            | ✘          | ✔       |
| byte            | ✔          | ✔       |
| byte[]          | ✘          | ✘       |
| double          | ✔          | ✘       |
| float           | ✔          | ✘       |
| int             | ✔          | ✔       |
| int[]           | ✘          | ✘       |
| list            | ✘          | ✘       |
| long            | ✔          | ✔       |
| map             | ✘          | ✘       |
| short           | ✔          | ✔       |
| string          | ✘          | ✘       |


| Index and Members | `[i]` | `[i]=v`   | `.member` | `.member=v`   | `.length`   | `.immutable` | `.update(v)` |
|-------------------|-------|-----------|-----------|---------------|-------------|--------------|--------------|
| bool              | ✘    | ✘         | ✘        | ✘            | returns `0` | ✔            | ✔            |
| byte              | ✘    | ✘         | ✘        | ✘            | returns `0` | ✔            | ✔            |
| byte[]            | ✔    | ✔         | ✘        | ✘            | ✔           | ✔           | ✔            |
| double            | ✘    | ✘         | ✘        | ✘            | returns `0` | ✔            | ✔            |
| float             | ✘    | ✘         | ✘        | ✘            | returns `0` | ✔            | ✔            |
| int               | ✘    | ✘         | ✘        | ✘            | returns `0` | ✔            | ✔            |
| int[]             | ✔    | ✔         | ✘        | ✘            | ✔           | ✔           | ✔            |
| list              | ✔    | ✔         | ✘        | ✘            | ✔           | ✔           | ✔            |
| long              | ✘    | ✘         | ✘        | ✘            | returns `0` | ✔            | ✔            |
| map               | ✘    | ✘         | ✔        | ✔            | ✔           | ✔           | ✔            |
| short             | ✘    | ✘         | ✘        | ✘            | returns `0` | ✔            | ✔            |
| string            | ✔    | ✘         | ✘        | ✘            | ✔           | ✔           | ✔            |


You can cast IData to a specific type using `data.asType()` → `data.asInt();`  
You can also use the IData Interface to convert types: `("1" as IData).asInt();`

| Casts from ↓ to → | bool | byte | byte[] | double | float | int | int[]  | list   | long | map    | short | string |
|-------------------|------|------|--------|--------|-------|-----|--------|--------|------|--------|-------|--------|
| bool              | `≡`  | ✔    | `null` | ✔      | ✔     | ✔   | `null` | `null` | ✔    | `null` | ✔     | ✔      |
| byte              | ✘    | `≡`  | `null` | ✔      | ✔     | ✔   | `null` | `null` | ✔    | `null` | ✔     | ✔      |
| byte[]            | ✘    | ✘    | `≡`    | ✘      | ✘     | ✘   | ✔      | ✔      | ✘    | `null` | ✘     | ✔      |
| double            | ✘    | ✔    | `null` | `≡`    | ✔     | ✔   | `null` | `null` | ✔    | `null` | ✔     | ✔      |
| float             | ✘    | ✔    | `null` | ✔      | `≡`   | ✔   | `null` | `null` | ✔    | `null` | ✔     | ✔      |
| int               | ✘    | ✔    | `null` | ✔      | ✔     | `≡` | `null` | `null` | ✔    | `null` | ✔     | ✔      |
| int[]             | ✘    | ✘    | ✔      | ✘      | ✘     | ✘   | `≡`    | ✔      | ✘    | `null` | ✘     | ✔      |
| list              | ✘    | ✘    | ✔      | ✘      | ✘     | ✘   | ✔      | `≡`    | ✘    | `null` | ✘     | ✔      |
| long              | ✘    | ✔    | `null` | ✔      | ✔     | ✔   | `null` | `null` | `≡`  | `null` | ✔     | ✔      |
| map               | ✘    | ✘    | `null` | ✘      | ✘     | ✘   | `null` | `null` | ✘    | `≡`    | ✘     | ✔      |
| short             | ✘    | ✔    | `null` | ✔      | ✔     | ✔   | `null` | `null` | ✔    | `null` | `≡`   | ✔      |
| string            | ✘    | ✔    | `null` | ✔      | ✔     | ✔   | `null` | `null` | ✔    | `null` | ✔     | `≡`    |