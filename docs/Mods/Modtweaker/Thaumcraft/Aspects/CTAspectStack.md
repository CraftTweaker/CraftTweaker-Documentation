# CTAspectStack

A CTAspectStack is a [CTAspect](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) combined with an amount that shows how many aspect points the stack will be made of.  


## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import thaumcraft.aspect.CTAspectStack;` 

## Retrieving such an object
You can retrieve a CTAspectStack object from the [CTAspectStack Bracket Handler](/Mods/ModTweaker/Thaumcraft/Brackets/Bracket_Aspects/) object:
```
val aspect = <aspect:ignis>;
```


## ZenGetters

| Name      | Type                 |
|-----------|----------------------|
| amount    | int                  |
| internal  | [CTAspect](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) |

## Setting the amount

```
//They do the same, both return a new CTAspectStack
val aspect = <aspect:ignis> * 10;

val aspect1 = <aspect:ignis>.setAmount(10);
```