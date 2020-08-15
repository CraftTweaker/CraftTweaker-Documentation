# ZenTokeny

To są wewnętrzne tokeny tylko wymienione na liście, więc mam miejsce do ich wypisania gdzieś dla deweloperów do wskazania...

| Wartość tokenu | TokenName            | Token String                                                |
| -------------- | -------------------- | ----------------------------------------------------------- |
| 1              | T_ID                 | `[a-zA-Z_][a-zA-Z_0-9]*`                                    |
| 2              | Inwazyjne            | `\-?(0|[1-9][0-9]*)`                                       |
| 2              | Inwazyjne            | `0x[a-fA-F0-9]*)`                                           |
| 3              | Łuskowa              | `\-?(0|[1-9][0-9]*)\.[0-9]+([eE][\+\-]?[0-9]+)?[fFdD]?` |
| 4              | Struktura            | `'([^'\\]|\\(['"\\/bfnrt]|u[0-9a-fA-F]{4}))*'`        |
| 4              | Struktura            | `"([^"\\]|\\(['"\\/bfnrt]|u[0-9a-fA-F]{4}))*"`        |
| 5              | T_AOPEN              | `{`                                                         |
| 6              | Przełącznik          | `}`                                                         |
| 7              | SQBROPEN             | `[`                                                         |
| 8              | Zamknij SQBRINS      | `]`                                                         |
| 9              | Podwojenie           | `..`                                                        |
| 10             | DO_DES_DESCRIPTION | `.`                                                         |
| 11             | T_COMMA              | `,`                                                         |
| 12             | T_PLUSASSIGN         | `+=`                                                        |
| 13             | Przezroczyste        | `+`                                                         |
| 14             | T_MINUSASSIGN        | `-=`                                                        |
| 15             | T_MINUS              | `-`                                                         |
| 16             | Wieloetapowe         | `*=`                                                        |
| 17             | T_MUL                | `*`                                                         |
| 18             | T_DIVASSIGN          | `/=`                                                        |
| 19             | T_DIV                | `/`                                                         |
| 20             | T_MODASSIGN          | `%=`                                                        |
| 21             | T_MOD                | `%`                                                         |
| 22             | Rozdzielczość        | `|=`                                                        |
| 23             | lub                  | `|`                                                         |
| 40             | Lub                  | `||`                                                        |
| 24             | T_ANDASSIGN          | `&=`                                                    |
| 41             | i 2                  | `&&`                                                |
| 25             | T_I                  | `&`                                                     |
| 26             | T_XORASSIGN          | `^=`                                                        |
| 27             | T_XOR                | `^`                                                         |
| 28             | Wyrażenie            | `?`                                                         |
| 29             | Kolor                | `:`                                                         |
| 30             | Wirtualny            | `(`                                                         |
| 31             | Zamknij              | `)`                                                         |
| 45             | T_TILDEASSIGN        | `~=`                                                        |
| 32             | Obiekt               | `~`                                                         |
| 33             | T_SEMICOLON          | `;`                                                         |
| 34             | LTEQ                 | `<=`                                                     |
| 35             | T_LT                 | `<`                                                      |
| 36             | GTEQ                 | `>=`                                                     |
| 37             | GT                   | `>`                                                      |
| 38             | T:                   | `==`                                                        |
| 39             | Przypisanie          | `=`                                                         |
| 42             | Notatka              | `!=`                                                        |
| 43             | Nie                  | `!`                                                         |
| 44             | DOLAR                | `$`                                                         |
| 99             | Tyle                 | `dowolny`                                                   |
| 100            | Obiekt               | `bool`                                                      |
| 101            | BYTE                 | `bajt`                                                      |
| 102            | Kreator              | `krótki`                                                    |
| 103            | WT                   | `odcień`                                                    |
| 104            | DŁUGOŚĆ              | `długie`                                                    |
| 105            | FLOAT                | `zmiennoprzecinkowe`                                        |
| 106            | Dwustronne           | `podwójne`                                                  |
| 107            | Trójkąt              | `ciąg znaków`                                               |
| 108            | FUNKCJA              | `funkcja`                                                   |
| 109            | W:                   | `w`                                                         |
| 109            | W:                   | `ma`                                                        |
| 110            | VOID                 | `unieważnij`                                                |
| 120            | T_AS                 | `jako`                                                      |
| 121            | Wersja               | `wersja`                                                    |
| 122            | T_IF                 | `jeśli`                                                     |
| 123            | Element              | `w przeciwnym razie`                                        |
| 124            | Przełącz na          | `dla`                                                       |
| 125            | Odwróć               | `Powrót`                                                    |
| 126            | VAR                  | `var`                                                       |
| 127            | T_VAL                | `val`                                                       |
| 127            | Krzywe               | `podczas`                                                   |
| 127            | Skopiuj              | `przerwaj`                                                  |
| 140            | NULL                 | `null`                                                      |
| 141            | Ścianka              | `prawda`                                                    |
| 142            | Fałsz                | `fałszywy`                                                  |
| 160            | Importuj             | `importuj`                                                  |
| 666            | GLOBAL_LABEL         | `globalny`                                                  |
| 667            | Stan                 | `statyczne`                                                 |
| 668            | INSTANCJA            | `instancja`                                                 |
| 123456789      | T_ZEN_CLASS        | `zenClass`                                                  |
| 123456789      | T_ZEN_CLASS        | `frigginKlasa`                                              |
| 987654321      | T_ZEN_CONSTRUCTOR  | `zenConstructor`                                            |
| 987654321      | T_ZEN_CONSTRUCTOR  | `Konstruktor friggin`                                       |