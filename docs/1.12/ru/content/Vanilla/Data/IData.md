# IData

Интерфейс IData &mdash; обобщающий интерфейс для обработки данных вроде NBT.  
Вы можете приводить его ко всем примитивам (short, double, string, int, ...) так же, как и определенные массивы к IData.  
Помните, что даже если они предлагают аналогичные функции, IData и его составляющие &mdash; не одно и то же, и поэтому они будут обозначаться как Data<тип> (например, DataBool).

## Импорт пакета

Может потребоваться импортировать пакет, если вы обнаруживаете какие-либо проблемы (вроде приведения типа [массива](/AdvancedFunctions/Arrays_and_Loops/)), поэтому в качестве меры предосторожности лучше добавить импорт:  
`import crafttweaker.data.IData;`

## Обзор

| Двоичные операторы                | `+` | `-` | `*` | `/` | `%` | `&` | `&#124;` | `^` | `in` | `==` | `<, >, <=, >=` |
| --------------------------------- | --- | --- | --- | --- | --- | ------- | -------- | --- | ---- | ---- | -------------------------- |
| DataBool                          | ✘   | ✘   | ✘   | ✘   | ✘   | ✔       | ✔        | ✔   | ✔    | ✔    | ✘                          |
| DataByte                          | ✔   | ✔   | ✔   | ✔   | ✔   | ✔       | ✔        | ✔   | ✔    | ✔    | ✔                          |
| DataByte[]                        | ✘   | ✘   | ✘   | ✘   | ✘   | ✘       | ✘        | ✘   | ✔    | ✔    | ✘                          |
| DataDouble                        | ✔   | ✔   | ✔   | ✔   | ✔   | ✘       | ✘        | ✘   | ✔    | ✔    | ✔                          |
| DataFloat                         | ✔   | ✔   | ✔   | ✔   | ✔   | ✘       | ✘        | ✘   | ✔    | ✔    | ✔                          |
| DataInt                           | ✔   | ✔   | ✔   | ✔   | ✔   | ✔       | ✔        | ✔   | ✔    | ✔    | ✔                          |
| DataInt[]                         | ✔   | ✘   | ✘   | ✘   | ✘   | ✘       | ✘        | ✘   | ✔    | ✔    | ✘                          |
| DataList                          | ✔   | ✘   | ✘   | ✘   | ✘   | ✘       | ✘        | ✘   | ✔    | ✔    | ✘                          |
| DataLong                          | ✔   | ✔   | ✔   | ✔   | ✔   | ✔       | ✔        | ✔   | ✔    | ✔    | ✔                          |
| [DataMap](/Vanilla/Data/DataMap/) | ✔   | ✔   | ✘   | ✘   | ✘   | ✘       | ✘        | ✘   | ✔    | ✔    | ✘                          |
| DataShort                         | ✔   | ✔   | ✔   | ✔   | ✔   | ✔       | ✔        | ✔   | ✔    | ✔    | ✔                          |
| DataString                        | ✔   | ✘   | ✘   | ✘   | ✘   | ✘       | ✘        | ✘   | ✔    | ✔    | ✔                          |

| Одиночные операторы               | `-` negate | `!` not |
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

| Index and Members                 | `[i]` | `[i]=v` | `.member` | `.member=v` | `.length`   | `.immutable` | `.update(v)` |
| --------------------------------- | ----- | ------- | --------- | ----------- | ----------- | ------------ | ------------ |
| DataBool                          | ✘     | ✘       | ✘         | ✘           | returns `0` | ✔            | ✔            |
| DataByte                          | ✘     | ✘       | ✘         | ✘           | returns `0` | ✔            | ✔            |
| DataByte[]                        | ✔     | ✔       | ✘         | ✘           | ✔           | ✔            | ✔            |
| DataDouble                        | ✘     | ✘       | ✘         | ✘           | returns `0` | ✔            | ✔            |
| DataFloat                         | ✘     | ✘       | ✘         | ✘           | returns `0` | ✔            | ✔            |
| DataInt                           | ✘     | ✘       | ✘         | ✘           | returns `0` | ✔            | ✔            |
| DataInt[]                         | ✔     | ✔       | ✘         | ✘           | ✔           | ✔            | ✔            |
| DataList                          | ✔     | ✔       | ✘         | ✘           | ✔           | ✔            | ✔            |
| DataLong                          | ✘     | ✘       | ✘         | ✘           | returns `0` | ✔            | ✔            |
| [DataMap](/Vanilla/Data/DataMap/) | ✘     | ✘       | ✔         | ✔           | ✔           | ✔            | ✔            |
| DataShort                         | ✘     | ✘       | ✘         | ✘           | returns `0` | ✔            | ✔            |
| DataString                        | ✔     | ✘       | ✘         | ✘           | ✔           | ✔            | ✔            |

You can cast IData to a specific type using `data.asType()` → `data.asInt();`  
You can also use the IData Interface to convert types: `("1" as IData).asInt();`

| Casts from ↓ to →                 | bool | byte | byte[] | double | float | int | int[]  | list   | long | [Map](/AdvancedFunctions/Associative_Arrays/) | short | string |
| --------------------------------- | ---- | ---- | ------ | ------ | ----- | --- | ------ | ------ | ---- | --------------------------------------------- | ----- | ------ |
| DataBool                          | `≡`  | ✔    | `null` | ✔      | ✔     | ✔   | `null` | `null` | ✔    | `null`                                        | ✔     | ✔      |
| DataByte                          | ✔    | `≡`  | `null` | ✔      | ✔     | ✔   | `null` | `null` | ✔    | `null`                                        | ✔     | ✔      |
| DataByte[]                        | ✘    | ✘    | `≡`    | ✘      | ✘     | ✘   | ✔      | ✔      | ✘    | `null`                                        | ✘     | ✔      |
| DataDouble                        | ✔    | ✔    | `null` | `≡`    | ✔     | ✔   | `null` | `null` | ✔    | `null`                                        | ✔     | ✔      |
| DataFloat                         | ✔    | ✔    | `null` | ✔      | `≡`   | ✔   | `null` | `null` | ✔    | `null`                                        | ✔     | ✔      |
| DataInt                           | ✔    | ✔    | `null` | ✔      | ✔     | `≡` | `null` | `null` | ✔    | `null`                                        | ✔     | ✔      |
| DataInt[]                         | ✘    | ✘    | ✔      | ✘      | ✘     | ✘   | `≡`    | ✔      | ✘    | `null`                                        | ✘     | ✔      |
| DataList                          | ✘    | ✘    | ✔      | ✘      | ✘     | ✘   | ✔      | `≡`    | ✘    | `null`                                        | ✘     | ✔      |
| DataLong                          | ✔    | ✔    | `null` | ✔      | ✔     | ✔   | `null` | `null` | `≡`  | `null`                                        | ✔     | ✔      |
| [DataMap](/Vanilla/Data/DataMap/) | ✘    | ✘    | `null` | ✘      | ✘     | ✘   | `null` | `null` | ✘    | `≡`                                           | ✘     | ✔      |
| DataShort                         | ✔    | ✔    | `null` | ✔      | ✔     | ✔   | `null` | `null` | ✔    | `null`                                        | `≡`   | ✔      |
| DataString                        | ✘    | ✔    | `null` | ✔      | ✔     | ✔   | `null` | `null` | ✔    | `null`                                        | ✔     | `≡`    |