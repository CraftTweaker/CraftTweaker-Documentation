
### Class

```zenscript
import mods.roots.predicates.StatePredicate;
```

#### Methods

```zenscript
StatePredicate create(
  IBlockState state // description of a blockstate against which only blocks themselves (and not state properties) will be compared
);
```

Creates an IPredicate where the state is stored, and is matched against other states purely by ensuring that they are of the same block, ignoring any property values.

---


### Ejemplos

```zenscript
import mods.roots.predicates.StatePredicate;

StatePredicate.create(<blockstate:minecraft:cobblestone>);
```

### Notes

Simply matches blocks between states, ignoring any property values.
