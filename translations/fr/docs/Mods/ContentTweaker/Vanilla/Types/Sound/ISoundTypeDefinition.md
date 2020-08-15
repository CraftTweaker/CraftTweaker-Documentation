# Définition du type ISD

Un objet ISoundTypeDefinition représente un son (type) dans le jeu. Un type de son est presque toujours lié à un ou plusieurs blocs.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer mods.contenttweaker.SoundType ;`

## Appel d'un objet ISoundTypeDefinition

Vous pouvez obtenir un tel objet en utilisant le gestionnaire de supports de sons [](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Sound_Type/):  
`<soundtype:wood>`

## Méthodes Zen sans paramètres

| Méthode Zen     | Type de retour                                                                          | Définition                                                    |
| --------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| getVolume()     | flottant                                                                                | Renvoie le volume du type                                     |
| getPitch()      | flottant                                                                                | Renvoie le pas du type                                        |
| getBreakSound() | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | Renvoie le son qui se produit lorsque le bloc lié est cassé   |
| getStepSound()  | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | Renvoie le son qui se produit lorsque le bloc lié est démarré |
| getPlaceSound() | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | Renvoie le son qui se produit lorsque le bloc lié est placé   |
| getHitSound()   | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | Renvoie le son qui se produit lorsque le bloc lié est touché  |
| getFallSound()  | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | Renvoie le son qui se produit lorsque le bloc lié tombe       |