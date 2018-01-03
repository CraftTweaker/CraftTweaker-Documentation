# ICreativeTab

An ICreativeTabObject represents a creative inventory tab.

## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import crafttweaker.creativetabs.ICreativeTab;` 

## Getting such an Object
You can retrieve an ICreativeTab from the [Creative tab Brracket Handler](/Vanilla/Brackets/Bracket_CreativeTab).

## ZenGetters and ZenMethods without parameters

| ZenGetter/ZenMethod   | Return Type                             |
|-----------------------|-----------------------------------------|
| drawInForegroundOfTab | bool                                    |
| backgroundImageName   | string                                  |
| iconItemStack         | [IItemStack](/Vanilla/Items/IItemStack) |
| searchBarWidth        | int                                     |
| tabColumn             | int                                     |
| tabIconItem           | [IItemStack](/Vanilla/Items/IItemStack) |
| tabIndex              | int                                     |
| tabLabel              | string                                  |
| tabPage               | int                                     |
| translatedTabLabel    | string                                  |
| searchBar             | bool                                    |
| alignedRight          | bool                                    |
| tabInFirstRow         | bool                                    |
| hidePlayerInventory   | bool                                    |
| setNoScrollBar()      | void (nothing)                          |
| setNoTitle()          | void (nothing)                          |


## ZenSetters

| ZenSetter           | Parameter Type |
|---------------------|----------------|
| backgroundImageName | string         |