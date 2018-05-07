# CTAspect

A CTAspect is a [CTAspect](CTAspect) combined with an amount that shows how many aspect points the stack will be made of.  


## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import thaumcraft.aspect.CTAspectStack;` 

## Retrieving such an object
You can retrieve a CTAspect object from a [CTAspectStack](CTAspectStack) object:
```
val aspect = <aspect:ignis>.internal;
```


## ZenGetters

| Name      | Type                 |
|-----------|----------------------|
| amount    | int                  |
| internal  | [CTAspect](CTAspect) |

## Setting the amount

```
//They do the same, both return a new CTAspectStack
val aspect = <aspect:ignis> * 10;

val aspect1 = <aspect:ignis>.setAmount(10);
```