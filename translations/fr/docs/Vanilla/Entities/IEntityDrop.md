# IEntityDrop

Un IEntityDrop fait référence à un butin issu d'une [Entité](/Vanilla/Entities/IEntityDefinition/).

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.entity.IEntityDrop;`

## ZenGetters

Vous pouvez en extraire ces informations.

| ZenGetter       | Que fait-il                                                            | Type de retour                           | Usage              |
| --------------- | ---------------------------------------------------------------------- | ---------------------------------------- | ------------------ |
| Probabilité     | Renvoie la chance de la goutte.                                        | flottant                                 | `chance de drop`   |
| max             | Renvoie le montant maximum de la baisse.                               | Indice                                   | `déposer.max`      |
| min             | Renvoie le montant minimum de la baisse.                               | Indice                                   | `Déposer.min`      |
| JoueurSeulement | Retourne si le drop est joueurSeulement.                               | boolean                                  | `joueurOnly`       |
| range           | Renvoie la plage de montant minimum à la limite maximale de la baisse. | Intervalle entier                        | `Plage de dépôt`   |
| empilage        | Renvoie l'élément déposé.                                              | [IItemStack](/Vanilla/Items/IItemStack/) | `Déposer une pile` |