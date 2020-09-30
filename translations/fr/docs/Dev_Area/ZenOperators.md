# ZenOperators

[`@ZenOperator`](/Dev_Area/ZenAnnotations/Annotation_ZenOperator/) Annotation

| ZenOperator  | Associated Token                        | TokenAssign / Alternate Token/Additional Info                      |
| ------------ | --------------------------------------- | ------------------------------------------------------------------ |
| ADD          | `+`                                     | `+=`                                                               |
| SUB          | `-`                                     | `-=`                                                               |
| MUL          | `*`                                     | `*=`                                                               |
| DIV          | `/`                                     | `/=`                                                               |
| MOD          | `%`                                     | `%=`                                                               |
| CAT          | `~`                                     | `~=`                                                               |
| OR           | `|`                                     | `|=`                                                               |
| AND          | `&`                                 | `&=`                                                           |
| XOR          | `^`                                     | `^=`                                                               |
| NEG          | `-`                                     |                                                                    |
| NOT          | `!`                                     |                                                                    |
| INDEXSET     | `[i] = v`                               |                                                                    |
| INDEXGET     | `[i]`                                   |                                                                    |
| RANGE        | `i .. v`                                | `i to v`                                                           |
| CONTAINS     | `in`                                    | `has`                                                              |
| COMPARE      | `==` `<` `>` `<=` `>=` `!=` | Annotated Method should return an int! (Same as Integer.compare)   |
| MEMBERGETTER | `.member`                               | Same as [`@ZenMemberSetter`](/Dev_Area/ZenAnnotations/ZenMembers/) |
| MEMBERSETTER | `.member = v`                           |                                                                    |
| EQUALS       | `=`                                     |                                                                    |