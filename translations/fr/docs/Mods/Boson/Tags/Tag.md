# `Tag`

A `Tag` is the object representation of what is stored inside an actual in-game Tag. You can only access this data from within the [`tags` loader](/Mods/Boson/Loaders/Tags/). For more information regarding tags and how to obtain them, refer to [this page](/Mods/Boson/Tags/Concept/).

## Class Details
The class is situated in the `net.thesilkminer.mc.boson.zen.tag` package, making `net.thesilkminer.mc.boson.zen.tag.Tag` its fully qualified name for importing.

## Creating a New Instance
Refer to [the bracket handler documentation](/Mods/Boson/Tags/BracketHandler/).

## Properties
A `Tag` provides read-only access to a certain set of properties, as outlined in the following table:

| Property Name | Type                                     | Description                                           |
| ------------- | ---------------------------------------- | ----------------------------------------------------- |
| `name`        | [`NameSpacedString`](/Mods/Boson/Names/) | Name that uniquely identifies this tag                |
| `type`        | [`TagType`](/Mods/Boson/Tags/TagType/)   | The type of this tag                                  |
| `elements`    | `[T]` (where `T` is a generic type)      | A read-only list of the elements currently in the tag |

## Methods

### Addition
Adding elements to a tag can be done via a triplet of methods, whose signatures are in the snippet that follows:

```zenscript
function add(elements... as NameSpacedString) as void;
function addAll(elements as any[]) as void;
function addFrom(other as Tag) as void;
```

`add` is a so-called "vararg method", meaning it can accept as many arguments as desired, provided they are all of the same type, i.e. `NameSpacedString`s. This allows you to specify the registry name of the element you want to add to the tag and the tag implementation itself will attempt to convert the given name to the actual object.

`addAll`, on the other hand, accepts an array of elements and attempts to add them all to the given tag. The array is marked as `any[]` due to a lack of generic support on this method input. Nevertheless attempting to add non-compatible elements to a tag (say, adding blocks to an item-only tag) will result in a no-op operation being carried out.

`addFrom` adds all the contents of a tag to the other via a Tag Reference, meaning that any modifications carried out to the second tag also happens to the first. Note that this operation succeeds only if the tag types match, otherwise a no-op operation will be carried out.

Following is a list of examples:

```zenscript
val tag = <tag-items:forge:ingots/iron>;

# add elements via registry name
tag.add("minecraft:iron_ingot" as NameSpacedString, "thermalfoundation:iron_ingot" as NameSpacedString);

# add elements via their actual instances
tag.addAll([<buildcraft:iron_ingot>] as IItemStack[]);

# add another tag via a tag reference
tag.addFrom(<tag-items:customtag:other_iron_ingots>);
```

### Replacement
Elements of a tag can be replaced fully, meaning that all the contents are first cleared, then the given elements are added to the tag contents. This is also accomplished via a triplet of methods, whose signatures are in the snippet that follows:

```zenscript
function replace(elements... as NameSpacedString) as void;
function replaceAll(elements as any[]) as void;
function replaceWith(other as Tag) as void;
```

`replace` is a so-called "vararg method", meaning it can accept as many arguments as desired, provided they are all of the same type, i.e. `NameSpacedString`s. This allows you to specify the registry name of the element you want to use to replace the tag's contents and the tag implementation itself will attempt to convert the given name to the actual object.

`replaceAll`, on the other hand, accepts an array of elements and attempts to replace the contents of the given tag with the array. The array is marked as `any[]` due to a lack of generic support on this method input. Nevertheless attempting to pass non-compatible elements to a tag (say, blocks to an item-only tag) will result in a no-op operation being carried out.

`replaceWith` replaces the contents of the given tag with a Tag Reference to the other, meaning that any modifications carried out to the second tag also happens to the first. Note that this operation succeeds only if the tag types match, otherwise a no-op operation will be carried out.

Following is a list of examples:

```zenscript
val tag = <tag-items:forge:ingots/iron>;

# replace elements via registry name
tag.replace("minecraft:iron_ingot" as NameSpacedString, "thermalfoundation:iron_ingot" as NameSpacedString);

# replace elements via their actual instances
tag.replaceAll([<buildcraft:iron_ingot>] as IItemStack[]);

# replace another tag via a tag reference
tag.replaceWith(<tag-items:customtag:other_iron_ingots>);
```

### Removal
Removing elements from a tag can be done via a triplet of methods, whose signatures are in the snippet that follows:

```zenscript
function remove(elements... as NameSpacedString) as void;
function removeAll(elements as any[]) as void;
function removeFrom(other as Tag) as void;
```

`remove` is a so-called "vararg method", meaning it can accept as many arguments as desired, provided they are all of the same type, i.e. `NameSpacedString`s. This allows you to specify the registry name of the element you want to remove from the tag and the tag implementation itself will attempt to convert the given name to the actual object.

`removeAll`, on the other hand, accepts an array of elements and attempts to remove them all from the given tag. The array is marked as `any[]` due to a lack of generic support on this method input. Nevertheless attempting to remove non-compatible elements from a tag (say, removing blocks from an item-only tag) will result in a no-op operation being carried out.

`removeFrom` removes the second tag from the list of Tag References of the first tag. This will consequently remove the items that the second tag carries from the list of the first ones, though the second tag won't have its contents cleared. Note that this operation succeeds only if the tag types match, otherwise a no-op operation will be carried out.

Following is a list of examples:

```zenscript
val tag = <tag-items:forge:ingots/iron>;

# remove elements via registry name
tag.remove("minecraft:iron_ingot" as NameSpacedString, "thermalfoundation:iron_ingot" as NameSpacedString);

# remove elements via their actual instances
tag.removeAll([<buildcraft:iron_ingot>] as IItemStack[]);

# remove a tag reference
tag.removeFrom(<tag-items:customtag:other_iron_ingots>);
```

### Clearing
You can also clear a tag's contents via a single method. This will remove all elements and all Tag References stored in the tag and is equivalent to replacing a tag with empty contents. This can be done via a method that has the following signature:

```zenscript
function clear() as void;
```

The following is an example:

```zenscript
<tag-items:forge:ingots>.clear();
```

## Additional Support
Tags also offer additional support for certain ZenScript features.

### Querying
By using the `has` syntax, it is possible to query whether a tag contains a certain object or not. A tag can in fact be viewed as a collection of elements:

```zenscript
val isContained = TAG has ELEMENT;
```

`TAG` represents the tag instance to query. `ELEMENT` represents the element instance that you may want to query to check whether it is contained in the tag or not.

Note that while tags support querying of anything (it is effectively accepting `any`), using an element that is not of the type that is stored in the tag has no effect and will simply short-circuit the evaluation to `false`.

### Iterating
Tags also support iteration via an iterative for loop, using a normal `for` loop. This way the necessity of querying the elements via a call to `elements` is eliminated, resulting in cleaner code.

Since tags are effectively a set, iteration order is not preserved and may differ between different runs of the iterator. For this reason, only single-element iterators are supported (i.e. you cannot also request an iteration index when iterating).

The syntax to use is the following:

```zenscript
for VARNAME in TAG {
}
```

`VARNAME` represents the name of the variable that will be updated at each loop. `TAG` is the tag instance to loop on.

## Operator Overloading
Tags also provide some overloading of normal ZenScript operators, so that certain operations can be done easily and with less characters. Each section hosts a table of certain operator overloads that are available, with the corresponding meaning. In all tables, `TAG` represents the target tag instance, whereas `ARGx` represents the *x*-th argument that should be supplied.

### Unary operators
Unary operators are operators that are applied to the tag itself and take no arguments.

| Operator | Syntax | Method equivalent | Notes |
| -------- | ------ | ----------------- | ----- |
| `-`      | `-TAG` | `clear`           | \-   |

### Binary operators
Binary operators are infix operators that are applied between the tag and one argument. The operators are listed here in order of priority (higher means that it will be applied first).

**IMPORTANT**: unless noted otherwise, all operators **mutate** the tag that is passed to the overload, meaning that they change their contents. Consider the following example:

```zenscript
val tag = <tag-items:forge:ingots>;
tag & [<minecraft:iron_ingot>] as IItemStack[];
```

At the end of this snippet, the contents of `tag` will have changed according to the operator rules. This does **not** create a new tag, nor it does return the original tag's value. The following snippet of code is in fact not valid:

```zenscript
val tag = <tag-items:forge:ingots>;
# NOT VALID: WILL CAUSE COMPILATION ERROR
tag = tag & [<minecraft:iron_ingot>] as IItemStack[];
```

| Operator | Argument Type                            | Syntax           | Method Equivalent | Notes                                                                 |
| -------- | ---------------------------------------- | ---------------- | ----------------- | --------------------------------------------------------------------- |
| `+`      | `Tag`                                    | `TAG + ARG1`     | `addFrom`         | \-                                                                   |
| `+`      | `any[]`                                  | `TAG + ARG1`     | `addAll`          | The array type must be the same as the tag's contents                 |
| `+`      | [`NameSpacedString`](/Mods/Boson/Names/) | `TAG + ARG1`     | `add`             | The overload only accepts one argument                                |
| `+`      | `any`                                    | `TAG + ARG1`     | `addAll`          | Shorthand for a single element: same rules as the array version apply |
| `~`      | `Tag`                                    | `TAG ~ ARG1`     | `addFrom`         | \-                                                                   |
| `~`      | `any[]`                                  | `TAG ~ ARG1`     | `addAll`          | The array type must be the same as the tag's contents                 |
| `~`      | [`NameSpacedString`](/Mods/Boson/Names/) | `TAG ~ ARG1`     | `add`             | The overload only accepts one argument                                |
| `~`      | `any`                                    | `TAG ~ ARG1`     | `addAll`          | Shorthand for a single element: same rules as the array version apply |
| `&`  | `Tag`                                    | `TAG & ARG1` | `addFrom`         | \-                                                                   |
| `&`  | `any[]`                                  | `TAG & ARG1` | `addAll`          | The array type must be the same as the tag's contents                 |
| `&`  | [`NameSpacedString`](/Mods/Boson/Names/) | `TAG & ARG1` | `add`             | The overload only accepts one argument                                |
| `&`  | `any`                                    | `TAG & ARG1` | `addAll`          | Shorthand for a single element: same rules as the array version apply |
| `-`      | `Tag`                                    | `TAG - ARG1`     | `removeFrom`      | \-                                                                   |
| `-`      | `any[]`                                  | `TAG - ARG1`     | `removeAll`       | The array type must be the same as the tag's contents                 |
| `-`      | [`NameSpacedString`](/Mods/Boson/Names/) | `TAG - ARG1`     | `remove`          | The overload only accepts one argument                                |
| `-`      | `any`                                    | `TAG - ARG1`     | `removeAll`       | Shorthand for a single element: same rules as the array version apply |
| `==`     | `Tag`                                    | `TAG == ARG1`    | \-               | Acts as an equality check, matching contents; does not mutate `TAG`   |
| `()`     | \-                                      | `TAG()`          | `elements`        | \-                                                                   |
