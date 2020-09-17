# Tokens

Estos son tokens internos sólo listados así que tengo un lugar para listarlos en algún lugar para que los desarrolladores apunten a...

| Valor del Token | TokenName           | Cadena de Token                                             |
| --------------- | ------------------- | ----------------------------------------------------------- |
| 1               | T_ID                | `[a-zA-Z_][a-zA-Z_0-9]*`                                    |
| 2               | Intensidad          | `\-?(0|[1-9][0-9]*)`                                       |
| 2               | Intensidad          | `0x[a-fA-F0-9]*)`                                           |
| 3               | FLOATVAL            | `\-?(0|[1-9][0-9]*)\.[0-9]+([eE][\+\-]?[0-9]+)?[fFdD]?` |
| 4               | Crear una ventana   | `'([^'\\]|\\(['"\\/bfnrt]|u[0-9a-fA-F]{4}))*'`        |
| 4               | Crear una ventana   | `"([^"\\]|\\(['"\\/bfnrt]|u[0-9a-fA-F]{4}))*"`        |
| 5               | T_AOPEN             | `{`                                                         |
| 6               | Acordar             | `}`                                                         |
| 7               | PLAYLISTA           | `[`                                                         |
| 8               | PLAYLIST_SHOP       | `]`                                                         |
| 9               | Punto 2             | `..`                                                        |
| 10              | DOT                 | `.`                                                         |
| 11              | Colma               | `,`                                                         |
| 12              | T_PLUSASSIGN        | `+=`                                                        |
| 13              | PLUS                | `+`                                                         |
| 14              | T_MINUSASSIGN       | `-=`                                                        |
| 15              | T_MINUS             | `-`                                                         |
| 16              | Multi-ASIGNO        | `*=`                                                        |
| 17              | T_MUL               | `*`                                                         |
| 18              | T_DIVASSIGN         | `/=`                                                        |
| 19              | T_DIV               | `/`                                                         |
| 20              | T_MODASSIGN         | `%=`                                                        |
| 21              | T_MOD               | `%`                                                         |
| 22              | Orágeno             | `|=`                                                        |
| 23              | O                   | `|`                                                         |
| 40              | Ór2                 | `||`                                                        |
| 24              | T_ANDASSIGN         | `&=`                                                    |
| 41              | Y Y 2               | `&&`                                                |
| 25              | T_Y                 | `&`                                                     |
| 26              | T_XORASSIGN         | `^=`                                                        |
| 27              | T_XOR               | `^`                                                         |
| 28              | Calidad             | `?`                                                         |
| 29              | Color               | `:`                                                         |
| 30              | BROPEN              | `(`                                                         |
| 31              | BRLOSE              | `)`                                                         |
| 45              | T_TILDEASSIGN       | `~=`                                                        |
| 32              | TILDE               | `~`                                                         |
| 33              | T_SEMICOLON         | `;`                                                         |
| 34              | I_IEQ               | `<=`                                                     |
| 35              | T_LT                | `<`                                                      |
| 36              | GTEQ                | `>=`                                                     |
| 37              | T_T                 | `>`                                                      |
| 38              | EQ                  | `==`                                                        |
| 39              | ASIGNO              | `=`                                                         |
| 42              | NOTEQ               | `!=`                                                        |
| 43              | _NO                 | `!`                                                         |
| 44              | DOLAR               | `$`                                                         |
| 99              | A_Ninguno           | `cualquiera`                                                |
| 100             | A                   | `pluma`                                                     |
| 101             | BYTE                | `byte`                                                      |
| 102             | Horno               | `corto`                                                     |
| 103             | Entrada             | `int`                                                       |
| 104             | LONG                | `largo`                                                     |
| 105             | FLOAT               | `flotante`                                                  |
| 106             | Doblar              | `doble`                                                     |
| 107             | Trazando            | `cadena`                                                    |
| 108             | FUNCIÓN             | `función`                                                   |
| 109             | T_IN                | `en`                                                        |
| 109             | T_IN                | `tiene`                                                     |
| 110             | VOID                | `vacío`                                                     |
| 120             | A                   | `como`                                                      |
| 121             | Versión             | `versión`                                                   |
| 122             | SI                  | `si`                                                        |
| 123             | Elemento            | `si no`                                                     |
| 124             | A                   | `para`                                                      |
| 125             | Retirar             | `volver`                                                    |
| 126             | VAR                 | `var`                                                       |
| 127             | T_VAL               | `val`                                                       |
| 127             | Y_WHILE             | `mientras`                                                  |
| 127             | Corriente           | `romper`                                                    |
| 140             | Número              | `nulo`                                                      |
| 141             | T_TRU               | `verdad`                                                    |
| 142             | Falta               | `falso`                                                     |
| 160             | IMPORT              | `importar`                                                  |
| 666             | GLOBAL              | `global`                                                    |
| 667             | STATIC              | `estático`                                                  |
| 668             | Intensidad de       | `instancia de`                                              |
| 123456789       | T_ZEN_CLASS       | `zenClass`                                                  |
| 123456789       | T_ZEN_CLASS       | `frigginclase`                                              |
| 987654321       | T_ZEN_CONSTRUCTOR | `zenConstructor`                                            |
| 987654321       | T_ZEN_CONSTRUCTOR | `frigginConstructor`                                        |