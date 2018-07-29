# CTAspect

A CTAspect is the aspect underlying an [Aspect Stack](CTAspectStack), much like an [IItemDefinition](/Vanilla/Items/IItemDefinition) underlies an [IItemStack](/Vanilla/Items/IItemStack).

## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import thaumcraft.aspect.CTAspect;` 

## Retrieving such an object
You can retrieve a CTAspect object from a [CTAspectStack](CTAspectStack) object:
```
val aspect = <aspect:ignis>.internal;
```


## ZenGetters and ZenSetters

| Name           | isGetter | isSetter | Type   |
|----------------|----------|----------|--------|
| chatColo**u**r | ✔        | ✔        | string |
| name           | ✔        |          | string |