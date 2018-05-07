# Item Aspects

Modtweaker's Thaumcraft integration extends [IItemStacks](/Vanilla/Items/IItemStack).  
That means that you can use the methods below on any IItemStack object: 

## Set aspects

Requires a [CTAspectStack](CTAspect)[] or many [CTAspectStack](CTAspect) objects.

```
<minecraft:stone>.setAspects(<aspect:ignis>*5);
```


## Get aspects

Returns a [CTAspectStack](CTAspect)[]

```
val aspects = <minecraft:stone>.getAspects;
```