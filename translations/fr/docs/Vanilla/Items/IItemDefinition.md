# Définition IItemDefinition

Un objet IItemDefinition est la référence directe à un élément.  
Il est différent d'un [IItemStack](/Vanilla/Items/IItemStack/) car cela ne fait référence qu'à l'élément, il n'inclut pas de méta-information ou de valeurs NBT-!

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.item.IItemDefinition;`

## Comment en obtenir un

La façon la plus simple est d'utiliser un [IItemStack](/Vanilla/Items/IItemStack/), mais vous pouvez aussi obtenir une liste de toutes les IItemDefinitions enregistrées dans le jeu et faire quelque chose avec cela.

```zenscript
//IItemStack Zengetter "definition" -> single IItemDefinition
val itemDefinition = <minecraft:stone>.definition;

//IGame zengetter "items" -> LISTE !
val itemDefinitionList = game.items;
```

## Que faire avec ça

### ZenGetters et ZenMethods sans paramètre

| ZenGetter                           | Que fait-il                                                                                                                                       | Type de retour                                                  |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| id                                  | Renvoie l'ID de l'article                                                                                                                         | chaîne de caractères                                            |
| Nom                                 | Renvoie le nom de l'élément non localisé                                                                                                          | chaîne de caractères                                            |
| ores                                | Renvoie toutes les entrées de minerai contenant cet élément. Peut également contenir des entrées de minerai qui font référence à un sous-élément. | `Liste<[IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/)>` |
| Propriétaire                        | Renvoie le nom du mod auquel cet élément appartient.                                                                                              | chaîne de caractères                                            |
| Instance par défaut                 |                                                                                                                                                   | [IItemStack](/Vanilla/Items/IItemStack/)                        |
| Onglet créatif                      |                                                                                                                                                   | [Onglet ICreative](/Vanilla/CreativeTabs/ICreativeTab/)         |
| onglets créatifs                    |                                                                                                                                                   | [Onglet créatif[]](/Vanilla/CreativeTabs/ICreativeTab/)         |
| Vous ne pouvez pas éditer les blocs |                                                                                                                                                   | booléen                                                         |
| itemEnchantability                  |                                                                                                                                                   | Indice                                                          |
| subItems                            |                                                                                                                                                   | Liste <[IItemStack](/Vanilla/Items/IItemStack/)\>              |

### ZenSetters et autres méthodes de vide

| Paramètres/Méthode de Zen              | Type de paramètre                                       |
| -------------------------------------- | ------------------------------------------------------- |
| Onglet créatif                         | [Onglet ICreative](/Vanilla/CreativeTabs/ICreativeTab/) |
| setNoRepair()                          | aucun                                                   |
| setContainerItem(IItemDefinition item) | Définition IItemDefinition                              |

### Méthodes Zen

- `def.makeStack(meta) :` Crée un [IItemStack](/Vanilla/Items/IItemStack/) avec les métadonnées données. Les métadonnées sont une int et OPTIONAL.
- `def.setHarvestLevel(Type de tring, niveau d'int);` Change le niveau de récolte de l'objet au niveau et au type correspondants
- `def.getSubItems(creativeTab):` Renvoie une List<[IItemStack](/Vanilla/Items/IItemStack/)\> avec tous les sous-éléments pour l' [ICreativeTab donné](/Vanilla/CreativeTabs/ICreativeTab/).
- `def.getItemBurntime(item) :` Renvoie un entier représentant soit -1 (la logique Vanilla s'appliquera), 0 (non fonder) ou les objets brûlés