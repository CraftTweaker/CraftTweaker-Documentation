# ZenTokens

Ce sont des jetons internes seulement listés de sorte que j'ai un endroit pour les lister quelque part pour que les développeurs pointent vers...

| Valeur du jeton | TokenName                     | Chaîne de jeton                                             |
| --------------- | ----------------------------- | ----------------------------------------------------------- |
| 1               | T_ID                          | `[a-zA-Z_][a-zA-Z_0-9]*`                                    |
| 2               | INTVALUE                      | `\-?(0|[1-9][0-9]*)`                                       |
| 2               | INTVALUE                      | `x0[a-fA-F0-9]*)`                                           |
| 3               | FLOATVALUE                    | `\-?(0|[1-9][0-9]*)\.[0-9]+([eE][\+\-]?[0-9]+)?[fFdD]?` |
| 4               | format@@0 STRINGVALUE         | `'([^'\\]|\\(['"\\/bfnrt]|u[0-9a-fA-F]{4}))*'`        |
| 4               | format@@0 STRINGVALUE         | `"([^"\\]|\\(['"\\/bfnrt]|u[0-9a-fA-F]{4}))*"`        |
| 5               | T_AOPEN                       | `{`                                                         |
| 6               | ACCOURIR                      | `}`                                                         |
| 7               | Rouleau de coordonnées        | `[`                                                         |
| 8               | Fermer la mémoire             | `]`                                                         |
| 9               | DOT2                          | `..`                                                        |
| 10              | DOT                           | `.`                                                         |
| 11              | COMMA                         | `,`                                                         |
| 12              | T_PLUSASSIGN                  | `+=`                                                        |
| 13              | PLUS                          | `+`                                                         |
| 14              | T_MINUSASSIGN                 | `-=`                                                        |
| 15              | T_MINUS                       | `-`                                                         |
| 16              | MULASSIGN                     | `*=`                                                        |
| 17              | T_MUL                         | `*`                                                         |
| 18              | T_DIVASSIGN                   | `/=`                                                        |
| 19              | T_DIV                         | `/`                                                         |
| 20              | T_MODASSIGN                   | `%=`                                                        |
| 21              | T_MOD                         | `%`                                                         |
| 22              | Ordonnance                    | `|=`                                                        |
| 23              | Oui                           | `|`                                                         |
| 40              | Ou2                           | `||`                                                        |
| 24              | T_ANDASSIGN                   | `&=`                                                    |
| 41              | ET2                           | `&&`                                                |
| 25              | _ET                           | `&`                                                     |
| 26              | T_XORASSIGN                   | `^=`                                                        |
| 27              | T_XOR                         | `^`                                                         |
| 28              | QUÊTE                         | `?`                                                         |
| 29              | COLON                         | `:`                                                         |
| 30              | Retourner                     | `(`                                                         |
| 31              | Fermer                        | `)`                                                         |
| 45              | T_TILDEASSIGN                 | `~=`                                                        |
| 32              | number@@0 secondes            | `~`                                                         |
| 33              | T_SEMICOLON                   | `;`                                                         |
| 34              | LTEQ                          | `<=`                                                     |
| 35              | T_LT                          | `<`                                                      |
| 36              | GTEQ                          | `>=`                                                     |
| 37              | GT                            | `>`                                                      |
| 38              | EQ                            | `==`                                                        |
| 39              | S'inscrire                    | `=`                                                         |
| 42              | NOTEQ                         | `!=`                                                        |
| 43              | PAS                           | `!`                                                         |
| 44              | DOLLAR                        | `$`                                                         |
| 99              | TOUT                          | `n'importe quel`                                            |
| 100             | BOOL                          | `booléen`                                                   |
| 101             | A partir de                   | `octet`                                                     |
| 102             | SHORT                         | `court`                                                     |
| 103             | INT                           | `Indice`                                                    |
| 104             | LONGUE                        | `long`                                                      |
| 105             | FLOAT                         | `flottant`                                                  |
| 106             | DOUBLE                        | `double`                                                    |
| 107             | STRING                        | `chaîne de caractères`                                      |
| 108             | Fonction                      | `fonction`                                                  |
| 109             | Entrées                       | `dans`                                                      |
| 109             | Entrées                       | `a`                                                         |
| 110             | VOYER                         | `null`                                                      |
| 120             | En tant que                   | `en tant que`                                               |
| 121             | Version                       | `version`                                                   |
| 122             | Si                            | `si`                                                        |
| 123             | ELSE                          | `Sinon`                                                     |
| 124             | %1                            | `pour`                                                      |
| 125             | RETOURNER                     | `retour`                                                    |
| 126             | Variable                      | `Var`                                                       |
| 127             | T_VAL                         | `val`                                                       |
| 127             | Quel est le type de produit ? | `tant que`                                                  |
| 127             | format@@0 SREAK               | `pause`                                                     |
| 140             | NULL                          | `null`                                                      |
| 141             | VRAI                          | `vrai`                                                      |
| 142             | FALSE                         | `Faux`                                                      |
| 160             | Importer                      | `Importation`                                               |
| 666             | GLOBAL                        | `global`                                                    |
| 667             | STATIQUE                      | `statique`                                                  |
| 668             | INSTANCEOF                    | `Instance de`                                               |
| 123456789       | T_ZEN_CLASS                 | `zenClass`                                                  |
| 123456789       | T_ZEN_CLASS                 | `classe frigorifique`                                       |
| 987654321       | T_ZEN_CONSTRUCTOR           | `zenConstructor`                                            |
| 987654321       | T_ZEN_CONSTRUCTOR           | `constructeur friggorifique`                                |