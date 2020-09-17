# format@@0 WeightedItemStack

Une pile d'éléments pondérés est comme une [IItemStack normale](/Vanilla/Items/IItemStack/) mais a un pourcentage ajouté à celle-ci.  
Vous les utilisez normalement lorsque vous traitez avec des actions basées sur des pourcentages comme des drops ou des sorties secondaires.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.item.WeightedItemStack ;`

## Appeler un élément pondéré

Vous pouvez dériver un weightedItemStack d'un [IItemStack](/Vanilla/Items/IItemStack/) en utilisant l'opérateur modulo ou la fonction weight sur celui-ci.

```zenscript
val itemStack = <minecraft:dirt>;

//tous deux créent un objet weightedItemstack avec une chance de 20%
val wItemStack = itemStack % 20 ;
val wItemStack2 = itemStack. huit(0.2);
```

## ZenGetters

| ZenGetter   | Que fait-il                                                                    | Type de retour                           |
| ----------- | ------------------------------------------------------------------------------ | ---------------------------------------- |
| empilage    | Retourne le itemStack associé                                                  | [IItemStack](/Vanilla/Items/IItemStack/) |
| Probabilité | Retourne la chance de la pile en tant que décimal (par exemple 0.2)            | flottant                                 |
| pourcent    | Renvoie la chance de la pile sous la forme d'un pourcentage (par exemple 20.0) | flottant                                 |