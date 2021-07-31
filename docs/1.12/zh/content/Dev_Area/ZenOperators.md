# ZenOperators

[`@ZenOperator`](/Dev_Area/ZenAnnotations/Annotation_ZenOperator/) 注解

| ZenOperator  | 相关符号                                    | 赋值符号/备用符号/额外信息                                                  |
| ------------ | --------------------------------------- | --------------------------------------------------------------- |
| ADD          | `+`                                     | `+=`                                                            |
| SUB          | `-`                                     | `-=`                                                            |
| MUL          | `*`                                     | `*=`                                                            |
| DIV          | `/`                                     | `/=`                                                            |
| MOD          | `%`                                     | `%=`                                                            |
| CAT          | `~`                                     | `~=`                                                            |
| OR           | `|`                                     | `|=`                                                            |
| AND          | `&`                                 | `&=`                                                        |
| XOR          | `^`                                     | `^=`                                                            |
| NEG          | `-`                                     |                                                                 |
| NOT          | `!`                                     |                                                                 |
| INDEXSET     | `[i] = v`                               |                                                                 |
| INDEXGET     | `[i]`                                   |                                                                 |
| RANGE        | `i .. v`                                | `i to v`                                                        |
| CONTAINS     | `in`                                    | `has`                                                           |
| COMPARE      | `==` `<` `>` `<=` `>=` `!=` | 被注解的方法应返回一个整数！ （与 Integer.compare 相同）                           |
| MEMBERGETTER | `.member`                               | 与 [`@ZenMemberSetter`](/Dev_Area/ZenAnnotations/ZenMembers/) 相同 |
| MEMBERSETTER | `.member = v`                           |                                                                 |
| EQUALS       | `=`                                     |                                                                 |