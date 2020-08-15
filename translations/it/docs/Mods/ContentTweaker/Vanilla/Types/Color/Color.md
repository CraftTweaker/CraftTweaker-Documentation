# Colore

Se non si è certi di come creare l'oggetto colore si può usare l'oggetto colore.

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import mods.contenttweaker.Color;`

## Metodi Statici

I metodi statici sono chiamati sul nome del pacchetto e non sull'oggetto stesso.  
Tutti questi metodi restituiscono un oggetto colore.

| ZenMethod       | Tipo Parametro |
| --------------- | -------------- |
| fromInt(colore) | int            |
| fromHex(colore) | stringa        |

## Metodi Non Statici

Metodi non statici non sono chiamati sul nome del pacchetto, ma sull'oggetto stesso.

| ZenMethod     | Tipo Di Reso |
| ------------- | ------------ |
| getIntColor() | int          |