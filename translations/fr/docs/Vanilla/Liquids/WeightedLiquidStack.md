# format@@0 WeightedLiquidStack

Une pile de liquide pondérée est comme une [ILiquidStack normale](/Vanilla/Liquids/ILiquidStack/) mais a un pourcentage ajouté à celle-ci.  
Vous les utilisez normalement lorsque vous traitez avec des actions basées sur des pourcentages comme des drops ou des sorties secondaires.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.item.WeightedLiquidStack ;`

## Appeler un poidtedLiquidStack

Vous pouvez dériver un poidtedLiquidStack d'un [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) soit à l'aide de l'opérateur modulo soit de la fonction de poids dessus.

```zenscript
val liquidStack = <liquid:lava>;

//tous deux créent un objet weightedLiquidstack avec une chance de 20%
vaille wLiquidStack = liquidStack % 20 ;
vaille wLiquidStack2 = liquidStack. huit(0.2);
```

## ZenGetters

| ZenGetter   | Que fait-il                                                                    | Type de retour                                 |
| ----------- | ------------------------------------------------------------------------------ | ---------------------------------------------- |
| empilage    | Renvoie la LiquidStack associée                                                | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) |
| Probabilité | Retourne la chance de la pile en tant que décimal (par exemple 0.2)            | flottant                                       |
| pourcent    | Renvoie la chance de la pile sous la forme d'un pourcentage (par exemple 20.0) | flottant                                       |