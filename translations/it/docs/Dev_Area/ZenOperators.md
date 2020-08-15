# ZenOperators

[`@ZenOperator`](/Dev_Area/ZenAnnotations/Annotation_ZenOperator/) Annotation

| ZenOperator  | Token Associato                         | TokenAssign / Token Alternativo/Informazioni Aggiuntive            |
| ------------ | --------------------------------------- | ------------------------------------------------------------------ |
| AGGIUNGI     | `+`                                     | `+=`                                                               |
| SUB          | `-`                                     | `-=`                                                               |
| MUL          | `*`                                     | `*=`                                                               |
| DIV          | `/`                                     | `/=`                                                               |
| MOD          | `%`                                     | `%=`                                                               |
| CAT          | `~`                                     | `~=`                                                               |
| O            | `|`                                     | `|=`                                                               |
| E            | `&`                                 | `&=`                                                           |
| XOR          | `^`                                     | `^=`                                                               |
| NEG          | `-`                                     |                                                                    |
| NON          | `!`                                     |                                                                    |
| INDEXSET     | `[i] = v`                               |                                                                    |
| INDEXGET     | `[i]`                                   |                                                                    |
| RANGE        | `i .. v`                                | `da i a v`                                                         |
| CONTENUTI    | `in`                                    | `ha`                                                               |
| CONFRONTO    | `==` `<` `>` `<=` `>=` `!=` | Metodo annotato dovrebbe restituire un int! (Come Integer.compare) |
| MEMBERGETTER | `.member`                               | Come [`@ZenMemberSetter`](/Dev_Area/ZenAnnotations/ZenMembers/)    |
| MEMBERSETTER | `.member = v`                           |                                                                    |
| EQUALI       | `=`                                     |                                                                    |