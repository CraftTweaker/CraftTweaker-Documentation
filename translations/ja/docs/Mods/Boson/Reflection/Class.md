# `Class`

A `Class` identifies a single instance of a type that is exposed to ZenScript. Almost everything in ZenScript is, in fact, an instance of a class, be it an `IItemStack` (which is an instance of that class) or an array of strings (which is an instance of `string[]`).

## Class details
The class is situated in the `zenscriptx.reflect` package, making `zenscriptx.reflect.Class` the fully qualified name for importing.

## Creating a new Instance
The only possible way to create a new `Class` instance is through one of the two static methods, which take either the name of the class or an object to inspect. The snippe that follows shows the signatures of the two methods that can be used:

```zenscript
function byName(name as string) as Class?;
function from(instance as any) as Class?;
```

Both methods are allowed to return `null` (as shown by the `?` at the end of the type) because there is the possibility for some classes not to have a ZenScript equivalent or are literally unable to be represented as instances of `Class`.

The following are some examples of usage of the two factory methods:

```zenscript
Class.byName("crafttweaker.item.IItemStack"); # returns a Class that represents IItemStack
Class.from(<blockstate:minecraft:pumpkin>); # returns a Class that represents IBlockState
Class.byName("123"); # returns null because no class with that name exists (or can exist, for that matter)
```

## Properties
A `Class` provides read-only access to a certain set of properties, as outlined in the following table:

| Property Name   | Type     | Description                                                                                                                          |
| --------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `simpleName`    | `string` | "Shortest" name that can be used to refer to the class (i.e. `IItemStack` for `crafttweaker.item.IItemStack`, `string` for `string`) |
| `qualifiedName` | `string` | Full name that uniquely identifies this class in the ZenScript environment (i.e. `crafttweaker.item.IItemStack` or `string`)         |

## Methods
`Class` also provides access to a single method that allows conversion to the "native" equivalent (refer to [`NativeClass`](/Mods/Boson/Reflection/NativeClass/) for more information). The signature of the method is as follows:

```zenscript
function toNativeClass() as NativeClass?;
```

The method may return `null` because not all ZenScript types may have a native equivalent, e.g. certain associative arrays may not be perfectly represented in a native environment, requiring some mangling.
