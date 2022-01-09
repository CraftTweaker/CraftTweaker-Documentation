
### Класс

```zenscript
import mods.roots.predicates.BlockStateAbove;
```

#### Методы

```zenscript
BlockStateAbove create(
  IPredicate predicate // a defined predicate that describes (potentially) multiple blockstates
);
```

Creates an IWorldCondition which tests the state above a block using the provided IPredicate.

---


### Примеры

```zenscript
import mods.roots.predicates.BlockStateAbove;
import mods.roots.predicates.PropertyPredicate;

BlockStateAbove.create(PropertyPredicate.create(<blockstate:minecraft:log:variant=spruce>, "variant")); // Creates a world predicate that will only match blocks which have a block above them that is both a log and with the variant of spruce.
```

### Notes

A positional IWorldPredicate that allows for the specification of an IPredicate to check above blocks for. 
