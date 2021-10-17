
### Class

```zenscript
import mods.roots.predicates.PropertyPredicate;
```

#### Methods

```zenscript
PropertyPredicate create(
  IBlockState state, // description of a simple blockstate
  string properties  // a string containing the property name that must match
);
```

Creates an IPredicate where the specified state is compared against other states, where the block type must match and the values of the specified property names must match.

---


```zenscript
PropertyPredicate create(
  IBlockState state,  // description of a simple blockstate
  string[] properties // an array of strings containing property names that must match
);
```

Creates an IPredicate where the specified state is compared against other states, where the block type must match and the values of all of the specified property names must match.

---


### Examples

```zenscript
import mods.roots.predicates.PropertyPredicate;

PropertyPredicate.create(<blockstate:minecraft:log:variant=spruce>, "variant"); // Creates a predicate that matches only other logs where the variant value is also spruce.

PropertyPredicate.create(<blockstate:minecraft:log:variant=spruce>, ["variant"]); // As above, but allowing for multiple property names to be matched. 
```

### Notes

A more complex matching system where a property (or number of properties) is checked in both states to ensure equality, in addition to the block matching.
