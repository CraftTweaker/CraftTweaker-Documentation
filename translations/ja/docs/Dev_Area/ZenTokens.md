# ZenTokens

これらはリストされている内部トークンだけなので、私は開発者が指すべき場所をどこかにリストすることができます...

| トークンの値    | TokenName           | トークン文字列                                                     |
| --------- | ------------------- | ----------------------------------------------------------- |
| 1         | T_ID                | `[a-zA-Z_][a-zA-Z_0-9]*`                                    |
| 2         | INTVALUE            | `\-?(0|[1-9][0-9]*)`                                       |
| 2         | INTVALUE            | `0x[a-fA-F0-9]*)`                                           |
| 3         | FLOATVALUE          | `\-?(0|[1-9][0-9]*)\.[0-9]+([eE][\+\-]?[0-9]+)?[fFdD]?` |
| 4         | 文字列                 | `'([^'\\]|\\(['"\\/bfnrt]|u[0-9a-fA-F]{4}))*'`        |
| 4         | 文字列                 | `"([^"\\]|\\(['"\\/bfnrt]|u[0-9a-fA-F]{4}))*"`        |
| 5         | T_AOPEN             | `{`                                                         |
| 6         | ACLOSE(_A)          | `}`                                                         |
| 7         | SQBROPEN(_S)        | `[`                                                         |
| 8         | SQBRCLOSE           | `]`                                                         |
| 9         | DOT2                | `..`                                                        |
| 10        | ドット(_D)             | `。`                                                         |
| 11        | T_COMMA             | `,`                                                         |
| 12        | T_PLUSASSIGN        | `+=`                                                        |
| 13        | プラス(&P)             | `+`                                                         |
| 14        | T_MINUSASSIGN       | `-=`                                                        |
| 15        | T_MINUS             | `-`                                                         |
| 16        | MULASSIGN           | `*=`                                                        |
| 17        | T_MUL               | `*`                                                         |
| 18        | T_DIVASSIGN         | `/=`                                                        |
| 19        | T_DIV               | `/`                                                         |
| 20        | T_MODASSIGN         | `%=`                                                        |
| 21        | T_MOD               | `%`                                                         |
| 22        | ORASSIGN            | `|=`                                                        |
| 23        | または                 | `|`                                                         |
| 40        | OR2                 | `||`                                                        |
| 24        | T_ANDASSIGN         | `&=`                                                    |
| 41        | AND2                | `&&`                                                |
| 25        | AND                 | `&`                                                     |
| 26        | T_XORASSIGN         | `^=`                                                        |
| 27        | T_XOR               | `^`                                                         |
| 28        | クエスト(_Q)            | `?`                                                         |
| 29        | COLON               | `:`                                                         |
| 30        | BROWEN(_B)          | `(`                                                         |
| 31        | BRCLOSE(_B)         | `)`                                                         |
| 45        | T_TILDEASSIGN       | `~=`                                                        |
| 32        | TILDE               | `~`                                                         |
| 33        | T_SEMICOLON         | `;`                                                         |
| 34        | LTEQ                | `<=`                                                     |
| 35        | T_LT                | `<`                                                      |
| 36        | GTEQ                | `>=`                                                     |
| 37        | T_GT                | `>`                                                      |
| 38        | EQ (&E)             | `==`                                                        |
| 39        | アサイン(_A)            | `=`                                                         |
| 42        | ノート                 | `!=`                                                        |
| 43        | NOT                 | `!`                                                         |
| 44        | DOLLAR              | `$`                                                         |
| 99        | すべての _A             | `任意の`                                                       |
| 100       | BOOL                | `bool`                                                      |
| 101       | バイト(_B)             | `バイト`                                                       |
| 102       | Short               | `短い`                                                        |
| 103       | T_INT               | `int`                                                       |
| 104       | 長さ                  | `long`                                                      |
| 105       | FLOAT               | `float型`                                                    |
| 106       | double              | `double`                                                    |
| 107       | 文字列                 | `文字列`                                                       |
| 108       | 関数                  | `関数`                                                        |
| 109       | インチ                 | `in`                                                        |
| 109       | インチ                 | `has`                                                       |
| 110       | VOID (_V)           | `無効です`                                                      |
| 120       | そのまま(_A)            | `として`                                                       |
| 121       | バージョン               | `バージョン`                                                     |
| 122       | IF(_IF)             | `もし`                                                        |
| 123       | ELSE                | `else`                                                      |
| 124       | FOR                 | `対象:`                                                       |
| 125       | リターン(_R)            | `return`                                                    |
| 126       | VAR                 | `var`                                                       |
| 127       | T_VAL               | `val`                                                       |
| 127       | ウィイル (_W)           | `中に`                                                        |
| 127       | BREAK(_B)           | `break`                                                     |
| 140       | NULL (&N)           | `null`                                                      |
| 141       | 本当(_TRUE)           | `true`                                                      |
| 142       | FALSE               | `false`                                                     |
| 160       | インポート               | `インポート`                                                     |
| 666       | グローバル(&G)           | `グローバル`                                                     |
| 667       | STATIC              | `static`                                                    |
| 668       | INSTANCEOF          | `instanceof`                                                |
| 123456789 | T_ZEN_CLASS       | `zenClass`                                                  |
| 123456789 | T_ZEN_CLASS       | `フリギンクラス`                                                   |
| 987654321 | T_ZEN_CONSTRUCTOR | `zenConstructor`                                            |
| 987654321 | T_ZEN_CONSTRUCTOR | `friginConstructor`                                         |