# Gestionnaires de tranches

Je recommande de ne pas utiliser les méthodes statiques de cette classe directement car elles peuvent être fusionnées avec le BEP de CrT à n'importe quel moment. Si vous avez besoin d'accéder dynamiquement aux méthodes d'analyseur d'expressions de parenthèses, vous pouvez utiliser
 ```zencode
 var myName = "misc";
 <itemgroup:${myName}>
 ```

Cette classe a été ajoutée par un mod avec le mod-id `contenttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
mods.contenttweaker.Gestionnaires de tranches
```

## Méthodes
### getItemGroup

Obtient le groupe d'éléments. Lancer une erreur si le groupe est introuvable

 Renvoie : `Le MCItemGroup trouvé`

Type de retour : [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>

mods.contenttweaker.BracketHandlers.getItemGroup(tokens as String);
mods.contenttweaker.BracketHandlers.getItemGroup("misc");
```

| Paramètre | Type de texte        | Libellé                                         |
| --------- | -------------------- | ----------------------------------------------- |
| jetons    | Chaîne de caractères | Ce que vous créez DataCompound dans l'appel BEP |


### Obtenir le type de l'outil

Obtient un [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType). Créera un nouveau si celui-ci n'existe pas.

 Renvoie : `Le [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType) si trouvé, ou un nouveau MCToolType`

Type de retour : [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType)

```zenscript
<tooltype:shovel>

mods.contenttweaker.BracketHandlers.getToolType(tokens comme String);
mods.contenttweaker.BracketHandlers.getToolType("pelle");
```

| Paramètre | Type de texte        | Libellé                                  |
| --------- | -------------------- | ---------------------------------------- |
| jetons    | Chaîne de caractères | Ce que vous allez créer dans l'appel BEP |



