# Lecteur de TIC

Un ICTPlayer est l'objet spécial [IPlayer](/Vanilla/Players/IPlayer/) de ContentTweaker.  
Cela signifie que toutes les méthodes [IPlayer](/Vanilla/Players/IPlayer/) sont également disponibles sur cet objet !

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`importer mods.contenttweaker.Player ;`

## Méthodes Zen

`IMutableItemStack getHeldItem(Hand hand);`

Paramètres:

- [Main](/Mods/ContentTweaker/Vanilla/Types/Player/Hand/) main → Main principale ou Main gauche

Retourne la [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) conservée à la [Main](/Mods/ContentTweaker/Vanilla/Types/Player/Hand/) fournie.