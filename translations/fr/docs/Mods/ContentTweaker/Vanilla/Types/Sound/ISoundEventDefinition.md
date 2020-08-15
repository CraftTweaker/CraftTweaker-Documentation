# ISoundEventDefinition

Un objet ISoundEventDefinition représente un événement sonore dans le jeu. Un événement sonore est déclenché lorsqu'un son est sur le point d'être joué.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer mods.contenttweaker.SoundEvent ;`

## Appel d'un objet ISoundEventDefinition

You can get such an object using the [Sound Event Bracket Handler](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Sound_Event/):  
`<soundevent:ambient.cave>`

## Méthodes Zen sans paramètres

| Méthode Zen    | Type de retour       | Définition                           |
| -------------- | -------------------- | ------------------------------------ |
| getSoundName() | Chaîne de caractères | Renvoie le nom du son de l'événement |