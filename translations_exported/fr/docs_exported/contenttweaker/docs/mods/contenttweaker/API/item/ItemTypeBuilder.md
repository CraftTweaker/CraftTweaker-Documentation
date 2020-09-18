# ItemTypeBuilder

Désigne un constructeur spécial qui est utilisé pour construire des types d'objets spéciaux. Utilisé dans [mods.contenttweaker.item.ItemTypeBuilder#withType](/mods/contenttweaker/API/item/ItemTypeBuilder/#withtype)

Cette classe a été ajoutée par un mod avec le mod-id `contenttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
format@@0 mods.contenttweaker.item.ItemTypeBuilder
```

## Interfaces implémentées
ItemTypeBuilder implémente les interfaces suivantes. Cela signifie que toutes les méthodes disponibles peuvent également être utilisées dans cette classe.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)

## Méthodes
### construire

Instructions de CoT pour construire ce que ce constructeur est censé construire.

```zenscript
new ItemBuilder().withType<ItemBuilderBasic>().build(resourceLocation as String);
new ItemBuilder().withType<ItemBuilderBasic>().build("my_awesome_block");
```

| Paramètre                    | Type de texte        | Libellé                                       |
| ---------------------------- | -------------------- | --------------------------------------------- |
| Localisation de la ressource | Chaîne de caractères | Le chemin de la ressource pour donner ce bloc |



