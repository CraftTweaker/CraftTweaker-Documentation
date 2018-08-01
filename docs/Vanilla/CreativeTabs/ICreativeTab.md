# ICreativeTab

An ICreativeTabObject represents a creative inventory tab.

## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import crafttweaker.creativetabs.ICreativeTab;` 

## Getting such an Object
You can retrieve an ICreativeTab from the [Creative tab Bracket Handler](/Vanilla/Brackets/Bracket_CreativeTab/).

## ZenGetters and ZenMethods without parameters

| ZenGetter/ZenMethod   | Return Type                             |
|-----------------------|-----------------------------------------|
| searchBarWidth        | int                                     |
| tabLabel              | string                                  |
| setNoScrollBar()      | void (nothing)                          |
| setNoTitle()          | void (nothing)                          |


## ZenMethod
#### Set Background image Name
Uses a string (e.g. `"item_search.png"`).  
Returns void (nothing).

```
tab.setBackgroundImageName(String backgroundImage);
```