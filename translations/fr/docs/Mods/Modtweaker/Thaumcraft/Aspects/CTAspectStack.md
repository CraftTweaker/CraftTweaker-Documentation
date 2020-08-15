# CTAspectStack

Une CTAspectStack est un [CTAspect](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) combiné à un montant qui montre le nombre de points d'aspect dont la pile sera composée.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer thaumcraft.aspect.CTAspectStack ;`

## Récupération d'un tel objet

Vous pouvez récupérer un objet CTAspectStack depuis l'objet [CTAspectStack Bracket Handler](/Mods/Modtweaker/Thaumcraft/Brackets/Bracket_Aspect/):

```zenscript
aspect val = <aspect:ignis>;
```

## ZenGetters

| Nom     | Type de texte                                                       |
| ------- | ------------------------------------------------------------------- |
| montant | Indice                                                              |
| interne | [format@@0 CTAspect](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) |

## Définition du montant

```zenscript
//Ils font la même chose, retournent tous deux un nouvel aspect
CTAspectStack = <aspect:ignis> * 10 ;

aspect val 1 = <aspect:ignis>.setAmount(10);
```