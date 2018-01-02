# ICreativeTab

An ICreativeTabObject represents a creative inventory tab.

## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import crafttweaker.creativetabs.ICreativeTab;` 

## Getting such an Object
You can retrieve an ICreativeTab from the [Creative tab Brracket Handler](/Vanilla/Brackets/Bracket_CreativeTab).

## ZenGetters and ZenMethods without parameters

| ZenGetter             | ZenMethod                   | Return Type                             |
|-----------------------|-----------------------------|-----------------------------------------|
| drawInForegroundOfTab | drawInForegroundOfTab()     | bool                                    |
| backgroundImageName   | getBackgroundImageName()    | string                                  |
| iconItemStack         | getIconItemStack()          | [IItemStack](/Vanilla/Items/IItemStack) |
| searchBarWidth        | getSearchBarWidth()         | int                                     |
| tabColumn             | getTabColumn()              | int                                     |
| tabIconItem           | getTabIconItem()            | [IItemStack](/Vanilla/Items/IItemStack) |
| tabIndex              | getTabIndex()               | int                                     |
| tabLabel              | getTabLabel()               | string                                  |
| tabPage               | getTabPage()                | int                                     |
| translatedTabLabel    | getTranslatedTabLabel()     | string                                  |
| searchBar             | hasSearchBar()              | bool                                    |
| alignedRight          | isAlighnedRight()           | bool                                    |
| tabInFirstRow         | isTabInFirstRow()           | bool                                    |
| hidePlayerInventory   | shouldHidePlayerInventory() | bool                                    |
|                       | setNoScrollBar()            | ICreativeTab                            |
|                       | setNoTitle()                | ICreativeTab                            |


## ZenMethods with parameters
### Setting the tab's background image

Uses a string.  
Returns the modified ICreativeTab.
```
tabObj.setBackgroundImageName(String backgroundImage);
```