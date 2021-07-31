# NOT Operator

A **NOT** gate switches the state of the input. So if the input is `TRUE` then the output will be `FALSE` and vice versa.

|Input|Output|
|-----|-----:|
| 0 | 1 |
| 1 | 0 |

The simplest logic requirement that Reskillable supports is the ability to invert a requirement. It does this using a NOT gate and the syntax for it is not|requirement. As described above in the section about Logic Gates, this logic requirement will only be marked as met if the specified requirement is not met.