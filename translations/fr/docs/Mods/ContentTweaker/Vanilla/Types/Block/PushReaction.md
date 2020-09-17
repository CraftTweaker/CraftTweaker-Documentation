# PushReaction

Une réaction de poussée est ce qui se passe quand un piston tente de pousser un bloc.

# Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer mods.contenttweaker.PushReaction ;`

## Comparaison de deux réactions

Vous pouvez voir si deux réactions sont égales en utilisant l'opérateur `==`.

```zenscript
if(a == b){}
```

## Méthodes statiques

Vous pouvez utiliser ces méthodes pour obtenir des objets PushReaction :

```zenscript
mods.contenttweaker.PushReaction.normal();
mods.contenttweaker.PushReaction.destroy();
mods.contenttweaker.PushReaction.block();
mods.contenttweaker.PushReaction.ignore();
mods.contenttweaker.PushReaction.pushOnly();
```