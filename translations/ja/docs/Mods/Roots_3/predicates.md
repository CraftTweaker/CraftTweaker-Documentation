
### Class

```zenscript
import mods.roots.predicates.Predicates;
```

### Static Properties

```zenscript
Predicates.Lava // IPredicate which matches both lava and flowing lava

Predicates.Water // IPredicate which matches both water and flowing water

Predicates.Leaves // IPredicate which matches all types of leaves

```
### 使用例

```zenscript
import mods.roots.predicates.BlockStateAbove;
import mods.roots.predicates.BlockStateBelow;
import mods.roots.predicates.PropertyPredicate;
import mods.roots.predicates.StatePredicate;
import mods.roots.predicates.Predicates;
```

### Notes

IPredicates (PropertyPredicate, StatePredicate and everything in Predicates (see Predicates documentation)) are used to determine complex matching of block states.

IWorldPredicates (BlockStateAbove, BlockStateBelow) are used to determine the matching a world and block position. The pre-defined predicates combine an IPredicate with a position (above or below).
