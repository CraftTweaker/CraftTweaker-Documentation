# Renommage

Toujours lire 'coffre' est ennuyeux, n'est-ce pas?

C'est pourquoi il est possible de renommer des choses.

## Changement du nom d'affichage

C'est probablement la façon la plus simple de réaliser un autre nom d'objet ou de bloc. Vous renommez `élément` en `newName`:

```zenscript
item.displayName = newName;

//Exemple
<minecraft:chest>.displayName = "Stockage Box Deluxe";
```

`item` est un [IItemStack](/Vanilla/Items/IItemStack/).  
`newName` est une chaîne.

## Changement de la localisation

Si certains inventaires modifiés affichent toujours l'ancien nom de l'objet au lieu du nouveau, vous devez modifier la localisation. Vous pouvez lire ce que cela signifie sur l'entrée `de la partie`.

```zenscript
game.setLocalization(languageCode,unlocalizedName,newName);

game.setLocalization("tile.chest.name","StorageBox Deluxe")
```

`languageCode` est une chaîne de caractères et facultatif. Si vous l'omettez, il appliquera la traduction indépendamment de la langue définie par le client.  
`unlocaLizedName` est une chaîne.  
`newName` est une chaîne.