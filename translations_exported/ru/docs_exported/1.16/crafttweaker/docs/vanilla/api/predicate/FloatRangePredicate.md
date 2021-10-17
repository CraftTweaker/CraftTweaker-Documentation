# FloatRangePredicate

Represents a predicate for a range of floating point (decimal) values.

 This predicate cannot be built directly and is only used within other predicates for bounding rules and checks. This predicate matches including bounds, if present. It may also be unbounded on both sides, allowing effectively any value, or only one side, acting as a lower or upper limit.

 A version of this predicate for integers is also provided in the form of [IntRangePredicate](/vanilla/api/predicate/IntRangePredicate).

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.FloatRangePredicate;
```


## Extending AnyDefaultingVanillaWrappingPredicate

FloatRangePredicate extends [AnyDefaultingVanillaWrappingPredicate](/vanilla/api/predicate/AnyDefaultingVanillaWrappingPredicate). That means all methods available in [AnyDefaultingVanillaWrappingPredicate](/vanilla/api/predicate/AnyDefaultingVanillaWrappingPredicate) are also available in FloatRangePredicate

