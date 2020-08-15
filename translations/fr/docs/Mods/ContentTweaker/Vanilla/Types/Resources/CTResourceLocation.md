# format@@0 CTResourceLocation

Un objet de localisation de ressource est utilisé pour dire à minecraft où trouver quelque chose. Il se compose d'un domaine et d'un chemin.

## Appel/Importation du paquet

Si vous ne voulez pas taper le nom entier du paquet à chaque fois que vous utilisez une méthode statique ou si vous rencontrez un quelconque problème avec la classe en général, il peut être nécessaire pour vous de [importer](/AdvancedFunctions/Import/) la classe :  
`importer des mods. ontenttweaker.ResourceLocation`

## Méthodes Zen

### Méthodes statiques : Créer

Les méthodes statiques sont celles qui sont appelées sur le paquet lui-même, et non sur aucun objet spécifique de cette instance.  
Vous pouvez utiliser cette méthode pour créer une nouvelle instance CTResourceLocation :

```zenscript
var instance = mods.contenttweaker.ResourceLocation.create("contenttweaker:item/myItem");
```

### ZenGetters

ZenGetters sont appelés sur un objet, pas sur le paquet lui-même

```zenscript
print(monemplacement) ;
```

| ZenGetter      | Type de texte        |
| -------------- | -------------------- |
| domaine        | chaîne de caractères |
| chemin d'accès | chaîne de caractères |