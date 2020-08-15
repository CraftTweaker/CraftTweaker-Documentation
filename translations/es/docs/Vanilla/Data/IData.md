# IData

La interfaz de IData es una interfaz genérica para manejar datos como NBT.  
Puedes lanzar sobre todos los primitivos (corto, doble, cadena, int, ...) así como ciertos arreglos para IData.  
Recuerda que mientras ofrecen características similares, IData y sus contrapartes NO son los mismos, razón por la cual serán referidos como DataTypes (e. . DataBool).

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar crafttweaker.data.IData;`

## Resumen

| Operadores binarios               | `+` | `-` | `*` | `/` | `%` | `&` | `|` | `^` | `en` | `==` | `<, >, <=, >=` |
| --------------------------------- | --- | --- | --- | --- | --- | ------- | --- | --- | ---- | ---- | -------------------------- |
| DataBool                          | ✘   | ✘   | ✘   | ✘   | ✘   | ✔       | ✔   | ✔   | ✔    | ✔    | ✘                          |
| DataByte                          | ✔   | ✔   | ✔   | ✔   | ✔   | ✔       | ✔   | ✔   | ✔    | ✔    | ✔                          |
| DataByte[]                        | ✘   | ✘   | ✘   | ✘   | ✘   | ✘       | ✘   | ✘   | ✔    | ✔    | ✘                          |
| DataDoble                         | ✔   | ✔   | ✔   | ✔   | ✔   | ✘       | ✘   | ✘   | ✔    | ✔    | ✔                          |
| Flota de datos                    | ✔   | ✔   | ✔   | ✔   | ✔   | ✘       | ✘   | ✘   | ✔    | ✔    | ✔                          |
| DatosInt                          | ✔   | ✔   | ✔   | ✔   | ✔   | ✔       | ✔   | ✔   | ✔    | ✔    | ✔                          |
| DataInt[]                         | ✔   | ✘   | ✘   | ✘   | ✘   | ✘       | ✘   | ✘   | ✔    | ✔    | ✘                          |
| DataList                          | ✔   | ✘   | ✘   | ✘   | ✘   | ✘       | ✘   | ✘   | ✔    | ✔    | ✘                          |
| DataLong                          | ✔   | ✔   | ✔   | ✔   | ✔   | ✔       | ✔   | ✔   | ✔    | ✔    | ✔                          |
| [DataMap](/Vanilla/Data/DataMap/) | ✔   | ✔   | ✘   | ✘   | ✘   | ✘       | ✘   | ✘   | ✔    | ✔    | ✘                          |
| DataShort                         | ✔   | ✔   | ✔   | ✔   | ✔   | ✔       | ✔   | ✔   | ✔    | ✔    | ✔                          |
| DataString                        | ✔   | ✘   | ✘   | ✘   | ✘   | ✘       | ✘   | ✘   | ✔    | ✔    | ✔                          |

| Oparadores Unarios                | `-` negar | `!` no |
| --------------------------------- | --------- | ------ |
| DataBool                          | ✘         | ✔      |
| DataByte                          | ✔         | ✔      |
| DataByte[]                        | ✘         | ✘      |
| DataDoble                         | ✔         | ✘      |
| Flota de datos                    | ✔         | ✘      |
| DatosInt                          | ✔         | ✔      |
| DataInt[]                         | ✘         | ✘      |
| DataList                          | ✘         | ✘      |
| DataLong                          | ✔         | ✔      |
| [DataMap](/Vanilla/Data/DataMap/) | ✘         | ✘      |
| DataShort                         | ✔         | ✔      |
| DataString                        | ✘         | ✘      |

| Índice y miembros                 | `[i]` | `[i]=v` | `.miembro` | `.miembro=v` | `.largo`     | `.inmutable` | `.update(v)` |
| --------------------------------- | ----- | ------- | ---------- | ------------ | ------------ | ------------ | ------------ |
| DataBool                          | ✘     | ✘       | ✘          | ✘            | devuelve `0` | ✔            | ✔            |
| DataByte                          | ✘     | ✘       | ✘          | ✘            | devuelve `0` | ✔            | ✔            |
| DataByte[]                        | ✔     | ✔       | ✘          | ✘            | ✔            | ✔            | ✔            |
| DataDoble                         | ✘     | ✘       | ✘          | ✘            | devuelve `0` | ✔            | ✔            |
| Flota de datos                    | ✘     | ✘       | ✘          | ✘            | devuelve `0` | ✔            | ✔            |
| DatosInt                          | ✘     | ✘       | ✘          | ✘            | devuelve `0` | ✔            | ✔            |
| DataInt[]                         | ✔     | ✔       | ✘          | ✘            | ✔            | ✔            | ✔            |
| DataList                          | ✔     | ✔       | ✘          | ✘            | ✔            | ✔            | ✔            |
| DataLong                          | ✘     | ✘       | ✘          | ✘            | devuelve `0` | ✔            | ✔            |
| [DataMap](/Vanilla/Data/DataMap/) | ✘     | ✘       | ✔          | ✔            | ✔            | ✔            | ✔            |
| DataShort                         | ✘     | ✘       | ✘          | ✘            | devuelve `0` | ✔            | ✔            |
| DataString                        | ✔     | ✘       | ✘          | ✘            | ✔            | ✔            | ✔            |

Puede enviar IData a un tipo específico usando `data.asType()` → `datos. sInt();`  
También puede utilizar la interfaz IData para convertir tipos: `("1" como IData).asInt();`

| Casts de →                        | pluma | byte | byte[] | doble | flotante | int | int[]  | lista  | largo | [Mapa](/AdvancedFunctions/Associative_Arrays/) | corto | cadena |
| --------------------------------- | ----- | ---- | ------ | ----- | -------- | --- | ------ | ------ | ----- | ---------------------------------------------- | ----- | ------ |
| DataBool                          | `≡`   | ✔    | `nulo` | ✔     | ✔        | ✔   | `nulo` | `nulo` | ✔     | `nulo`                                         | ✔     | ✔      |
| DataByte                          | ✘     | `≡`  | `nulo` | ✔     | ✔        | ✔   | `nulo` | `nulo` | ✔     | `nulo`                                         | ✔     | ✔      |
| DataByte[]                        | ✘     | ✘    | `≡`    | ✘     | ✘        | ✘   | ✔      | ✔      | ✘     | `nulo`                                         | ✘     | ✔      |
| DataDoble                         | ✘     | ✔    | `nulo` | `≡`   | ✔        | ✔   | `nulo` | `nulo` | ✔     | `nulo`                                         | ✔     | ✔      |
| Flota de datos                    | ✘     | ✔    | `nulo` | ✔     | `≡`      | ✔   | `nulo` | `nulo` | ✔     | `nulo`                                         | ✔     | ✔      |
| DatosInt                          | ✘     | ✔    | `nulo` | ✔     | ✔        | `≡` | `nulo` | `nulo` | ✔     | `nulo`                                         | ✔     | ✔      |
| DataInt[]                         | ✘     | ✘    | ✔      | ✘     | ✘        | ✘   | `≡`    | ✔      | ✘     | `nulo`                                         | ✘     | ✔      |
| DataList                          | ✘     | ✘    | ✔      | ✘     | ✘        | ✘   | ✔      | `≡`    | ✘     | `nulo`                                         | ✘     | ✔      |
| DataLong                          | ✘     | ✔    | `nulo` | ✔     | ✔        | ✔   | `nulo` | `nulo` | `≡`   | `nulo`                                         | ✔     | ✔      |
| [DataMap](/Vanilla/Data/DataMap/) | ✘     | ✘    | `nulo` | ✘     | ✘        | ✘   | `nulo` | `nulo` | ✘     | `≡`                                            | ✘     | ✔      |
| DataShort                         | ✘     | ✔    | `nulo` | ✔     | ✔        | ✔   | `nulo` | `nulo` | ✔     | `nulo`                                         | `≡`   | ✔      |
| DataString                        | ✘     | ✔    | `nulo` | ✔     | ✔        | ✔   | `nulo` | `nulo` | ✔     | `nulo`                                         | ✔     | `≡`    |