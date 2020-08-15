# Définition des images

Un objet IMaterialDefinition représente une définition matérielle dans le jeu. Une définition de matériau est nécessaire si vous voulez créer un nouveau bloc.

# Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer mods.contenttweaker.BlockMaterial;`

## Appel d'un objet IMaterialDefinition

Vous pouvez obtenir un tel objet en utilisant le gestionnaire de supports [Bloc](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Block_Material/):  
`<blockmaterial:wood>`

## ZenGetters/ZenMethods sans paramètres

| ZenGetter             | Méthode Zen         | Type de retour                                                         |
| --------------------- | ------------------- | ---------------------------------------------------------------------- |
| format@@0 blocksLight | blocksLight()       | booléen                                                                |
| mouvements de blocs   | blocksMovement()    | booléen                                                                |
| Brûlure               | getCanBurn()        | booléen                                                                |
| mobilityFlag          | getMobilityFlag()   | [PushReaction](/Mods/ContentTweaker/Vanilla/Types/Block/PushReaction/) |
| liquide               | isLiquid()          | booléen                                                                |
| opaque                | isOpaque()          | booléen                                                                |
| remplaçable           | isReplaceable()     | booléen                                                                |
| solid                 | isSolid()           | booléen                                                                |
| toolNotRequired       | isToolNotRequired() | booléen                                                                |

## Comparer deux BlockMaterials

Vous pouvez utiliser l'opérateur `==` pour voir si deux MaterialDefinitions sont égales

```zenscript
if(materialA == materialB)
    print("success!");
```