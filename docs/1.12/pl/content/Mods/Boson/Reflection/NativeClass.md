# `NativeClass`

A `NativeClass` identifies the instance of a class of the backend environment that is behind ZenScript. In the case of CraftTweaker, `NativeClass` therefore represents a Java class.

## Class details
The class is situated in the `zenscriptx.reflect` package, making `zenscriptx.reflect.NativeClass` the fully qualified name for importing.

## Creating a new Instance
The only possible way to create a new `NativeClass` instance is through one of the two static methods, which take either the name of the class or an object to inspect. The snippe that follows shows the signatures of the two methods that can be used:

```zenscript
function byName(name as string) as NativeClass?;
function fromZen(instance as any) as NativeClass?;
```

Both methods are allowed to return `null` (as shown by the `?` at the end of the type) because there is the possibility for some classes not to exist or not to have a backend counterpart. In fact, some particular associative arrays may be not representable in the backend and require some mangling to be used correctly.

The following are some examples of usage of the two factory methods:

```zenscript
NativeClass.byName("crafttweaker.api.item.IItemStack"); # returns the NativeClass with the given name
NativeClass.fromZen(<blockstate:minecraft:pumpkin>); # returns the NativeClass that matches the ZenScript IBlockState Class
NativeClass.byName("123"); # returns null because no native class with that name can exist
```

## Properties
A `NativeClass` provides read-only access to a certain set of properties, as outlined in the following table:

| Property Name   | Type     | Description                                                                                                                                        |
| --------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `simpleName`    | `string` | "Shortest" name that can be used to refer to the class (i.e. `IItemStack` for `crafttweaker.api.item.IItemStack`, `String` for `java.lang.String`) |
| `qualifiedName` | `string` | Full name that uniquely identifies this class in the backend environment (i.e. `crafttweaker.api.item.IItemStack` or `java.lang.String`)           |

## Methods
`NativeClass` also provides access to a single method that allows conversion to the ZenScript equivalent (refer to [`Class`](/Mods/Boson/Reflection/Class/) for more information). The signature of the method is as follows:

```zenscript
function toClass() as Class?;
```

The method may return `null` since not all native classes may have a representation in ZenScript. In fact, there are some parts of the backend that are not exposed to ZenScript users, such as `org.apache.commons.lang3.BitField`, which therefore cannot be represented via a ZenScript `Class` object.
