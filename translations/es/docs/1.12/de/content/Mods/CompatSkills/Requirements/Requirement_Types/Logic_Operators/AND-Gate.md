# AND Operator

An **AND** gate combines two inputs and returns `TRUE` only if both inputs are also `TRUE`.

| Input 1 | Input 2 | Output |
| ------- | ------- | ------:|
| 0       | 0       |      0 |
| 0       | 1       |      0 |
| 1       | 0       |      0 |
| 1       | 1       |      1 |

The AND requirement unlike the other logic requirements is mainly useful for nested logic requirements, as locking an item or other object with multiple requirements requires all of the given requirements to be met. This is the same as the AND functionality, so should be used when possible, as it will make the tooltip be formatted in an easier to read manner.

    Empty Example:
    AND|[]~[]