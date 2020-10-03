# MCItemGroup

An item Group (a.k.a. Creative Tab) is a grouping of items based on category.

This class was added by a mod with mod-id `contenttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
mods.contenttweaker.item.MCItemGroup
```

## Interfacce Implementate
MCItemGroup implements the following interfaces. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Methods
### getPath

Gets the path of the item group. The path is what you use in the Bracket Expression after the `<itemgroup:` part.

Return type: String

```zenscript
<itemgroup:misc>.getPath();
```

### setBackgroundImageName

Sets the image name of the Background that is used for this tab in the creative menu Returns: `This object for chaining`

Return type: [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>.setBackgroundImageName(texture as String);
```

| Parameter | Type   | Description            |
| --------- | ------ | ---------------------- |
| texture   | String | The texture to be used |


### setNoScrollbar

Removes the scrollbar of the item Group in the creative inventory

 Returns: `This object for chaining`

Return type: [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>.setNoScrollbar();
```

### setNoTitle

Removes the title of the item Group in the creative inventory

 Returns: `This object for chaining`

Return type: [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>.setNoTitle();
```


## Properties

| Name          | Type   | Ha Getter | Ha Setter |
| ------------- | ------ | --------- | --------- |
| commandString | String | true      | false     |
| path          | String | true      | false     |

