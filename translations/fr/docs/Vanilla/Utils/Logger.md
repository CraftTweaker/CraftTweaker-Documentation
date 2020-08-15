# Logger

Si la fonction print-function ne vous suffit pas, alors vous pouvez utiliser l'objet logger pour enregistrer des commandes, des avertissements d'information et plus encore.

## Accéder au gestionnaire de journalisation

Vous pouvez accéder au gestionnaire de formatage en utilisant le mot clé `logger` [global](/Vanilla/Global_Functions/).

## Journalisation

- logCommand(String message);
- logInfo(String message);
- logWarning(String message);
- logError(Message de la chaîne de caractères);

## Accessible, mais inutile Méthodes

- logError(String message, Throwable exception);
- logPlayer([IPlayer](/Vanilla/Players/IPlayer/) joueur);

Vous ne pouvez pas utiliser les lançables de Java, donc la première méthode est inutile.  
La seconde méthode ne fait absolument rien. Littéralement, l'implémentation est vide!