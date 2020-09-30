# Names in Boson

In Minecraft, most objects are identified by unique names. E.g., items use their registry name to be uniquely identified and there can't exist more than one item with the same registry name.

Most names in Minecraft follow a rigid structure, identified by a string with a namespace and a path separated by a colon (e.g. `minecraft:iron_ingot`, where `minecraft` is the namespace and `iron_ingot` is the path). In CraftTweaker, most of these names are represented as raw strings, but within Boson this is frowned upon. In fact, the usage of a raw `string` may confuse people on whether a method call expects a string with a namespace or without. For this reason, Boson separated the usage of non-namespaced strings and namespaced ones.

Non-namespaced strings are represented as instances of `string`, among all the Boson APIs. For more information, refer to the ZenScript documentation.

Namespaced strings are represented as instances of `NameSpacedString`, among all the Boson APIs. For more information on how to obtain such strings, refer to the next section.

## `NameSpacedString` Documentation
The `NameSpacedString` class resides in the `net.thesilkminer.mc.boson.zen.naming` package.

### Creating a new instance
There are two ways of creating a `NameSpacedString`: using the factory method or casting a `string`.

The factory method is the suggested approach. Due to it being a static method, it can be invoked directly on the class instance. The following is the method signature and an example of its usage:

```zenscript
function from(nameSpace as string?, path as string) as NameSpacedString;
```

```zenscript
NameSpacedString.from("minecraft", "iron_ingot"); // equivalent to minecraft:iron_ingot
NameSpacedString.from(null, "iron_ingot"); // uses default namespace 'minecraft'
```

The casting way relies instead on an explicit cast from a `string` to a `NameSpacedString` using the `as` operator in ZenScript:

```zenscript
"minecraft:iron_ingot" as NameSpacedString;
```

### Properties
A `NameSpacedString` provides read-only access to both its namespace and its path via properties:

| Property Name | Type     | Description                                                             |
| ------------- | -------- | ----------------------------------------------------------------------- |
| `nameSpace`   | `string` | Gets the namespace portion of the `NameSpacedString` (e.g. `minecraft`) |
| `path`        | `string` | Gets the path portion of the `NameSpacedString` (e.g. `iron_ingot`)     |

### Methods

#### `asString`
A `NameSpacedString` can be converted back into a regular `string` by using the `asString` method. The following is the method signature and an example of its usage:

```zenscript
function asString() as string;
```

```zenscript
val nss = NameSpacedString("minecraft", "iron_ingot");
println(nss.asString()); // Prints 'minecraft:iron_ingot' to the log
```
