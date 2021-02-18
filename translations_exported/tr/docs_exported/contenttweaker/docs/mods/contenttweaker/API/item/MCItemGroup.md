# MCItemGroup

An item Group (a.k.a. Creative Tab) is a grouping of items based on category.

This class was added by a mod with mod-id `contenttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.item.MCItemGroup;
```


## Implemented Interfaces
MCItemGroup implements the following interfaces. That means all methods defined in these interfaces are also available in MCItemGroup

- [CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
## Methods

### getPath

Gets the path of the item group. The path is what you use in the Bracket Expression after the `<itemGroup:` part.

Return Type: string

```zenscript
MCItemGroup.getPath() as string
<itemgroup:misc>.getPath();
```
### setBackgroundImageName

Sets the image name of the Background that is used for this tab in the creative menu

Return Type: [MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
MCItemGroup.setBackgroundImageName(texture as string) as MCItemGroup
```
| Parameter | Type   | Description            |
| --------- | ------ | ---------------------- |
| texture   | string | The texture to be used |

### setNoScrollbar

Removes the scrollbar of the item Group in the creative inventory

Return Type: [MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
MCItemGroup.setNoScrollbar() as MCItemGroup
<itemgroup:misc>.setNoScrollbar();
```
### setNoTitle

Removes the title of the item Group in the creative inventory

Return Type: [MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
MCItemGroup.setNoTitle() as MCItemGroup
<itemgroup:misc>.setNoTitle();
```

## Properties

| Name | Type   | Has Getter | Has Setter |
| ---- | ------ | ---------- | ---------- |
| path | string | true       | false      |

